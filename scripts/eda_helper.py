"""EDA helper functions."""
import pandas as pd
import matplotlib.pyplot as plt

def quick_summary(df: pd.DataFrame):
    """Print shape, dtypes, and null counts."""
    print(f"Shape: {df.shape}")
    print(df.dtypes)
    print(df.isnull().sum())

def plot_distribution(df: pd.DataFrame, col: str):
    """Plot histogram for a column."""
    df[col].hist(bins=30)
    plt.title(f"Distribution of {col}")
    plt.xlabel(col)
    plt.tight_layout()
    plt.savefig(f"plots/{col}_dist.png")
    plt.close()
