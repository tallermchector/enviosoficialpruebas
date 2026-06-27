import os
import json
import platform
import subprocess
import shutil
from datetime import datetime

def obtener_info_sistema():
    """Recopila especificaciones técnicas básicas de la PC."""
    info = {
        "fecha_analisis": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "sistema_operativo": f"{platform.system()} {platform.release()} ({platform.version()})",
        "arquitectura": platform.machine(),
        "procesador": platform.processor(),
        "discos": {}
    }
    
    # Comprobar espacio en discos C y E
    for disco in ['C:', 'E:']:
        if os.path.exists(disco):
            try:
                total, usado, libre = shutil.disk_usage(disco)
                info["discos"][disco] = {
                    "total_gb": round(total / (1024**3), 2),
                    "usado_gb": round(usado / (1024**3), 2),
                    "libre_gb": round(libre / (1024**3), 2)
                }
            except Exception:
                info["discos"][disco] = "No se pudo leer el espacio"
                
    return info

def es_repositorio_git(ruta):
    """Comprueba si una carpeta contiene un repositorio Git."""
    return os.path.isdir(os.path.join(ruta, '.git'))

def detectar_lenguajes_y_archivos(ruta):
    """Analiza las extensiones de archivos para identificar lenguajes."""
    extensiones_mapeo = {
        '.py': 'Python', '.js': 'JavaScript', '.ts': 'TypeScript',
        '.jsx': 'React JS', '.tsx': 'React TS', '.html': 'HTML',
        '.css': 'CSS', '.json': 'JSON', '.md': 'Markdown',
        '.go': 'Go', '.rs': 'Rust', '.java': 'Java',
        '.cpp': 'C++', '.c': 'C', '.cs': 'C#', '.php': 'PHP'
    }
    
    lenguajes_detectados = set()
    conteo_archivos = 0
    
    try:
        for entrada in os.scandir(ruta):
            # Evitar carpetas pesadas de dependencias para no ralentizar el script
            if entrada.is_dir() and entrada.name not in ['node_modules', '.git', 'venv', '__pycache__', 'dist', 'build']:
                # Escaneo superficial de primer nivel para velocidad
                try:
                    for sub_entrada in os.scandir(entrada.path):
                        if sub_entrada.is_file():
                            ext = os.path.splitext(sub_entrada.name)[1].lower()
                            if ext in extensiones_mapeo:
                                lenguajes_detectados.add(extensiones_mapeo[ext])
                            conteo_archivos += 1
                except Exception:
                    pass
            elif entrada.is_file():
                ext = os.path.splitext(entrada.name)[1].lower()
                if ext in extensiones_mapeo:
                    lenguajes_detectados.add(extensiones_mapeo[ext])
                conteo_archivos += 1
    except Exception:
        pass
        
    return list(lenguajes_detectados), conteo_archivos

def analizar_disco_e(ruta_base="E:\\proyectos"):
    """Escanea la carpeta de proyectos buscando repositorios y tecnologías."""
    resultados = {
        "ruta_escaneada": ruta_base,
        "total_proyectos_encontrados": 0,
        "proyectos": []
    }
    
    if not os.path.exists(ruta_base):
        return f"La ruta {ruta_base} no existe en este equipo."
        
    try:
        for entrada in os.scandir(ruta_base):
            if entrada.is_dir():
                ruta_completa = entrada.path
                es_git = es_repositorio_git(ruta_completa)
                lenguajes, archivos = detectar_lenguajes_y_archivos(ruta_completa)
                
                info_proyecto = {
                    "nombre": entrada.name,
                    "ruta": ruta_completa,
                    "es_repositorio_git": es_git,
                    "tecnologias_detectadas": lenguajes,
                    "archivos_estimados": archivos
                }
                
                resultados["proyectos"].append(info_proyecto)
                resultados["total_proyectos_encontrados"] += 1
    except Exception as e:
        resultados["error"] = f"Error escaneando proyectos: {str(e)}"
        
    return resultados

def main():
    print("Iniciando análisis del entorno para Hermes...")
    
    informe_final = {
        "informacion_pc": obtener_info_sistema(),
        "analisis_desarrollo": analizar_disco_e("E:\\proyectos")
    }
    
    archivo_salida = "analisis_sistema_proyectos.json"
    with open(archivo_salida, "w", encoding="utf-8") as f:
        json.dump(informe_final, f, indent=4, ensure_ascii=False)
        
    print(f"\n¡Análisis completado con éxito!")
    print(f"Los resultados se han guardado en: {os.path.abspath(archivo_salida)}")

if __name__ == "__main__":
    main()
