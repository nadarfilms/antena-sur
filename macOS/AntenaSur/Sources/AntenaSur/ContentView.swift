import AppKit
import AVKit
import SwiftUI
import AntenaSurKit

struct ContentView: View {
    @Environment(AppModel.self) private var model
    @Environment(\.openSettings) private var openSettings

    var body: some View {
        NavigationSplitView {
            sidebar
        } content: {
            contentList
        } detail: {
            detailView
        }
        .overlay {
            if model.isPlayerActive {
                playerOverlay
                    .transition(.opacity)
            }
        }
        .task {
            SeedData.insertIfRequested(into: model)
            SelfTest.runIfRequested(model: model)
            Snapshot.runIfRequested(model: model, openSettings: openSettings)
        }
    }

    // MARK: - Sidebar
    private var sidebar: some View {
        @Bindable var model = model
        return List(SidebarSection.allCases, selection: $model.sidebar) { section in
            Label(section.title, systemImage: section.symbol)
                .tag(section)
        }
        .navigationSplitViewColumnWidth(min: 190, ideal: 220)
    }

    // MARK: - Middle Content Column
    @ViewBuilder
    private var contentList: some View {
        switch model.sidebar ?? .tv {
        case .tv:
            TVChannelListView()
                .navigationTitle("Televisión en Vivo")
                .navigationSplitViewColumnWidth(min: 280, ideal: 340)
        case .movies:
            MediaCatalogGridView(mediaType: .movie)
                .navigationTitle("Películas")
                .navigationSplitViewColumnWidth(min: 340, ideal: 440)
        case .series:
            MediaCatalogGridView(mediaType: .series)
                .navigationTitle("Series")
                .navigationSplitViewColumnWidth(min: 340, ideal: 440)
        case .library:
            LibraryView()
                .navigationTitle("Mi Biblioteca")
                .navigationSplitViewColumnWidth(min: 320, ideal: 400)
        }
    }

    // MARK: - Right Detail Column
    @ViewBuilder
    private var detailView: some View {
        if let mediaID = model.selectedMediaID,
           let media = (model.movies + model.series).first(where: { $0.id == mediaID }) {
            MediaDetailView(media: media)
        } else if let channelID = model.selectedChannelID,
                  let channel = model.channels.first(where: { $0.id == channelID }) {
            ChannelDetailView(channel: channel)
        } else {
            ContentUnavailableView(
                "Selecciona un contenido",
                systemImage: "play.tv",
                description: Text("Elige un canal de televisión, película o serie para ver su información y comenzar la reproducción.")
            )
            .frame(maxWidth: .infinity, maxHeight: .infinity)
        }
    }

    // MARK: - Full Player Overlay
    private var playerOverlay: some View {
        ZStack {
            Color(hex: 0x060912).ignoresSafeArea()

            VStack(spacing: 0) {
                // Player Header
                HStack {
                    Button {
                        model.closePlayer()
                    } label: {
                        HStack(spacing: Space.xs) {
                            Image(systemName: "chevron.left")
                            Text("SALIR")
                                .fontWeight(.bold)
                        }
                    }
                    .buttonStyle(.borderedProminent)
                    .tint(.cyan)

                    VStack(alignment: .leading, spacing: Space.xs) {
                        Text(model.activePlayerTitle)
                            .font(.headline)
                            .foregroundStyle(.white)
                        Text(model.activePlayerSubtitle)
                            .font(.caption)
                            .foregroundStyle(.secondary)
                    }
                    .padding(.leading, Space.md)

                    Spacer()

                    // Torrent Swarm Badge
                    if !model.isLiveStream {
                        HStack(spacing: Space.sm) {
                            Circle().fill(Color.cyan).frame(width: 8, height: 8)
                            Text("👥 \(model.torrentSeeds) semillas (\(model.torrentPeers) enjambre) • ⚡ \(model.downloadSpeedKBps) KB/s")
                                .font(.caption.monospacedDigit())
                                .foregroundStyle(.white)
                        }
                        .padding(.horizontal, Space.md)
                        .padding(.vertical, Space.xs)
                        .background(Color.white.opacity(0.1), in: Capsule())
                    }
                }
                .padding()
                .background(.ultraThinMaterial)

                Spacer()

                // Center simulated video canvas
                VStack(spacing: 16) {
                    Image(systemName: model.isLiveStream ? "antenna.radiowaves.left.and.right" : "play.circle.fill")
                        .font(.system(size: 64))
                        .foregroundStyle(Color.cyan)

                    Text(model.isLiveStream ? "EMISIÓN EN VIVO NATIVA" : "REPRODUCCIÓN P2P NATIVA")
                        .font(.title2.bold())
                        .foregroundStyle(.white)

                    Text(model.activePlayerTitle)
                        .font(.subheadline)
                        .foregroundStyle(.secondary)
                }

                Spacer()

                // Bottom HUD Controls
                HStack(spacing: 20) {
                    Button {
                        // Play/Pause
                    } label: {
                        Image(systemName: "play.fill")
                            .font(.title3)
                    }
                    .buttonStyle(.borderedProminent)
                    .tint(.cyan)

                    Text("00:00")
                        .font(.caption.monospacedDigit())
                        .foregroundStyle(.secondary)

                    // Scrubber Bar
                    ProgressView(value: 0.28)
                        .progressViewStyle(.linear)
                        .tint(.cyan)

                    Text(model.isLiveStream ? "EN VIVO" : "02:14:00")
                        .font(.caption.monospacedDigit())
                        .foregroundStyle(.secondary)

                    Spacer()

                    Button {
                        // Audio Tracks
                    } label: {
                        Label("AUDIO", systemImage: "waveform")
                    }
                    .buttonStyle(.bordered)

                    Button {
                        // Subtitles
                    } label: {
                        Label("SUBTÍTULOS", systemImage: "captions.bubble")
                    }
                    .buttonStyle(.bordered)
                }
                .padding()
                .background(.ultraThinMaterial)
            }
        }
    }
}

// MARK: - TV Channel List View
struct TVChannelListView: View {
    @Environment(AppModel.self) private var model

    private var filteredChannels: [Channel] {
        if model.searchQuery.isEmpty {
            return model.channels
        }
        return model.channels.filter { $0.name.localizedCaseInsensitiveContains(model.searchQuery) }
    }

    var body: some View {
        List(filteredChannels, selection: Bindable(model).selectedChannelID) { channel in
            HStack(spacing: 12) {
                ZStack {
                    RoundedRectangle(cornerRadius: 8)
                        .fill(Color.cyan.opacity(0.15))
                        .frame(width: 44, height: 44)
                    Image(systemName: "tv.fill")
                        .foregroundStyle(Color.cyan)
                }

                VStack(alignment: .leading, spacing: Space.xs) {
                    Text(channel.name)
                        .font(.body.weight(.medium))
                    Text(channel.group)
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }

                Spacer()

                Button {
                    model.toggleFavoriteChannel(id: channel.id)
                } label: {
                    Image(systemName: channel.isFavorite ? "star.fill" : "star")
                        .foregroundStyle(channel.isFavorite ? Color.yellow : Color.secondary)
                }
                .buttonStyle(.plain)

                Button("Ver") {
                    model.playChannel(channel)
                }
                .buttonStyle(.borderedProminent)
                .controlSize(.small)
                .tint(.cyan)
            }
            .padding(.vertical, Space.xs)
            .tag(channel.id)
        }
        .searchable(text: Bindable(model).searchQuery, prompt: "Buscar canales...")
    }
}

// MARK: - Media Catalog Grid View (Movies / Series)
struct MediaCatalogGridView: View {
    @Environment(AppModel.self) private var model
    let mediaType: MediaType

    private var items: [MediaItem] {
        let base = (mediaType == .movie) ? model.movies : model.series
        if model.searchQuery.isEmpty {
            return base
        }
        return base.filter { $0.title.localizedCaseInsensitiveContains(model.searchQuery) }
    }

    private let columns = [
        GridItem(.adaptive(minimum: 140, maximum: 200), spacing: Space.lg)
    ]

    var body: some View {
        ScrollView {
            LazyVGrid(columns: columns, spacing: Space.xl) {
                ForEach(items) { item in
                    VStack(alignment: .leading, spacing: Space.sm) {
                        ZStack(alignment: .topTrailing) {
                            RoundedRectangle(cornerRadius: 12)
                                .fill(Color.white.opacity(0.08))
                                .aspectRatio(2/3, contentMode: .fit)
                                .overlay {
                                    VStack(spacing: Space.sm) {
                                        Image(systemName: mediaType == .movie ? "film" : "play.tv")
                                            .font(.largeTitle)
                                            .foregroundStyle(Color.cyan)
                                        Text(item.title)
                                            .font(.caption.bold())
                                            .multilineTextAlignment(.center)
                                            .padding(.horizontal, Space.sm)
                                    }
                                }

                            Text(String(format: "★ %.1f", item.rating))
                                .font(.caption2.bold())
                                .padding(.horizontal, Space.sm)
                                .padding(.vertical, Space.xs)
                                .background(Color.black.opacity(0.8), in: Capsule())
                                .padding(Space.sm)
                        }

                        VStack(alignment: .leading, spacing: Space.xs) {
                            Text(item.title)
                                .font(.subheadline.bold())
                                .lineLimit(1)
                            Text(item.year)
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                    .contentShape(Rectangle())
                    .onTapGesture {
                        model.selectedMediaID = item.id
                    }
                }
            }
            .padding(Space.lg)
        }
        .searchable(text: Bindable(model).searchQuery, prompt: "Buscar \(mediaType.rawValue.lowercased())s...")
    }
}

// MARK: - Media Detail View (Movie or Series)
struct MediaDetailView: View {
    @Environment(AppModel.self) private var model
    let media: MediaItem

    private let sampleQualities = [
        TorrentQuality(quality: "4K UHD", size: "14.2 GB", seeds: 184, peers: 220, magnetUri: "magnet:?xt=urn:btih:4k-sample", releaseName: "2160p.HDR.DDP5.1.Atmos"),
        TorrentQuality(quality: "1080p FHD", size: "4.8 GB", seeds: 312, peers: 380, magnetUri: "magnet:?xt=urn:btih:1080p-sample", releaseName: "1080p.BluRay.x264.Dual-Audio"),
        TorrentQuality(quality: "720p HD", size: "2.1 GB", seeds: 96, peers: 110, magnetUri: "magnet:?xt=urn:btih:720p-sample", releaseName: "720p.WEB-DL.AAC2.0")
    ]

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                // Header Banner
                ZStack(alignment: .bottomLeading) {
                    RoundedRectangle(cornerRadius: 16)
                        .fill(LinearGradient(colors: [Color.cyan.opacity(0.3), Color.blue.opacity(0.1)], startPoint: .topLeading, endPoint: .bottomTrailing))
                        .frame(height: 220)
                        .overlay(alignment: .center) {
                            Image(systemName: media.type == .movie ? "film.fill" : "play.tv.fill")
                                .font(.system(size: 80))
                                .foregroundStyle(Color.cyan.opacity(0.4))
                        }

                    VStack(alignment: .leading, spacing: Space.sm) {
                        Text(media.type.rawValue.uppercased())
                            .font(.caption.bold())
                            .foregroundStyle(Color.cyan)

                        Text(media.title)
                            .font(.system(size: 28, weight: .bold))
                            .foregroundStyle(.white)

                        HStack(spacing: Space.md) {
                            Text(media.year)
                            Text("•")
                            Text(String(format: "★ %.1f", media.rating))
                            Text("•")
                            Text(media.genres.joined(separator: ", "))
                        }
                        .font(.subheadline)
                        .foregroundStyle(.secondary)
                    }
                    .padding(Space.xl)
                }

                // Overview
                VStack(alignment: .leading, spacing: Space.sm) {
                    Text("Sinopsis")
                        .font(.headline)
                    Text(media.overview)
                        .font(.body)
                        .foregroundStyle(.secondary)
                        .lineSpacing(Space.xs)
                }

                // If Series: Season Picker & Episode Carousel
                if media.type == .series {
                    VStack(alignment: .leading, spacing: Space.md) {
                        Text("Temporadas y Capítulos")
                            .font(.headline)

                        Picker("Temporada", selection: Bindable(model).selectedSeason) {
                            Text("Temporada 1").tag(1)
                            Text("Temporada 2").tag(2)
                        }
                        .pickerStyle(.segmented)
                        .frame(maxWidth: 280)

                        ScrollView(.horizontal, showsIndicators: false) {
                            HStack(spacing: Space.lg) {
                                ForEach(1...8, id: \.self) { epNum in
                                    VStack(alignment: .leading, spacing: Space.xs) {
                                        ZStack {
                                            RoundedRectangle(cornerRadius: 8)
                                                .fill(Color.white.opacity(0.08))
                                                .frame(width: 180, height: 100)
                                            Image(systemName: "play.circle")
                                                .font(.title)
                                                .foregroundStyle(Color.cyan)
                                        }

                                        Text("Episodio \(epNum)")
                                            .font(.caption.bold())
                                        Text("Capítulo \(epNum) en español")
                                            .font(.caption2)
                                            .foregroundStyle(.secondary)
                                    }
                                    .contentShape(Rectangle())
                                    .onTapGesture {
                                        model.playMedia(media, quality: sampleQualities[1])
                                    }
                                }
                            }
                        }
                    }
                }

                // Available Stream Qualities (Torrent P2P)
                VStack(alignment: .leading, spacing: Space.md) {
                    Text("Fuentes y Calidades Disponibles")
                        .font(.headline)

                    ForEach(sampleQualities) { q in
                        HStack(spacing: Space.lg) {
                            Text(q.quality)
                                .font(.title3.bold())
                                .foregroundStyle(Color.cyan)
                                .frame(width: 96, alignment: .leading)

                            VStack(alignment: .leading, spacing: Space.xs) {
                                Text(q.releaseName)
                                    .font(.subheadline.bold())
                                Text("Tamaño: \(q.size) • Audio Dual • Subtítulos Español")
                                    .font(.caption)
                                    .foregroundStyle(.secondary)
                            }

                            Spacer()

                            HStack(spacing: Space.xs) {
                                Image(systemName: "person.2.fill")
                                Text("\(q.seeds) semillas")
                            }
                            .font(.caption.monospacedDigit())
                            .foregroundStyle(Color.green)

                            Button("Reproducir") {
                                model.playMedia(media, quality: q)
                            }
                            .buttonStyle(.borderedProminent)
                            .tint(.cyan)
                        }
                        .padding(Space.md)
                        .background(Color.white.opacity(0.05), in: RoundedRectangle(cornerRadius: 12))
                    }
                }
            }
            .padding(Space.xxl)
        }
    }
}

// MARK: - Channel Detail View
struct ChannelDetailView: View {
    @Environment(AppModel.self) private var model
    let channel: Channel

    var body: some View {
        VStack(spacing: Space.xxl) {
            ZStack {
                Circle().fill(Color.cyan.opacity(0.15))
                    .frame(width: 96, height: 96)
                Image(systemName: "tv.fill")
                    .font(.system(size: 44))
                    .foregroundStyle(Color.cyan)
            }

            VStack(spacing: Space.sm) {
                Text(channel.name)
                    .font(.title.bold())
                Text("Categoría: \(channel.group)")
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
            }

            Button {
                model.playChannel(channel)
            } label: {
                Label("Sintonizar en Vivo", systemImage: "play.fill")
                    .font(.headline)
                    .padding(.horizontal, Space.lg)
                    .padding(.vertical, Space.sm)
            }
            .buttonStyle(.borderedProminent)
            .tint(.cyan)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}

// MARK: - Library View (Favorites & Continue Watching)
struct LibraryView: View {
    @Environment(AppModel.self) private var model

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: Space.xxl) {
                // Continue Watching Section
                if !model.continueWatching.isEmpty {
                    VStack(alignment: .leading, spacing: Space.md) {
                        Text("Seguir Viendo")
                            .font(.title3.bold())

                        ForEach(model.continueWatching) { item in
                            HStack(spacing: Space.lg) {
                                ZStack {
                                    RoundedRectangle(cornerRadius: 8)
                                        .fill(Color.cyan.opacity(0.2))
                                        .frame(width: 60, height: 60)
                                    Image(systemName: "play.fill")
                                        .foregroundStyle(Color.cyan)
                                }

                                VStack(alignment: .leading, spacing: Space.xs) {
                                    Text(item.title)
                                        .font(.subheadline.bold())
                                    Text(item.subtitle)
                                        .font(.caption)
                                        .foregroundStyle(.secondary)

                                    ProgressView(value: item.progressPercent)
                                        .progressViewStyle(.linear)
                                        .tint(.cyan)
                                }

                                Spacer()

                                Button("Continuar") {
                                    if let media = (model.movies + model.series).first(where: { $0.id == item.mediaId }) {
                                        model.selectedMediaID = media.id
                                    }
                                }
                                .buttonStyle(.bordered)
                            }
                            .padding(Space.md)
                            .background(Color.white.opacity(0.05), in: RoundedRectangle(cornerRadius: 12))
                        }
                    }
                }

                // Favorites Section
                VStack(alignment: .leading, spacing: Space.md) {
                    Text("Canales Favoritos")
                        .font(.title3.bold())

                    let favs = model.channels.filter(\.isFavorite)
                    if favs.isEmpty {
                        Text("No tienes canales favoritos guardados.")
                            .foregroundStyle(.secondary)
                    } else {
                        ForEach(favs) { ch in
                            HStack {
                                Text(ch.name)
                                    .font(.body.weight(.medium))
                                Spacer()
                                Button("Ver") {
                                    model.playChannel(ch)
                                }
                                .buttonStyle(.borderedProminent)
                                .tint(.cyan)
                            }
                            .padding(Space.md)
                            .background(Color.white.opacity(0.04), in: RoundedRectangle(cornerRadius: 8))
                        }
                    }
                }
            }
            .padding(Space.lg)
        }
    }
}
