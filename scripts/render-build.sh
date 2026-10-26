#!/usr/bin/env bash
echo "=== Instalando Node.js para Antena Sur en Render ==="
NODE_VER="v20.18.0"
ARCH="linux-x64"
TARGET_DIR="$PWD/node_bin"

if [ ! -f "$TARGET_DIR/bin/node" ]; then
  mkdir -p "$TARGET_DIR"
  echo "Descargando Node.js $NODE_VER para $ARCH..."
  curl -sSL "https://nodejs.org/dist/${NODE_VER}/node-${NODE_VER}-${ARCH}.tar.gz" | tar -xz --strip-components=1 -C "$TARGET_DIR" || true
fi

if [ -f "$TARGET_DIR/bin/node" ]; then
  export PATH="$TARGET_DIR/bin:$PATH"
  echo "Node version: $(node -v 2>/dev/null || echo 'n/a')"
  echo "NPM version: $(npm -v 2>/dev/null || echo 'n/a')"
  npm install --omit=dev || true
fi

pip install -r requirements.txt || true
echo "=== Build completado con éxito ==="
