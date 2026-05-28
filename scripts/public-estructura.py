import os
import json
from pathlib import Path

# =================CONFIGURACIÓN=================
PROJECT_ROOT = Path.cwd()
PUBLIC_DIR = PROJECT_ROOT / 'public'
OUTPUT_FILE = PROJECT_ROOT / 'src' / 'context' / 'public_structure.json'

# Extensiones de imagen a buscar (en minúsculas)
IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif']
# ===============================================

def find_images_in_public():
    """
    Escanea el directorio /public en busca de imágenes y devuelve sus rutas relativas.
    """
    image_paths = []
    
    if not PUBLIC_DIR.is_dir():
        print(f"❌ Error: El directorio '{PUBLIC_DIR.relative_to(PROJECT_ROOT)}' no fue encontrado.")
        return []

    print(f"🔍 Escaneando directorio: {PUBLIC_DIR.relative_to(PROJECT_ROOT)}")
    
    for root, _, files in os.walk(PUBLIC_DIR):
        for file in files:
            # Comprobar si la extensión del archivo está en nuestra lista de extensiones de imagen
            if Path(file).suffix.lower() in IMAGE_EXTENSIONS:
                # Construir la ruta completa y luego la ruta relativa al root del proyecto
                full_path = Path(root) / file
                relative_path = full_path.relative_to(PROJECT_ROOT)
                # Usamos as_posix() para asegurar que las barras sean '/' en todos los sistemas operativos
                image_paths.append(relative_path.as_posix())
    
    return sorted(image_paths)

def main():
    """
    Función principal que ejecuta el escaneo y guarda los resultados en un archivo JSON.
    """
    print("🚀 Iniciando la generación de la estructura de imágenes del directorio /public...")
    
    image_list = find_images_in_public()
    
    if not image_list:
        print("🤷‍♂️ No se encontraron imágenes en el directorio /public.")
        return

    output_data = {
        "image_paths": image_list
    }
    
    # Asegurarse de que el directorio de salida exista
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    try:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        
        print(f"\n✅ ¡Éxito! Se encontraron {len(image_list)} imágenes.")
        print(f"📁 Reporte guardado en: {OUTPUT_FILE.relative_to(PROJECT_ROOT)}")

    except Exception as e:
        print(f"❌ Error al escribir el archivo JSON: {e}")

if __name__ == '__main__':
    main()
