import os

# --- CONFIGURATION ---
OUTPUT_FILE = "full_project_code.txt"

# Folders to completely ignore
IGNORE_DIRS = {
    'node_modules', '.git', '__pycache__', 'dist', 'build', 'coverage', '.next'
}

# Files to ignore
IGNORE_FILES = {
    'package-lock.json', 'yarn.lock', 'project_dumper.py', 
    '.DS_Store', 'Thumbs.db', 'full_project_code.txt'
}

# Only include files with these extensions
INCLUDE_EXTENSIONS = {
    '.js', '.jsx', '.ts', '.tsx',   # JavaScript/TypeScript
    '.css', '.scss', '.html',       # Styling/Markup
    '.json',                        # Configs (package.json etc)
    '.env', '.env.local',           # Environment variables (careful with secrets!)
    '.md'                           # Documentation
}

def generate_tree(startpath):
    """Generates a string representation of the file tree."""
    tree_str = "PROJECT STRUCTURE:\n==================\n"
    
    for root, dirs, files in os.walk(startpath):
        # Modify dirs in-place to skip ignored directories
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        
        level = root.replace(startpath, '').count(os.sep)
        indent = ' ' * 4 * (level)
        tree_str += f"{indent}{os.path.basename(root)}/\n"
        subindent = ' ' * 4 * (level + 1)
        for f in files:
            if f not in IGNORE_FILES:
                tree_str += f"{subindent}{f}\n"
    
    return tree_str + "\n\n"

def dump_files(startpath, output_handle):
    """Walks through files and writes their content to the output file."""
    for root, dirs, files in os.walk(startpath):
        # Modify dirs in-place to skip ignored directories
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

        for filename in files:
            if filename in IGNORE_FILES:
                continue

            # Check extension
            ext = os.path.splitext(filename)[1].lower()
            if ext in INCLUDE_EXTENSIONS:
                file_path = os.path.join(root, filename)
                rel_path = os.path.relpath(file_path, startpath)
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    # Write Header
                    output_handle.write(f"{'='*50}\n")
                    output_handle.write(f"FILE: {rel_path}\n")
                    output_handle.write(f"{'='*50}\n")
                    
                    # Write Content
                    output_handle.write(content + "\n\n")
                    print(f"Processed: {rel_path}")
                    
                except Exception as e:
                    print(f"Error reading {rel_path}: {e}")

def main():
    root_dir = os.getcwd()
    
    print(f"Scanning project at: {root_dir}")
    print("Generating tree and dumping code...")

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
        # 1. Write the Tree Structure
        tree = generate_tree(root_dir)
        outfile.write(tree)
        
        # 2. Write the File Contents
        outfile.write("FILE CONTENTS:\n==================\n\n")
        dump_files(root_dir, outfile)

    print(f"\nDone! Output saved to: {OUTPUT_FILE}")

if __name__ == "__main__":
    main()