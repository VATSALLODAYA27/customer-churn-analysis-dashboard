-- Schema for the customer churn dataset.
-- Portable ANSI SQL; used here against SQLite (see sql/run_sql_analysis.py)
-- but also valid against PostgreSQL/SQL Server/MySQL with minor type tweaks.

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
    CustomerID          TEXT PRIMARY KEY,
    Gender              TEXT,
    SeniorCitizen       INTEGER,
    Partner             TEXT,
    Dependents          TEXT,
    Tenure              INTEGER,
    PhoneService        TEXT,
    MultipleLines       TEXT,
    InternetService     TEXT,
    OnlineSecurity      TEXT,
    OnlineBackup        TEXT,
    DeviceProtection    TEXT,
    TechSupport         TEXT,
    StreamingTV         TEXT,
    StreamingMovies     TEXT,
    Contract            TEXT,
    PaperlessBilling    TEXT,
    PaymentMethod       TEXT,
    MonthlyCharges      REAL,
    TotalCharges        REAL,
    Churn               TEXT
);
