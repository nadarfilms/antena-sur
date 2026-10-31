import Foundation
import Observation
import AntenaSurKit

public enum MediaType: String, Codable, CaseIterable {
    case movie = "Película"
    case series = "Serie"
}

public struct Channel: Identifiable, Codable, Hashable {
    public var id: String
    public var name: String
    public var group: String
    public var logoUrl: String
    public var streamUrl: String
    public var isFavorite: Bool = false

    public init(id: String, name: String, group: String, logoUrl: String, streamUrl: String, isFavorite: Bool = false) {
        self.id = id
        self.name = name
        self.group = group
        self.logoUrl = logoUrl
        self.streamUrl = streamUrl
        self.isFavorite = isFavorite
    }
}

public struct MediaItem: Identifiable, Codable, Hashable {
    public var id: String
    public var tmdbId: Int
    public var type: MediaType
    public var title: String
    public var year: String
    public var posterUrl: String
    public var backdropUrl: String
    public var overview: String
    public var rating: Double
    public var genres: [String]
    public var isFavorite: Bool = false

    public init(id: String, tmdbId: Int, type: MediaType, title: String, year: String, posterUrl: String, backdropUrl: String, overview: String, rating: Double, genres: [String], isFavorite: Bool = false) {
        self.id = id
        self.tmdbId = tmdbId
        self.type = type
        self.title = title
        self.year = year
        self.posterUrl = posterUrl
        self.backdropUrl = backdropUrl
        self.overview = overview
        self.rating = rating
        self.genres = genres
        self.isFavorite = isFavorite
    }
}

public struct Episode: Identifiable, Codable, Hashable {
    public var id: String
    public var seasonNumber: Int
    public var episodeNumber: Int
    public var title: String
    public var overview: String
    public var stillUrl: String
    public var durationMinutes: Int

    public init(id: String, seasonNumber: Int, episodeNumber: Int, title: String, overview: String, stillUrl: String, durationMinutes: Int = 45) {
        self.id = id
        self.seasonNumber = seasonNumber
        self.episodeNumber = episodeNumber
        self.title = title
        self.overview = overview
        self.stillUrl = stillUrl
        self.durationMinutes = durationMinutes
    }
}

public struct TorrentQuality: Identifiable, Codable, Hashable {
    public var id: String { quality }
    public var quality: String
    public var size: String
    public var seeds: Int
    public var peers: Int
    public var magnetUri: String
    public var releaseName: String

    public init(quality: String, size: String, seeds: Int, peers: Int, magnetUri: String, releaseName: String) {
        self.quality = quality
        self.size = size
        self.seeds = seeds
        self.peers = peers
        self.magnetUri = magnetUri
        self.releaseName = releaseName
    }
}

public struct PlaybackProgress: Identifiable, Codable, Hashable {
    public var id: String { mediaId }
    public var mediaId: String
    public var title: String
    public var subtitle: String
    public var posterUrl: String
    public var positionSeconds: Double
    public var durationSeconds: Double
    public var lastWatched: Date

    public init(mediaId: String, title: String, subtitle: String, posterUrl: String, positionSeconds: Double, durationSeconds: Double, lastWatched: Date = Date.now) {
        self.mediaId = mediaId
        self.title = title
        self.subtitle = subtitle
        self.posterUrl = posterUrl
        self.positionSeconds = positionSeconds
        self.durationSeconds = durationSeconds
        self.lastWatched = lastWatched
    }

    public var progressPercent: Double {
        durationSeconds > 0 ? min(1.0, max(0.0, positionSeconds / durationSeconds)) : 0
    }
}

/// The sidebar navigation sections.
public enum SidebarSection: String, CaseIterable, Identifiable {
    case tv, movies, series, library

    public var id: String { rawValue }

    public var title: String {
        switch self {
        case .tv: "Televisión"
        case .movies: "Películas"
        case .series: "Series"
        case .library: "Biblioteca"
        }
    }

    public var symbol: String {
        switch self {
        case .tv: "tv"
        case .movies: "film"
        case .series: "play.tv"
        case .library: "bookmark"
        }
    }
}

/// App-wide state that menus, toolbars, and views share.
@MainActor
@Observable
public final class AppModel {
    public var sidebar: SidebarSection? = .tv
    public var searchQuery: String = ""

    public var channels: [Channel] = []
    public var movies: [MediaItem] = []
    public var series: [MediaItem] = []
    public var continueWatching: [PlaybackProgress] = []

    public var selectedChannelID: String?
    public var selectedMediaID: String?
    public var selectedSeason: Int = 1

    // Video Player State
    public var isPlayerActive: Bool = false
    public var activePlayerTitle: String = ""
    public var activePlayerSubtitle: String = ""
    public var activeStreamURL: URL?
    public var isLiveStream: Bool = false
    public var torrentPeers: Int = 0
    public var torrentSeeds: Int = 0
    public var downloadSpeedKBps: Int = 0

    public var settingsTab: SettingsTab = SettingsTab(rawValue: UserDefaults.standard.string(forKey: "settings.tab") ?? "") ?? .general {
        didSet {
            if !Store.isOverridden {
                UserDefaults.standard.set(settingsTab.rawValue, forKey: "settings.tab")
            }
        }
    }

    public init() {
        loadData()
    }

    public func loadData() {
        channels = Store.loadChannels()
        movies = Store.loadMovies()
        series = Store.loadSeries()
        continueWatching = Store.loadProgress()

        if channels.isEmpty && movies.isEmpty {
            SeedData.populateDefault(into: self)
        }
    }

    public func saveData() {
        Store.saveChannels(channels)
        Store.saveMovies(movies)
        Store.saveSeries(series)
        Store.saveProgress(continueWatching)
    }

    public func toggleFavoriteChannel(id: String) {
        if let idx = channels.firstIndex(where: { $0.id == id }) {
            channels[idx].isFavorite.toggle()
            saveData()
        }
    }

    public func toggleFavoriteMedia(id: String) {
        if let idx = movies.firstIndex(where: { $0.id == id }) {
            movies[idx].isFavorite.toggle()
            saveData()
        } else if let idx = series.firstIndex(where: { $0.id == id }) {
            series[idx].isFavorite.toggle()
            saveData()
        }
    }

    public func playChannel(_ channel: Channel) {
        selectedChannelID = channel.id
        activePlayerTitle = channel.name
        activePlayerSubtitle = "EN VIVO • \(channel.group.uppercased())"
        activeStreamURL = URL(string: channel.streamUrl)
        isLiveStream = true
        isPlayerActive = true
    }

    public func playMedia(_ media: MediaItem, quality: TorrentQuality) {
        selectedMediaID = media.id
        activePlayerTitle = media.title
        activePlayerSubtitle = "\(media.type.rawValue.uppercased()) • CALIDAD \(quality.quality) • \(quality.size)"
        activeStreamURL = URL(string: "http://127.0.0.1:8088/stream?torrent=\(quality.magnetUri.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? "")")
        isLiveStream = false
        torrentSeeds = quality.seeds
        torrentPeers = quality.peers
        downloadSpeedKBps = 1850
        isPlayerActive = true

        // Record in Continue Watching
        recordProgress(media: media, position: 0, duration: 7200)
    }

    public func recordProgress(media: MediaItem, position: Double, duration: Double) {
        let entry = PlaybackProgress(
            mediaId: media.id,
            title: media.title,
            subtitle: "\(media.year) • \(media.type.rawValue)",
            posterUrl: media.posterUrl,
            positionSeconds: position,
            durationSeconds: duration,
            lastWatched: Date.now
        )
        continueWatching.removeAll { $0.mediaId == media.id }
        continueWatching.insert(entry, at: 0)
        saveData()
    }

    public func closePlayer() {
        isPlayerActive = false
        activeStreamURL = nil
    }
}
