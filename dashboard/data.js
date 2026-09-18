const DASHBOARD_DATA = {
  "kpis": {
    "totalCustomers": 10500,
    "churnedCustomers": 2958,
    "churnRate": 28.17,
    "totalMrr": 709788.2,
    "mrrAtRisk": 230883.49,
    "pctMrrAtRisk": 32.53,
    "avgTenure": 35.9,
    "avgMonthlyCharges": 67.6
  },
  "byContract": [
    {
      "label": "Month-to-month",
      "customers": 5773,
      "churnRate": 41.64
    },
    {
      "label": "One year",
      "customers": 2518,
      "churnRate": 16.08
    },
    {
      "label": "Two year",
      "customers": 2209,
      "churnRate": 6.75
    }
  ],
  "byInternet": [
    {
      "label": "Fiber optic",
      "customers": 4600,
      "churnRate": 39.3
    },
    {
      "label": "DSL",
      "customers": 3708,
      "churnRate": 25.19
    },
    {
      "label": "No",
      "customers": 2192,
      "churnRate": 9.85
    }
  ],
  "byPayment": [
    {
      "label": "Electronic check",
      "customers": 3641,
      "churnRate": 34.74
    },
    {
      "label": "Mailed check",
      "customers": 2370,
      "churnRate": 27.3
    },
    {
      "label": "Bank transfer (automatic)",
      "customers": 2237,
      "churnRate": 23.83
    },
    {
      "label": "Credit card (automatic)",
      "customers": 2252,
      "churnRate": 22.78
    }
  ],
  "byTenure": [
    {
      "label": "0-6",
      "customers": 1003,
      "churnRate": 44.47
    },
    {
      "label": "7-12",
      "customers": 876,
      "churnRate": 34.47
    },
    {
      "label": "13-24",
      "customers": 1705,
      "churnRate": 35.13
    },
    {
      "label": "25-48",
      "customers": 3533,
      "churnRate": 29.21
    },
    {
      "label": "49-72",
      "customers": 3383,
      "churnRate": 17.11
    }
  ],
  "bySenior": [
    {
      "label": "1",
      "customers": 1641,
      "churnRate": 31.38
    },
    {
      "label": "0",
      "customers": 8859,
      "churnRate": 27.58
    }
  ],
  "topSegments": [
    {
      "contract": "Month-to-month",
      "internetService": "Fiber optic",
      "paymentMethod": "Electronic check",
      "customers": 866,
      "churnRate": 66.97,
      "mrrAtRisk": 53593.23
    },
    {
      "contract": "Month-to-month",
      "internetService": "Fiber optic",
      "paymentMethod": "Mailed check",
      "customers": 574,
      "churnRate": 55.05,
      "mrrAtRisk": 29235.39
    },
    {
      "contract": "Month-to-month",
      "internetService": "Fiber optic",
      "paymentMethod": "Bank transfer (automatic)",
      "customers": 557,
      "churnRate": 52.78,
      "mrrAtRisk": 27340.15
    },
    {
      "contract": "Month-to-month",
      "internetService": "DSL",
      "paymentMethod": "Electronic check",
      "customers": 690,
      "churnRate": 48.26,
      "mrrAtRisk": 20918.93
    },
    {
      "contract": "Month-to-month",
      "internetService": "Fiber optic",
      "paymentMethod": "Credit card (automatic)",
      "customers": 547,
      "churnRate": 46.98,
      "mrrAtRisk": 23979.31
    },
    {
      "contract": "Month-to-month",
      "internetService": "DSL",
      "paymentMethod": "Mailed check",
      "customers": 488,
      "churnRate": 32.17,
      "mrrAtRisk": 9887.61
    },
    {
      "contract": "Month-to-month",
      "internetService": "DSL",
      "paymentMethod": "Bank transfer (automatic)",
      "customers": 436,
      "churnRate": 31.88,
      "mrrAtRisk": 8767.36
    },
    {
      "contract": "Month-to-month",
      "internetService": "DSL",
      "paymentMethod": "Credit card (automatic)",
      "customers": 443,
      "churnRate": 31.83,
      "mrrAtRisk": 8623.43
    },
    {
      "contract": "One year",
      "internetService": "Fiber optic",
      "paymentMethod": "Electronic check",
      "customers": 397,
      "churnRate": 31.49,
      "mrrAtRisk": 11545.04
    },
    {
      "contract": "One year",
      "internetService": "Fiber optic",
      "paymentMethod": "Mailed check",
      "customers": 235,
      "churnRate": 24.68,
      "mrrAtRisk": 5345.3
    }
  ],
  "scatterSample": [
    {
      "tenure": 12,
      "monthlyCharges": 23.44,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 71.3,
      "churn": "Yes"
    },
    {
      "tenure": 43,
      "monthlyCharges": 55.96,
      "churn": "Yes"
    },
    {
      "tenure": 59,
      "monthlyCharges": 55.1,
      "churn": "No"
    },
    {
      "tenure": 25,
      "monthlyCharges": 109.51,
      "churn": "No"
    },
    {
      "tenure": 41,
      "monthlyCharges": 88.93,
      "churn": "No"
    },
    {
      "tenure": 60,
      "monthlyCharges": 22.0,
      "churn": "No"
    },
    {
      "tenure": 42,
      "monthlyCharges": 20.76,
      "churn": "No"
    },
    {
      "tenure": 5,
      "monthlyCharges": 91.64,
      "churn": "No"
    },
    {
      "tenure": 53,
      "monthlyCharges": 70.27,
      "churn": "No"
    },
    {
      "tenure": 4,
      "monthlyCharges": 83.86,
      "churn": "No"
    },
    {
      "tenure": 27,
      "monthlyCharges": 75.27,
      "churn": "Yes"
    },
    {
      "tenure": 3,
      "monthlyCharges": 22.52,
      "churn": "No"
    },
    {
      "tenure": 71,
      "monthlyCharges": 21.52,
      "churn": "No"
    },
    {
      "tenure": 36,
      "monthlyCharges": 95.61,
      "churn": "No"
    },
    {
      "tenure": 56,
      "monthlyCharges": 81.27,
      "churn": "No"
    },
    {
      "tenure": 26,
      "monthlyCharges": 76.89,
      "churn": "Yes"
    },
    {
      "tenure": 28,
      "monthlyCharges": 87.54,
      "churn": "Yes"
    },
    {
      "tenure": 63,
      "monthlyCharges": 31.19,
      "churn": "No"
    },
    {
      "tenure": 33,
      "monthlyCharges": 23.28,
      "churn": "No"
    },
    {
      "tenure": 24,
      "monthlyCharges": 70.46,
      "churn": "No"
    },
    {
      "tenure": 51,
      "monthlyCharges": 69.97,
      "churn": "No"
    },
    {
      "tenure": 52,
      "monthlyCharges": 23.52,
      "churn": "No"
    },
    {
      "tenure": 40,
      "monthlyCharges": 22.36,
      "churn": "No"
    },
    {
      "tenure": 6,
      "monthlyCharges": 99.06,
      "churn": "Yes"
    },
    {
      "tenure": 65,
      "monthlyCharges": 61.68,
      "churn": "Yes"
    },
    {
      "tenure": 59,
      "monthlyCharges": 74.22,
      "churn": "No"
    },
    {
      "tenure": 62,
      "monthlyCharges": 87.02,
      "churn": "No"
    },
    {
      "tenure": 11,
      "monthlyCharges": 97.72,
      "churn": "No"
    },
    {
      "tenure": 56,
      "monthlyCharges": 83.06,
      "churn": "No"
    },
    {
      "tenure": 67,
      "monthlyCharges": 62.1,
      "churn": "No"
    },
    {
      "tenure": 70,
      "monthlyCharges": 23.97,
      "churn": "No"
    },
    {
      "tenure": 64,
      "monthlyCharges": 19.41,
      "churn": "No"
    },
    {
      "tenure": 69,
      "monthlyCharges": 27.54,
      "churn": "No"
    },
    {
      "tenure": 31,
      "monthlyCharges": 60.65,
      "churn": "No"
    },
    {
      "tenure": 38,
      "monthlyCharges": 98.08,
      "churn": "Yes"
    },
    {
      "tenure": 53,
      "monthlyCharges": 89.39,
      "churn": "No"
    },
    {
      "tenure": 25,
      "monthlyCharges": 59.14,
      "churn": "No"
    },
    {
      "tenure": 21,
      "monthlyCharges": 84.22,
      "churn": "No"
    },
    {
      "tenure": 23,
      "monthlyCharges": 90.54,
      "churn": "No"
    },
    {
      "tenure": 7,
      "monthlyCharges": 93.92,
      "churn": "No"
    },
    {
      "tenure": 37,
      "monthlyCharges": 61.25,
      "churn": "Yes"
    },
    {
      "tenure": 14,
      "monthlyCharges": 63.54,
      "churn": "No"
    },
    {
      "tenure": 62,
      "monthlyCharges": 93.57,
      "churn": "Yes"
    },
    {
      "tenure": 49,
      "monthlyCharges": 25.98,
      "churn": "No"
    },
    {
      "tenure": 17,
      "monthlyCharges": 24.63,
      "churn": "No"
    },
    {
      "tenure": 71,
      "monthlyCharges": 81.09,
      "churn": "Yes"
    },
    {
      "tenure": 56,
      "monthlyCharges": 70.95,
      "churn": "No"
    },
    {
      "tenure": 23,
      "monthlyCharges": 91.57,
      "churn": "Yes"
    },
    {
      "tenure": 26,
      "monthlyCharges": 24.75,
      "churn": "No"
    },
    {
      "tenure": 66,
      "monthlyCharges": 89.7,
      "churn": "No"
    },
    {
      "tenure": 9,
      "monthlyCharges": 90.98,
      "churn": "No"
    },
    {
      "tenure": 19,
      "monthlyCharges": 100.46,
      "churn": "No"
    },
    {
      "tenure": 32,
      "monthlyCharges": 56.71,
      "churn": "No"
    },
    {
      "tenure": 42,
      "monthlyCharges": 88.36,
      "churn": "No"
    },
    {
      "tenure": 29,
      "monthlyCharges": 56.23,
      "churn": "No"
    },
    {
      "tenure": 15,
      "monthlyCharges": 78.74,
      "churn": "Yes"
    },
    {
      "tenure": 72,
      "monthlyCharges": 19.68,
      "churn": "No"
    },
    {
      "tenure": 29,
      "monthlyCharges": 94.07,
      "churn": "Yes"
    },
    {
      "tenure": 30,
      "monthlyCharges": 18.01,
      "churn": "No"
    },
    {
      "tenure": 5,
      "monthlyCharges": 93.58,
      "churn": "No"
    },
    {
      "tenure": 9,
      "monthlyCharges": 89.6,
      "churn": "Yes"
    },
    {
      "tenure": 1,
      "monthlyCharges": 19.37,
      "churn": "No"
    },
    {
      "tenure": 18,
      "monthlyCharges": 82.29,
      "churn": "Yes"
    },
    {
      "tenure": 9,
      "monthlyCharges": 54.08,
      "churn": "No"
    },
    {
      "tenure": 56,
      "monthlyCharges": 87.28,
      "churn": "No"
    },
    {
      "tenure": 60,
      "monthlyCharges": 22.85,
      "churn": "No"
    },
    {
      "tenure": 6,
      "monthlyCharges": 68.56,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 57.69,
      "churn": "No"
    },
    {
      "tenure": 28,
      "monthlyCharges": 28.1,
      "churn": "No"
    },
    {
      "tenure": 41,
      "monthlyCharges": 67.54,
      "churn": "Yes"
    },
    {
      "tenure": 45,
      "monthlyCharges": 62.14,
      "churn": "No"
    },
    {
      "tenure": 28,
      "monthlyCharges": 99.73,
      "churn": "Yes"
    },
    {
      "tenure": 34,
      "monthlyCharges": 56.85,
      "churn": "Yes"
    },
    {
      "tenure": 60,
      "monthlyCharges": 22.52,
      "churn": "No"
    },
    {
      "tenure": 55,
      "monthlyCharges": 28.49,
      "churn": "No"
    },
    {
      "tenure": 53,
      "monthlyCharges": 27.55,
      "churn": "No"
    },
    {
      "tenure": 50,
      "monthlyCharges": 56.27,
      "churn": "No"
    },
    {
      "tenure": 36,
      "monthlyCharges": 20.31,
      "churn": "No"
    },
    {
      "tenure": 19,
      "monthlyCharges": 101.77,
      "churn": "No"
    },
    {
      "tenure": 9,
      "monthlyCharges": 22.32,
      "churn": "No"
    },
    {
      "tenure": 66,
      "monthlyCharges": 97.39,
      "churn": "No"
    },
    {
      "tenure": 43,
      "monthlyCharges": 90.97,
      "churn": "No"
    },
    {
      "tenure": 62,
      "monthlyCharges": 86.73,
      "churn": "No"
    },
    {
      "tenure": 24,
      "monthlyCharges": 59.78,
      "churn": "No"
    },
    {
      "tenure": 48,
      "monthlyCharges": 91.81,
      "churn": "Yes"
    },
    {
      "tenure": 11,
      "monthlyCharges": 94.73,
      "churn": "No"
    },
    {
      "tenure": 45,
      "monthlyCharges": 55.38,
      "churn": "No"
    },
    {
      "tenure": 18,
      "monthlyCharges": 24.79,
      "churn": "No"
    },
    {
      "tenure": 15,
      "monthlyCharges": 90.6,
      "churn": "No"
    },
    {
      "tenure": 28,
      "monthlyCharges": 54.84,
      "churn": "Yes"
    },
    {
      "tenure": 6,
      "monthlyCharges": 69.12,
      "churn": "No"
    },
    {
      "tenure": 13,
      "monthlyCharges": 23.8,
      "churn": "No"
    },
    {
      "tenure": 28,
      "monthlyCharges": 18.54,
      "churn": "No"
    },
    {
      "tenure": 17,
      "monthlyCharges": 51.24,
      "churn": "Yes"
    },
    {
      "tenure": 33,
      "monthlyCharges": 104.38,
      "churn": "No"
    },
    {
      "tenure": 9,
      "monthlyCharges": 58.01,
      "churn": "Yes"
    },
    {
      "tenure": 67,
      "monthlyCharges": 84.26,
      "churn": "No"
    },
    {
      "tenure": 12,
      "monthlyCharges": 97.1,
      "churn": "No"
    },
    {
      "tenure": 48,
      "monthlyCharges": 69.45,
      "churn": "No"
    },
    {
      "tenure": 29,
      "monthlyCharges": 86.58,
      "churn": "No"
    },
    {
      "tenure": 59,
      "monthlyCharges": 26.25,
      "churn": "No"
    },
    {
      "tenure": 25,
      "monthlyCharges": 97.04,
      "churn": "Yes"
    },
    {
      "tenure": 44,
      "monthlyCharges": 62.38,
      "churn": "No"
    },
    {
      "tenure": 35,
      "monthlyCharges": 70.93,
      "churn": "Yes"
    },
    {
      "tenure": 1,
      "monthlyCharges": 55.17,
      "churn": "Yes"
    },
    {
      "tenure": 52,
      "monthlyCharges": 76.53,
      "churn": "No"
    },
    {
      "tenure": 59,
      "monthlyCharges": 71.53,
      "churn": "No"
    },
    {
      "tenure": 18,
      "monthlyCharges": 19.76,
      "churn": "Yes"
    },
    {
      "tenure": 20,
      "monthlyCharges": 57.46,
      "churn": "No"
    },
    {
      "tenure": 6,
      "monthlyCharges": 72.73,
      "churn": "Yes"
    },
    {
      "tenure": 8,
      "monthlyCharges": 82.14,
      "churn": "No"
    },
    {
      "tenure": 9,
      "monthlyCharges": 58.67,
      "churn": "Yes"
    },
    {
      "tenure": 63,
      "monthlyCharges": 75.74,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 88.56,
      "churn": "No"
    },
    {
      "tenure": 69,
      "monthlyCharges": 64.2,
      "churn": "Yes"
    },
    {
      "tenure": 55,
      "monthlyCharges": 61.14,
      "churn": "No"
    },
    {
      "tenure": 71,
      "monthlyCharges": 53.91,
      "churn": "No"
    },
    {
      "tenure": 11,
      "monthlyCharges": 19.11,
      "churn": "No"
    },
    {
      "tenure": 24,
      "monthlyCharges": 23.53,
      "churn": "No"
    },
    {
      "tenure": 42,
      "monthlyCharges": 95.75,
      "churn": "No"
    },
    {
      "tenure": 43,
      "monthlyCharges": 49.31,
      "churn": "No"
    },
    {
      "tenure": 54,
      "monthlyCharges": 93.91,
      "churn": "Yes"
    },
    {
      "tenure": 22,
      "monthlyCharges": 55.83,
      "churn": "No"
    },
    {
      "tenure": 50,
      "monthlyCharges": 67.98,
      "churn": "No"
    },
    {
      "tenure": 43,
      "monthlyCharges": 59.09,
      "churn": "No"
    },
    {
      "tenure": 4,
      "monthlyCharges": 23.41,
      "churn": "No"
    },
    {
      "tenure": 0,
      "monthlyCharges": 26.1,
      "churn": "No"
    },
    {
      "tenure": 51,
      "monthlyCharges": 96.43,
      "churn": "No"
    },
    {
      "tenure": 60,
      "monthlyCharges": 78.04,
      "churn": "Yes"
    },
    {
      "tenure": 43,
      "monthlyCharges": 74.76,
      "churn": "No"
    },
    {
      "tenure": 45,
      "monthlyCharges": 87.91,
      "churn": "No"
    },
    {
      "tenure": 26,
      "monthlyCharges": 22.05,
      "churn": "No"
    },
    {
      "tenure": 18,
      "monthlyCharges": 18.0,
      "churn": "No"
    },
    {
      "tenure": 55,
      "monthlyCharges": 71.82,
      "churn": "No"
    },
    {
      "tenure": 21,
      "monthlyCharges": 56.71,
      "churn": "Yes"
    },
    {
      "tenure": 32,
      "monthlyCharges": 71.04,
      "churn": "No"
    },
    {
      "tenure": 52,
      "monthlyCharges": 97.87,
      "churn": "No"
    },
    {
      "tenure": 15,
      "monthlyCharges": 61.29,
      "churn": "No"
    },
    {
      "tenure": 8,
      "monthlyCharges": 97.87,
      "churn": "Yes"
    },
    {
      "tenure": 67,
      "monthlyCharges": 55.42,
      "churn": "Yes"
    },
    {
      "tenure": 64,
      "monthlyCharges": 50.93,
      "churn": "No"
    },
    {
      "tenure": 72,
      "monthlyCharges": 64.64,
      "churn": "No"
    },
    {
      "tenure": 38,
      "monthlyCharges": 96.19,
      "churn": "Yes"
    },
    {
      "tenure": 26,
      "monthlyCharges": 104.33,
      "churn": "No"
    },
    {
      "tenure": 0,
      "monthlyCharges": 18.0,
      "churn": "No"
    },
    {
      "tenure": 24,
      "monthlyCharges": 57.32,
      "churn": "Yes"
    },
    {
      "tenure": 62,
      "monthlyCharges": 92.01,
      "churn": "No"
    },
    {
      "tenure": 15,
      "monthlyCharges": 24.65,
      "churn": "No"
    },
    {
      "tenure": 64,
      "monthlyCharges": 99.59,
      "churn": "No"
    },
    {
      "tenure": 22,
      "monthlyCharges": 84.1,
      "churn": "Yes"
    },
    {
      "tenure": 34,
      "monthlyCharges": 78.01,
      "churn": "Yes"
    },
    {
      "tenure": 20,
      "monthlyCharges": 28.69,
      "churn": "No"
    },
    {
      "tenure": 25,
      "monthlyCharges": 23.2,
      "churn": "No"
    },
    {
      "tenure": 31,
      "monthlyCharges": 47.92,
      "churn": "No"
    },
    {
      "tenure": 28,
      "monthlyCharges": 81.09,
      "churn": "No"
    },
    {
      "tenure": 69,
      "monthlyCharges": 98.1,
      "churn": "No"
    },
    {
      "tenure": 31,
      "monthlyCharges": 57.16,
      "churn": "No"
    },
    {
      "tenure": 29,
      "monthlyCharges": 21.84,
      "churn": "No"
    },
    {
      "tenure": 44,
      "monthlyCharges": 64.4,
      "churn": "No"
    },
    {
      "tenure": 27,
      "monthlyCharges": 51.39,
      "churn": "No"
    },
    {
      "tenure": 51,
      "monthlyCharges": 56.97,
      "churn": "No"
    },
    {
      "tenure": 13,
      "monthlyCharges": 56.87,
      "churn": "Yes"
    },
    {
      "tenure": 16,
      "monthlyCharges": 51.41,
      "churn": "No"
    },
    {
      "tenure": 20,
      "monthlyCharges": 107.39,
      "churn": "No"
    },
    {
      "tenure": 49,
      "monthlyCharges": 98.03,
      "churn": "No"
    },
    {
      "tenure": 53,
      "monthlyCharges": 55.89,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 25.87,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 63.73,
      "churn": "No"
    },
    {
      "tenure": 59,
      "monthlyCharges": 55.76,
      "churn": "No"
    },
    {
      "tenure": 33,
      "monthlyCharges": 55.1,
      "churn": "Yes"
    },
    {
      "tenure": 61,
      "monthlyCharges": 61.03,
      "churn": "No"
    },
    {
      "tenure": 32,
      "monthlyCharges": 80.27,
      "churn": "No"
    },
    {
      "tenure": 18,
      "monthlyCharges": 61.87,
      "churn": "No"
    },
    {
      "tenure": 1,
      "monthlyCharges": 24.57,
      "churn": "No"
    },
    {
      "tenure": 43,
      "monthlyCharges": 50.96,
      "churn": "No"
    },
    {
      "tenure": 71,
      "monthlyCharges": 93.03,
      "churn": "Yes"
    },
    {
      "tenure": 38,
      "monthlyCharges": 65.6,
      "churn": "No"
    },
    {
      "tenure": 26,
      "monthlyCharges": 92.2,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 56.23,
      "churn": "No"
    },
    {
      "tenure": 41,
      "monthlyCharges": 53.73,
      "churn": "No"
    },
    {
      "tenure": 57,
      "monthlyCharges": 88.99,
      "churn": "No"
    },
    {
      "tenure": 20,
      "monthlyCharges": 94.74,
      "churn": "Yes"
    },
    {
      "tenure": 42,
      "monthlyCharges": 95.46,
      "churn": "No"
    },
    {
      "tenure": 64,
      "monthlyCharges": 79.75,
      "churn": "Yes"
    },
    {
      "tenure": 58,
      "monthlyCharges": 57.48,
      "churn": "No"
    },
    {
      "tenure": 37,
      "monthlyCharges": 75.85,
      "churn": "No"
    },
    {
      "tenure": 29,
      "monthlyCharges": 107.76,
      "churn": "No"
    },
    {
      "tenure": 29,
      "monthlyCharges": 95.29,
      "churn": "Yes"
    },
    {
      "tenure": 34,
      "monthlyCharges": 93.15,
      "churn": "Yes"
    },
    {
      "tenure": 0,
      "monthlyCharges": 19.87,
      "churn": "Yes"
    },
    {
      "tenure": 23,
      "monthlyCharges": 100.79,
      "churn": "No"
    },
    {
      "tenure": 26,
      "monthlyCharges": 76.05,
      "churn": "No"
    },
    {
      "tenure": 38,
      "monthlyCharges": 98.45,
      "churn": "No"
    },
    {
      "tenure": 53,
      "monthlyCharges": 97.37,
      "churn": "No"
    },
    {
      "tenure": 47,
      "monthlyCharges": 70.88,
      "churn": "No"
    },
    {
      "tenure": 55,
      "monthlyCharges": 110.06,
      "churn": "Yes"
    },
    {
      "tenure": 66,
      "monthlyCharges": 90.82,
      "churn": "Yes"
    },
    {
      "tenure": 62,
      "monthlyCharges": 69.78,
      "churn": "No"
    },
    {
      "tenure": 18,
      "monthlyCharges": 25.65,
      "churn": "No"
    },
    {
      "tenure": 19,
      "monthlyCharges": 89.2,
      "churn": "Yes"
    },
    {
      "tenure": 25,
      "monthlyCharges": 72.13,
      "churn": "Yes"
    },
    {
      "tenure": 13,
      "monthlyCharges": 62.58,
      "churn": "Yes"
    },
    {
      "tenure": 32,
      "monthlyCharges": 53.74,
      "churn": "Yes"
    },
    {
      "tenure": 47,
      "monthlyCharges": 102.23,
      "churn": "Yes"
    },
    {
      "tenure": 13,
      "monthlyCharges": 22.39,
      "churn": "No"
    },
    {
      "tenure": 19,
      "monthlyCharges": 56.84,
      "churn": "No"
    },
    {
      "tenure": 66,
      "monthlyCharges": 61.22,
      "churn": "No"
    },
    {
      "tenure": 60,
      "monthlyCharges": 84.57,
      "churn": "No"
    },
    {
      "tenure": 62,
      "monthlyCharges": 89.6,
      "churn": "Yes"
    },
    {
      "tenure": 18,
      "monthlyCharges": 65.44,
      "churn": "Yes"
    },
    {
      "tenure": 34,
      "monthlyCharges": 108.21,
      "churn": "Yes"
    },
    {
      "tenure": 18,
      "monthlyCharges": 27.49,
      "churn": "Yes"
    },
    {
      "tenure": 11,
      "monthlyCharges": 81.11,
      "churn": "Yes"
    },
    {
      "tenure": 67,
      "monthlyCharges": 20.52,
      "churn": "No"
    },
    {
      "tenure": 53,
      "monthlyCharges": 84.09,
      "churn": "No"
    },
    {
      "tenure": 5,
      "monthlyCharges": 70.2,
      "churn": "Yes"
    },
    {
      "tenure": 69,
      "monthlyCharges": 94.4,
      "churn": "No"
    },
    {
      "tenure": 17,
      "monthlyCharges": 19.48,
      "churn": "Yes"
    },
    {
      "tenure": 7,
      "monthlyCharges": 48.38,
      "churn": "No"
    },
    {
      "tenure": 51,
      "monthlyCharges": 96.42,
      "churn": "Yes"
    },
    {
      "tenure": 8,
      "monthlyCharges": 65.75,
      "churn": "Yes"
    },
    {
      "tenure": 25,
      "monthlyCharges": 52.66,
      "churn": "Yes"
    },
    {
      "tenure": 28,
      "monthlyCharges": 83.15,
      "churn": "Yes"
    },
    {
      "tenure": 44,
      "monthlyCharges": 95.4,
      "churn": "No"
    },
    {
      "tenure": 21,
      "monthlyCharges": 20.96,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 27.03,
      "churn": "No"
    },
    {
      "tenure": 44,
      "monthlyCharges": 67.19,
      "churn": "No"
    },
    {
      "tenure": 32,
      "monthlyCharges": 99.34,
      "churn": "No"
    },
    {
      "tenure": 64,
      "monthlyCharges": 26.27,
      "churn": "No"
    },
    {
      "tenure": 16,
      "monthlyCharges": 91.04,
      "churn": "Yes"
    },
    {
      "tenure": 15,
      "monthlyCharges": 65.41,
      "churn": "Yes"
    },
    {
      "tenure": 22,
      "monthlyCharges": 21.73,
      "churn": "No"
    },
    {
      "tenure": 60,
      "monthlyCharges": 24.58,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 61.41,
      "churn": "No"
    },
    {
      "tenure": 3,
      "monthlyCharges": 89.79,
      "churn": "No"
    },
    {
      "tenure": 23,
      "monthlyCharges": 90.53,
      "churn": "No"
    },
    {
      "tenure": 14,
      "monthlyCharges": 85.17,
      "churn": "Yes"
    },
    {
      "tenure": 9,
      "monthlyCharges": 89.49,
      "churn": "Yes"
    },
    {
      "tenure": 31,
      "monthlyCharges": 55.0,
      "churn": "Yes"
    },
    {
      "tenure": 19,
      "monthlyCharges": 58.99,
      "churn": "No"
    },
    {
      "tenure": 21,
      "monthlyCharges": 93.13,
      "churn": "Yes"
    },
    {
      "tenure": 32,
      "monthlyCharges": 64.07,
      "churn": "Yes"
    },
    {
      "tenure": 37,
      "monthlyCharges": 61.51,
      "churn": "Yes"
    },
    {
      "tenure": 35,
      "monthlyCharges": 69.64,
      "churn": "No"
    },
    {
      "tenure": 32,
      "monthlyCharges": 83.49,
      "churn": "Yes"
    },
    {
      "tenure": 59,
      "monthlyCharges": 81.97,
      "churn": "No"
    },
    {
      "tenure": 52,
      "monthlyCharges": 88.69,
      "churn": "No"
    },
    {
      "tenure": 6,
      "monthlyCharges": 22.41,
      "churn": "No"
    },
    {
      "tenure": 28,
      "monthlyCharges": 20.99,
      "churn": "No"
    },
    {
      "tenure": 19,
      "monthlyCharges": 98.52,
      "churn": "No"
    },
    {
      "tenure": 38,
      "monthlyCharges": 92.94,
      "churn": "Yes"
    },
    {
      "tenure": 72,
      "monthlyCharges": 88.59,
      "churn": "No"
    },
    {
      "tenure": 18,
      "monthlyCharges": 18.43,
      "churn": "No"
    },
    {
      "tenure": 27,
      "monthlyCharges": 26.89,
      "churn": "No"
    },
    {
      "tenure": 57,
      "monthlyCharges": 67.09,
      "churn": "No"
    },
    {
      "tenure": 71,
      "monthlyCharges": 56.89,
      "churn": "No"
    },
    {
      "tenure": 22,
      "monthlyCharges": 97.03,
      "churn": "Yes"
    },
    {
      "tenure": 3,
      "monthlyCharges": 55.28,
      "churn": "Yes"
    },
    {
      "tenure": 29,
      "monthlyCharges": 68.0,
      "churn": "No"
    },
    {
      "tenure": 11,
      "monthlyCharges": 98.66,
      "churn": "Yes"
    },
    {
      "tenure": 68,
      "monthlyCharges": 91.66,
      "churn": "No"
    },
    {
      "tenure": 58,
      "monthlyCharges": 59.79,
      "churn": "No"
    },
    {
      "tenure": 58,
      "monthlyCharges": 84.51,
      "churn": "No"
    },
    {
      "tenure": 59,
      "monthlyCharges": 73.47,
      "churn": "No"
    },
    {
      "tenure": 46,
      "monthlyCharges": 99.99,
      "churn": "Yes"
    },
    {
      "tenure": 30,
      "monthlyCharges": 25.26,
      "churn": "No"
    },
    {
      "tenure": 38,
      "monthlyCharges": 61.21,
      "churn": "No"
    },
    {
      "tenure": 70,
      "monthlyCharges": 101.84,
      "churn": "No"
    },
    {
      "tenure": 8,
      "monthlyCharges": 77.72,
      "churn": "No"
    },
    {
      "tenure": 9,
      "monthlyCharges": 86.09,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 103.24,
      "churn": "Yes"
    },
    {
      "tenure": 22,
      "monthlyCharges": 97.81,
      "churn": "Yes"
    },
    {
      "tenure": 44,
      "monthlyCharges": 18.0,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 58.1,
      "churn": "Yes"
    },
    {
      "tenure": 33,
      "monthlyCharges": 59.25,
      "churn": "No"
    },
    {
      "tenure": 49,
      "monthlyCharges": 59.44,
      "churn": "No"
    },
    {
      "tenure": 47,
      "monthlyCharges": 107.05,
      "churn": "No"
    },
    {
      "tenure": 63,
      "monthlyCharges": 76.46,
      "churn": "No"
    },
    {
      "tenure": 50,
      "monthlyCharges": 26.07,
      "churn": "No"
    },
    {
      "tenure": 12,
      "monthlyCharges": 87.24,
      "churn": "Yes"
    },
    {
      "tenure": 34,
      "monthlyCharges": 98.05,
      "churn": "Yes"
    },
    {
      "tenure": 18,
      "monthlyCharges": 57.25,
      "churn": "Yes"
    },
    {
      "tenure": 37,
      "monthlyCharges": 73.03,
      "churn": "No"
    },
    {
      "tenure": 8,
      "monthlyCharges": 71.05,
      "churn": "Yes"
    },
    {
      "tenure": 60,
      "monthlyCharges": 82.93,
      "churn": "Yes"
    },
    {
      "tenure": 18,
      "monthlyCharges": 51.47,
      "churn": "Yes"
    },
    {
      "tenure": 11,
      "monthlyCharges": 56.23,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 53.24,
      "churn": "No"
    },
    {
      "tenure": 43,
      "monthlyCharges": 57.59,
      "churn": "No"
    },
    {
      "tenure": 47,
      "monthlyCharges": 63.22,
      "churn": "No"
    },
    {
      "tenure": 56,
      "monthlyCharges": 77.47,
      "churn": "No"
    },
    {
      "tenure": 19,
      "monthlyCharges": 74.97,
      "churn": "Yes"
    },
    {
      "tenure": 58,
      "monthlyCharges": 57.78,
      "churn": "No"
    },
    {
      "tenure": 19,
      "monthlyCharges": 20.68,
      "churn": "No"
    },
    {
      "tenure": 44,
      "monthlyCharges": 103.88,
      "churn": "No"
    },
    {
      "tenure": 27,
      "monthlyCharges": 83.52,
      "churn": "Yes"
    },
    {
      "tenure": 49,
      "monthlyCharges": 60.91,
      "churn": "No"
    },
    {
      "tenure": 15,
      "monthlyCharges": 25.27,
      "churn": "Yes"
    },
    {
      "tenure": 0,
      "monthlyCharges": 71.1,
      "churn": "No"
    },
    {
      "tenure": 50,
      "monthlyCharges": 95.99,
      "churn": "No"
    },
    {
      "tenure": 22,
      "monthlyCharges": 88.28,
      "churn": "Yes"
    },
    {
      "tenure": 23,
      "monthlyCharges": 57.57,
      "churn": "Yes"
    },
    {
      "tenure": 16,
      "monthlyCharges": 63.54,
      "churn": "Yes"
    },
    {
      "tenure": 67,
      "monthlyCharges": 94.88,
      "churn": "No"
    },
    {
      "tenure": 55,
      "monthlyCharges": 64.34,
      "churn": "No"
    },
    {
      "tenure": 46,
      "monthlyCharges": 101.27,
      "churn": "Yes"
    },
    {
      "tenure": 10,
      "monthlyCharges": 79.74,
      "churn": "No"
    },
    {
      "tenure": 11,
      "monthlyCharges": 21.88,
      "churn": "No"
    },
    {
      "tenure": 12,
      "monthlyCharges": 100.33,
      "churn": "Yes"
    },
    {
      "tenure": 71,
      "monthlyCharges": 26.13,
      "churn": "No"
    },
    {
      "tenure": 53,
      "monthlyCharges": 97.4,
      "churn": "No"
    },
    {
      "tenure": 16,
      "monthlyCharges": 55.94,
      "churn": "No"
    },
    {
      "tenure": 37,
      "monthlyCharges": 87.97,
      "churn": "No"
    },
    {
      "tenure": 17,
      "monthlyCharges": 96.25,
      "churn": "No"
    },
    {
      "tenure": 51,
      "monthlyCharges": 57.21,
      "churn": "No"
    },
    {
      "tenure": 66,
      "monthlyCharges": 84.02,
      "churn": "No"
    },
    {
      "tenure": 8,
      "monthlyCharges": 65.9,
      "churn": "No"
    },
    {
      "tenure": 54,
      "monthlyCharges": 20.56,
      "churn": "No"
    },
    {
      "tenure": 46,
      "monthlyCharges": 83.34,
      "churn": "No"
    },
    {
      "tenure": 18,
      "monthlyCharges": 56.18,
      "churn": "Yes"
    },
    {
      "tenure": 49,
      "monthlyCharges": 56.58,
      "churn": "No"
    },
    {
      "tenure": 68,
      "monthlyCharges": 94.79,
      "churn": "Yes"
    },
    {
      "tenure": 22,
      "monthlyCharges": 97.0,
      "churn": "No"
    },
    {
      "tenure": 62,
      "monthlyCharges": 22.38,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 64.41,
      "churn": "No"
    },
    {
      "tenure": 42,
      "monthlyCharges": 101.62,
      "churn": "No"
    },
    {
      "tenure": 11,
      "monthlyCharges": 57.51,
      "churn": "Yes"
    },
    {
      "tenure": 22,
      "monthlyCharges": 54.7,
      "churn": "Yes"
    },
    {
      "tenure": 62,
      "monthlyCharges": 86.65,
      "churn": "No"
    },
    {
      "tenure": 7,
      "monthlyCharges": 71.87,
      "churn": "No"
    },
    {
      "tenure": 55,
      "monthlyCharges": 58.1,
      "churn": "No"
    },
    {
      "tenure": 60,
      "monthlyCharges": 49.64,
      "churn": "No"
    },
    {
      "tenure": 23,
      "monthlyCharges": 80.79,
      "churn": "Yes"
    },
    {
      "tenure": 61,
      "monthlyCharges": 75.09,
      "churn": "No"
    },
    {
      "tenure": 41,
      "monthlyCharges": 23.23,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 24.37,
      "churn": "No"
    },
    {
      "tenure": 63,
      "monthlyCharges": 47.34,
      "churn": "Yes"
    },
    {
      "tenure": 29,
      "monthlyCharges": 24.79,
      "churn": "No"
    },
    {
      "tenure": 29,
      "monthlyCharges": 98.45,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 27.6,
      "churn": "No"
    },
    {
      "tenure": 27,
      "monthlyCharges": 95.1,
      "churn": "Yes"
    },
    {
      "tenure": 58,
      "monthlyCharges": 102.49,
      "churn": "No"
    },
    {
      "tenure": 15,
      "monthlyCharges": 54.05,
      "churn": "No"
    },
    {
      "tenure": 71,
      "monthlyCharges": 89.34,
      "churn": "No"
    },
    {
      "tenure": 36,
      "monthlyCharges": 26.63,
      "churn": "No"
    },
    {
      "tenure": 7,
      "monthlyCharges": 21.49,
      "churn": "No"
    },
    {
      "tenure": 27,
      "monthlyCharges": 93.56,
      "churn": "Yes"
    },
    {
      "tenure": 45,
      "monthlyCharges": 25.28,
      "churn": "No"
    },
    {
      "tenure": 50,
      "monthlyCharges": 23.18,
      "churn": "No"
    },
    {
      "tenure": 49,
      "monthlyCharges": 93.87,
      "churn": "No"
    },
    {
      "tenure": 8,
      "monthlyCharges": 81.92,
      "churn": "Yes"
    },
    {
      "tenure": 61,
      "monthlyCharges": 56.93,
      "churn": "No"
    },
    {
      "tenure": 43,
      "monthlyCharges": 56.86,
      "churn": "Yes"
    },
    {
      "tenure": 27,
      "monthlyCharges": 66.05,
      "churn": "No"
    },
    {
      "tenure": 40,
      "monthlyCharges": 18.0,
      "churn": "No"
    },
    {
      "tenure": 30,
      "monthlyCharges": 105.68,
      "churn": "No"
    },
    {
      "tenure": 61,
      "monthlyCharges": 22.27,
      "churn": "No"
    },
    {
      "tenure": 58,
      "monthlyCharges": 53.68,
      "churn": "No"
    },
    {
      "tenure": 42,
      "monthlyCharges": 87.91,
      "churn": "No"
    },
    {
      "tenure": 4,
      "monthlyCharges": 22.28,
      "churn": "No"
    },
    {
      "tenure": 32,
      "monthlyCharges": 24.28,
      "churn": "No"
    },
    {
      "tenure": 6,
      "monthlyCharges": 25.33,
      "churn": "Yes"
    },
    {
      "tenure": 9,
      "monthlyCharges": 22.71,
      "churn": "No"
    },
    {
      "tenure": 67,
      "monthlyCharges": 81.9,
      "churn": "Yes"
    },
    {
      "tenure": 9,
      "monthlyCharges": 104.41,
      "churn": "Yes"
    },
    {
      "tenure": 22,
      "monthlyCharges": 84.16,
      "churn": "Yes"
    },
    {
      "tenure": 52,
      "monthlyCharges": 51.82,
      "churn": "No"
    },
    {
      "tenure": 60,
      "monthlyCharges": 65.97,
      "churn": "No"
    },
    {
      "tenure": 4,
      "monthlyCharges": 22.32,
      "churn": "No"
    },
    {
      "tenure": 26,
      "monthlyCharges": 86.19,
      "churn": "Yes"
    },
    {
      "tenure": 7,
      "monthlyCharges": 99.23,
      "churn": "No"
    },
    {
      "tenure": 67,
      "monthlyCharges": 88.41,
      "churn": "No"
    },
    {
      "tenure": 17,
      "monthlyCharges": 59.48,
      "churn": "Yes"
    },
    {
      "tenure": 37,
      "monthlyCharges": 101.93,
      "churn": "No"
    },
    {
      "tenure": 14,
      "monthlyCharges": 49.35,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 94.54,
      "churn": "Yes"
    },
    {
      "tenure": 57,
      "monthlyCharges": 22.66,
      "churn": "No"
    },
    {
      "tenure": 49,
      "monthlyCharges": 45.31,
      "churn": "No"
    },
    {
      "tenure": 46,
      "monthlyCharges": 98.08,
      "churn": "No"
    },
    {
      "tenure": 20,
      "monthlyCharges": 86.25,
      "churn": "Yes"
    },
    {
      "tenure": 70,
      "monthlyCharges": 82.03,
      "churn": "No"
    },
    {
      "tenure": 52,
      "monthlyCharges": 109.25,
      "churn": "No"
    },
    {
      "tenure": 51,
      "monthlyCharges": 101.23,
      "churn": "No"
    },
    {
      "tenure": 60,
      "monthlyCharges": 23.25,
      "churn": "No"
    },
    {
      "tenure": 25,
      "monthlyCharges": 80.54,
      "churn": "No"
    },
    {
      "tenure": 62,
      "monthlyCharges": 97.52,
      "churn": "No"
    },
    {
      "tenure": 34,
      "monthlyCharges": 69.17,
      "churn": "No"
    },
    {
      "tenure": 30,
      "monthlyCharges": 102.48,
      "churn": "Yes"
    },
    {
      "tenure": 59,
      "monthlyCharges": 21.9,
      "churn": "No"
    },
    {
      "tenure": 49,
      "monthlyCharges": 51.92,
      "churn": "Yes"
    },
    {
      "tenure": 4,
      "monthlyCharges": 86.75,
      "churn": "Yes"
    },
    {
      "tenure": 2,
      "monthlyCharges": 62.16,
      "churn": "Yes"
    },
    {
      "tenure": 70,
      "monthlyCharges": 86.21,
      "churn": "No"
    },
    {
      "tenure": 56,
      "monthlyCharges": 23.71,
      "churn": "No"
    },
    {
      "tenure": 68,
      "monthlyCharges": 57.64,
      "churn": "No"
    },
    {
      "tenure": 24,
      "monthlyCharges": 23.93,
      "churn": "Yes"
    },
    {
      "tenure": 67,
      "monthlyCharges": 60.08,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 23.19,
      "churn": "No"
    },
    {
      "tenure": 30,
      "monthlyCharges": 78.51,
      "churn": "No"
    },
    {
      "tenure": 6,
      "monthlyCharges": 94.0,
      "churn": "Yes"
    },
    {
      "tenure": 13,
      "monthlyCharges": 101.58,
      "churn": "No"
    },
    {
      "tenure": 29,
      "monthlyCharges": 26.99,
      "churn": "No"
    },
    {
      "tenure": 18,
      "monthlyCharges": 84.21,
      "churn": "Yes"
    },
    {
      "tenure": 52,
      "monthlyCharges": 97.88,
      "churn": "No"
    },
    {
      "tenure": 64,
      "monthlyCharges": 104.29,
      "churn": "No"
    },
    {
      "tenure": 51,
      "monthlyCharges": 28.74,
      "churn": "No"
    },
    {
      "tenure": 67,
      "monthlyCharges": 66.54,
      "churn": "No"
    },
    {
      "tenure": 36,
      "monthlyCharges": 56.24,
      "churn": "Yes"
    },
    {
      "tenure": 41,
      "monthlyCharges": 90.24,
      "churn": "No"
    },
    {
      "tenure": 66,
      "monthlyCharges": 72.32,
      "churn": "No"
    },
    {
      "tenure": 36,
      "monthlyCharges": 89.88,
      "churn": "No"
    },
    {
      "tenure": 10,
      "monthlyCharges": 89.68,
      "churn": "Yes"
    },
    {
      "tenure": 1,
      "monthlyCharges": 90.64,
      "churn": "Yes"
    },
    {
      "tenure": 0,
      "monthlyCharges": 99.38,
      "churn": "Yes"
    },
    {
      "tenure": 5,
      "monthlyCharges": 58.27,
      "churn": "No"
    },
    {
      "tenure": 15,
      "monthlyCharges": 103.89,
      "churn": "Yes"
    },
    {
      "tenure": 24,
      "monthlyCharges": 61.04,
      "churn": "Yes"
    },
    {
      "tenure": 68,
      "monthlyCharges": 91.27,
      "churn": "No"
    },
    {
      "tenure": 46,
      "monthlyCharges": 59.13,
      "churn": "No"
    },
    {
      "tenure": 33,
      "monthlyCharges": 67.9,
      "churn": "Yes"
    },
    {
      "tenure": 32,
      "monthlyCharges": 85.19,
      "churn": "No"
    },
    {
      "tenure": 31,
      "monthlyCharges": 23.36,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 74.56,
      "churn": "No"
    },
    {
      "tenure": 18,
      "monthlyCharges": 93.34,
      "churn": "Yes"
    },
    {
      "tenure": 53,
      "monthlyCharges": 102.24,
      "churn": "No"
    },
    {
      "tenure": 66,
      "monthlyCharges": 66.46,
      "churn": "No"
    },
    {
      "tenure": 72,
      "monthlyCharges": 28.87,
      "churn": "No"
    },
    {
      "tenure": 55,
      "monthlyCharges": 99.47,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 93.34,
      "churn": "No"
    },
    {
      "tenure": 52,
      "monthlyCharges": 99.82,
      "churn": "Yes"
    },
    {
      "tenure": 37,
      "monthlyCharges": 99.81,
      "churn": "Yes"
    },
    {
      "tenure": 25,
      "monthlyCharges": 79.34,
      "churn": "Yes"
    },
    {
      "tenure": 19,
      "monthlyCharges": 73.16,
      "churn": "No"
    },
    {
      "tenure": 43,
      "monthlyCharges": 87.11,
      "churn": "No"
    },
    {
      "tenure": 55,
      "monthlyCharges": 86.7,
      "churn": "No"
    },
    {
      "tenure": 24,
      "monthlyCharges": 88.24,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 86.15,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 26.68,
      "churn": "No"
    },
    {
      "tenure": 5,
      "monthlyCharges": 22.5,
      "churn": "No"
    },
    {
      "tenure": 13,
      "monthlyCharges": 90.61,
      "churn": "Yes"
    },
    {
      "tenure": 66,
      "monthlyCharges": 82.44,
      "churn": "No"
    },
    {
      "tenure": 59,
      "monthlyCharges": 23.41,
      "churn": "No"
    },
    {
      "tenure": 34,
      "monthlyCharges": 18.13,
      "churn": "No"
    },
    {
      "tenure": 25,
      "monthlyCharges": 64.4,
      "churn": "No"
    },
    {
      "tenure": 20,
      "monthlyCharges": 53.65,
      "churn": "No"
    },
    {
      "tenure": 47,
      "monthlyCharges": 65.79,
      "churn": "No"
    },
    {
      "tenure": 44,
      "monthlyCharges": 75.55,
      "churn": "Yes"
    },
    {
      "tenure": 14,
      "monthlyCharges": 89.49,
      "churn": "Yes"
    },
    {
      "tenure": 42,
      "monthlyCharges": 88.82,
      "churn": "Yes"
    },
    {
      "tenure": 39,
      "monthlyCharges": 24.4,
      "churn": "No"
    },
    {
      "tenure": 47,
      "monthlyCharges": 21.57,
      "churn": "No"
    },
    {
      "tenure": 52,
      "monthlyCharges": 90.7,
      "churn": "No"
    },
    {
      "tenure": 72,
      "monthlyCharges": 25.02,
      "churn": "No"
    },
    {
      "tenure": 50,
      "monthlyCharges": 79.82,
      "churn": "No"
    },
    {
      "tenure": 71,
      "monthlyCharges": 101.58,
      "churn": "No"
    },
    {
      "tenure": 27,
      "monthlyCharges": 26.42,
      "churn": "No"
    },
    {
      "tenure": 6,
      "monthlyCharges": 77.7,
      "churn": "Yes"
    },
    {
      "tenure": 27,
      "monthlyCharges": 18.0,
      "churn": "No"
    },
    {
      "tenure": 40,
      "monthlyCharges": 65.98,
      "churn": "No"
    },
    {
      "tenure": 32,
      "monthlyCharges": 63.07,
      "churn": "No"
    },
    {
      "tenure": 9,
      "monthlyCharges": 59.08,
      "churn": "No"
    },
    {
      "tenure": 30,
      "monthlyCharges": 69.92,
      "churn": "No"
    },
    {
      "tenure": 19,
      "monthlyCharges": 65.49,
      "churn": "Yes"
    },
    {
      "tenure": 65,
      "monthlyCharges": 89.07,
      "churn": "No"
    },
    {
      "tenure": 39,
      "monthlyCharges": 74.92,
      "churn": "No"
    },
    {
      "tenure": 46,
      "monthlyCharges": 26.77,
      "churn": "No"
    },
    {
      "tenure": 71,
      "monthlyCharges": 95.44,
      "churn": "Yes"
    },
    {
      "tenure": 40,
      "monthlyCharges": 94.22,
      "churn": "No"
    },
    {
      "tenure": 23,
      "monthlyCharges": 104.91,
      "churn": "Yes"
    },
    {
      "tenure": 36,
      "monthlyCharges": 94.54,
      "churn": "Yes"
    },
    {
      "tenure": 50,
      "monthlyCharges": 77.11,
      "churn": "No"
    },
    {
      "tenure": 52,
      "monthlyCharges": 90.89,
      "churn": "Yes"
    },
    {
      "tenure": 63,
      "monthlyCharges": 105.97,
      "churn": "No"
    },
    {
      "tenure": 39,
      "monthlyCharges": 55.68,
      "churn": "No"
    },
    {
      "tenure": 0,
      "monthlyCharges": 100.78,
      "churn": "No"
    },
    {
      "tenure": 23,
      "monthlyCharges": 96.35,
      "churn": "Yes"
    },
    {
      "tenure": 13,
      "monthlyCharges": 94.88,
      "churn": "No"
    },
    {
      "tenure": 57,
      "monthlyCharges": 91.89,
      "churn": "Yes"
    },
    {
      "tenure": 20,
      "monthlyCharges": 59.26,
      "churn": "No"
    },
    {
      "tenure": 25,
      "monthlyCharges": 21.48,
      "churn": "Yes"
    },
    {
      "tenure": 72,
      "monthlyCharges": 107.98,
      "churn": "Yes"
    },
    {
      "tenure": 5,
      "monthlyCharges": 57.31,
      "churn": "No"
    },
    {
      "tenure": 30,
      "monthlyCharges": 21.82,
      "churn": "No"
    },
    {
      "tenure": 25,
      "monthlyCharges": 86.3,
      "churn": "No"
    },
    {
      "tenure": 67,
      "monthlyCharges": 100.75,
      "churn": "No"
    },
    {
      "tenure": 38,
      "monthlyCharges": 59.5,
      "churn": "No"
    },
    {
      "tenure": 64,
      "monthlyCharges": 18.0,
      "churn": "No"
    },
    {
      "tenure": 19,
      "monthlyCharges": 28.4,
      "churn": "No"
    },
    {
      "tenure": 30,
      "monthlyCharges": 93.71,
      "churn": "Yes"
    },
    {
      "tenure": 24,
      "monthlyCharges": 75.95,
      "churn": "No"
    },
    {
      "tenure": 25,
      "monthlyCharges": 90.79,
      "churn": "No"
    },
    {
      "tenure": 63,
      "monthlyCharges": 94.39,
      "churn": "Yes"
    },
    {
      "tenure": 45,
      "monthlyCharges": 85.79,
      "churn": "No"
    },
    {
      "tenure": 10,
      "monthlyCharges": 96.67,
      "churn": "No"
    },
    {
      "tenure": 16,
      "monthlyCharges": 81.34,
      "churn": "No"
    },
    {
      "tenure": 62,
      "monthlyCharges": 90.58,
      "churn": "No"
    },
    {
      "tenure": 50,
      "monthlyCharges": 95.86,
      "churn": "No"
    },
    {
      "tenure": 12,
      "monthlyCharges": 89.12,
      "churn": "No"
    },
    {
      "tenure": 42,
      "monthlyCharges": 31.57,
      "churn": "No"
    },
    {
      "tenure": 42,
      "monthlyCharges": 21.82,
      "churn": "No"
    },
    {
      "tenure": 50,
      "monthlyCharges": 88.18,
      "churn": "No"
    },
    {
      "tenure": 38,
      "monthlyCharges": 53.43,
      "churn": "Yes"
    },
    {
      "tenure": 4,
      "monthlyCharges": 73.47,
      "churn": "Yes"
    },
    {
      "tenure": 38,
      "monthlyCharges": 82.42,
      "churn": "No"
    },
    {
      "tenure": 29,
      "monthlyCharges": 24.73,
      "churn": "No"
    },
    {
      "tenure": 61,
      "monthlyCharges": 72.19,
      "churn": "No"
    },
    {
      "tenure": 7,
      "monthlyCharges": 94.76,
      "churn": "Yes"
    },
    {
      "tenure": 46,
      "monthlyCharges": 88.5,
      "churn": "Yes"
    },
    {
      "tenure": 11,
      "monthlyCharges": 48.14,
      "churn": "No"
    },
    {
      "tenure": 22,
      "monthlyCharges": 81.82,
      "churn": "No"
    },
    {
      "tenure": 12,
      "monthlyCharges": 85.08,
      "churn": "Yes"
    },
    {
      "tenure": 70,
      "monthlyCharges": 83.24,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 95.43,
      "churn": "No"
    },
    {
      "tenure": 12,
      "monthlyCharges": 80.1,
      "churn": "Yes"
    },
    {
      "tenure": 65,
      "monthlyCharges": 82.92,
      "churn": "Yes"
    },
    {
      "tenure": 12,
      "monthlyCharges": 51.51,
      "churn": "No"
    },
    {
      "tenure": 68,
      "monthlyCharges": 93.69,
      "churn": "No"
    },
    {
      "tenure": 13,
      "monthlyCharges": 106.28,
      "churn": "Yes"
    },
    {
      "tenure": 7,
      "monthlyCharges": 89.74,
      "churn": "No"
    },
    {
      "tenure": 32,
      "monthlyCharges": 66.77,
      "churn": "Yes"
    },
    {
      "tenure": 1,
      "monthlyCharges": 65.08,
      "churn": "No"
    },
    {
      "tenure": 8,
      "monthlyCharges": 73.51,
      "churn": "No"
    },
    {
      "tenure": 25,
      "monthlyCharges": 53.76,
      "churn": "No"
    },
    {
      "tenure": 61,
      "monthlyCharges": 95.01,
      "churn": "No"
    },
    {
      "tenure": 11,
      "monthlyCharges": 95.55,
      "churn": "No"
    },
    {
      "tenure": 68,
      "monthlyCharges": 60.33,
      "churn": "No"
    },
    {
      "tenure": 23,
      "monthlyCharges": 80.81,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 69.98,
      "churn": "No"
    },
    {
      "tenure": 19,
      "monthlyCharges": 87.04,
      "churn": "No"
    },
    {
      "tenure": 39,
      "monthlyCharges": 68.82,
      "churn": "No"
    },
    {
      "tenure": 42,
      "monthlyCharges": 65.55,
      "churn": "No"
    },
    {
      "tenure": 29,
      "monthlyCharges": 28.8,
      "churn": "No"
    },
    {
      "tenure": 3,
      "monthlyCharges": 89.04,
      "churn": "Yes"
    },
    {
      "tenure": 7,
      "monthlyCharges": 90.7,
      "churn": "No"
    },
    {
      "tenure": 13,
      "monthlyCharges": 22.86,
      "churn": "No"
    },
    {
      "tenure": 63,
      "monthlyCharges": 76.37,
      "churn": "No"
    },
    {
      "tenure": 40,
      "monthlyCharges": 18.53,
      "churn": "No"
    },
    {
      "tenure": 45,
      "monthlyCharges": 23.28,
      "churn": "No"
    },
    {
      "tenure": 65,
      "monthlyCharges": 93.45,
      "churn": "Yes"
    },
    {
      "tenure": 58,
      "monthlyCharges": 57.47,
      "churn": "No"
    },
    {
      "tenure": 35,
      "monthlyCharges": 26.9,
      "churn": "No"
    },
    {
      "tenure": 28,
      "monthlyCharges": 81.68,
      "churn": "No"
    },
    {
      "tenure": 58,
      "monthlyCharges": 21.86,
      "churn": "No"
    },
    {
      "tenure": 53,
      "monthlyCharges": 96.8,
      "churn": "Yes"
    },
    {
      "tenure": 51,
      "monthlyCharges": 62.17,
      "churn": "Yes"
    },
    {
      "tenure": 8,
      "monthlyCharges": 25.1,
      "churn": "No"
    },
    {
      "tenure": 63,
      "monthlyCharges": 57.81,
      "churn": "No"
    },
    {
      "tenure": 72,
      "monthlyCharges": 63.3,
      "churn": "No"
    },
    {
      "tenure": 32,
      "monthlyCharges": 88.68,
      "churn": "Yes"
    },
    {
      "tenure": 11,
      "monthlyCharges": 89.68,
      "churn": "Yes"
    },
    {
      "tenure": 41,
      "monthlyCharges": 64.28,
      "churn": "Yes"
    },
    {
      "tenure": 43,
      "monthlyCharges": 84.85,
      "churn": "Yes"
    },
    {
      "tenure": 56,
      "monthlyCharges": 89.68,
      "churn": "No"
    },
    {
      "tenure": 63,
      "monthlyCharges": 58.49,
      "churn": "No"
    },
    {
      "tenure": 19,
      "monthlyCharges": 60.18,
      "churn": "Yes"
    },
    {
      "tenure": 50,
      "monthlyCharges": 89.99,
      "churn": "No"
    },
    {
      "tenure": 37,
      "monthlyCharges": 24.35,
      "churn": "No"
    },
    {
      "tenure": 0,
      "monthlyCharges": 55.78,
      "churn": "No"
    },
    {
      "tenure": 17,
      "monthlyCharges": 79.62,
      "churn": "Yes"
    },
    {
      "tenure": 71,
      "monthlyCharges": 52.97,
      "churn": "Yes"
    },
    {
      "tenure": 22,
      "monthlyCharges": 68.62,
      "churn": "No"
    },
    {
      "tenure": 0,
      "monthlyCharges": 66.2,
      "churn": "Yes"
    },
    {
      "tenure": 68,
      "monthlyCharges": 80.25,
      "churn": "No"
    },
    {
      "tenure": 15,
      "monthlyCharges": 91.35,
      "churn": "Yes"
    },
    {
      "tenure": 2,
      "monthlyCharges": 56.07,
      "churn": "No"
    },
    {
      "tenure": 4,
      "monthlyCharges": 22.19,
      "churn": "No"
    },
    {
      "tenure": 37,
      "monthlyCharges": 65.9,
      "churn": "No"
    },
    {
      "tenure": 61,
      "monthlyCharges": 94.43,
      "churn": "No"
    },
    {
      "tenure": 55,
      "monthlyCharges": 94.66,
      "churn": "Yes"
    },
    {
      "tenure": 30,
      "monthlyCharges": 69.53,
      "churn": "Yes"
    },
    {
      "tenure": 70,
      "monthlyCharges": 63.19,
      "churn": "No"
    },
    {
      "tenure": 44,
      "monthlyCharges": 80.59,
      "churn": "No"
    },
    {
      "tenure": 34,
      "monthlyCharges": 18.9,
      "churn": "Yes"
    },
    {
      "tenure": 6,
      "monthlyCharges": 83.59,
      "churn": "No"
    },
    {
      "tenure": 6,
      "monthlyCharges": 95.4,
      "churn": "Yes"
    },
    {
      "tenure": 35,
      "monthlyCharges": 90.14,
      "churn": "No"
    },
    {
      "tenure": 49,
      "monthlyCharges": 61.85,
      "churn": "No"
    },
    {
      "tenure": 62,
      "monthlyCharges": 18.0,
      "churn": "No"
    },
    {
      "tenure": 2,
      "monthlyCharges": 68.22,
      "churn": "No"
    },
    {
      "tenure": 32,
      "monthlyCharges": 66.82,
      "churn": "No"
    },
    {
      "tenure": 28,
      "monthlyCharges": 24.99,
      "churn": "No"
    },
    {
      "tenure": 71,
      "monthlyCharges": 23.66,
      "churn": "No"
    },
    {
      "tenure": 34,
      "monthlyCharges": 23.76,
      "churn": "No"
    },
    {
      "tenure": 27,
      "monthlyCharges": 58.3,
      "churn": "No"
    },
    {
      "tenure": 68,
      "monthlyCharges": 70.82,
      "churn": "No"
    },
    {
      "tenure": 53,
      "monthlyCharges": 54.87,
      "churn": "Yes"
    },
    {
      "tenure": 68,
      "monthlyCharges": 94.06,
      "churn": "No"
    },
    {
      "tenure": 53,
      "monthlyCharges": 86.92,
      "churn": "Yes"
    },
    {
      "tenure": 35,
      "monthlyCharges": 24.94,
      "churn": "No"
    },
    {
      "tenure": 10,
      "monthlyCharges": 73.47,
      "churn": "No"
    },
    {
      "tenure": 1,
      "monthlyCharges": 66.43,
      "churn": "No"
    },
    {
      "tenure": 33,
      "monthlyCharges": 63.51,
      "churn": "Yes"
    },
    {
      "tenure": 42,
      "monthlyCharges": 61.57,
      "churn": "Yes"
    },
    {
      "tenure": 16,
      "monthlyCharges": 52.16,
      "churn": "No"
    },
    {
      "tenure": 8,
      "monthlyCharges": 58.93,
      "churn": "Yes"
    },
    {
      "tenure": 68,
      "monthlyCharges": 96.03,
      "churn": "Yes"
    },
    {
      "tenure": 41,
      "monthlyCharges": 24.93,
      "churn": "No"
    },
    {
      "tenure": 62,
      "monthlyCharges": 57.79,
      "churn": "No"
    },
    {
      "tenure": 13,
      "monthlyCharges": 24.97,
      "churn": "Yes"
    }
  ]
};
