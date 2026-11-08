# Excel Report Automation

A compact Python portfolio demo that converts transaction exports into a styled Excel summary. It validates input, groups sales by month and category, and exports a filterable workbook with frozen headers.

## Run

```bash
pip install -r requirements.txt
python report.py sample_sales.csv monthly_report.xlsx
python -m unittest discover -v
```

Input columns: `date` (YYYY-MM-DD), `category`, `amount`. Invalid rows are reported with their line numbers. Uses Python `Decimal` during calculations to avoid floating-point accumulation errors. No external API or account needed.
