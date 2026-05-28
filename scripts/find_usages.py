
import os
import re
import json
from pathlib import Path

def find_usages_from_json(search_dir: str = 'src', json_path: str = 'src/context/no_usados.json'):
    """
    Reads a list of supposedly unused files from a JSON file, checks if they are
    being imported anywhere in the project, and prints a warning if they are.
    """
    json_file = Path(json_path)
    if not json_file.exists():
        print(f"❌ Error: El archivo JSON no existe en '{json_path}'")
        return

    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        target_files = data.get("unused_components", [])
        if not target_files:
            print("🤷‍♂️ El archivo JSON no contiene componentes para analizar.")
            return
    except json.JSONDecodeError:
        print(f"❌ Error: El archivo JSON en '{json_path}' no tiene un formato válido.")
        return

    print(f"🔍 Analizando {len(target_files)} archivos desde '{json_path}'...")
    print("-" * 40)

    found_usages_count = 0
    project_root = Path.cwd()
    search_path_obj = project_root / search_dir

    for target_file_rel in target_files:
        target_path_abs = project_root / target_file_rel
        
        if not target_path_abs.exists():
            print(f"🤷‍♂️ Saltando (no existe): {target_file_rel}")
            continue

        usages = []
        import_alias = None
        
        try:
            # Create alias relative to the 'src' directory for imports like '@/'
            relative_to_src = target_path_abs.relative_to(search_path_obj)
            import_alias = f"@/{relative_to_src.with_suffix('')}"
        except ValueError:
            print(f"⚠️ No se pudo generar un alias para {target_file_rel}. Búsqueda limitada.")
            continue

        # Regex to find import statements for both default and named imports.
        # It looks for imports from the exact alias path.
        # e.g., from '@/components/ui/button' or from "@/components/ui/button";
        import_regex = re.compile(rf"from\s+['\"]({re.escape(import_alias)})['\"]")

        for root, _, files in os.walk(search_path_obj):
            for file in files:
                if file.endswith(('.ts', '.tsx')):
                    file_path = Path(root) / file
                    # Don't check the file against itself
                    if file_path.resolve() == target_path_abs.resolve():
                        continue
                    
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                            if import_regex.search(content):
                                usages.append(file_path.relative_to(project_root))
                    except Exception:
                        # Silently ignore read errors for simplicity
                        pass
        
        if usages:
            print(f"⚠️ ADVERTENCIA: ¡'{target_file_rel}' SÍ está en uso!")
            for usage_path in usages:
                print(f"  -> Usado en: {usage_path}")
            found_usages_count += 1
            print("-" * 20)
        else:
            print(f"✅ OK: '{target_file_rel}' parece no estar en uso.")

    print("-" * 40)
    print("🎉 Análisis completo.")
    if found_usages_count > 0:
        print(f"🔴 Se encontraron {found_usages_count} archivos marcados como no usados que SÍ están siendo importados.")
    else:
        print("🟢 Todos los archivos en la lista parecen no estar en uso.")


if __name__ == '__main__':
    find_usages_from_json()
