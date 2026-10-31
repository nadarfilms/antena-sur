import Foundation

@MainActor
public enum SeedData {
    public static func insertIfRequested(into model: AppModel) {
        guard ProcessInfo.processInfo.environment["APP_SEED"] == "1" else { return }
        populateDefault(into: model)
    }

    public static func populateDefault(into model: AppModel) {
        model.channels = [
            Channel(id: "tvn", name: "TVN HD", group: "Nacionales", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Logo_TVN.png", streamUrl: "https://tvn-live.cdn.mdstrm.com/live-stream/607831f47bc5d115ad147f87/playlist.m3u8", isFavorite: true),
            Channel(id: "chv", name: "Chilevisión", group: "Nacionales", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Logo_Chilevisi%C3%B3n_2018.png", streamUrl: "https://turner-live.cdn.mdstrm.com/live-stream/5c8c0e2716a4be0798e29a8a/playlist.m3u8", isFavorite: true),
            Channel(id: "c13", name: "Canal 13", group: "Nacionales", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Canal_13_Chile_logo_2021.png", streamUrl: "https://canal13-live.cdn.mdstrm.com/live-stream/58bb14c622543d3a0e14bf26/playlist.m3u8", isFavorite: true),
            Channel(id: "mega", name: "Mega HD", group: "Nacionales", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_Mega_2020.png", streamUrl: "https://mega-live.cdn.mdstrm.com/live-stream/5cb60f697bc5d107a7ebc4c1/playlist.m3u8"),
            Channel(id: "24h", name: "24 Horas Noticias", group: "Noticias", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Logo_24Horas.png", streamUrl: "https://tvn-live.cdn.mdstrm.com/live-stream/607833a67bc5d115ad147f89/playlist.m3u8"),
            Channel(id: "cnn", name: "CNN Chile", group: "Noticias", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/CNN_Chile_2018.png", streamUrl: "https://turner-live.cdn.mdstrm.com/live-stream/5e1774b122543d077a7feeb9/playlist.m3u8"),
            Channel(id: "cdtv", name: "CDO Más Deportes", group: "Deportes", logoUrl: "https://static.wikia.nocookie.net/tvpedia/images/4/4b/Canal_del_Deporte_Ol%C3%ADmpico.png", streamUrl: "https://stream.canalcdotv.cl/live/cdo/playlist.m3u8"),
            Channel(id: "sur", name: "Antena Sur HD", group: "Regionales", logoUrl: "https://antenasur.cl/img/logo.png", streamUrl: "https://stream.antenasur.cl/hls/live.m3u8", isFavorite: true)
        ]

        model.movies = [
            MediaItem(
                id: "m-dune2",
                tmdbId: 693134,
                type: .movie,
                title: "Duna: Parte Dos",
                year: "2024",
                posterUrl: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
                overview: "Paul Atreides se une a Chani y a los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia. Ante la disyuntiva de elegir entre el amor de su vida y el destino del universo conocido, emprende una cruzada para evitar un futuro terrible que solo él puede prever.",
                rating: 8.4,
                genres: ["Ciencia Ficción", "Aventura"],
                isFavorite: true
            ),
            MediaItem(
                id: "m-oppenheimer",
                tmdbId: 872585,
                type: .movie,
                title: "Oppenheimer",
                year: "2023",
                posterUrl: "https://image.tmdb.org/t/p/w500/ncKCQVJelvAcHAMMWv4zff1WkC4.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/fm6K9vY9wgjhCwMHwA5fyUCOwLO.jpg",
                overview: "La historia del físico estadounidense J. Robert Oppenheimer, su papel al frente del Proyecto Manhattan y las secuelas éticas y políticas tras el desarrollo de la bomba atómica durante la Segunda Guerra Mundial.",
                rating: 8.9,
                genres: ["Drama", "Historia", "Biografía"],
                isFavorite: true
            ),
            MediaItem(
                id: "m-gladiator2",
                tmdbId: 558449,
                type: .movie,
                title: "Gladiador II",
                year: "2024",
                posterUrl: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRHbtVIeaqqHG.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/euYIwmwkmz95mnXvufEmbL69ovr.jpg",
                overview: "Años después de presenciar la muerte del admirado héroe Máximo a manos de su tío, Lucio debe entrar en el Coliseo tras ser testigo de la conquista de su hogar por parte de los tiránicos emperadores que ahora dirigen Roma.",
                rating: 7.8,
                genres: ["Acción", "Aventura", "Historia"]
            ),
            MediaItem(
                id: "m-interstellar",
                tmdbId: 157336,
                type: .movie,
                title: "Interestelar",
                year: "2014",
                posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/rAiYTsqJJR0nhkQw852apqQw20.jpg",
                overview: "Un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con condiciones necesarias para reemplazar a la Tierra y salvar la especie humana.",
                rating: 9.1,
                genres: ["Ciencia Ficción", "Drama"]
            )
        ]

        model.series = [
            MediaItem(
                id: "s-shogun",
                tmdbId: 126308,
                type: .series,
                title: "Shōgun",
                year: "2024",
                posterUrl: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/n21uFpQ73JgGq2q5Q4F52K5lW1X.jpg",
                overview: "En el Japón del año 1600, Lord Toranaga lucha por su vida contra sus enemigos en el Consejo de Regentes mientras un misterioso barco europeo aparece varado en un pueblo pesquero cercano.",
                rating: 8.7,
                genres: ["Drama", "Guerra", "Historia"],
                isFavorite: true
            ),
            MediaItem(
                id: "s-penguin",
                tmdbId: 135401,
                type: .series,
                title: "El Pingüino",
                year: "2024",
                posterUrl: "https://image.tmdb.org/t/p/w500/v9Qo5x045wS7K2qV2qX2qX2qX2.jpg",
                backdropUrl: "https://image.tmdb.org/t/p/original/x88F5y5Z5y5Z5y5Z5y5Z5y5Z5.jpg",
                overview: "Oswald 'Oz' Cobb se abre camino en el peligroso inframundo criminal de Gotham City tras el colapso provocado por el Acertijo, buscando consolidar su poder.",
                rating: 8.8,
                genres: ["Crimen", "Drama"]
            )
        ]

        model.continueWatching = [
            PlaybackProgress(
                mediaId: "m-dune2",
                title: "Duna: Parte Dos",
                subtitle: "2024 • Película",
                posterUrl: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
                positionSeconds: 3840,
                durationSeconds: 9960
            )
        ]

        model.saveData()
    }
}
