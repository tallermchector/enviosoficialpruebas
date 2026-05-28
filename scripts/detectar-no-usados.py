import os
import re
import json
from pathlib import Path

# =================CONFIGURACIÓN=================
PROJECT_ROOT = Path.cwd()
SRC_DIR = PROJECT_ROOT / 'src'
APP_DIR = SRC_DIR / 'app'
COMPONENTS_DIR = SRC_DIR / 'components'
# Nueva ruta definida para la carpeta que queremos ignorar
UI_DIR = COMPONENTS_DIR / 'ui'
OUTPUT_FILE = SRC_DIR / 'context' / 'no_usados.json'

EXTENSIONS = ['.tsx', '.ts', '.js', '.jsx']

IMPORT_PATTERNS = [
    re.compile(r'from\s+[\'"]([^\'"]+)[\'"]'),
    re.compile(r'import\s*\(\s*[\'"]([^\'"]+)[\'"]\s*\)'),
    re.compile(r'require\s*\(\s*[\'"]([^\'"]+)[\'"]\s*\)'),
]
# ===============================================

def resolve_file_path(base_file: Path, import_path: str) -> Path | None:
    if import_path.startswith('@/'):
        possible_path = PROJECT_ROOT / import_path.replace('@/', 'src/')
    elif import_path.startswith('.'):
        possible_path = (base_file.parent / import_path).resolve()
    else:
        return None

    if possible_path.is_file():
        return possible_path

    for ext in EXTENSIONS:
        candidate = possible_path.with_suffix(ext)
        if candidate.is_file():
            return candidate

    if possible_path.is_dir():
        for ext in EXTENSIONS:
            candidate = possible_path / f'index{ext}'
            if candidate.is_file():
                return candidate

    return None

def get_imports_from_file(file_path: Path) -> set[str]:
    try:
        content = file_path.read_text(encoding='utf-8')
        imports = set()
        for pattern in IMPORT_PATTERNS:
            imports.update(pattern.findall(content))
        return imports
    except Exception as e:
        print(f"Advertencia: No se pudo leer {file_path}: {e}")
        return set()

def scan_dependencies(file_path: Path, visited: set[Path]) -> None:
    if file_path in visited or not file_path.exists():
        return

    visited.add(file_path)

    if not str(file_path).startswith(str(SRC_DIR)):
        return

    raw_imports = get_imports_from_file(file_path)
    
    for raw_import in raw_imports:
        resolved_path = resolve_file_path(file_path, raw_import)
        if resolved_path:
            scan_dependencies(resolved_path, visited)

def main():
    print("🔍 Iniciando auditoría (excluyendo 'src/components/ui')...")

    # 1. Inventario total: Encontrar componentes en src/components EXCLUYENDO /ui
    all_components = set()
    if COMPONENTS_DIR.exists():
        for ext in EXTENSIONS:
            # Iteramos todos los archivos encontrados
            for component_path in COMPONENTS_DIR.rglob(f'*{ext}'):
                # === FILTRO DE EXCLUSIÓN ===
                # Si la ruta del componente empieza con la ruta de UI_DIR, lo ignoramos.
                if str(component_path).startswith(str(UI_DIR)):
                    continue
                # ===========================
                all_components.add(component_path)
    else:
        print(f"❌ Error: No se encontró el directorio {COMPONENTS_DIR}")
        return
    
    print(f"📝 Inventario total analizable: {len(all_components)} archivos")

    # 2. Análisis de uso
    used_files = set()
    entry_points = []
    for ext in EXTENSIONS:
        entry_points.extend(APP_DIR.rglob(f'page{ext}'))
        entry_points.extend(APP_DIR.rglob(f'layout{ext}'))

    print(f"🚀 Puntos de entrada escaneados: {len(entry_points)}")

    for entry_point in entry_points:
        scan_dependencies(entry_point, used_files)

    # 3. Comparación
    unused_components = []
    for component in all_components:
        if component not in used_files:
            relative_path = component.relative_to(PROJECT_ROOT).as_posix()
            unused_components.append(relative_path)

    unused_components.sort()

    # 4. Guardar resultado
    output_data = {"unused_components": unused_components}
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print(f"✅ Auditoría terminada.")
    print(f"📉 Componentes no utilizados detectados: {len(unused_components)}")
    print(f"📁 Reporte guardado en: {OUTPUT_FILE.relative_to(PROJECT_ROOT)}")

if __name__ == '__main__':
    main()