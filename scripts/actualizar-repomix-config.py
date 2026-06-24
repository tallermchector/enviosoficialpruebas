# scripts/actualizar-repomix-config.py
import os
import re
import json
from pathlib import Path

# 1. Definir rutas base
PROJECT_ROOT = Path(__file__).parent.parent.resolve()
SRC_DIR = PROJECT_ROOT / 'src'
APP_DIR = SRC_DIR / 'app'
REPO_CONFIG = PROJECT_ROOT / 'repomix.config.json'

# Semillas de escaneo solicitadas por el usuario
SEED_PATHS = [
    APP_DIR / 'contacto',
    APP_DIR / 'cotizar',
    APP_DIR / 'nosotros',
    APP_DIR / 'servicios',
    APP_DIR / 'page.tsx',
]

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
    en una ruta de archivo real en src/ si existe.
    """
    base_path = None
    
    if import_path.startswith('@/'):
        # Alias: '@/components/foo' -> 'src/components/foo'
        relative_path = import_path.replace('@/', '')
        base_path = SRC_DIR / relative_path
    elif import_path.startswith(('./', '../')):
        # Relativo: './bar' -> resolve relative to the current file
        base_path = (current_file_dir / import_path).resolve()
    else:
        # Import externo o de otra carpeta, ignorar
        return None

    # Si la ruta ya tiene extensión y existe
    if base_path.exists() and base_path.is_file():
        return base_path

    # Probar extensiones comunes
    possible_extensions = ['.tsx', '.ts', '.js', '.jsx', '.css', '.json']
    for ext in possible_extensions:
        file_path = base_path.with_suffix(ext)
        if file_path.exists() and file_path.is_file():
            return file_path
            
    # Probar imports de directorio (ej. .../foo/index.tsx)
    for ext in possible_extensions:
        file_path = base_path / f"index{ext}"
        if file_path.exists() and file_path.is_file():
            return file_path
            
    return None

def get_imports_from_file(file_path: Path) -> set[str]:
    """Busca cadenas entre comillas simples o dobles que parezcan rutas de importación."""
    content = read_file_content(file_path)
    if not content:
        return set()
    # Buscar patrones de comillas que empiecen por @/, ./ o ../
    imports = re.findall(r'[\'"]((?:\./|\.\./|@/)[^\'"]+)[\'"]', content)
    return set(imports)

def get_relative_path(path: Path) -> str:
    """Convierte una ruta absoluta de vuelta a una ruta relativa con formato /."""
    return str(path.relative_to(PROJECT_ROOT)).replace(os.path.sep, '/')

def main():
    print("[INFO] Iniciando escaneo de paginas seleccionadas...")
    
    seed_files = set()
    
    # Resolver las semillas iniciales
    for path in SEED_PATHS:
        if not path.exists():
            print(f"[WARNING] Semilla no encontrada: {path}")
            continue
        if path.is_file():
            seed_files.add(path)
        else:
            # Si es un directorio, buscar todos los archivos de código recursivamente
            extensions = ['.tsx', '.ts', '.js', '.jsx', '.css']
            for ext in extensions:
                for child in path.rglob(f'*{ext}'):
                    if child.is_file():
                        seed_files.add(child)

    print(f"[INFO] Archivos semilla iniciales encontrados: {len(seed_files)}")
    for f in sorted(list(seed_files)):
        print(f"   - {get_relative_path(f)}")

    # Rastreo recursivo de dependencias
    dependencies = set(seed_files)
    visited = set()
    queue = list(seed_files)
    
    while queue:
        current_file = queue.pop(0)
        if current_file in visited:
            continue
        visited.add(current_file)
        
        # Buscar imports locales en el archivo actual
        raw_imports = get_imports_from_file(current_file)
        for imp in raw_imports:
            resolved = resolve_general_import_path(imp, current_file.parent)
            
            # Asegurarse de que esté dentro de src/ y exista
            if resolved and str(resolved).startswith(str(SRC_DIR)):
                if resolved not in dependencies:
                    dependencies.add(resolved)
                    queue.append(resolved)
                
                # Lógica especial para componentes cliente con sufijo '-client.tsx'
                if resolved.suffix == '.tsx':
                    client_path = resolved.with_name(resolved.stem + '-client.tsx')
                    if client_path.exists() and client_path not in dependencies:
                        dependencies.add(client_path)
                        queue.append(client_path)

    print(f"\n[SUCCESS] Escaneo completado. Total de archivos dependientes en src: {len(dependencies)}")
    
    # Formatear a rutas relativas
    relative_deps = sorted([get_relative_path(p) for p in dependencies])
    
    # Leer y actualizar repomix.config.json
    if not REPO_CONFIG.exists():
        print(f"[ERROR] No se encontro repomix.config.json en {REPO_CONFIG}")
        return
        
    try:
        with open(REPO_CONFIG, 'r', encoding='utf-8') as f:
            config = json.load(f)
    except Exception as e:
        print(f"[ERROR] Error leyendo repomix.config.json: {e}")
        return

    # Mantener archivos de configuración globales que no sean de src/
    original_include = config.get('include', [])
    other_includes = [item for item in original_include if not (item.startswith('src/') or item == 'src/**')]
    
    # Nueva lista de include: dependencias resueltas de src + configuraciones globales
    new_include = relative_deps + other_includes
    config['include'] = new_include

    # Escribir de vuelta a repomix.config.json
    try:
        with open(REPO_CONFIG, 'w', encoding='utf-8') as f:
            json.dump(config, f, indent=2, ensure_ascii=False)
        print(f"[SUCCESS] repomix.config.json actualizado exitosamente con {len(new_include)} archivos en 'include'.")
    except Exception as e:
        print(f"[ERROR] Error escribiendo en repomix.config.json: {e}")

if __name__ == "__main__":
    main()
