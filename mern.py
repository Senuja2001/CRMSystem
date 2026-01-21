import os

# ================= CONFIG =================
PROJECT_ROOT = "."  # current directory
OUTPUT_FILE = "project_source_dump.txt"

IGNORE_DIRS = {
    "node_modules",
    ".git",
    ".next",
    "dist",
    "build",
    "coverage",
    "__pycache__"
}

SOURCE_EXTENSIONS = {
    ".js", ".jsx", ".ts", ".tsx",
    ".json", ".css", ".html",
    ".env", ".md"
}
# ==========================================


def print_tree(start_path, prefix=""):
    entries = sorted(
        e for e in os.listdir(start_path)
        if e not in IGNORE_DIRS
    )

    tree_lines = []

    for index, entry in enumerate(entries):
        path = os.path.join(start_path, entry)
        connector = "└── " if index == len(entries) - 1 else "├── "
        tree_lines.append(prefix + connector + entry)

        if os.path.isdir(path):
            extension = "    " if index == len(entries) - 1 else "│   "
            tree_lines.extend(print_tree(path, prefix + extension))

    return tree_lines


def collect_source_files(root):
    files = []
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in IGNORE_DIRS]

        for file in filenames:
            if os.path.splitext(file)[1] in SOURCE_EXTENSIONS:
                files.append(os.path.join(dirpath, file))

    return files


def main():
    tree = print_tree(PROJECT_ROOT)
    source_files = collect_source_files(PROJECT_ROOT)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        out.write("===== PROJECT STRUCTURE =====\n\n")
        out.write("\n".join(tree))
        out.write("\n\n")

        out.write("===== SOURCE FILES =====\n\n")

        for file_path in source_files:
            out.write(f"\n\n{'='*80}\n")
            out.write(f"FILE: {file_path}\n")
            out.write(f"{'='*80}\n\n")

            try:
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    out.write(f.read())
            except Exception as e:
                out.write(f"[ERROR READING FILE: {e}]\n")

    print("✅ Project tree printed to console")
    print(f"✅ Source code exported to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
