"""
Aggregates powerbi/churn_dashboard_data.csv into dashboard/data.js — a small
JS data file consumed by dashboard/index.html (the browser-based equivalent
of the Power BI dashboard; see powerbi/README.md).

Data is embedded as a JS variable (not fetched as JSON) so the dashboard
works when opened directly from disk (file://), with no local server needed.
"""

import json
from pathlib import Path

import numpy as np
import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
DATA_PATH = ROOT / "powerbi" / "churn_dashboard_data.csv"
OUT_PATH = ROOT / "dashboard" / "data.js"

rng = np.random.default_rng(7)


def churn_rate_by(df: pd.DataFrame, col: str, order=None):
    grouped = df.groupby(col, observed=True).agg(
        customers=("Churn", "size"),
        churned=("Churn", lambda s: (s == "Yes").sum()),
    )
    grouped["churn_rate"] = (grouped["churned"] / grouped["customers"] * 100).round(2)
    grouped = grouped.reindex(order) if order else grouped.sort_values("churn_rate", ascending=False)
    return [
        {"label": str(idx), "customers": int(row.customers), "churnRate": float(row.churn_rate)}
        for idx, row in grouped.iterrows()
    ]


def main():
    df = pd.read_csv(DATA_PATH)
    df["TenureBucket"] = pd.cut(
        df["Tenure"], bins=[-1, 6, 12, 24, 48, 72],
        labels=["0-6", "7-12", "13-24", "25-48", "49-72"],
    )

    total_customers = len(df)
    churned = int((df["Churn"] == "Yes").sum())
    total_mrr = float(df["MonthlyCharges"].sum())
    mrr_at_risk = float(df.loc[df["Churn"] == "Yes", "MonthlyCharges"].sum())

    kpis = {
        "totalCustomers": total_customers,
        "churnedCustomers": churned,
        "churnRate": round(churned / total_customers * 100, 2),
        "totalMrr": round(total_mrr, 2),
        "mrrAtRisk": round(mrr_at_risk, 2),
        "pctMrrAtRisk": round(mrr_at_risk / total_mrr * 100, 2),
        "avgTenure": round(df["Tenure"].mean(), 1),
        "avgMonthlyCharges": round(df["MonthlyCharges"].mean(), 2),
    }

    by_contract = churn_rate_by(df, "Contract", order=["Month-to-month", "One year", "Two year"])
    by_internet = churn_rate_by(df, "InternetService")
    by_payment = churn_rate_by(df, "PaymentMethod")
    by_tenure = churn_rate_by(df, "TenureBucket", order=["0-6", "7-12", "13-24", "25-48", "49-72"])
    by_senior = churn_rate_by(df, "SeniorCitizen")

    segment = df.groupby(["Contract", "InternetService", "PaymentMethod"], observed=True).agg(
        customers=("Churn", "size"),
        churned=("Churn", lambda s: (s == "Yes").sum()),
        mrr_at_risk=("MonthlyCharges", lambda s: df.loc[s.index][df.loc[s.index, "Churn"] == "Yes"]["MonthlyCharges"].sum()),
    )
    segment["churn_rate"] = (segment["churned"] / segment["customers"] * 100).round(2)
    segment = segment[segment["customers"] >= 30].sort_values("churn_rate", ascending=False).head(10)
    top_segments = [
        {
            "contract": c, "internetService": i, "paymentMethod": p,
            "customers": int(row.customers), "churnRate": float(row.churn_rate),
            "mrrAtRisk": round(float(row.mrr_at_risk), 2),
        }
        for (c, i, p), row in segment.iterrows()
    ]

    sample = df.sample(n=min(600, len(df)), random_state=7)[["Tenure", "MonthlyCharges", "Churn"]]
    scatter_sample = [
        {"tenure": int(r.Tenure), "monthlyCharges": float(r.MonthlyCharges), "churn": r.Churn}
        for r in sample.itertuples()
    ]

    data = {
        "kpis": kpis,
        "byContract": by_contract,
        "byInternet": by_internet,
        "byPayment": by_payment,
        "byTenure": by_tenure,
        "bySenior": by_senior,
        "topSegments": top_segments,
        "scatterSample": scatter_sample,
    }

    OUT_PATH.write_text("const DASHBOARD_DATA = " + json.dumps(data, indent=2) + ";\n")
    print(f"Wrote {OUT_PATH} ({total_customers:,} customers aggregated)")


if __name__ == "__main__":
    main()
