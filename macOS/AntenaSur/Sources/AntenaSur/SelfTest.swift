import AppKit
import AntenaSurKit

/// Self-test for agents: runs the app's real functions on a test store,
/// prints PASS or FAIL per check, and quits with exit code 0 or 1.
///   APP_STORE=/tmp/AntenaSur-self ~/Applications/AntenaSur.app/Contents/MacOS/AntenaSur --selftest
@MainActor
public enum SelfTest {
    public static var requested: Bool { CommandLine.arguments.contains("--selftest") }
    public static var exitCode: Int32 = 0
    private static var failures = 0
    private static var count = 0

    public static func runIfRequested(model: AppModel) {
        guard requested else { return }
        setvbuf(stdout, nil, _IOLBF, 0)
        guard Store.isOverridden else {
            print("SELFTEST refused: set APP_STORE to a directory in /tmp")
            finish(code: 1)
            return
        }

        Task {
            try? await Task.sleep(for: .seconds(0.5))

            // Test 1: Channels count
            check("Channels are populated", !model.channels.isEmpty)

            // Test 2: Movie catalog is populated
            check("Movie catalog is populated", !model.movies.isEmpty)

            // Test 3: Toggle favorite channel
            if let first = model.channels.first {
                let initial = first.isFavorite
                model.toggleFavoriteChannel(id: first.id)
                check("Toggle channel favorite changes state", model.channels.first?.isFavorite != initial)
                model.toggleFavoriteChannel(id: first.id)
            }

            // Test 4: Media selection and playback progress
            if let firstMovie = model.movies.first {
                model.recordProgress(media: firstMovie, position: 120, duration: 3600)
                check("Continue watching records entry", model.continueWatching.contains { $0.mediaId == firstMovie.id })
            }

            // Test 5: Clean title helper
            check("Titles are cleaned by Kit", ItemTitle.clean("  Antena   Sur ") == "Antena Sur")

            print(failures == 0 ? "SELFTEST PASS \(count) checks" : "SELFTEST FAIL \(failures) of \(count) checks")
            finish(code: failures == 0 ? 0 : 1)
        }
    }

    private static func check(_ name: String, _ ok: Bool, _ detail: String = "") {
        count += 1
        if !ok { failures += 1 }
        print(ok ? "PASS \(name)" : "FAIL \(name)\(detail.isEmpty ? "" : ": \(detail)")")
    }

    public static func finish(code: Int32) {
        exitCode = code
        for window in NSApp.windows { if let sheet = window.attachedSheet { window.endSheet(sheet) } }
        NSApp.terminate(nil)
    }
}
