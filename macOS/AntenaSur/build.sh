#!/bin/zsh
# Builds AntenaSur and installs it to ~/Applications/AntenaSur.app.
# Build products live in ~/Library/Developer/AntenaSur, outside the repo.
#
# Usage: ./build.sh            release build, install
#        ./build.sh --debug    debug build, install
#        ./build.sh --open     install, then quit the running copy and open the new one
set -euo pipefail
here=${0:A:h}
name="AntenaSur"
scratch="$HOME/Library/Developer/$name/build"
config=release
[[ " $* " == *" --debug "* ]] && config=debug

# Match compiler with correct SDK
if [[ -d "/Library/Developer/CommandLineTools/SDKs/MacOSX26.5.sdk" ]]; then
  export SDKROOT="/Library/Developer/CommandLineTools/SDKs/MacOSX26.5.sdk"
elif [[ -d "/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk" ]]; then
  export SDKROOT="/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk"
fi

identity="${SIGN_IDENTITY:-}"
if [[ -z "$identity" ]]; then
  identity=$(security find-identity -v -p codesigning 2>/dev/null | grep -m1 -o '"Apple Development: [^"]*"' | tr -d '"' || true)
fi
[[ -n "$identity" ]] || identity=-

mkdir -p "$scratch/kit"
echo "compiling AntenaSurKit..."
swiftc -emit-module -emit-module-path "$scratch/kit/AntenaSurKit.swiftmodule" \
       -emit-object -o "$scratch/kit/AntenaSurKit.o" \
       -parse-as-library -module-name AntenaSurKit \
       "$here/Sources/AntenaSurKit"/*.swift

echo "compiling AntenaSur..."
bin="$scratch/$name"
swiftc -parse-as-library -module-name AntenaSur \
       -I "$scratch/kit" \
       "$scratch/kit/AntenaSurKit.o" \
       "$here/Sources/AntenaSur"/*.swift \
       "$here/Sources/AntenaSur/UI"/*.swift \
       -o "$bin"

[[ -x "$bin" ]] || { echo "build failed"; exit 1; }

app="$HOME/Applications/$name.app"
mkdir -p "$HOME/Applications"
rm -rf "$app"
mkdir -p "$app/Contents/MacOS" "$app/Contents/Resources"
cp "$bin" "$app/Contents/MacOS/$name"
sed -e "s/__BUILD__/$(date +%Y%m%d%H%M)/" "$here/Info.plist.in" > "$app/Contents/Info.plist"

# Generate or copy AppIcon.icns
if [[ ! -f "$here/Resources/AppIcon.icns" ]]; then
  src_icon="${here:h:h}/img/icon-512.png"
  if [[ -f "$src_icon" ]]; then
    mkdir -p /tmp/AntenaSurIcon.iconset "$here/Resources"
    sips -z 16 16     "$src_icon" --out /tmp/AntenaSurIcon.iconset/icon_16x16.png >/dev/null 2>&1 || true
    sips -z 32 32     "$src_icon" --out /tmp/AntenaSurIcon.iconset/icon_16x16@2x.png >/dev/null 2>&1 || true
    sips -z 32 32     "$src_icon" --out /tmp/AntenaSurIcon.iconset/icon_32x32.png >/dev/null 2>&1 || true
    sips -z 64 64     "$src_icon" --out /tmp/AntenaSurIcon.iconset/icon_32x32@2x.png >/dev/null 2>&1 || true
    sips -z 128 128   "$src_icon" --out /tmp/AntenaSurIcon.iconset/icon_128x128.png >/dev/null 2>&1 || true
    sips -z 256 256   "$src_icon" --out /tmp/AntenaSurIcon.iconset/icon_128x128@2x.png >/dev/null 2>&1 || true
    sips -z 256 256   "$src_icon" --out /tmp/AntenaSurIcon.iconset/icon_256x256.png >/dev/null 2>&1 || true
    sips -z 512 512   "$src_icon" --out /tmp/AntenaSurIcon.iconset/icon_256x256@2x.png >/dev/null 2>&1 || true
    sips -z 512 512   "$src_icon" --out /tmp/AntenaSurIcon.iconset/icon_512x512.png >/dev/null 2>&1 || true
    sips -z 1024 1024 "$src_icon" --out /tmp/AntenaSurIcon.iconset/icon_512x512@2x.png >/dev/null 2>&1 || true
    iconutil -c icns /tmp/AntenaSurIcon.iconset -o "$here/Resources/AppIcon.icns" >/dev/null 2>&1 || true
  fi
fi

if [[ -f "$here/Resources/AppIcon.icns" ]]; then
  cp "$here/Resources/AppIcon.icns" "$app/Contents/Resources/"
fi

xattr -cr "$app"
codesign --force --sign "$identity" "$app" 2>&1 | grep -v "replacing existing signature" || true
echo "installed $app (signed: ${identity})"

if [[ " $* " == *" --open "* ]]; then
  osascript -e "quit app \"$name\"" 2>/dev/null || true
  sleep 0.5
  open "$app"
fi
