import json
import os
import subprocess
from pathlib import Path

# =================CONFIGURACIÓN=================
PROJECT_ROOT = Path.cwd()
JSON_REPORT = PROJECT_ROOT / 'src' / 'context' / 'no_usados.json'
# ===============================================

def run_git_command(command_list):
    """Ejecuta un comando de git y devuelve su salida."""
    try:
        result = subprocess.run(
            command_list,
            cwd=PROJECT_ROOT,
            check=True,
            text=True,
            capture_output=True
        )
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"❌ Error ejecutando git: {' '.join(command_list)}\n{e.stderr}")
        return None

def main():
    print("🗑️ Iniciando eliminación de componentes no utilizados...")

    if not JSON_REPORT.exists():
        print(f"⚠️ No se encontró el reporte: {JSON_REPORT.relative_to(PROJECT_ROOT)}")
        return

    try:
        with open(JSON_REPORT, 'r', encoding='utf-8') as f:
            data = json.load(f)
            unused_files = data.get("unused_components", [])
    except json.JSONDecodeError:
        print("❌ Error al leer el archivo JSON. Formato inválido.")
        return

    if not unused_files:
        print("✅ No hay componentes para borrar en el reporte.")
        return

    deleted_count = 0
    deleted_list = []

    for relative_path in unused_files:
        file_to_delete = PROJECT_ROOT / relative_path
        
        # Verificación de seguridad extra: solo borrar dentro de src/components
        if not str(file_to_delete.resolve()).startswith(str((PROJECT_ROOT / 'src' / 'components').resolve())):
             print(f"⛔ SALTADO (por seguridad): {relative_path} - No está en src/components")
             continue

        if file_to_delete.exists():
            try:
                os.remove(file_to_delete)
                print(f"🔥 Borrado: {relative_path}")
                deleted_list.append(relative_path)
                deleted_count += 1
            except Exception as e:
                print(f"❌ Error al borrar {relative_path}: {e}")
        else:
             print(f"⚠️ Ya no existe: {relative_path}")

    if deleted_count == 0:
        print("ℹ️ No se borró ningún archivo.")
        return

    # Crear el commit
    print(f"\n💾 Creando commit con {deleted_count} archivos borrados...")
    
    # 1. Stage de los archivos borrados
    run_git_command(["git", "add", "."])
    
    # 2. Mensaje del commit
    commit_msg = f"refactor: eliminar {deleted_count} componentes no utilizados\n\nArchivos borrados:\n"
    for item in deleted_list:
        commit_msg += f"- {item}\n"

    # 3. Commit
    # Usamos -m múltiple o pasamos el mensaje por stdin si es muy largo, 
    # pero para este caso simple un string multilinea suele funcionar en subprocess.
    if run_git_command(["git", "commit", "-m", commit_msg]):
         print("✅ Commit creado exitosamente.")
    else:
         print("❌ Falló la creación del commit.")

if __name__ == '__main__':
    main()