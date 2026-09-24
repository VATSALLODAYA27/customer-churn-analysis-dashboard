"""
Builds dashboard/data.js for dashboard/index.html.

Embeds compact row-level data (one array per customer) so the browser can
filter and re-aggregate live, like a BI tool. Loaded as a JS variable rather
than fetched, so the dashboard also works when opened straight from disk.
"""

import json
from pathlib import Path

import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
DATA_PATH = ROOT / "powerbi" / "churn_dashboard_data.csv"
DRIVERS_PATH = ROOT / "python" / "churn_driver_importance.csv"
OUT_PATH = ROOT / "dashboard" / "data.js"

CONTRACTS = ["Month-to-month", "One year", "Two year"]
INTERNET = ["Fiber optic", "DSL", "No"]
PAYMENTS = ["Electronic check", "Mailed check", "Bank transfer (automatic)", "Credit card (automatic)"]
ADDON = ["No", "Yes", "No internet service"]


def main():
    df = pd.read_csv(DATA_PATH)
    rows = [
        [
            CONTRACTS.index(r.Contract),
            INTERNET.index(r.InternetService),
            PAYMENTS.index(r.PaymentMethod),
            int(r.SeniorCitizen),
            int(r.Tenure),
            float(r.MonthlyCharges),
            int(r.ChurnFlag),
            ADDON.index(r.TechSupport),
            ADDON.index(r.OnlineSecurity),
        ]
        for r in df.itertuples()
    ]

    drivers = pd.read_csv(DRIVERS_PATH).head(12)[["feature", "coefficient"]]
    drivers["coefficient"] = drivers["coefficient"].round(3)

    data = {
        "dims": {"contract": CONTRACTS, "internet": INTERNET, "payment": PAYMENTS, "addon": ADDON},
        "rowFields": ["contract", "internet", "payment", "senior", "tenure", "monthly", "churn", "tech", "security"],
        "rows": rows,
        "drivers": drivers.to_dict("records"),
    }
    OUT_PATH.write_text("const DASHBOARD_DATA = " + json.dumps(data, separators=(",", ":")) + ";\n")
    print(f"Wrote {OUT_PATH} ({len(rows):,} rows, {OUT_PATH.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
