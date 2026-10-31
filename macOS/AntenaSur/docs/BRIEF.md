# AntenaSur

Native macOS streaming application for live television channels, movies, and TV series with integrated peer-to-peer playback.

## Replaces
Web browser streaming tabs and third-party IPTV desktop wrappers.

## Main jobs
1. Watch live television with an instant channel guide and fast zapping.
2. Browse movies and series with full Spanish metadata, seasons, and episodes.
3. Stream movies and episodes through peer-to-peer swarms with selectable audio and Spanish subtitles.

## Data
- Channel: id, name, category, logoUrl, streamUrl, isFavorite
- MediaItem: id, tmdbId, kind (movie or series), title, year, posterUrl, backdropUrl, overview, rating, genres
- Episode: id, seasonNumber, episodeNumber, title, overview, stillUrl, durationSeconds
- TorrentSource: title, quality (4K, 1080p, 720p), sizeBytes, seeds, peers, magnetUri, fileIndex
- PlaybackHistory: mediaId, episodeId, positionSeconds, durationSeconds, completed, lastWatchedDate

## Shape
NavigationSplitView sidebar window, macOS 26 or later.
Local cache with SwiftData. Stream on demand. No accounts required.

## System hooks
Now Playing integration, Picture in Picture (PiP), media playback keys, Fullscreen mode.

## Reference
Apple TV app and Plex desktop, translated to native macOS SwiftUI controls.

## Look
Native macOS with Liquid Glass materials and an Antena Sur cyan accent color (#00E5FF). Dark glass presentation for video playback with system standard typography.

## Not in version one
- Offline background downloads to disk
- Plex remote server publishing
- Cloud account synchronization
