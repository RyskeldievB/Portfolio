import csv
import tempfile
import unittest
from pathlib import Path

from processor import normalize_csv, extract_pdf


class ProcessorTests(unittest.TestCase):
    def test_deduplication(self):
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "contacts.csv"
            self.assertEqual(normalize_csv(Path(__file__).with_name("sample_contacts.csv"), output), 2)
            with output.open(newline="", encoding="utf-8") as stream:
                rows = list(csv.DictReader(stream))
            self.assertEqual(rows[0]["name"], "Aida")

    def test_pdf_extraction(self):
        from pypdf import PdfWriter
        with tempfile.TemporaryDirectory() as directory:
            pdf = Path(directory) / "test.pdf"
            text = Path(directory) / "test.txt"
            writer = PdfWriter()
            writer.add_blank_page(width=200, height=200)
            with pdf.open("wb") as stream:
                writer.write(stream)
            self.assertEqual(extract_pdf(pdf, text), 1)
            self.assertIn("Page 1", text.read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()
