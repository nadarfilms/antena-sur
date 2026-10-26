#!/usr/bin/env bash
set -e
echo "=== Instalando Node.js para Antena Sur en Render ==="
NODE_VER="v20.18.0"
ARCH="linux-x64"
TARGET_DIR="$PWD/node_bin"

if [ ! -f "$TARGET_DIR/bin/node" ]; then
  mkdir -p "$TARGET_DIR"
  echo "Descargando Node.js $NODE_VER para $ARCH..."
  curl -sSL "https://nodejs.org/dist/${NODE_VER}/node-${NODE_VER}-${ARCH}.tar.xz" | tar -xJ --strip-components=1 -C "$TARGET_DIR"
fi

export PATH="$TARGET_DIR/bin:$PATH"
echo "Node versión instalada: $(node -v)"
echo "NPM versión: $(npm -v)"

echo "Instalando dependencias de Node.js (WebTorrent y FFmpeg)..."
npm install --omit=dev

echo "Instalando dependencias Python..."
pip install -r requirements.txt || true

echo "=== Build completado con éxito ==="
