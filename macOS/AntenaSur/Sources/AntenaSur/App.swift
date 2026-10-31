import AppKit
import SwiftUI

// AntenaSur
//   AntenaSur                      the app
//   APP_STORE=<dir> AntenaSur      use another directory for data (tests, experiments)
//   APP_SNAPSHOT=<dir> AntenaSur   save a PNG of every sidebar page and Settings tab, then quit
//   APP_SEED=1 AntenaSur           fill an empty store with sample items (tools/snap.sh)
//   AntenaSur --selftest           run the self-test and quit with 0 or 1 (tools/selftest.sh)
//   APP_ACCENT=<id> AntenaSur      run with another accent from Theme.all (UI/Theme.swift)
//   APP_GRID=1 AntenaSur           draw the 8 pt grid and layout probes over the window

@main
struct AntenaSurApp: App {
    @NSApplicationDelegateAdaptor(AppDelegate.self) private var delegate
    @State private var model = AppModel()

    var body: some Scene {
        Window("AntenaSur", id: "main") {
            ContentView()
                .environment(model)
                .themed()
                .overlay { if GridOverlay.enabled { GridOverlay() } }
                .frame(minWidth: 840, minHeight: 520)
        }
        .defaultSize(width: 1180, height: 760)
        .windowToolbarStyle(.unified)
        .commands {
            SidebarCommands()
            ToolbarCommands()
            CommandGroup(replacing: .newItem) {
                Button("Buscar...") {
                    // Activate search
                }
                .keyboardShortcut("f", modifiers: .command)
            }
        }

        Settings {
            SettingsView()
                .environment(model)
                .themed()
        }
        .windowResizability(.contentSize)
    }
}

final class AppDelegate: NSObject, NSApplicationDelegate {
    func applicationDidFinishLaunching(_ notification: Notification) {
        NSApp.setActivationPolicy(.regular)
        NSApp.activate()
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool { true }

    func applicationWillTerminate(_ notification: Notification) {
        if SelfTest.requested { exit(SelfTest.exitCode) }
    }
}

/// Local file-backed storage: ~/Library/Application Support/AntenaSur/
public enum Store {
    public static var isOverridden: Bool {
        !(ProcessInfo.processInfo.environment["APP_STORE"] ?? "").isEmpty
    }

    public static var directory: URL {
        if let path = ProcessInfo.processInfo.environment["APP_STORE"], !path.isEmpty {
            let url = URL(fileURLWithPath: path)
            try? FileManager.default.createDirectory(at: url, withIntermediateDirectories: true)
            return url
        }
        let dir = URL.applicationSupportDirectory.appending(path: "AntenaSur", directoryHint: .isDirectory)
        try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        return dir
    }

    public static func loadChannels() -> [Channel] {
        load([Channel].self, from: "channels.json") ?? []
    }

    public static func saveChannels(_ channels: [Channel]) {
        save(channels, to: "channels.json")
    }

    public static func loadMovies() -> [MediaItem] {
        load([MediaItem].self, from: "movies.json") ?? []
    }

    public static func saveMovies(_ movies: [MediaItem]) {
        save(movies, to: "movies.json")
    }

    public static func loadSeries() -> [MediaItem] {
        load([MediaItem].self, from: "series.json") ?? []
    }

    public static func saveSeries(_ series: [MediaItem]) {
        save(series, to: "series.json")
    }

    public static func loadProgress() -> [PlaybackProgress] {
        load([PlaybackProgress].self, from: "progress.json") ?? []
    }

    public static func saveProgress(_ progress: [PlaybackProgress]) {
        save(progress, to: "progress.json")
    }

    private static func load<T: Decodable>(_ type: T.Type, from filename: String) -> T? {
        let file = directory.appending(path: filename)
        guard let data = try? Data(contentsOf: file) else { return nil }
        return try? JSONDecoder().decode(T.self, from: data)
    }

    private static func save<T: Encodable>(_ value: T, to filename: String) {
        let file = directory.appending(path: filename)
        if let data = try? JSONEncoder().encode(value) {
            try? data.write(to: file, options: [.atomic])
        }
    }
}
