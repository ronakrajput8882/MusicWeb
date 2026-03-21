"""Generate classification metrics report."""
from sklearn.metrics import classification_report, confusion_matrix
import pandas as pd

def generate_report(y_true, y_pred, labels=None):
    """Print and return classification report as dict."""
    report = classification_report(y_true, y_pred, target_names=labels, output_dict=True)
    df = pd.DataFrame(report).transpose()
    print(df.to_string())
    return df

def print_confusion_matrix(y_true, y_pred):
    cm = confusion_matrix(y_true, y_pred)
    print("Confusion Matrix:")
    print(cm)
    return cm
