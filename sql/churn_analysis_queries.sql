-- Customer Churn Analysis - key business questions in SQL
-- Run against the `customers` table loaded from data/customer_churn.csv

-- 1) Overall churn rate
SELECT
    COUNT(*) AS total_customers,
    SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) AS churned_customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) AS churn_rate_pct
FROM customers;

-- 2) Churn rate by contract type (biggest driver of churn)
SELECT
    Contract,
    COUNT(*) AS customers,
    SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) AS churned,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) AS churn_rate_pct
FROM customers
GROUP BY Contract
ORDER BY churn_rate_pct DESC;

-- 3) Churn rate by tenure bucket
SELECT
    CASE
        WHEN Tenure <= 6  THEN '0-6 months'
        WHEN Tenure <= 12 THEN '7-12 months'
        WHEN Tenure <= 24 THEN '13-24 months'
        WHEN Tenure <= 48 THEN '25-48 months'
        ELSE '49+ months'
    END AS tenure_bucket,
    COUNT(*) AS customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) AS churn_rate_pct
FROM customers
GROUP BY tenure_bucket
ORDER BY MIN(Tenure);

-- 4) Churn rate by internet service type
SELECT
    InternetService,
    COUNT(*) AS customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) AS churn_rate_pct
FROM customers
GROUP BY InternetService
ORDER BY churn_rate_pct DESC;

-- 5) Churn rate by payment method
SELECT
    PaymentMethod,
    COUNT(*) AS customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) AS churn_rate_pct
FROM customers
GROUP BY PaymentMethod
ORDER BY churn_rate_pct DESC;

-- 6) Impact of add-on services (tech support / online security) on churn
SELECT
    TechSupport,
    OnlineSecurity,
    COUNT(*) AS customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) AS churn_rate_pct
FROM customers
WHERE InternetService <> 'No'
GROUP BY TechSupport, OnlineSecurity
ORDER BY churn_rate_pct DESC;

-- 7) Revenue at risk: monthly recurring revenue currently churning
SELECT
    ROUND(SUM(CASE WHEN Churn = 'Yes' THEN MonthlyCharges ELSE 0 END), 2) AS mrr_lost_to_churn,
    ROUND(SUM(MonthlyCharges), 2) AS total_mrr,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN MonthlyCharges ELSE 0 END) / SUM(MonthlyCharges), 2) AS pct_mrr_at_risk
FROM customers;

-- 8) Average monthly charges: churned vs retained
SELECT
    Churn,
    COUNT(*) AS customers,
    ROUND(AVG(MonthlyCharges), 2) AS avg_monthly_charges,
    ROUND(AVG(Tenure), 1) AS avg_tenure_months
FROM customers
GROUP BY Churn;

-- 9) Highest-risk segment: month-to-month + fiber + electronic check
SELECT
    COUNT(*) AS customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) AS churn_rate_pct
FROM customers
WHERE Contract = 'Month-to-month'
  AND InternetService = 'Fiber optic'
  AND PaymentMethod = 'Electronic check';

-- 10) Senior citizens vs non-senior churn rate
SELECT
    SeniorCitizen,
    COUNT(*) AS customers,
    ROUND(100.0 * SUM(CASE WHEN Churn = 'Yes' THEN 1 ELSE 0 END) / COUNT(*), 2) AS churn_rate_pct
FROM customers
GROUP BY SeniorCitizen;
