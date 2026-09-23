#!/usr/bin/env bash
# ==============================================================================
# Script de inicio rápido para Antena Sur
# ==============================================================================

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "=========================================================="
echo "📡 Iniciando Antena Sur - TV & Radios de Sudamérica"
echo "=========================================================="

if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 no está instalado en el sistema."
    exit 1
fi

# Intentar abrir el navegador automáticamente en macOS
(sleep 1.2 && open "http://localhost:8080" 2>/dev/null) &

# Ejecutar el servidor Python
python3 "$DIR/server.py"
