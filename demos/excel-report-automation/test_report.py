import tempfile
import unittest
from decimal import Decimal
from pathlib import Path

from report import aggregate, create_report


class ReportTests(unittest.TestCase):
    def test_aggregation(self):
        rows = aggregate(Path(__file__).with_name("sample_sales.csv"))
        self.assertIn(("2026-10", "Coffee", 2, Decimal("370.50")), rows)
        self.assertEqual(len(rows), 4)

    def test_workbook(self):
        from openpyxl import load_workbook
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "report.xlsx"
            create_report(Path(__file__).with_name("sample_sales.csv"), output)
            ws = load_workbook(output).active
            self.assertEqual(ws["A1"].value, "Month")
            self.assertEqual(ws.max_row, 5)


if __name__ == "__main__":
    unittest.main()
