"""Build a monthly sales workbook from a CSV export."""
import argparse
import csv
from collections import defaultdict
from datetime import datetime
from decimal import Decimal, InvalidOperation
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill
from openpyxl.utils import get_column_letter


def aggregate(csv_path: Path):
    totals = defaultdict(lambda: [0, Decimal("0")])
    with csv_path.open(newline="", encoding="utf-8-sig") as stream:
        reader = csv.DictReader(stream)
        required = {"date", "category", "amount"}
        if not required.issubset(reader.fieldnames or []):
            raise ValueError(f"CSV must contain columns: {', '.join(sorted(required))}")
        for line_no, row in enumerate(reader, 2):
            try:
                month = datetime.strptime(row["date"], "%Y-%m-%d").strftime("%Y-%m")
                category = row["category"].strip()
                amount = Decimal(row["amount"].strip())
                if not category or not amount.is_finite():
                    raise ValueError("empty category or non-finite amount")
            except (ValueError, InvalidOperation, TypeError) as exc:
                raise ValueError(f"Invalid data on CSV row {line_no}: {exc}") from exc
            item = totals[(month, category)]
            item[0] += 1
            item[1] += amount
    return sorted((month, category, count, total)
                  for (month, category), (count, total) in totals.items())


def create_report(source: Path, destination: Path):
    rows = aggregate(source)
    wb = Workbook()
    sheet = wb.active
    sheet.title = "Monthly Summary"
    sheet.append(["Month", "Category", "Transactions", "Total"])
    for month, category, count, total in rows:
        sheet.append([month, category, count, float(total)])
    sheet.freeze_panes = "A2"
    sheet.auto_filter.ref = f"A1:D{max(sheet.max_row, 2)}"
    for cell in sheet[1]:
        cell.fill = PatternFill("solid", fgColor="19365B")
        cell.font = Font(color="FFFFFF", bold=True)
    for row in sheet.iter_rows(min_row=2):
        row[3].number_format = '#,##0.00'
    for column in sheet.columns:
        letter = get_column_letter(column[0].column)
        sheet.column_dimensions[letter].width = min(35, max(len(str(c.value or "")) for c in column) + 4)
    destination.parent.mkdir(parents=True, exist_ok=True)
    wb.save(destination)
    return len(rows)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input_csv", type=Path)
    parser.add_argument("output_xlsx", type=Path)
    args = parser.parse_args()
    count = create_report(args.input_csv, args.output_xlsx)
    print(f"Created {args.output_xlsx} with {count} summary rows")
