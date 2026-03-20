"""Export trained model to disk using joblib."""
import joblib
import os

def export(model, path: str = "models/model.pkl"):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    joblib.dump(model, path)
    print(f"Model exported → {path}")

def load(path: str = "models/model.pkl"):
    return joblib.load(path)
