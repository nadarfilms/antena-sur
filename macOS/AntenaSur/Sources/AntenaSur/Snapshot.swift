import AppKit
import SwiftUI

/// Screenshot mode for agents.
///   APP_STORE=/tmp/test.store APP_SNAPSHOT=/tmp/shots ~/Applications/AntenaSur.app/Contents/MacOS/AntenaSur
@MainActor
enum Snapshot {
    static func runIfRequested(model: AppModel, openSettings: OpenSettingsAction) {
        let env = ProcessInfo.processInfo.environment
        guard let dir = env["APP_SNAPSHOT"], !dir.isEmpty else { return }
        guard Store.isOverridden else {
            print("SNAPSHOT refused: set APP_STORE to a directory in /tmp")
            NSApp.terminate(nil)
            return
        }
        let only = env["APP_SNAPSHOT_PAGES"].map { Set($0.split(separator: ",").map(String.init)) }
        Task { @MainActor in
            try? FileManager.default.createDirectory(atPath: dir, withIntermediateDirectories: true)
            try? await Task.sleep(for: .seconds(1.2))

            for mode in ["light", "dark"] {
                NSApp.appearance = NSAppearance(named: mode == "light" ? .aqua : .darkAqua)
                for section in SidebarSection.allCases where only?.contains(section.rawValue) ?? true {
                    model.sidebar = section
                    try? await Task.sleep(for: .seconds(0.5))
                    captureWindow(to: "\(dir)/\(section.rawValue)-\(mode).png")
                }
            }

            if only == nil || only?.contains("settings") == true {
                let main = NSApp.windows.first { $0.canBecomeMain && !$0.isSheet }
                openSettings()
                try? await Task.sleep(for: .seconds(1.0))
                for mode in ["light", "dark"] {
                    NSApp.appearance = NSAppearance(named: mode == "light" ? .aqua : .darkAqua)
                    for tab in SettingsTab.allCases {
                        model.settingsTab = tab
                        try? await Task.sleep(for: .seconds(0.5))
                        let settings = NSApp.windows.first { $0.isVisible && $0 !== main && !$0.isSheet }
                        captureWindow(to: "\(dir)/settings-\(tab.rawValue)-\(mode).png", window: settings)
                    }
                }
            }

            print("SNAPSHOT done \(dir)")
            for window in NSApp.windows { if let sheet = window.attachedSheet { window.endSheet(sheet) } }
            NSApp.terminate(nil)
        }
    }

    private static func captureWindow(to path: String, window: NSWindow? = nil) {
        guard let win = window ?? NSApp.windows.first(where: { $0.canBecomeMain && !$0.isSheet && $0.isVisible }),
              let contentView = win.contentView else { return }

        let bounds = contentView.bounds
        guard bounds.width > 0, bounds.height > 0 else { return }

        let rep = contentView.bitmapImageRepForCachingDisplay(in: bounds) ??
            NSBitmapImageRep(bitmapDataPlanes: nil,
                             pixelsWide: Int(bounds.width),
                             pixelsHigh: Int(bounds.height),
                             bitsPerSample: 8,
                             samplesPerPixel: 4,
                             hasAlpha: true,
                             isPlanar: false,
                             colorSpaceName: .deviceRGB,
                             bytesPerRow: 0,
                             bitsPerPixel: 0)!

        contentView.cacheDisplay(in: bounds, to: rep)
        if let png = rep.representation(using: .png, properties: [:]) {
            try? png.write(to: URL(fileURLWithPath: path))
        }
    }
}
