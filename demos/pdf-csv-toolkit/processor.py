"""Extract a PDF text file and optionally normalize a CSV export."""
import argparse
import csv
import re
from pathlib import Path

from pypdf import PdfReader


def extract_pdf(input_pdf: Path, output_txt: Path) -> int:
    reader = PdfReader(str(input_pdf))
    pages = []
    for index, page in enumerate(reader.pages, 1):
        text = page.extract_text() or ""
        pages.append(f"--- Page {index} ---\n{text.strip()}\n")
    output_txt.parent.mkdir(parents=True, exist_ok=True)
    output_txt.write_text("\n".join(pages), encoding="utf-8")
    return len(pages)


def normalize_csv(input_csv: Path, output_csv: Path) -> int:
    """Remove surrounding whitespace, blank lines and duplicate records."""
    with input_csv.open(newline="", encoding="utf-8-sig") as stream:
        reader = csv.DictReader(stream)
        fields = reader.fieldnames
        if not fields or any(not name.strip() for name in fields):
            raise ValueError("CSV must contain non-empty column headings")
        clean_fields = [re.sub(r"\s+", " ", name.strip()) for name in fields]
        if len(set(clean_fields)) != len(clean_fields):
            raise ValueError("Duplicate column headings after normalization")
        records, seen = [], set()
        for row in reader:
            if None in row:
                raise ValueError("CSV row has more values than headings")
            values = tuple(re.sub(r"\s+", " ", (row[name] or "").strip()) for name in fields)
            if not any(values) or values in seen:
                continue
            seen.add(values)
            records.append(values)
    output_csv.parent.mkdir(parents=True, exist_ok=True)
    with output_csv.open("w", newline="", encoding="utf-8") as stream:
        writer = csv.writer(stream)
        writer.writerow(clean_fields)
        writer.writerows(records)
    return len(records)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest="command", required=True)
    pdf = commands.add_parser("pdf", help="Extract searchable PDF text")
    csv_parser = commands.add_parser("csv", help="Normalize a CSV file")
    for command in (pdf, csv_parser):
        command.add_argument("source", type=Path)
        command.add_argument("destination", type=Path)
    args = parser.parse_args()
    if args.command == "pdf":
        print(f"Extracted {extract_pdf(args.source, args.destination)} pages")
    else:
        print(f"Wrote {normalize_csv(args.source, args.destination)} unique rows")


if __name__ == "__main__":
    main()
