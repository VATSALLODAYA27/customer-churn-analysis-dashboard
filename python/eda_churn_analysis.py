"""
Exploratory data analysis + churn-driver identification for the customer
churn dataset, using pandas for analysis and matplotlib/seaborn for charts.

Outputs:
    python/figures/*.png                 - charts for the README / portfolio
    python/churn_driver_importance.csv   - ranked churn drivers (logistic regression)
    powerbi/churn_dashboard_data.csv     - cleaned, feature-engineered dataset for Power BI
"""

from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

ROOT = Path(__file__).resolve().parent.parent
DATA_PATH = ROOT / "data" / "customer_churn.csv"
FIG_DIR = ROOT / "python" / "figures"
POWERBI_DIR = ROOT / "powerbi"

sns.set_theme(style="whitegrid")
PALETTE = {"No": "#2E86AB", "Yes": "#E94F37"}


def load_data() -> pd.DataFrame:
    df = pd.read_csv(DATA_PATH)
    df["TenureBucket"] = pd.cut(
        df["Tenure"],
        bins=[-1, 6, 12, 24, 48, 72],
        labels=["0-6", "7-12", "13-24", "25-48", "49-72"],
    )
    return df


def churn_rate_chart(df: pd.DataFrame, column: str, title: str, filename: str, order=None):
    rate = (
        df.groupby(column, observed=True)["Churn"]
        .apply(lambda s: (s == "Yes").mean() * 100)
        .reindex(order) if order else
        df.groupby(column, observed=True)["Churn"].apply(lambda s: (s == "Yes").mean() * 100).sort_values(ascending=False)
    )
    plt.figure(figsize=(7, 4.5))
    ax = sns.barplot(x=rate.values, y=rate.index, color="#E94F37")
    ax.set_xlabel("Churn Rate (%)")
    ax.set_ylabel("")
    ax.set_title(title, fontsize=13, fontweight="bold")
    for i, v in enumerate(rate.values):
        ax.text(v + 0.5, i, f"{v:.1f}%", va="center", fontsize=9)
    plt.tight_layout()
    plt.savefig(FIG_DIR / filename, dpi=150)
    plt.close()


def overall_churn_donut(df: pd.DataFrame):
    counts = df["Churn"].value_counts()
    plt.figure(figsize=(5, 5))
    plt.pie(
        counts,
        labels=[f"{idx} ({v/len(df)*100:.1f}%)" for idx, v in counts.items()],
        colors=[PALETTE.get(k, "#999") for k in counts.index],
        startangle=90,
        wedgeprops={"width": 0.4},
    )
    plt.title("Overall Customer Churn", fontsize=13, fontweight="bold")
    plt.tight_layout()
    plt.savefig(FIG_DIR / "01_overall_churn.png", dpi=150)
    plt.close()


def monthly_charges_distribution(df: pd.DataFrame):
    plt.figure(figsize=(7, 4.5))
    sns.kdeplot(data=df, x="MonthlyCharges", hue="Churn", fill=True, common_norm=False, palette=PALETTE, alpha=0.4)
    plt.title("Monthly Charges Distribution by Churn", fontsize=13, fontweight="bold")
    plt.xlabel("Monthly Charges ($)")
    plt.tight_layout()
    plt.savefig(FIG_DIR / "06_monthly_charges_distribution.png", dpi=150)
    plt.close()


def churn_driver_importance(df: pd.DataFrame) -> pd.DataFrame:
    """Fit a logistic regression on standardized features to rank churn drivers
    by absolute coefficient magnitude (a simple, explainable feature-importance proxy)."""
    model_df = df.copy()
    y = (model_df["Churn"] == "Yes").astype(int)

    binary_cols = ["Partner", "Dependents", "PhoneService", "PaperlessBilling"]
    for col in binary_cols:
        model_df[col] = (model_df[col] == "Yes").astype(int)

    categorical_cols = [
        "MultipleLines", "InternetService", "OnlineSecurity", "OnlineBackup",
        "DeviceProtection", "TechSupport", "StreamingTV", "StreamingMovies",
        "Contract", "PaymentMethod", "Gender",
    ]
    X = pd.get_dummies(model_df[categorical_cols], drop_first=True)
    numeric_cols = ["SeniorCitizen", "Tenure", "MonthlyCharges", "TotalCharges"] + binary_cols
    X[numeric_cols] = model_df[numeric_cols]

    scaler = StandardScaler()
    X_scaled = pd.DataFrame(scaler.fit_transform(X), columns=X.columns)

    clf = LogisticRegression(max_iter=2000)
    clf.fit(X_scaled, y)

    importance = pd.DataFrame({
        "feature": X.columns,
        "coefficient": clf.coef_[0],
    })
    importance["abs_coefficient"] = importance["coefficient"].abs()
    importance["direction"] = np.where(importance["coefficient"] > 0, "increases churn", "decreases churn")
    importance = importance.sort_values("abs_coefficient", ascending=False).reset_index(drop=True)

    top20 = importance.head(20)
    plt.figure(figsize=(8, 7))
    colors = ["#E94F37" if c > 0 else "#2E86AB" for c in top20["coefficient"]]
    ax = sns.barplot(x=top20["coefficient"], y=top20["feature"], hue=top20["feature"], palette=colors, legend=False)
    ax.axvline(0, color="black", linewidth=0.8)
    ax.set_title("Top 20 Churn Drivers (Logistic Regression Coefficients)", fontsize=13, fontweight="bold")
    ax.set_xlabel("Coefficient (standardized) — right = increases churn, left = decreases churn")
    ax.set_ylabel("")
    plt.tight_layout()
    plt.savefig(FIG_DIR / "07_churn_driver_importance.png", dpi=150)
    plt.close()

    importance.to_csv(ROOT / "python" / "churn_driver_importance.csv", index=False)
    return importance


def build_powerbi_dataset(df: pd.DataFrame):
    """Feature-engineered, Power-BI-ready export: friendly labels, tenure buckets,
    and a numeric churn flag for measures like SUM/AVERAGE."""
    out = df.copy()
    out["ChurnFlag"] = (out["Churn"] == "Yes").astype(int)
    out["RevenueAtRisk"] = np.where(out["Churn"] == "Yes", out["MonthlyCharges"], 0)
    POWERBI_DIR.mkdir(exist_ok=True)
    out.to_csv(POWERBI_DIR / "churn_dashboard_data.csv", index=False)
    print(f"Power BI dataset written -> {POWERBI_DIR / 'churn_dashboard_data.csv'} ({len(out):,} rows)")


def main():
    FIG_DIR.mkdir(parents=True, exist_ok=True)
    df = load_data()

    overall_churn_donut(df)
    churn_rate_chart(df, "Contract", "Churn Rate by Contract Type", "02_churn_by_contract.png")
    churn_rate_chart(
        df, "TenureBucket", "Churn Rate by Tenure Bucket", "03_churn_by_tenure.png",
        order=["0-6", "7-12", "13-24", "25-48", "49-72"],
    )
    churn_rate_chart(df, "InternetService", "Churn Rate by Internet Service", "04_churn_by_internet_service.png")
    churn_rate_chart(df, "PaymentMethod", "Churn Rate by Payment Method", "05_churn_by_payment_method.png")
    monthly_charges_distribution(df)

    importance = churn_driver_importance(df)
    print("\nTop 10 churn drivers:")
    print(importance.head(10).to_string(index=False))

    build_powerbi_dataset(df)
    print(f"\nAll figures written to {FIG_DIR}")


if __name__ == "__main__":
    main()
