import SwiftUI

/// The Settings window (Command-Comma). One tab per topic.
struct SettingsView: View {
    @Environment(AppModel.self) private var model

    var body: some View {
        @Bindable var model = model
        TabView(selection: $model.settingsTab) {
            ForEach(SettingsTab.allCases) { tab in
                page(tab)
                    .tabItem { Label(tab.title, systemImage: tab.symbol) }
                    .tag(tab)
            }
        }
        .noInitialFocus()
    }

    @ViewBuilder
    private func page(_ tab: SettingsTab) -> some View {
        Form {
            switch tab {
            case .general: GeneralSettings()
            case .appearance: AppearanceSettings()
            }
        }
        .formStyle(.grouped)
        .fitsContent()
        .frame(width: 540)
    }
}

/// The Settings tabs. Snapshot mode walks through every case.
public enum SettingsTab: String, CaseIterable, Identifiable {
    case general, appearance

    public var id: String { rawValue }

    public var title: String {
        switch self {
        case .general: "Reproducción"
        case .appearance: "Apariencia"
        }
    }

    public var symbol: String {
        switch self {
        case .general: "play.circle"
        case .appearance: "paintpalette"
        }
    }
}

struct GeneralSettings: View {
    @AppStorage("initialBufferMB") private var initialBufferMB = 24
    @AppStorage("p2pPort") private var p2pPort = 8088
    @AppStorage("defaultSubtitles") private var defaultSubtitles = true
    @AppStorage("autoPlayNext") private var autoPlayNext = true

    var body: some View {
        Section("Búfer y Streaming P2P") {
            Picker("Búfer inicial:", selection: $initialBufferMB) {
                Text("12 MB (Conexión Rápida)").tag(12)
                Text("24 MB (Recomendado Antena Sur)").tag(24)
                Text("48 MB (Máxima Estabilidad)").tag(48)
            }

            Toggle("Activar subtítulos en español automáticamente", isOn: $defaultSubtitles)
            Toggle("Reproducir siguiente episodio automáticamente", isOn: $autoPlayNext)
        }

        Section("Motor Torrent Local") {
            HStack {
                Text("Puerto del servicio:")
                Spacer()
                Text("\(p2pPort)")
                    .foregroundStyle(.secondary)
            }

            HStack {
                Text("Enjambre y conexiones:")
                Spacer()
                Text("Hasta 350 conexiones concurrentes")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }
        }
    }
}
