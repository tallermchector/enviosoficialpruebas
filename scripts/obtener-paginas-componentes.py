
import os
import re
import json
from pathlib import Path

# Lista de componentes comunes de layout para excluir del análisis.
# Esto hace que el resultado se centre en los componentes de UI específicos de cada página.
excluded_components = {
}

def find_components_in_file(file_path: Path, base_path: Path, processed_files: set):
    """
    Encuentra recursivamente los componentes importados en un archivo de página o componente,
    excluyendo los componentes de UI de ShadCN y los componentes de layout comunes.
    """
    if not file_path.exists() or str(file_path) in processed_files:
        return []
    
    processed_files.add(str(file_path))

    component_nodes = []
    try:
        content = file_path.read_text(encoding='utf-8')
    except Exception:
        if str(file_path) in processed_files:
            processed_files.remove(str(file_path))
        return []

    # Regex mejorada para capturar importaciones de componentes estáticos y dinámicos.
    import_regex = re.compile(r"import\((?:['\"])(@/components/[^'\"]+)(?:['\"])\)|from\s+(?:['\"])(@/components/[^'\"]+)(?:['\"])")
    matches = import_regex.findall(content)

    for match in matches:
        # La regex devuelve una tupla, uno de los dos grupos tendrá el resultado.
        import_alias = next((item for item in match if item), None)
        if not import_alias:
            continue

        # Normalizar la ruta del alias y excluir componentes de UI base.
        if 'components/ui' in import_alias:
            continue

        component_path_str = import_alias.replace('@/', 'src/')
        
        # Resolver la ruta del archivo del componente.
        component_path = base_path.parent / component_path_str
        found_path = None
        
        possible_extensions = ['.tsx', '.ts', '/index.tsx', '/index.ts']
        if component_path.suffix not in ['.tsx', '.ts']:
            for ext in possible_extensions:
                potential_path = component_path.with_suffix(ext)
                if potential_path.exists():
                    found_path = potential_path
                    break
        elif component_path.exists():
            found_path = component_path

        if found_path:
            relative_component_path = str(found_path.relative_to(base_path.parent).as_posix())
            
            # Excluir componentes de layout comunes.
            if relative_component_path in excluded_components:
                continue

            # Análisis recursivo para encontrar sub-componentes.
            sub_components = find_components_in_file(found_path, base_path, processed_files)
            
            component_data = {
                "component_path": relative_component_path,
                "components": sub_components
            }
            component_nodes.append(component_data)
    
    if str(file_path) in processed_files:
        processed_files.remove(str(file_path))
    return sorted(component_nodes, key=lambda x: x['component_path'])

def find_pages(root_dir: Path):
    """Encuentra todos los archivos page.tsx en el directorio de la aplicación."""
    return sorted(list(root_dir.glob('**/page.tsx')))

def main():
    """Función principal para analizar el proyecto y generar el árbol de dependencias de componentes."""
    project_root = Path.cwd()
    app_dir = project_root / 'src' / 'app'
    output_path = project_root / 'src' / 'context' / 'project_structure.json'

    print(f"Buscando páginas en: {app_dir}")
    pages = find_pages(app_dir)
    
    project_structure = []
    
    for page_path in pages:
        relative_page_path = str(page_path.relative_to(project_root).as_posix())
        print(f"Analizando página: {relative_page_path}")
        
        # Usar un nuevo set para cada página para asegurar un análisis completo por página.
        processed_files_for_page = set()
        used_components = find_components_in_file(page_path, project_root / 'src', processed_files_for_page)
        
        page_data = {
            "page_path": relative_page_path,
            "components": used_components
        }
        project_structure.append(page_data)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(project_structure, f, indent=2, ensure_ascii=False)

    print(f"\nAnálisis completo. Resultados guardados en: {output_path}")

if __name__ == "__main__":
    main()
