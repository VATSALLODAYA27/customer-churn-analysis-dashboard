"""
Generates a synthetic telecom customer churn dataset (10,000+ records).

The schema mirrors the well-known IBM/Kaggle "Telco Customer Churn" dataset,
but records and churn outcomes are synthetically generated here (seeded for
reproducibility) so the dataset can be freely regenerated/scaled and ships
with the repo without any external download or license.

Churn probability is built from realistic drivers so the downstream SQL/
Python/Power BI analysis finds meaningful signal:
    - month-to-month contracts churn far more than 1/2-year contracts
    - short tenure churns more than long tenure
    - fiber internet + no tech support/online security churns more
    - electronic check payment churns more than automatic payment methods
    - higher monthly charges churn more
"""

import numpy as np
import pandas as pd

N_CUSTOMERS = 10500
SEED = 42

rng = np.random.default_rng(SEED)


def generate_customers(n: int) -> pd.DataFrame:
    customer_ids = [f"CUST-{100000 + i}" for i in range(n)]

    gender = rng.choice(["Male", "Female"], size=n)
    senior_citizen = rng.choice([0, 1], size=n, p=[0.84, 0.16])
    partner = rng.choice(["Yes", "No"], size=n, p=[0.48, 0.52])
    dependents = np.where(
        partner == "Yes",
        rng.choice(["Yes", "No"], size=n, p=[0.45, 0.55]),
        rng.choice(["Yes", "No"], size=n, p=[0.12, 0.88]),
    )

    tenure = rng.integers(0, 73, size=n)  # months, 0-72

    contract = rng.choice(
        ["Month-to-month", "One year", "Two year"], size=n, p=[0.55, 0.24, 0.21]
    )

    phone_service = rng.choice(["Yes", "No"], size=n, p=[0.90, 0.10])
    multiple_lines = np.where(
        phone_service == "No",
        "No phone service",
        rng.choice(["Yes", "No"], size=n, p=[0.42, 0.58]),
    )

    internet_service = rng.choice(
        ["DSL", "Fiber optic", "No"], size=n, p=[0.35, 0.44, 0.21]
    )

    def internet_dependent_feature(p_yes=0.35):
        vals = rng.choice(["Yes", "No"], size=n, p=[p_yes, 1 - p_yes])
        return np.where(internet_service == "No", "No internet service", vals)

    online_security = internet_dependent_feature(0.30)
    online_backup = internet_dependent_feature(0.35)
    device_protection = internet_dependent_feature(0.35)
    tech_support = internet_dependent_feature(0.29)
    streaming_tv = internet_dependent_feature(0.40)
    streaming_movies = internet_dependent_feature(0.40)

    paperless_billing = rng.choice(["Yes", "No"], size=n, p=[0.59, 0.41])

    payment_method = rng.choice(
        [
            "Electronic check",
            "Mailed check",
            "Bank transfer (automatic)",
            "Credit card (automatic)",
        ],
        size=n,
        p=[0.34, 0.23, 0.22, 0.21],
    )

    # --- Monthly charges: base + add-ons ---
    base_charge = np.select(
        [internet_service == "No", internet_service == "DSL", internet_service == "Fiber optic"],
        [18.0, 45.0, 75.0],
    )
    addon_cost = (
        (phone_service == "Yes") * rng.uniform(4, 8, size=n)
        + (online_security == "Yes") * rng.uniform(3, 6, size=n)
        + (online_backup == "Yes") * rng.uniform(3, 6, size=n)
        + (device_protection == "Yes") * rng.uniform(3, 6, size=n)
        + (tech_support == "Yes") * rng.uniform(3, 6, size=n)
        + (streaming_tv == "Yes") * rng.uniform(6, 10, size=n)
        + (streaming_movies == "Yes") * rng.uniform(6, 10, size=n)
    )
    noise = rng.normal(0, 2.5, size=n)
    monthly_charges = np.clip(base_charge + addon_cost + noise, 18.0, 130.0).round(2)

    total_charges = (monthly_charges * tenure + rng.normal(0, 15, size=n)).clip(min=0).round(2)
    total_charges = np.where(tenure == 0, 0.0, total_charges)

    df = pd.DataFrame(
        {
            "CustomerID": customer_ids,
            "Gender": gender,
            "SeniorCitizen": senior_citizen,
            "Partner": partner,
            "Dependents": dependents,
            "Tenure": tenure,
            "PhoneService": phone_service,
            "MultipleLines": multiple_lines,
            "InternetService": internet_service,
            "OnlineSecurity": online_security,
            "OnlineBackup": online_backup,
            "DeviceProtection": device_protection,
            "TechSupport": tech_support,
            "StreamingTV": streaming_tv,
            "StreamingMovies": streaming_movies,
            "Contract": contract,
            "PaperlessBilling": paperless_billing,
            "PaymentMethod": payment_method,
            "MonthlyCharges": monthly_charges,
            "TotalCharges": total_charges,
        }
    )
    return df


def assign_churn(df: pd.DataFrame) -> pd.DataFrame:
    logit = -2.45

    logit += np.select(
        [df.Contract == "Month-to-month", df.Contract == "One year", df.Contract == "Two year"],
        [1.35, -0.35, -1.55],
    )
    logit += np.where(df.Tenure <= 6, 0.9, 0)
    logit += np.where((df.Tenure > 6) & (df.Tenure <= 24), 0.25, 0)
    logit += np.where(df.Tenure > 48, -0.9, 0)

    logit += np.where(df.InternetService == "Fiber optic", 0.55, 0)
    logit += np.where(df.InternetService == "No", -0.45, 0)

    logit += np.where(df.OnlineSecurity == "No", 0.35, 0)
    logit += np.where(df.TechSupport == "No", 0.35, 0)

    logit += np.where(df.PaymentMethod == "Electronic check", 0.55, 0)
    logit += np.where(df.PaymentMethod.str.contains("automatic"), -0.35, 0)

    logit += np.where(df.PaperlessBilling == "Yes", 0.2, 0)
    logit += np.where(df.SeniorCitizen == 1, 0.25, 0)
    logit += np.where(df.Partner == "No", 0.15, 0)

    logit += (df.MonthlyCharges - df.MonthlyCharges.mean()) / df.MonthlyCharges.std() * 0.25

    logit += rng.normal(0, 0.55, size=len(df))  # unexplained noise

    prob = 1 / (1 + np.exp(-logit))
    churn_draw = rng.uniform(0, 1, size=len(df))
    df["ChurnProbability"] = prob.round(4)
    df["Churn"] = np.where(churn_draw < prob, "Yes", "No")
    return df


def main():
    df = generate_customers(N_CUSTOMERS)
    df = assign_churn(df)
    df = df.drop(columns=["ChurnProbability"])  # keep the ground-truth CSV clean

    out_path = "data/customer_churn.csv"
    df.to_csv(out_path, index=False)

    churn_rate = (df["Churn"] == "Yes").mean() * 100
    print(f"Generated {len(df):,} records -> {out_path}")
    print(f"Overall churn rate: {churn_rate:.2f}%")


if __name__ == "__main__":
    main()
