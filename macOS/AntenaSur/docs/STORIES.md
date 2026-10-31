# AntenaSur Stories

Prioritized backlog for the native macOS application.

## M1 Core Loop

### S-001 Browse sidebar sections
As the user, I navigate between Televisión, Películas, Series, and Biblioteca in the sidebar.
Screens: 01-sidebar.png
Acceptance:
- [snap] Selecting a sidebar section loads its grid or channel list in the content column.
- [self] Active sidebar item shows cyan accent indicator and bold typography.
- [unit] NavigationState preserves active section across view switches.
UX:
Surface: Sidebar page (A place people come back to, like a list or a collection)
Flow: Click sidebar item -> content column smoothly swaps to that section -> selection stays active
Status: todo

### S-002 Watch live television channels
As the user, I choose a television channel to stream immediately in the native player.
Screens: 02-live-tv.png
Depends: S-001
Acceptance:
- [snap] Channel list displays logo, channel name, and category badge.
- [self] Clicking a channel opens the player and starts HLS playback within 2 seconds.
- [unit] Channel parser successfully decodes M3U playlists and groups.
UX:
Surface: Inline (Changes one value on something already on screen)
Flow: Select channel from list -> player starts live broadcast -> Up/Down arrow keys zap to next channel
Status: todo

### S-003 Browse movie catalog with search
As the user, I filter movies by category or search by title.
Screens: 03-movies-grid.png
Depends: S-001
Acceptance:
- [snap] Movie cards display poster, year, rating badge, and title.
- [self] Typing in the toolbar search field filters the visible movies with 300ms debounce.
- [unit] Media catalog query filters correctly by genre tag.
UX:
Surface: Sidebar page with toolbar search field
Flow: Focus search field (Cmd-F) -> type query -> grid updates in place -> Escape clears search
Status: todo

### S-004 View movie details and available torrent qualities
As the user, I view a movie's synopsis, backdrop, duration, and torrent stream options.
Screens: 04-movie-detail.png
Depends: S-003
Acceptance:
- [snap] Detail view shows full Spanish synopsis, genre tags, and 4K/1080p/720p quality cards.
- [self] Each quality card displays resolution, audio language flags, file size, and seed count.
- [unit] Torrent scraper extracts and ranks stream candidates from highest to lowest quality.
UX:
Surface: Detail view (NavigationSplitView detail column)
Flow: Click movie card -> detail view slides in -> click quality card to launch stream -> Escape returns to catalog
Status: todo

### S-005 Stream movie with native P2P player
As the user, I stream a torrent movie with buffer indicator, Spanish subtitles, and audio selection.
Screens: 05-player.png
Depends: S-004
Acceptance:
- [snap] Player overlay shows buffer progress bar, download speed, and connected seeds.
- [self] Video playback starts once 24 MB pre-buffer threshold is reached without freezes.
- [unit] Subtitle downloader fetches Spanish UTF-8 subtitles and matches timestamps.
UX:
Surface: Full-window video overlay with auto-hiding HUD
Flow: Click quality card -> loading HUD displays download speed and seeds -> playback starts -> mouse movement reveals controls
Status: todo

### S-006 Browse series seasons and episodes
As the user, I choose a series to browse seasons and select individual episodes.
Screens: 06-series-detail.png
Depends: S-001
Acceptance:
- [snap] Season tabs allow switching between seasons.
- [self] Episode carousel displays episode number, Spanish title, still image, and synopsis.
- [unit] Series metadata parser parses season episode lists with Spanish localized titles.
UX:
Surface: Detail view with season segmented control and episode carousel
Flow: Select series -> choose season tab -> horizontal episode carousel scrolls into view -> click episode to inspect streams
Status: todo

### S-007 Stream series episode
As the user, I select an episode quality to stream immediately via P2P swarm.
Screens: 07-episode-player.png
Depends: S-006
Acceptance:
- [snap] Episode quality options filter out SD sources when 4K/1080p sources are present.
- [self] Player overlay displays "TEMPORADA X • EPISODIO Y" and streams smoothly.
- [unit] Episode stream resolver resolves specific torrent file index within multi-file torrents.
UX:
Surface: Full-window video overlay
Flow: Click episode source -> loading HUD reveals swarm connection -> video streams with subtitle sync
Status: todo

### S-008 Save and resume playback progress
As the user, my playback position is saved automatically so I can resume watching.
Screens: 08-continue-watching.png
Depends: S-005, S-007
Acceptance:
- [snap] Biblioteca section displays "Seguir Viendo" row with resume progress bars.
- [self] Resuming a title restores video playback to within 3 seconds of the last position.
- [unit] PlaybackState entity persists progress to SwiftData on pause or exit.
UX:
Surface: Section in Biblioteca page
Flow: Reopen app -> click title under Seguir Viendo -> playback resumes immediately from saved timestamp
Status: todo

## M2 System Integration

### S-009 Picture in Picture and media keys
As the user, I detach video to a floating PiP window and use keyboard media keys to play or pause.
Screens: 09-pip.png
Depends: S-005
Acceptance:
- [self] Clicking PiP button detaches video to native macOS Picture in Picture window.
- [manual] Space bar and keyboard media keys toggle Play and Pause.
Status: todo

### S-010 Settings window and customization
As the user, I open Settings to configure accent color, cache size, and torrent tracker lists.
Screens: 10-settings.png
Depends: S-001
Acceptance:
- [snap] Settings window opens with Appearance, Playback, and Network tabs.
- [self] Changing accent color updates all buttons and badges immediately.
- [unit] User preferences persist across application relaunches.
UX:
Surface: New window (Settings window, Cmd-,)
Flow: Press Cmd-, -> Settings window opens -> select accent color -> changes take effect live
Status: todo

## Dropped
- Background torrent downloading when app is closed
- Cloud account sync across multiple Apple devices
- Commercial torrent tracker subscriptions
