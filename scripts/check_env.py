"""Check if required libraries are installed."""
import importlib

libs = ["numpy", "pandas", "sklearn", "matplotlib", "seaborn"]
for lib in libs:
    found = importlib.util.find_spec(lib)
    print(f"{"✅" if found else "❌"} {lib}")
