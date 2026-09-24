#!/usr/bin/env python3
import os
import re
import shutil

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS_DIR = os.path.join(ROOT_DIR, 'js')
ANDROID_WWW_DIR = os.path.join(ROOT_DIR, 'android', 'app', 'src', 'main', 'assets', 'www')

files_order = [
    'stations-data.js',
    'data-manager.js',
    'favorites.js',
    'player.js',
    'filters.js',
    'tv-navigation.js',
    'app.js'
]

bundle_parts = [
    '/**',
    ' * ANTENA SUR - Standalone Application Bundle',
    ' * Compatible con Android TV, Google TV, WebViews, Apple CarPlay y Navegadores Modernos',
    ' * Generado de forma autónoma sin dependencias de carga modular ES6 a nivel de runtime',
    ' */\n',
    '(function() {',
    '  "use strict";\n'
]

for fname in files_order:
    fpath = os.path.join(JS_DIR, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove import lines
    content = re.sub(r'^\s*import\s+.*?;?\s*$', '', content, flags=re.MULTILINE)
    # Remove 'export ' keyword before class or function
    content = re.sub(r'^\s*export\s+(class|function|const|let|var)\s+', r'\1 ', content, flags=re.MULTILINE)

    bundle_parts.append(f'  /* ========================================================================')
    bundle_parts.append(f'     SOURCE MODULE: {fname}')
    bundle_parts.append(f'     ======================================================================== */\n')
    bundle_parts.append(content)
    bundle_parts.append('\n')

bundle_parts.append('})();\n')

bundled_code = '\n'.join(bundle_parts)

# Write to root js/
bundle_dest = os.path.join(JS_DIR, 'app.bundle.js')
with open(bundle_dest, 'w', encoding='utf-8') as f:
    f.write(bundled_code)

print(f"Generated root {bundle_dest} ({len(bundled_code)} bytes)")

# Sync all web assets to Android assets www
os.makedirs(ANDROID_WWW_DIR, exist_ok=True)

# 1. Sync index.html
shutil.copy2(os.path.join(ROOT_DIR, 'index.html'), os.path.join(ANDROID_WWW_DIR, 'index.html'))

# 2. Sync css
shutil.copytree(os.path.join(ROOT_DIR, 'css'), os.path.join(ANDROID_WWW_DIR, 'css'), dirs_exist_ok=True)

# 3. Sync js
android_js_dest = os.path.join(ANDROID_WWW_DIR, 'js')
os.makedirs(android_js_dest, exist_ok=True)
for item in os.listdir(JS_DIR):
    s = os.path.join(JS_DIR, item)
    d = os.path.join(android_js_dest, item)
    if os.path.isfile(s):
        shutil.copy2(s, d)

# 4. Sync data
shutil.copytree(os.path.join(ROOT_DIR, 'data'), os.path.join(ANDROID_WWW_DIR, 'data'), dirs_exist_ok=True)

print(f"Fully synced all web assets to Android assets www!")
