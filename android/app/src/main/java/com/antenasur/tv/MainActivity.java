package com.antenasur.tv;

import android.annotation.SuppressLint;
import android.app.UiModeManager;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.webkit.WebViewAssetLoader;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.json.JSONArray;
import org.json.JSONObject;

public class MainActivity extends AppCompatActivity {

    private WebView mWebView;
    private WebViewAssetLoader mAssetLoader;
    private long mLastBackPressTime = 0;
    private long mLastNavTime = 0;

    public boolean isTvDevice() {
        UiModeManager uiModeManager = (UiModeManager) getSystemService(UI_MODE_SERVICE);
        if (uiModeManager != null && uiModeManager.getCurrentModeType() == Configuration.UI_MODE_TYPE_TELEVISION) {
            return true;
        }
        PackageManager pm = getPackageManager();
        if (pm.hasSystemFeature(PackageManager.FEATURE_LEANBACK)) {
            return true;
        }
        // Dispositivos sin pantalla táctil ni telefonía (ej. TV Box Android AOSP estándar)
        if (!pm.hasSystemFeature(PackageManager.FEATURE_TOUCHSCREEN) && !pm.hasSystemFeature(PackageManager.FEATURE_TELEPHONY)) {
            return true;
        }
        return false;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Adaptación de orientación:
        // En Smart TV / Android TV / TV Box: fija en horizontal (landscape)
        // En Smartphones y Tablets: orientación dinámica del sensor (comienza en vertical si se sostiene vertical)
        if (isTvDevice()) {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
        } else {
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_USER);
        }

        // Pantalla completa inmersiva
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(
                WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN
        );
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        setupImmersiveMode();
        setupWebView();
    }

    private void setupImmersiveMode() {
        View decorView = getWindow().getDecorView();
        int uiOptions = View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
        decorView.setSystemUiVisibility(uiOptions);

        decorView.setOnSystemUiVisibilityChangeListener(visibility -> {
            if ((visibility & View.SYSTEM_UI_FLAG_FULLSCREEN) == 0) {
                decorView.setSystemUiVisibility(uiOptions);
            }
        });
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void setupWebView() {
        mWebView = new WebView(this);
        mWebView.setBackgroundColor(Color.parseColor("#070B13"));
        mWebView.setLayerType(View.LAYER_TYPE_HARDWARE, null);
        setContentView(mWebView);

        // Cargador de recursos locales autónomo (empaquetado dentro del APK)
        mAssetLoader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();

        WebSettings settings = mWebView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setTextZoom(100);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setSupportMultipleWindows(false);
        settings.setJavaScriptCanOpenWindowsAutomatically(false);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            settings.setOffscreenPreRaster(true);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }

        // Identificador User Agent: Android TV para Smart TVs y Mobile para celulares
        if (isTvDevice()) {
            String customUA = "Mozilla/5.0 (Linux; Android 12; Android TV Build/STT1.220610.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 AntenaSurTV/1.0";
            settings.setUserAgentString(customUA);
        } else {
            String defaultUA = settings.getUserAgentString();
            if (defaultUA != null) {
                settings.setUserAgentString(defaultUA + " AntenaSurMobile/1.0");
            }
        }

        // Interfaz JavaScript nativa para control de orientación y detección de plataforma
        mWebView.addJavascriptInterface(new Object() {
            @JavascriptInterface
            public boolean isTv() {
                return isTvDevice();
            }

            @JavascriptInterface
            public void setOrientation(String mode) {
                runOnUiThread(() -> {
                    if (!isTvDevice()) {
                        if ("landscape".equalsIgnoreCase(mode)) {
                            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
                        } else if ("portrait".equalsIgnoreCase(mode)) {
                            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_PORTRAIT);
                        } else {
                            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_USER);
                        }
                    }
                });
            }
        }, "AndroidNative");

        mWebView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onCreateWindow(WebView view, boolean isDialog, boolean isUserGesture, android.os.Message resultMsg) {
                // Bloquea por completo cualquier ventana emergente o popup publicitario
                return false;
            }

            @Override
            public boolean onConsoleMessage(android.webkit.ConsoleMessage consoleMessage) {
                android.util.Log.d("AntenaSurTV_JS", consoleMessage.message() + " [" + consoleMessage.sourceId() + ":" + consoleMessage.lineNumber() + "]");
                return true;
            }
        });

        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String urlStr = request.getUrl() != null ? request.getUrl().toString() : "";
                if (isAdRequest(urlStr)) {
                    return true; // Bloquea redirección o apertura externa de publicidad
                }
                return false;
            }

            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                try {
                    Uri uri = request.getUrl();
                    String urlStr = uri != null ? uri.toString() : "";

                    // Neutralización y salto instantáneo de redes publicitarias y pre-rolls
                    if (isAdRequest(urlStr)) {
                        Map<String, String> noCacheHeaders = new HashMap<>();
                        noCacheHeaders.put("Access-Control-Allow-Origin", "*");
                        return new WebResourceResponse("text/plain", "UTF-8", 204, "No Content", noCacheHeaders, new ByteArrayInputStream(new byte[0]));
                    }

                    // Proxy HLS inteligente nativo en Java para señales que exigen Referer (Canal 13, TVN, etc.)
                    if (uri.getPath() != null && uri.getPath().contains("/api/proxy")) {
                        WebResourceResponse proxyResp = handleHlsProxy(request);
                        if (proxyResp != null) return proxyResp;
                    }

                    // Intercepción nativa de Now Playing para Android TV (Artistas y Canciones en Vivo)
                    if (uri.getPath() != null && uri.getPath().contains("/api/nowplaying")) {
                        WebResourceResponse npResp = handleNowPlaying(request);
                        if (npResp != null) return npResp;
                    }

                    // Intercepción nativa de Live Probe para Android TV
                    if (uri.getPath() != null && uri.getPath().contains("/api/live/probe")) {
                        WebResourceResponse probeResp = handleLiveProbe(request);
                        if (probeResp != null) return probeResp;
                    }

                    // Intercepción nativa de Cinema & Series VOD para Android TV / Mobile Autónomo
                    if (uri.getPath() != null && uri.getPath().contains("/api/cinema")) {
                        WebResourceResponse cinemaResp = handleCinemaApi(request);
                        if (cinemaResp != null) return cinemaResp;
                    }

                    WebResourceResponse response = mAssetLoader.shouldInterceptRequest(uri);
                    if (response != null) {
                        try {
                            Map<String, String> headers = response.getResponseHeaders();
                            if (headers == null) {
                                headers = new HashMap<>();
                            } else {
                                headers = new HashMap<>(headers);
                            }
                            headers.put("Access-Control-Allow-Origin", "*");
                            headers.put("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
                            response.setResponseHeaders(headers);
                        } catch (Throwable ignored) {}

                        String path = uri.getPath();
                        if (path != null) {
                            if (path.endsWith(".js") || path.endsWith(".mjs")) {
                                response.setMimeType("application/javascript");
                                response.setEncoding("UTF-8");
                            } else if (path.endsWith(".json")) {
                                response.setMimeType("application/json");
                                response.setEncoding("UTF-8");
                            } else if (path.endsWith(".css")) {
                                response.setMimeType("text/css");
                                response.setEncoding("UTF-8");
                            }
                        }
                    }
                    return response;
                } catch (Throwable t) {
                    android.util.Log.e("AntenaSurTV", "Error interceptando recurso local: " + t.getMessage());
                    return super.shouldInterceptRequest(view, request);
                }
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, android.webkit.WebResourceError error) {
                // Previene que errores en subrecursos o iframes muestren la pantalla de error de Android
                if (!request.isForMainFrame()) {
                    return;
                }
                super.onReceivedError(view, request, error);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                mWebView.requestFocus();
                mWebView.evaluateJavascript("if (window.initTvFocus) window.initTvFocus();", null);
                mWebView.evaluateJavascript(
                    "(function() {" +
                    "  setInterval(function() {" +
                    "    try {" +
                    "      var btns = document.querySelectorAll('.cerrar, [onclick*=\"ads13PrestitialTrigger\"], [class*=\"skip\"], [class*=\"saltar\"], button[aria-label*=\"Skip\"], .videoAdUiSkipButton, [class*=\"ad-skip\"], [class*=\"advertisement-skip\"]');" +
                    "      for (var i = 0; i < btns.length; i++) { btns[i].click(); }" +
                    "      var ads = document.querySelectorAll('#ittmobile, .ads13, .banner-top, [id*=\"google_ads\"], [class*=\"ad-container\"], [class*=\"preroll\"], [id*=\"preroll\"]');" +
                    "      for (var j = 0; j < ads.length; j++) { ads[j].style.display = 'none'; }" +
                    "    } catch(e) {}" +
                    "  }, 600);" +
                    "})();", null
                );
                mWebView.postDelayed(() -> {
                    mWebView.evaluateJavascript("if (window.initTvFocus) window.initTvFocus();", null);
                }, 300);
            }
        });

        // Asegurar foco para el control remoto
        mWebView.setFocusable(true);
        mWebView.setFocusableInTouchMode(true);
        mWebView.requestFocus();

        // Cargar la aplicación localmente desde el APK de forma 100% autónoma
        mWebView.loadUrl("https://appassets.androidplatform.net/assets/www/index.html");
    }

    private WebResourceResponse handleHlsProxy(WebResourceRequest request) {
        try {
            Uri uri = request.getUrl();
            String targetUrl = uri.getQueryParameter("url");
            String ref = uri.getQueryParameter("ref");
            if (targetUrl == null || targetUrl.isEmpty()) return null;

            if (ref == null || ref.isEmpty()) {
                String low = targetUrl.toLowerCase();
                if (low.contains("13") || low.contains("dpsgo.com")) ref = "https://www.13.cl/";
                else if (low.contains("tvn") || low.contains("ntv") || low.contains("tvchile") || low.contains("mdstrm.com")) ref = "https://www.tvn.cl/";
                else if (low.contains("uchile")) ref = "https://tv.uchile.cl/";
                else if (low.contains("chv") || low.contains("rudo.video")) ref = "https://www.chilevision.cl/";
                else if (low.contains("mega")) ref = "https://www.mega.cl/";
                else if (low.contains("lared")) ref = "https://www.lared.cl/";
                else ref = "https://www.13.cl/";
            }

            URL url = new URL(targetUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36");
            conn.setRequestProperty("Referer", ref);
            conn.setRequestProperty("Accept", "*/*");
            conn.setConnectTimeout(8000);
            conn.setReadTimeout(10000);

            String range = request.getRequestHeaders().get("Range");
            if (range != null) {
                conn.setRequestProperty("Range", range);
            }

            int redirects = 0;
            while (redirects < 5) {
                int responseCode = conn.getResponseCode();
                if (responseCode >= 300 && responseCode < 400) {
                    String loc = conn.getHeaderField("Location");
                    if (loc == null || loc.isEmpty()) break;
                    URL nextUrl = new URL(url, loc);
                    targetUrl = nextUrl.toString();
                    url = nextUrl;
                    conn = (HttpURLConnection) url.openConnection();
                    conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36");
                    conn.setRequestProperty("Referer", ref);
                    conn.setConnectTimeout(8000);
                    conn.setReadTimeout(10000);
                    redirects++;
                } else {
                    break;
                }
            }

            int statusCode = conn.getResponseCode();
            if (statusCode < 200 || statusCode >= 400) {
                Map<String, String> errHeaders = new HashMap<>();
                errHeaders.put("Access-Control-Allow-Origin", "*");
                return new WebResourceResponse("text/plain", "UTF-8", statusCode >= 100 && statusCode < 600 ? statusCode : 502, "Error", errHeaders, new ByteArrayInputStream(new byte[0]));
            }

            String contentType = conn.getContentType();
            if (contentType == null || contentType.isEmpty()) {
                contentType = "application/octet-stream";
            } else if (contentType.contains(";")) {
                contentType = contentType.split(";")[0].trim();
            }

            boolean isM3u8 = targetUrl.toLowerCase().contains(".m3u8") || contentType.toLowerCase().contains("mpegurl");

            if (isM3u8) {
                BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                StringBuilder sb = new StringBuilder();
                String line;
                Pattern uriPattern = Pattern.compile("URI=\"([^\"]+)\"");
                while ((line = reader.readLine()) != null) {
                    String trimmed = line.trim();
                    if (trimmed.startsWith("#") && trimmed.contains("URI=\"")) {
                        Matcher m = uriPattern.matcher(line);
                        StringBuffer sbLine = new StringBuffer();
                        while (m.find()) {
                            String uriStr = m.group(1);
                            try {
                                URL resolvedKey = new URL(url, uriStr);
                                String proxyKey = "/api/proxy?url=" + Uri.encode(resolvedKey.toString()) + "&ref=" + Uri.encode(ref);
                                m.appendReplacement(sbLine, "URI=\"" + proxyKey + "\"");
                            } catch (Exception ignored) {
                                m.appendReplacement(sbLine, "URI=\"" + uriStr + "\"");
                            }
                        }
                        m.appendTail(sbLine);
                        sb.append(sbLine.toString()).append("\n");
                    } else if (!trimmed.isEmpty() && !trimmed.startsWith("#")) {
                        URL resolved = new URL(url, trimmed);
                        String proxySegment = "/api/proxy?url=" + Uri.encode(resolved.toString()) + "&ref=" + Uri.encode(ref);
                        sb.append(proxySegment).append("\n");
                    } else {
                        sb.append(line).append("\n");
                    }
                }
                reader.close();
                byte[] bytes = sb.toString().getBytes(StandardCharsets.UTF_8);
                Map<String, String> responseHeaders = new HashMap<>();
                responseHeaders.put("Access-Control-Allow-Origin", "*");
                responseHeaders.put("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
                return new WebResourceResponse("application/vnd.apple.mpegurl", "UTF-8", 200, "OK", responseHeaders, new ByteArrayInputStream(bytes));
            }

            Map<String, String> headers = new HashMap<>();
            headers.put("Access-Control-Allow-Origin", "*");
            headers.put("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
            String cl = conn.getHeaderField("Content-Length");
            if (cl != null) headers.put("Content-Length", cl);
            String cr = conn.getHeaderField("Content-Range");
            if (cr != null) headers.put("Content-Range", cr);
            String ar = conn.getHeaderField("Accept-Ranges");
            if (ar != null) headers.put("Accept-Ranges", ar);
            return new WebResourceResponse(contentType, null, statusCode == 206 ? 206 : 200, statusCode == 206 ? "Partial Content" : "OK", headers, conn.getInputStream());

        } catch (Exception e) {
            Map<String, String> errHeaders = new HashMap<>();
            errHeaders.put("Access-Control-Allow-Origin", "*");
            return new WebResourceResponse("text/plain", "UTF-8", 502, "Bad Gateway", errHeaders, new ByteArrayInputStream(new byte[0]));
        }
    }

    private WebResourceResponse handleLiveProbe(WebResourceRequest request) {
        try {
            Uri uri = request.getUrl();
            String targetUrl = uri.getQueryParameter("url");
            if (targetUrl == null || targetUrl.isEmpty()) {
                String empty = "{\"ok\":false}";
                return new WebResourceResponse("application/json", "UTF-8", 200, "OK", null, new ByteArrayInputStream(empty.getBytes(StandardCharsets.UTF_8)));
            }

            long start = System.currentTimeMillis();
            boolean ok = false;
            try {
                URL u = new URL(targetUrl);
                HttpURLConnection conn = (HttpURLConnection) u.openConnection();
                conn.setRequestMethod("HEAD");
                conn.setConnectTimeout(2500);
                conn.setReadTimeout(2500);
                int code = conn.getResponseCode();
                ok = (code >= 200 && code < 400);
            } catch (Throwable t) {
                ok = true; // Fallback tolerante si el CDN rechaza HEAD
            }
            long latency = Math.max(15, System.currentTimeMillis() - start);

            JSONObject json = new JSONObject();
            json.put("ok", ok);
            json.put("latencyMs", latency);
            byte[] bytes = json.toString().getBytes(StandardCharsets.UTF_8);

            Map<String, String> headers = new HashMap<>();
            headers.put("Access-Control-Allow-Origin", "*");
            return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(bytes));
        } catch (Throwable e) {
            String fallback = "{\"ok\":true,\"latencyMs\":60}";
            return new WebResourceResponse("application/json", "UTF-8", 200, "OK", null, new ByteArrayInputStream(fallback.getBytes(StandardCharsets.UTF_8)));
        }
    }

    private WebResourceResponse handleCinemaApi(WebResourceRequest request) {
        try {
            Uri uri = request.getUrl();
            String path = uri.getPath() != null ? uri.getPath() : "";

            // 1. Catálogo / Búsqueda de Películas: /api/cinema/movies
            if (path.contains("/api/cinema/movies")) {
                String query = uri.getQueryParameter("query");
                String genre = uri.getQueryParameter("genre");
                String sortBy = uri.getQueryParameter("sort_by");
                String page = uri.getQueryParameter("page");
                String limit = uri.getQueryParameter("limit");

                if (query == null) query = "";
                if (genre == null) genre = "";
                if (sortBy == null) sortBy = "download_count";
                if (page == null) page = "1";
                if (limit == null) limit = "25";

                String ytsSort = "download_count";
                String minRating = "6.5";
                if ("rating".equals(sortBy) || "imdb_rating".equals(sortBy)) {
                    ytsSort = "rating";
                    minRating = "7.8";
                } else if ("year".equals(sortBy) || "latest".equals(sortBy)) {
                    ytsSort = "year";
                    minRating = "6.2";
                } else if ("like_count".equals(sortBy) || "featured".equals(sortBy)) {
                    ytsSort = "like_count";
                    minRating = "6.8";
                }

                StringBuilder ytsUrl = new StringBuilder("https://yts.mx/api/v2/list_movies.json?sort_by=");
                ytsUrl.append(ytsSort).append("&page=").append(page).append("&limit=").append(limit);
                if (!query.isEmpty()) {
                    ytsUrl.append("&query_term=").append(URLEncoder.encode(query, "UTF-8"));
                } else {
                    ytsUrl.append("&minimum_rating=").append(minRating);
                }
                if (!genre.isEmpty() && !"all".equalsIgnoreCase(genre)) {
                    ytsUrl.append("&genre=").append(URLEncoder.encode(genre.toLowerCase(), "UTF-8"));
                }

                String ytsResp = fetchHttpUrl(ytsUrl.toString(), 6000);
                if (ytsResp != null && !ytsResp.isEmpty()) {
                    try {
                        JSONObject raw = new JSONObject(ytsResp);
                        if ("ok".equalsIgnoreCase(raw.optString("status"))) {
                            JSONObject data = raw.optJSONObject("data");
                            int count = data != null ? data.optInt("movie_count", 0) : 0;
                            JSONArray movies = data != null ? data.optJSONArray("movies") : new JSONArray();

                            JSONObject out = new JSONObject();
                            out.put("ok", true);
                            out.put("movie_count", count);
                            out.put("movies", movies != null ? movies : new JSONArray());

                            byte[] outBytes = out.toString().getBytes(StandardCharsets.UTF_8);
                            Map<String, String> headers = new HashMap<>();
                            headers.put("Access-Control-Allow-Origin", "*");
                            return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(outBytes));
                        }
                    } catch (Throwable ignored) {}
                }
            }

            // 2. Detalles de Película: /api/cinema/movie?id=...
            if (path.contains("/api/cinema/movie") && !path.contains("/movies") && !path.contains("/movie_torrents")) {
                String id = uri.getQueryParameter("id");
                if (id != null && !id.isEmpty()) {
                    String detailUrl = "https://yts.mx/api/v2/movie_details.json?movie_id=" + id + "&with_images=true&with_cast=true";
                    String detailResp = fetchHttpUrl(detailUrl, 6000);
                    if (detailResp != null && !detailResp.isEmpty()) {
                        try {
                            JSONObject raw = new JSONObject(detailResp);
                            JSONObject data = raw.optJSONObject("data");
                            JSONObject movie = data != null ? data.optJSONObject("movie") : null;
                            if (movie != null) {
                                String imdbCode = movie.optString("imdb_code");
                                if (imdbCode != null && !imdbCode.isEmpty()) {
                                    String cleanImdb = imdbCode.startsWith("tt") ? imdbCode : ("tt" + imdbCode);
                                    String torrResp = fetchHttpUrl("https://torrentio.strem.fun/stream/movie/" + cleanImdb + ".json", 4000);
                                    if (torrResp != null && !torrResp.isEmpty()) {
                                        try {
                                            JSONObject torrJson = new JSONObject(torrResp);
                                            JSONArray torrStreams = torrJson.optJSONArray("streams");
                                            JSONArray ytsTorrents = movie.optJSONArray("torrents");
                                            JSONArray filteredTorrents = processAndFilterStreamsJava(torrStreams, ytsTorrents, movie.optString("title"));
                                            if (filteredTorrents != null && filteredTorrents.length() > 0) {
                                                movie.put("torrents", filteredTorrents);
                                            }
                                        } catch (Throwable ignored) {}
                                    }
                                }
                                JSONObject out = new JSONObject();
                                out.put("ok", true);
                                out.put("movie", movie);
                                byte[] outBytes = out.toString().getBytes(StandardCharsets.UTF_8);
                                Map<String, String> headers = new HashMap<>();
                                headers.put("Access-Control-Allow-Origin", "*");
                                return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(outBytes));
                            }
                        } catch (Throwable ignored) {}
                    }
                }
            }

            // 2.1 Torrents enriquecidos de película por código IMDb: /api/cinema/movie_torrents?imdb=...
            if (path.contains("/api/cinema/movie_torrents")) {
                String imdb = uri.getQueryParameter("imdb");
                if (imdb != null && !imdb.isEmpty()) {
                    String cleanImdb = imdb.startsWith("tt") ? imdb : ("tt" + imdb);
                    String torrResp = fetchHttpUrl("https://torrentio.strem.fun/stream/movie/" + cleanImdb + ".json", 4000);
                    if (torrResp != null && !torrResp.isEmpty()) {
                        try {
                            JSONObject torrJson = new JSONObject(torrResp);
                            JSONArray torrStreams = torrJson.optJSONArray("streams");
                            JSONArray filteredStreams = processAndFilterStreamsJava(torrStreams, null, "Película");
                            JSONObject out = new JSONObject();
                            out.put("ok", true);
                            out.put("streams", filteredStreams != null ? filteredStreams : new JSONArray());
                            byte[] outBytes = out.toString().getBytes(StandardCharsets.UTF_8);
                            Map<String, String> headers = new HashMap<>();
                            headers.put("Access-Control-Allow-Origin", "*");
                            return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(outBytes));
                        } catch (Throwable ignored) {}
                    }
                }
            }

            // 3. Catálogo / Búsqueda de Series: /api/cinema/series
            if (path.contains("/api/cinema/series") && !path.contains("/details") && !path.contains("/episodes") && !path.contains("/episode_streams")) {
                String query = uri.getQueryParameter("query");
                String page = uri.getQueryParameter("page");
                int pageNum = 1;
                try { if (page != null) pageNum = Integer.parseInt(page); } catch (Throwable ignored) {}

                String tvUrl = (query != null && !query.trim().isEmpty())
                        ? "https://api.tvmaze.com/search/shows?q=" + URLEncoder.encode(query.trim(), "UTF-8")
                        : "https://api.tvmaze.com/shows?page=" + Math.max(0, pageNum - 1);

                String tvResp = fetchHttpUrl(tvUrl, 6000);
                if (tvResp != null && !tvResp.isEmpty()) {
                    try {
                        JSONArray outShows = new JSONArray();
                        if (query != null && !query.trim().isEmpty()) {
                            JSONArray rawArr = new JSONArray(tvResp);
                            for (int i = 0; i < rawArr.length(); i++) {
                                JSONObject item = rawArr.getJSONObject(i);
                                JSONObject s = item.optJSONObject("show");
                                if (s != null) {
                                    JSONObject clean = new JSONObject();
                                    clean.put("id", s.optInt("id"));
                                    clean.put("name", s.optString("name"));
                                    clean.put("summary", s.optString("summary"));
                                    clean.put("genres", s.optJSONArray("genres"));
                                    JSONObject img = s.optJSONObject("image");
                                    clean.put("poster", img != null ? img.optString("medium") : "");
                                    JSONObject ext = s.optJSONObject("externals");
                                    clean.put("imdb", ext != null ? ext.optString("imdb") : "");
                                    JSONObject rat = s.optJSONObject("rating");
                                    clean.put("rating", rat != null ? rat.optDouble("average", 7.5) : 7.5);
                                    outShows.put(clean);
                                }
                            }
                        } else {
                            JSONArray rawArr = new JSONArray(tvResp);
                            for (int i = 0; i < Math.min(rawArr.length(), 25); i++) {
                                JSONObject s = rawArr.getJSONObject(i);
                                JSONObject clean = new JSONObject();
                                clean.put("id", s.optInt("id"));
                                clean.put("name", s.optString("name"));
                                clean.put("summary", s.optString("summary"));
                                clean.put("genres", s.optJSONArray("genres"));
                                JSONObject img = s.optJSONObject("image");
                                clean.put("poster", img != null ? img.optString("medium") : "");
                                JSONObject ext = s.optJSONObject("externals");
                                clean.put("imdb", ext != null ? ext.optString("imdb") : "");
                                JSONObject rat = s.optJSONObject("rating");
                                clean.put("rating", rat != null ? rat.optDouble("average", 7.5) : 7.5);
                                outShows.put(clean);
                            }
                        }

                        JSONObject out = new JSONObject();
                        out.put("ok", true);
                        out.put("shows", outShows);
                        byte[] outBytes = out.toString().getBytes(StandardCharsets.UTF_8);
                        Map<String, String> headers = new HashMap<>();
                        headers.put("Access-Control-Allow-Origin", "*");
                        return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(outBytes));
                    } catch (Throwable ignored) {}
                }
            }

            // 4. Detalles de Serie: /api/cinema/series/details
            if (path.contains("/api/cinema/series/details")) {
                String id = uri.getQueryParameter("id");
                String imdb = uri.getQueryParameter("imdb");
                String lookupUrl = (id != null && !id.isEmpty())
                        ? "https://api.tvmaze.com/shows/" + id
                        : "https://api.tvmaze.com/lookup/shows?imdb=" + (imdb != null ? imdb : "");

                String showResp = fetchHttpUrl(lookupUrl, 6000);
                if (showResp != null && !showResp.isEmpty()) {
                    try {
                        JSONObject s = new JSONObject(showResp);
                        JSONObject out = new JSONObject();
                        out.put("ok", true);
                        out.put("show", s);
                        byte[] outBytes = out.toString().getBytes(StandardCharsets.UTF_8);
                        Map<String, String> headers = new HashMap<>();
                        headers.put("Access-Control-Allow-Origin", "*");
                        return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(outBytes));
                    } catch (Throwable ignored) {}
                }
            }

            // 5. Episodios de Serie: /api/cinema/series/episodes
            if (path.contains("/api/cinema/series/episodes")) {
                String id = uri.getQueryParameter("id");
                if (id != null && !id.isEmpty()) {
                    String epUrl = "https://api.tvmaze.com/shows/" + id + "/episodes";
                    String epResp = fetchHttpUrl(epUrl, 6000);
                    if (epResp != null && !epResp.isEmpty()) {
                        try {
                            JSONArray eps = new JSONArray(epResp);
                            JSONObject out = new JSONObject();
                            out.put("ok", true);
                            out.put("episodes", eps);
                            byte[] outBytes = out.toString().getBytes(StandardCharsets.UTF_8);
                            Map<String, String> headers = new HashMap<>();
                            headers.put("Access-Control-Allow-Origin", "*");
                            return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(outBytes));
                        } catch (Throwable ignored) {}
                    }
                }
            }

            // 6. Streams de Episodio: /api/cinema/series/episode_streams
            if (path.contains("/api/cinema/series/episode_streams")) {
                String imdb = uri.getQueryParameter("imdb");
                String s = uri.getQueryParameter("season");
                String ep = uri.getQueryParameter("episode");
                if (imdb != null && !imdb.isEmpty()) {
                    String cleanImdb = imdb.startsWith("tt") ? imdb : ("tt" + imdb);
                    String sNum = (s != null && !s.isEmpty()) ? s : "1";
                    String epNum = (ep != null && !ep.isEmpty()) ? ep : "1";
                    String streamUrl = "https://torrentio.strem.fun/stream/series/" + cleanImdb + ":" + sNum + ":" + epNum + ".json";
                    String stResp = fetchHttpUrl(streamUrl, 5000);
                    if (stResp != null && !stResp.isEmpty()) {
                        try {
                            JSONObject raw = new JSONObject(stResp);
                            JSONArray rawStreams = raw.optJSONArray("streams");
                            JSONArray filteredStreams = processAndFilterStreamsJava(rawStreams, null, "Episodio S" + sNum + "E" + epNum);
                            JSONObject out = new JSONObject();
                            out.put("ok", true);
                            out.put("streams", filteredStreams != null ? filteredStreams : new JSONArray());
                            byte[] outBytes = out.toString().getBytes(StandardCharsets.UTF_8);
                            Map<String, String> headers = new HashMap<>();
                            headers.put("Access-Control-Allow-Origin", "*");
                            return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(outBytes));
                        } catch (Throwable ignored) {}
                    }
                }
            }

            // 7. Biblioteca y Usuarios Locales Plex: /api/cinema/user/*
            if (path.contains("/api/cinema/auth/users")) {
                String dummy = "{\"ok\":true,\"profiles\":[{\"username\":\"helmuth\",\"displayName\":\"Helmuth\",\"avatarColor\":\"#00e5ff\"}]}";
                Map<String, String> headers = new HashMap<>();
                headers.put("Access-Control-Allow-Origin", "*");
                return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(dummy.getBytes(StandardCharsets.UTF_8)));
            }

            if (path.contains("/api/cinema/user/library")) {
                String dummy = "{\"ok\":true,\"library\":{\"username\":\"helmuth\",\"displayName\":\"Helmuth\",\"avatarColor\":\"#00e5ff\",\"favorites\":[],\"inProgress\":[],\"watched\":[]}}";
                Map<String, String> headers = new HashMap<>();
                headers.put("Access-Control-Allow-Origin", "*");
                return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(dummy.getBytes(StandardCharsets.UTF_8)));
            }

            if (path.contains("/api/cinema/user/recommendations")) {
                String dummy = "{\"ok\":true,\"recommended\":[]}";
                Map<String, String> headers = new HashMap<>();
                headers.put("Access-Control-Allow-Origin", "*");
                return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(dummy.getBytes(StandardCharsets.UTF_8)));
            }

            if (path.contains("/api/cinema/user/favorite") || path.contains("/api/cinema/user/mark_watched") || path.contains("/api/cinema/user/progress")) {
                String okStr = "{\"ok\":true}";
                Map<String, String> headers = new HashMap<>();
                headers.put("Access-Control-Allow-Origin", "*");
                return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(okStr.getBytes(StandardCharsets.UTF_8)));
            }

        } catch (Throwable t) {
            android.util.Log.e("AntenaSurTV", "Error en handleCinemaApi: " + t.getMessage());
        }
        return null;
    }

    private String fetchHttpUrl(String targetUrl, int timeoutMs) {
        HttpURLConnection conn = null;
        try {
            URL url = new URL(targetUrl);
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
            conn.setConnectTimeout(timeoutMs);
            conn.setReadTimeout(timeoutMs);
            int code = conn.getResponseCode();
            if (code >= 200 && code < 400) {
                BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8));
                StringBuilder sb = new StringBuilder();
                String line;
                while ((line = br.readLine()) != null) {
                    sb.append(line);
                }
                br.close();
                return sb.toString();
            }
        } catch (Throwable ignored) {
        } finally {
            if (conn != null) {
                try { conn.disconnect(); } catch (Throwable ignored) {}
            }
        }
        return null;
    }

    private static final Pattern CAM_3D_PATTERN = Pattern.compile("(?i)(?:^|[\\s._\\-\\[\\]()/])(cam|hdcam|camrip|telesync|ts|hdts|telecine|tc|hdtc|screener|scr|dvdscr|bdscr|workprint|wp|3d|half-sbs|hsbs|half-ou|hou|sbs)(?:$|[\\s._\\-\\[\\]()/])");
    private static final Pattern Q4K_PATTERN = Pattern.compile("(?i)\\b(2160p|4k|uhd)\\b");
    private static final Pattern Q1080_PATTERN = Pattern.compile("(?i)\\b(1080p|fhd|1080i)\\b");
    private static final Pattern Q720_PATTERN = Pattern.compile("(?i)\\b(720p|hd|hdtv)\\b");
    private static final Pattern Q480_PATTERN = Pattern.compile("(?i)\\b(480p|480i|sd|dvdrip)\\b");
    private static final Pattern SEEDS_PATTERN = Pattern.compile("👤\\s*(\\d+)");
    private static final Pattern SIZE_PATTERN = Pattern.compile("💾\\s*([\\d.]+\\s*[MG]B)", Pattern.CASE_INSENSITIVE);

    private static final Pattern LATINO_PATTERN = Pattern.compile("(?i)\\b(latino|lat|es-419|es-la|mx|mexico|colombia|chile|argentina)\\b");
    private static final Pattern CASTELLANO_PATTERN = Pattern.compile("(?i)\\b(castellano|cast|es-es|spain)\\b");
    private static final Pattern SPANISH_PATTERN = Pattern.compile("(?i)\\b(español|spanish|spa|esp)\\b");
    private static final Pattern ENGLISH_PATTERN = Pattern.compile("(?i)\\b(english|eng|en)\\b");
    private static final Pattern DUAL_PATTERN = Pattern.compile("(?i)\\b(dual|multi audio|multi|multi-audio|dub|mvo|dvdrip)\\b");

    private static final String[] TORRENT_TRACKERS = new String[] {
        "udp://tracker.opentrackr.org:1337/announce",
        "udp://open.tracker.cl:1337/announce",
        "udp://open.demonii.com:1337/announce",
        "udp://open.stealth.si:80/announce",
        "udp://tracker.torrent.eu.org:451/announce",
        "udp://tracker.openbittorrent.com:80/announce",
        "wss://tracker.btorrent.xyz",
        "wss://tracker.openwebtorrent.com"
    };

    private static String buildMagnetUriJava(String hash, String title) {
        if (hash == null || hash.isEmpty()) return "";
        try {
            StringBuilder sb = new StringBuilder();
            sb.append("magnet:?xt=urn:btih:").append(hash);
            sb.append("&dn=").append(URLEncoder.encode(title != null ? title : "Torrent", "UTF-8"));
            for (String tr : TORRENT_TRACKERS) {
                sb.append("&tr=").append(URLEncoder.encode(tr, "UTF-8"));
            }
            return sb.toString();
        } catch (Throwable t) {
            return "magnet:?xt=urn:btih:" + hash;
        }
    }

    private static List<String> extractFlagsJava(String text) {
        List<String> flags = new ArrayList<>();
        if (text == null || text.isEmpty()) return flags;
        try {
            Pattern p = Pattern.compile("([\\x{1F1E6}-\\x{1F1FF}]{2})");
            Matcher m = p.matcher(text);
            while (m.find()) {
                String flg = m.group(1);
                if (!flags.contains(flg)) flags.add(flg);
            }
        } catch (Throwable ignored) {}
        return flags;
    }

    private static JSONArray processAndFilterStreamsJava(JSONArray rawStreams, JSONArray ytsTorrents, String defaultTitle) {
        List<JSONObject> b4k = new ArrayList<>();
        List<JSONObject> b1080 = new ArrayList<>();
        List<JSONObject> b720 = new ArrayList<>();
        List<JSONObject> b480 = new ArrayList<>();
        Set<String> seenHashes = new HashSet<>();

        if (rawStreams != null) {
            for (int i = 0; i < rawStreams.length(); i++) {
                JSONObject s = rawStreams.optJSONObject(i);
                if (s == null) continue;
                String h = s.optString("infoHash", s.optString("hash", "")).trim().toLowerCase();
                if (h.isEmpty() || seenHashes.contains(h)) continue;
                seenHashes.add(h);

                String title = s.optString("title", "");
                String name = s.optString("name", "");
                String rawQ = s.optString("quality", "").trim();
                String combined = name + " " + title + " " + rawQ;

                if (CAM_3D_PATTERN.matcher(combined).find()) continue;

                int seeds = 0;
                Matcher sm = SEEDS_PATTERN.matcher(title);
                if (sm.find()) {
                    try { seeds = Integer.parseInt(sm.group(1)); } catch (Throwable ignored) {}
                } else {
                    seeds = s.optInt("seeds", 0);
                }

                String size = "HD";
                Matcher szm = SIZE_PATTERN.matcher(title);
                if (szm.find()) {
                    size = szm.group(1);
                } else {
                    size = s.optString("size", "HD");
                }

                int fileIdx = s.optInt("fileIdx", 0);
                String cleanTitle = title.contains("\n") ? title.split("\n")[0].trim() : (name.isEmpty() ? (defaultTitle != null ? defaultTitle : "Video") : name);
                String magnet = s.optString("magnet_url", buildMagnetUriJava(h, cleanTitle));

                String textForQ = name + " " + title;
                String rawQUp = rawQ.toUpperCase();
                String q = "";
                if (Q4K_PATTERN.matcher(textForQ).find() || rawQUp.equals("4K") || rawQUp.equals("2160P") || rawQUp.equals("UHD")) {
                    q = "4K";
                } else if (Q1080_PATTERN.matcher(textForQ).find() || rawQUp.equals("1080P") || rawQUp.equals("FHD") || rawQUp.equals("1080I")) {
                    q = "1080p";
                } else if (Q720_PATTERN.matcher(textForQ).find() || rawQUp.equals("720P") || rawQUp.equals("HD")) {
                    q = "720p";
                } else if (Q480_PATTERN.matcher(textForQ).find() || rawQUp.equals("480P") || rawQUp.equals("SD")) {
                    q = "480p";
                } else {
                    continue;
                }

                List<String> flags = extractFlagsJava(textForQ);
                String textForQLower = textForQ.toLowerCase();
                boolean isLatino = LATINO_PATTERN.matcher(textForQLower).find();
                boolean isCastellano = CASTELLANO_PATTERN.matcher(textForQLower).find();
                boolean isSpanish = SPANISH_PATTERN.matcher(textForQLower).find() || flags.contains("🇪🇸") || flags.contains("🇲🇽") || isLatino || isCastellano;
                boolean isEnglish = ENGLISH_PATTERN.matcher(textForQLower).find() || flags.contains("🇬🇧") || flags.contains("🇺🇸");
                boolean isDual = DUAL_PATTERN.matcher(textForQLower).find() || flags.size() > 1;

                if (isLatino && !flags.contains("🇲🇽")) flags.add(0, "🇲🇽");
                else if (isCastellano && !flags.contains("🇪🇸")) flags.add(0, "🇪🇸");
                else if (isSpanish && !flags.contains("🇪🇸") && !flags.contains("🇲🇽")) flags.add(0, "🇪🇸");

                if (isEnglish && !flags.contains("🇬🇧") && !flags.contains("🇺🇸")) flags.add("🇺🇸");
                if (flags.isEmpty()) flags.add("🇺🇸");

                String audioDesc;
                if (isLatino && isEnglish) audioDesc = "Dual Latino";
                else if (isLatino) audioDesc = "Español Latino";
                else if (isCastellano && isEnglish) audioDesc = "Castellano / Dual";
                else if (isCastellano) audioDesc = "Castellano";
                else if (isSpanish && isDual) audioDesc = "Dual Español";
                else if (isSpanish) audioDesc = "Español";
                else if (isDual) audioDesc = "Multi Audio";
                else if (flags.contains("🇬🇧") || flags.contains("🇺🇸") || isEnglish) audioDesc = "Inglés (V.O.)";
                else audioDesc = "Audio Original";

                try {
                    JSONObject item = new JSONObject();
                    item.put("quality", q);
                    item.put("title", cleanTitle);
                    item.put("size", size);
                    item.put("seeds", seeds);
                    JSONArray fArr = new JSONArray();
                    for (String fl : flags) fArr.put(fl);
                    item.put("flags", fArr);
                    item.put("audio", flags.get(0) + " " + audioDesc);
                    item.put("hash", h);
                    item.put("fileIdx", fileIdx);
                    item.put("magnet_url", magnet);
                    item.put("type", "torrent");

                    if (q.equals("4K")) b4k.add(item);
                    else if (q.equals("1080p")) b1080.add(item);
                    else if (q.equals("720p")) b720.add(item);
                    else if (q.equals("480p")) b480.add(item);
                } catch (Throwable ignored) {}
            }
        }

        if (ytsTorrents != null) {
            for (int i = 0; i < ytsTorrents.length(); i++) {
                JSONObject yt = ytsTorrents.optJSONObject(i);
                if (yt == null) continue;
                String h = yt.optString("hash", "").trim().toLowerCase();
                if (h.isEmpty() || seenHashes.contains(h)) continue;
                seenHashes.add(h);

                String rawQ = yt.optString("quality", "").trim().toUpperCase();
                String q = "1080p";
                if (rawQ.equals("2160P") || rawQ.equals("4K") || rawQ.equals("UHD")) q = "4K";
                else if (rawQ.equals("1080P") || rawQ.equals("FHD")) q = "1080p";
                else if (rawQ.equals("720P") || rawQ.equals("HD")) q = "720p";
                else if (rawQ.equals("480P") || rawQ.equals("SD")) q = "480p";

                String size = yt.optString("size", "HD");
                int seeds = yt.optInt("seeds", 50);
                String cleanTitle = (defaultTitle != null ? defaultTitle : "Película") + " [" + q + "]";
                String magnet = yt.optString("magnet_url", buildMagnetUriJava(h, cleanTitle));

                try {
                    JSONObject item = new JSONObject();
                    item.put("quality", q);
                    item.put("title", cleanTitle);
                    item.put("size", size);
                    item.put("seeds", seeds);
                    JSONArray fArr = new JSONArray();
                    fArr.put("🇺🇸");
                    item.put("flags", fArr);
                    item.put("audio", "🇺🇸 Inglés (V.O.)");
                    item.put("hash", h);
                    item.put("fileIdx", 0);
                    item.put("magnet_url", magnet);
                    item.put("type", "torrent");

                    if (q.equals("4K")) b4k.add(item);
                    else if (q.equals("1080p")) b1080.add(item);
                    else if (q.equals("720p")) b720.add(item);
                    else if (q.equals("480p")) b480.add(item);
                } catch (Throwable ignored) {}
            }
        }

        Comparator<JSONObject> streamComp = new Comparator<JSONObject>() {
            @Override
            public int compare(JSONObject a, JSONObject b) {
                String audA = a.optString("audio", "");
                String audB = b.optString("audio", "");
                boolean hasSpaA = audA.contains("Latino") || audA.contains("Español") || audA.contains("Castellano") || audA.contains("🇲🇽") || audA.contains("🇪🇸");
                boolean hasSpaB = audB.contains("Latino") || audB.contains("Español") || audB.contains("Castellano") || audB.contains("🇲🇽") || audB.contains("🇪🇸");
                int scoreA = a.optInt("seeds", 0) + (hasSpaA ? 300 : 0);
                int scoreB = b.optInt("seeds", 0) + (hasSpaB ? 300 : 0);
                return Integer.compare(scoreB, scoreA);
            }
        };

        Collections.sort(b4k, streamComp);
        Collections.sort(b1080, streamComp);
        Collections.sort(b720, streamComp);
        Collections.sort(b480, streamComp);

        JSONArray out = new JSONArray();
        for (int i = 0; i < Math.min(3, b4k.size()); i++) out.put(b4k.get(i));
        for (int i = 0; i < Math.min(3, b1080.size()); i++) out.put(b1080.get(i));
        for (int i = 0; i < Math.min(3, b720.size()); i++) out.put(b720.get(i));
        for (int i = 0; i < Math.min(3, b480.size()); i++) out.put(b480.get(i));

        return out;
    }

    private boolean isAdRequest(String url) {
        if (url == null || url.isEmpty()) return false;
        String low = url.toLowerCase();
        return low.contains("pubads.g.doubleclick.net") ||
               low.contains("securepubads.g.doubleclick.net") ||
               low.contains("googleads.g.doubleclick.net") ||
               low.contains("pagead2.googlesyndication.com") ||
               low.contains("imasdk.googleapis.com") ||
               low.contains("gpt.js") ||
               low.contains("/gampad/ads") ||
               low.contains("vad_type=linear") ||
               low.contains("output=vast") ||
               low.contains("output=vmap") ||
               low.contains("ads13.js") ||
               low.contains("retargetly.com") ||
               low.contains("smartadserver.com") ||
               low.contains("aniview.com") ||
               low.contains("teads.tv") ||
               low.contains("teads.com") ||
               low.contains("seedtag.com") ||
               low.contains("rubiconproject.com") ||
               low.contains("openx.net") ||
               low.contains("pubmatic.com") ||
               low.contains("criteo.com") ||
               low.contains("criteo.net") ||
               low.contains("spotxchange.com") ||
               low.contains("spotx.tv") ||
               low.contains("flashtalking.com") ||
               low.contains("adnxs.com") ||
               low.contains("scorecardresearch.com") ||
               low.contains("outbrain.com") ||
               low.contains("taboola.com") ||
               low.contains("c.amazon-adsystem.com") ||
               low.contains("cdn.by.wonderpush.com");
    }

    private static final Map<String, String> PRISA_MOUNTS = new HashMap<String, String>() {{
        put("cl-rad-rockandpop", "ROCK_AND_POP");
        put("cl-rad-corazon", "CORAZON");
        put("cl-rad-los40", "LOS40_CHILE");
        put("cl-rad-adn", "ADN");
        put("cl-rad-futuro", "FUTURO");
        put("cl-rad-concierto", "CONCIERTO");
        put("cl-rad-pudahuel", "PUDAHUEL");
        put("cl-rad-activa", "ACTIVA");
        put("cl-rad-fmdos", "FMDOS");
    }};

    private WebResourceResponse handleNowPlaying(WebResourceRequest request) {
        try {
            Uri uri = request.getUrl();
            String stationId = uri.getQueryParameter("id");
            String streamUrl = uri.getQueryParameter("stream");
            if (stationId == null) stationId = "";
            if (streamUrl == null) streamUrl = "";

            JSONObject json = new JSONObject();
            json.put("stationId", stationId);
            json.put("artist", "");
            json.put("title", "");
            json.put("album", "");
            json.put("cover", "");
            json.put("hasMusic", false);
            json.put("raw", "");

            // 1. Check Triton Digital mounts
            String mount = PRISA_MOUNTS.get(stationId);
            if (mount == null && !streamUrl.isEmpty()) {
                for (Map.Entry<String, String> e : PRISA_MOUNTS.entrySet()) {
                    if (streamUrl.toLowerCase().contains(e.getValue().toLowerCase())) {
                        mount = e.getValue();
                        break;
                    }
                }
            }

            if (mount != null && !mount.isEmpty()) {
                fetchTritonNowPlaying(mount, json);
            }

            // 2. Check ICY metadata from direct stream if not yet obtained
            if (!json.optBoolean("hasMusic") && !streamUrl.isEmpty() && !streamUrl.contains(".m3u8")) {
                fetchIcyMetadata(streamUrl, json);
            }

            // 3. Fallback per station if empty so Android TV is never empty or stuck
            if (!json.optBoolean("hasMusic") || json.optString("title").isEmpty()) {
                populateStationFallback(stationId, json);
            }

            byte[] bytes = json.toString().getBytes(StandardCharsets.UTF_8);
            Map<String, String> headers = new HashMap<>();
            headers.put("Access-Control-Allow-Origin", "*");
            headers.put("Content-Type", "application/json; charset=utf-8");
            headers.put("Cache-Control", "no-cache");
            return new WebResourceResponse("application/json", "UTF-8", 200, "OK", headers, new ByteArrayInputStream(bytes));
        } catch (Exception e) {
            android.util.Log.e("AntenaSurTV", "Error handling now playing: " + e.getMessage());
            return null;
        }
    }

    private void fetchTritonNowPlaying(String mount, JSONObject json) {
        try {
            URL url = new URL("https://np.tritondigital.com/public/nowplaying?mountName=" + mount + "&numberToFetch=1");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("User-Agent", "curl/8.7.1");
            conn.setConnectTimeout(2500);
            conn.setReadTimeout(2500);

            if (conn.getResponseCode() == 200) {
                BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8));
                StringBuilder sb = new StringBuilder();
                String l;
                while ((l = reader.readLine()) != null) sb.append(l);
                reader.close();
                String xml = sb.toString();

                Matcher tm = Pattern.compile("name=\"cue_title\"><!\\[CDATA\\[(.*?)\\]\\]>").matcher(xml);
                Matcher am = Pattern.compile("name=\"track_artist_name\"><!\\[CDATA\\[(.*?)\\]\\]>").matcher(xml);
                Matcher covm = Pattern.compile("name=\"track_cover_url\"><!\\[CDATA\\[(.*?)\\]\\]>").matcher(xml);
                Matcher albm = Pattern.compile("name=\"track_album_name\"><!\\[CDATA\\[(.*?)\\]\\]>").matcher(xml);

                String title = tm.find() ? tm.group(1).trim() : "";
                String artist = am.find() ? am.group(1).trim() : "";
                String cover = covm.find() ? covm.group(1).trim() : "";
                String album = albm.find() ? albm.group(1).trim() : "";

                if (!title.isEmpty() && !artist.isEmpty() && !title.equalsIgnoreCase("unspecified") && !artist.equalsIgnoreCase("n/a")) {
                    json.put("artist", artist);
                    json.put("title", title);
                    json.put("album", album);
                    json.put("cover", cover);
                    json.put("hasMusic", true);
                    json.put("raw", artist + " - " + title);
                }
            }
            conn.disconnect();
        } catch (Throwable ignored) {}
    }

    private void fetchIcyMetadata(String streamUrl, JSONObject json) {
        try {
            URL url = new URL(streamUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)");
            conn.setRequestProperty("Icy-MetaData", "1");
            conn.setConnectTimeout(2500);
            conn.setReadTimeout(2500);

            int metaint = conn.getHeaderFieldInt("icy-metaint", 0);
            if (metaint > 0) {
                InputStream is = conn.getInputStream();
                long skipped = 0;
                while (skipped < metaint) {
                    long s = is.skip(metaint - skipped);
                    if (s <= 0) break;
                    skipped += s;
                }
                int lengthByte = is.read();
                if (lengthByte > 0) {
                    int metaLength = lengthByte * 16;
                    byte[] metaBytes = new byte[metaLength];
                    int read = 0;
                    while (read < metaLength) {
                        int r = is.read(metaBytes, read, metaLength - read);
                        if (r <= 0) break;
                        read += r;
                    }
                    String raw = new String(metaBytes, 0, read, StandardCharsets.UTF_8);
                    Matcher matcher = Pattern.compile("StreamTitle='([^']*)';").matcher(raw);
                    if (matcher.find()) {
                        String streamTitle = matcher.group(1).trim();
                        if (!streamTitle.isEmpty()) {
                            json.put("raw", streamTitle);
                            if (streamTitle.contains(" - ")) {
                                String[] parts = streamTitle.split(" - ", 2);
                                json.put("artist", parts[0].trim());
                                json.put("title", parts[1].trim());
                            } else {
                                json.put("title", streamTitle);
                                json.put("artist", "En Directo");
                            }
                            json.put("hasMusic", true);
                        }
                    }
                }
                is.close();
            }
            conn.disconnect();
        } catch (Throwable ignored) {}
    }

    private void populateStationFallback(String stationId, JSONObject json) {
        try {
            String artist = "Música Continua";
            String title = "Grandes Éxitos en Vivo";
            if (stationId.contains("rockandpop")) {
                artist = "Rock & Pop Chile";
                title = "Clásicos y Tendencias del Rock & Pop";
            } else if (stationId.contains("futuro")) {
                artist = "Radio Futuro";
                title = "La Ley del Rock • Grandes Clásicos";
            } else if (stationId.contains("corazon")) {
                artist = "Radio Corazón";
                title = "La Más Querida • Cumbia y Ritmo";
            } else if (stationId.contains("los40")) {
                artist = "LOS40 Chile";
                title = "Todos los Éxitos del Momento";
            } else if (stationId.contains("concierto")) {
                artist = "Radio Concierto";
                title = "Concierto Placer • Grandes Canciones";
            } else if (stationId.contains("pudahuel")) {
                artist = "Radio Pudahuel";
                title = "La Voz de Chile • Baladas y Éxitos";
            } else if (stationId.contains("activa")) {
                artist = "Radio Activa";
                title = "Solo Se Vive Una Vez • Hits Urbanos";
            } else if (stationId.contains("fmdos")) {
                artist = "FMDOS";
                title = "La Radio de los Dos • Amor y Música";
            } else if (stationId.contains("adn")) {
                artist = "ADN Deportes y Noticias";
                title = "Actualidad, Deportes y Señal en Vivo";
            } else if (stationId.contains("biobio")) {
                artist = "Radio Bío Bío";
                title = "Información al Instante y Análisis";
            } else if (stationId.contains("cooperativa")) {
                artist = "Radio Cooperativa";
                title = "El Diario de Cooperativa • Noticias";
            } else if (stationId.contains("infinita")) {
                artist = "Radio Infinita";
                title = "Palabras con Poder • Selección Musical";
            } else if (stationId.contains("play")) {
                artist = "Play FM";
                title = "Música Sofisticada y Pop Global";
            } else if (stationId.contains("sonar")) {
                artist = "Sonar FM";
                title = "Rock, Cultura y Opinión";
            } else if (stationId.contains("disney")) {
                artist = "Radio Disney Chile";
                title = "Lo que Quieres Escuchar • Pop & Hits";
            } else if (stationId.contains("carolina")) {
                artist = "Radio Carolina";
                title = "La Más Prendida • Urban & Dance";
            }
            if (json.optString("artist").isEmpty()) json.put("artist", artist);
            if (json.optString("title").isEmpty()) json.put("title", title);
            json.put("hasMusic", true);
        } catch (Throwable ignored) {}
    }

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        int keyCode = event.getKeyCode();
        int action = event.getAction();

        if (action != KeyEvent.ACTION_DOWN && action != KeyEvent.ACTION_UP) {
            return super.dispatchKeyEvent(event);
        }

        String navAction = null;
        switch (keyCode) {
            case KeyEvent.KEYCODE_DPAD_UP:
            case KeyEvent.KEYCODE_PAGE_UP:
            case KeyEvent.KEYCODE_NUMPAD_8:
                navAction = "ArrowUp";
                break;
            case KeyEvent.KEYCODE_DPAD_DOWN:
            case KeyEvent.KEYCODE_PAGE_DOWN:
            case KeyEvent.KEYCODE_NUMPAD_2:
                navAction = "ArrowDown";
                break;
            case KeyEvent.KEYCODE_DPAD_LEFT:
            case KeyEvent.KEYCODE_NUMPAD_4:
                navAction = "ArrowLeft";
                break;
            case KeyEvent.KEYCODE_DPAD_RIGHT:
            case KeyEvent.KEYCODE_NUMPAD_6:
            case KeyEvent.KEYCODE_TAB:
                navAction = "ArrowRight";
                break;
            case KeyEvent.KEYCODE_DPAD_CENTER:
            case KeyEvent.KEYCODE_ENTER:
            case KeyEvent.KEYCODE_NUMPAD_ENTER:
            case KeyEvent.KEYCODE_NUMPAD_5:
            case KeyEvent.KEYCODE_BUTTON_A:
            case KeyEvent.KEYCODE_BUTTON_SELECT:
            case KeyEvent.KEYCODE_SPACE:
                navAction = "Enter";
                break;
            case KeyEvent.KEYCODE_MEDIA_PLAY:
            case KeyEvent.KEYCODE_MEDIA_PAUSE:
            case KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE:
                navAction = "PlayPause";
                break;
            case KeyEvent.KEYCODE_BACK:
            case KeyEvent.KEYCODE_ESCAPE:
            case KeyEvent.KEYCODE_BUTTON_B:
            case KeyEvent.KEYCODE_DEL:
                if (action == KeyEvent.ACTION_DOWN) {
                    mWebView.evaluateJavascript("window.onTvBack ? window.onTvBack() : false;", value -> {
                        if ("true".equalsIgnoreCase(value)) {
                            mLastBackPressTime = 0;
                        } else {
                            long now = System.currentTimeMillis();
                            if (now - mLastBackPressTime < 2500) {
                                finish();
                            } else {
                                mLastBackPressTime = now;
                                Toast.makeText(MainActivity.this, "Presiona Atrás otra vez para salir", Toast.LENGTH_SHORT).show();
                            }
                        }
                    });
                }
                return true;
            case KeyEvent.KEYCODE_CHANNEL_UP:
                if (action == KeyEvent.ACTION_DOWN) {
                    mWebView.evaluateJavascript("if (window.AntenaSurPlayer) window.AntenaSurPlayer.zapPrevious();", null);
                }
                return true;
            case KeyEvent.KEYCODE_CHANNEL_DOWN:
                if (action == KeyEvent.ACTION_DOWN) {
                    mWebView.evaluateJavascript("if (window.AntenaSurPlayer) window.AntenaSurPlayer.zapNext();", null);
                }
                return true;
            default:
                if (keyCode >= KeyEvent.KEYCODE_0 && keyCode <= KeyEvent.KEYCODE_9) {
                    if (action == KeyEvent.ACTION_DOWN) {
                        int digit = keyCode - KeyEvent.KEYCODE_0;
                        mWebView.evaluateJavascript("window.dispatchEvent(new KeyboardEvent('keydown', {key: '" + digit + "', code: 'Digit" + digit + "', keyCode: " + (48 + digit) + ", bubbles: true}));", null);
                    }
                    return true;
                }
                break;
        }

        if (navAction != null) {
            if (action == KeyEvent.ACTION_DOWN) {
                long now = System.currentTimeMillis();
                // Si el mando USB envía repeticiones rápidas continuas, limitar para evitar saturar el hilo UI
                if (event.getRepeatCount() > 0 && (now - mLastNavTime < 110)) {
                    return true;
                }
                mLastNavTime = now;

                final String finalAction = navAction;
                mWebView.evaluateJavascript("if (window.onTvNav) window.onTvNav('" + finalAction + "');", null);
            }
            return true;
        }

        return super.dispatchKeyEvent(event);
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        setupImmersiveMode();
        if (mWebView != null) {
            mWebView.postDelayed(this::setupImmersiveMode, 300);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        setupImmersiveMode();
        if (mWebView != null) {
            mWebView.onResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWebView != null) {
            mWebView.onPause();
        }
    }

    @Override
    protected void onDestroy() {
        if (mWebView != null) {
            mWebView.destroy();
        }
        super.onDestroy();
    }
}
