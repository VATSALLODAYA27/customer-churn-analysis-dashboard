"""
Loads data/customer_churn.csv into a SQLite database using sql/schema.sql,
runs each query in sql/churn_analysis_queries.sql, and writes the results
to sql/query_results/<NN>_<name>.csv for review / import into Power BI.

SQLite is used as a portable, zero-install engine; the queries themselves
are plain ANSI SQL and run unchanged on PostgreSQL/SQL Server/MySQL.
"""

import re
import sqlite3
from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
DB_PATH = ROOT / "sql" / "churn.db"
CSV_PATH = ROOT / "data" / "customer_churn.csv"
SCHEMA_PATH = ROOT / "sql" / "schema.sql"
QUERIES_PATH = ROOT / "sql" / "churn_analysis_queries.sql"
RESULTS_DIR = ROOT / "sql" / "query_results"


def split_queries(sql_text: str):
    """Split the queries file into (comment_title, query) pairs on numbered comments."""
    blocks = re.split(r"\n(?=-- \d+\))", sql_text.strip())
    queries = []
    for block in blocks:
        lines = block.strip().splitlines()
        title_line = next((l for l in lines if l.startswith("-- ")), "query")
        title = re.sub(r"^--\s*\d+\)\s*", "", title_line).strip()
        slug = re.sub(r"[^a-z0-9]+", "_", title.lower()).strip("_")
        query = "\n".join(l for l in lines if not l.strip().startswith("--"))
        if query.strip():
            queries.append((slug, title, query.strip()))
    return queries


def main():
    RESULTS_DIR.mkdir(exist_ok=True)
    if DB_PATH.exists():
        DB_PATH.unlink()

    conn = sqlite3.connect(DB_PATH)
    conn.executescript(SCHEMA_PATH.read_text())

    df = pd.read_csv(CSV_PATH)
    df.to_sql("customers", conn, if_exists="append", index=False)
    print(f"Loaded {len(df):,} rows into {DB_PATH.name} -> customers")

    queries = split_queries(QUERIES_PATH.read_text())
    for i, (slug, title, query) in enumerate(queries, start=1):
        result = pd.read_sql_query(query, conn)
        out_path = RESULTS_DIR / f"{i:02d}_{slug}.csv"
        result.to_csv(out_path, index=False)
        print(f"\n[{i}] {title}")
        print(result.to_string(index=False))
        result.to_csv(out_path, index=False)

    conn.close()
    print(f"\nAll query results written to {RESULTS_DIR}")


if __name__ == "__main__":
    main()
