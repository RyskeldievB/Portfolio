# PDF & CSV Toolkit

Two practical document-processing commands in one beginner-friendly Python CLI:

- `pdf`: extract searchable text from a PDF into a UTF-8 `.txt` file, with page separators.
- `csv`: normalize whitespace, drop duplicate records and empty rows, and preserve column names.

## Run

```bash
pip install -r requirements.txt
python processor.py csv sample_contacts.csv clean_contacts.csv
python processor.py pdf searchable_document.pdf extracted.txt
python -m unittest discover -v
```

PDF text extraction works on PDFs containing selectable text; scanned images require OCR, which is intentionally out of scope. Sample contacts are fictional. Runs locally without cloud services or API keys.
