"""Validate input dataframe before model inference."""
import pandas as pd

REQUIRED_COLUMNS = [
    "Administrative", "Informational", "ProductRelated",
    "BounceRates", "ExitRates", "PageValues", "SpecialDay",
    "Month", "VisitorType", "Weekend"
]

def validate(df: pd.DataFrame) -> bool:
    missing = [c for c in REQUIRED_COLUMNS if c not in df.columns]
    if missing:
        print(f"Missing columns: {missing}")
        return False
    print("Validation passed ✅")
    return True
