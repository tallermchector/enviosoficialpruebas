import os
import json
import re

def resolve_import_path(current_file, import_path):
    """
    Resolves an import path to a relative path from the project root.
    Handles '@/' as 'src/' and relative paths like '../' or './'.
    """
    project_root = os.getcwd()
    
    if import_path.startswith('@/'):
        # @/components/Header -> src/components/Header
        resolved = import_path.replace('@/', 'src/')
    elif import_path.startswith('.'):
        # Relative path
        current_dir = os.path.dirname(current_file)
        absolute_resolved = os.path.normpath(os.path.join(current_dir, import_path))
        resolved = os.path.relpath(absolute_resolved, project_root)
    else:
        return None

    # Try to find the file with common extensions
    extensions = ['.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts']
    
    # Check if the path already has an extension
    if any(resolved.endswith(ext) for ext in extensions):
        if os.path.exists(os.path.join(project_root, resolved)):
            return resolved.replace('\\', '/')

    # Try adding extensions
    for ext in extensions:
        test_path = resolved + ext
        if os.path.exists(os.path.join(project_root, test_path)):
            return test_path.replace('\\', '/')
            
    return None

def extract_imports(filepath):
    """
    Extracts component imports from a file.
    Focuses on imports from 'components' directory.
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return []

    # Regex to find imports
    # matches: import ... from '...' or import '...'
    import_pattern = re.compile(r"from\s+['\"]([^'\"]+)['\"]|import\s+['\"]([^'\"]+)['\"]")
    
    components = []
    for match in import_pattern.finditer(content):
        import_path = match.group(1) or match.group(2)
        if 'components' in import_path:
            resolved = resolve_import_path(filepath, import_path)
            if resolved and resolved not in components:
                components.append(resolved)
    
    return components

def get_file_content(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        return f"Error reading file: {str(e)}"

def main():
    project_root = os.getcwd()
    app_dir = os.path.join(project_root, 'src', 'app')
    
    EXCLUDED_SUBDIRS = [
        'src/app/admin',
        'src/app/ordenes',
        'src/app/prototypes',
        'src/app/repartidor',
        'src/app/seguimiento'
    ]
    
    # Normalize paths for comparison
    EXCLUDED_SUBDIRS = [p.replace('/', os.sep) for p in EXCLUDED_SUBDIRS]
    
    pages_data = []
    
    for root, dirs, files in os.walk(app_dir):
        # Check if current directory is excluded
        rel_root = os.path.relpath(root, project_root)
        if any(rel_root.startswith(ex) for ex in EXCLUDED_SUBDIRS):
            continue
            
        for file in files:
            if file == 'page.tsx':
                page_path = os.path.join(root, file)
                rel_page_path = os.path.relpath(page_path, project_root).replace('\\', '/')
                
                print(f"Processing page: {rel_page_path}")
                
                # Find components used in this page
                component_paths = extract_imports(page_path)
                
                components_list = []
                for comp_path in component_paths:
                    components_list.append({
                        "path": comp_path,
                        "code": get_file_content(os.path.join(project_root, comp_path))
                    })
                
                pages_data.append({
                    "path": rel_page_path,
                    "components": components_list
                })

    output = {
        "pages": pages_data
    }
    
    output_file = 'inventario_paginas_componentes.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
        
    print(f"\nExtraction complete! JSON saved to: {output_file}")

if __name__ == "__main__":
    main()