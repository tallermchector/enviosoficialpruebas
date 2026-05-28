# scripts/obtenerpaginas.py
import os
import re
import json
from pathlib import Path

# 1. Definir rutas base
PROJECT_ROOT = Path(__file__).parent.parent.resolve()
SRC_DIR = PROJECT_ROOT / 'src'
APP_DIR = SRC_DIR / 'app'
OUTPUT_JSON = PROJECT_ROOT / 'scripts' / 'paginas_y_componentes.json'

# 2. Regex unificado para encontrar imports relativos y con alias
IMPORT_REGEX = re.compile(
    r"""
    (?:from|import)\s*
    \(?
    ['"]
    ((?:\./|\.\./|@/)[^'"]+)  # Captura el path (ej. @/components/foo o ./actions)
    ['"]
    \)?
    """, re.VERBOSE
)

def read_file_content(file_path: Path) -> str:
    """Lee el contenido de un archivo de forma segura."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception:
        return ""

def resolve_general_import_path(import_path: str, current_file_dir: Path) -> Path | None:
    """
    Convierte un alias de importación (ej. '@/components/foo' o './bar')
    en una ruta de archivo real (ej. /.../src/components/foo.tsx).
    """
    base_path = None
    
    if import_path.startswith('@/'):
        # Alias: '@/components/foo' -> 'src/components/foo'
        relative_path = import_path.replace('@/', '')
        base_path = SRC_DIR / relative_path
    elif import_path.startswith(('./', '../')):
        # Relativo: './bar' desde 'src/app' -> 'src/app/bar'
        base_path = (current_file_dir / import_path).resolve()
    else:
        # Import externo (ej. 'react'), ignorar
        return None

    # Probar extensiones
    possible_extensions = ['.tsx', '.ts', '.js']
    for ext in possible_extensions:
        file_path = base_path.with_suffix(ext)
        if file_path.exists():
            return file_path
            
    # Probar imports de directorio (ej. .../foo/index.tsx)
    for ext in possible_extensions:
        file_path = base_path / f"index{ext}"
        if file_path.exists():
            return file_path
            
    return None

def find_all_dependencies(entry_file_path: Path, all_dependencies: set[Path], scanned_files: set[Path]):
    """
    Encuentra recursivamente todas las dependencias (componentes y actions)
    de un archivo de entrada.
    """
    if entry_file_path in scanned_files or not entry_file_path.exists():
        return
        
    scanned_files.add(entry_file_path)
    content = read_file_content(entry_file_path)
    current_file_dir = entry_file_path.parent
    
    for match in IMPORT_REGEX.finditer(content):
        import_str = match.group(1)
        resolved_path = resolve_general_import_path(import_str, current_file_dir)
        
        if resolved_path and resolved_path not in all_dependencies:
            # 1. Añadir la dependencia encontrada
            all_dependencies.add(resolved_path)
            find_all_dependencies(resolved_path, all_dependencies, scanned_files)

            # 2. Lógica especial: Buscar el archivo '-client.tsx' asociado
            if resolved_path.suffix == '.tsx':
                client_path_str = str(resolved_path).replace('.tsx', '-client.tsx')
                client_path = Path(client_path_str)
                
                if client_path.exists() and client_path not in all_dependencies:
                    all_dependencies.add(client_path)
                    find_all_dependencies(client_path, all_dependencies, scanned_files)

def get_relative_path(full_path: Path) -> str:
    """Convierte una ruta absoluta de vuelta a una ruta relativa con formato /."""
    try:
        return str(full_path.relative_to(PROJECT_ROOT)).replace(os.path.sep, '/')
    except ValueError:
        return str(full_path).replace(os.path.sep, '/')


def main():
    print(f"Iniciando escaneo de páginas en: {APP_DIR}")
    all_pages_data = {}
    
    page_files = list(APP_DIR.rglob('**/page.tsx'))
    print(f"Se encontraron {len(page_files)} páginas.")

    for i, page_path in enumerate(page_files):
        relative_page_path = get_relative_path(page_path)
        print(f"\n[{i+1}/{len(page_files)}] Procesando: {relative_page_path}")
        
        page_dependencies = set()
        scanned_files = set()
        
        # 1. Encontrar todas las dependencias recursivamente
        find_all_dependencies(page_path, page_dependencies, scanned_files)
        
        # 2. Clasificar las dependencias
        classified_deps = {
            "server_components": [],
            "client_components": [],
            "actions": []
        }
        
        sorted_dependencies = sorted(list(page_dependencies), key=lambda p: str(p))
        
        for dep_path in sorted_dependencies:
            rel_path = get_relative_path(dep_path)
            
            if rel_path.endswith('actions.ts'):
                classified_deps["actions"].append(rel_path)
            elif rel_path.endswith('.tsx'):
                content = read_file_content(dep_path)
                # Comprueba si la primera línea no vacía es "use client"
                first_line = content.strip().split('\n')[0].strip()
                if first_line == '"use client"' or first_line == "'use client'":
                    classified_deps["client_components"].append(rel_path)
                else:
                    classified_deps["server_components"].append(rel_path)
        
        all_pages_data[relative_page_path] = classified_deps
        print(f"  > Server: {len(classified_deps['server_components'])}, Client: {len(classified_deps['client_components'])}, Actions: {len(classified_deps['actions'])}")

    # 3. Escribir el archivo JSON
    try:
        with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
            json.dump(all_pages_data, f, indent=2, ensure_ascii=False)
        print(f"\n¡Éxito! ✨ Resultados guardados en: {OUTPUT_JSON}")
    except Exception as e:
        print(f"\n[Error] No se pudo escribir el JSON: {e}")

if __name__ == "__main__":
    main()
