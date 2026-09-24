package com.antenasur.tv;

import android.annotation.SuppressLint;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
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
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.json.JSONObject;

public class MainActivity extends AppCompatActivity {

    private WebView mWebView;
    private WebViewAssetLoader mAssetLoader;
    private long mLastBackPressTime = 0;
    private long mLastNavTime = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Pantalla completa inmersiva para Smart TV
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
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            settings.setOffscreenPreRaster(true);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }

        // Identificador de Android TV para que la app web auto-inicie en modo televisión
        String customUA = "Mozilla/5.0 (Linux; Android 12; Android TV Build/STT1.220610.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 AntenaSurTV/1.0";
        settings.setUserAgentString(customUA);

        mWebView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onConsoleMessage(android.webkit.ConsoleMessage consoleMessage) {
                android.util.Log.d("AntenaSurTV_JS", consoleMessage.message() + " [" + consoleMessage.sourceId() + ":" + consoleMessage.lineNumber() + "]");
                return true;
            }
        });

        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                try {
                    Uri uri = request.getUrl();
                    // Proxy HLS inteligente nativo en Java para señales que exigen Referer (Canal 13, etc.)
                    if (uri.getPath() != null && uri.getPath().contains("/api/proxy")) {
                        WebResourceResponse proxyResp = handleHlsProxy(request);
                        if (proxyResp != null) return proxyResp;
                    }

                    // Intercepción nativa de Now Playing para Android TV (Artistas y Canciones en Vivo)
                    if (uri.getPath() != null && uri.getPath().contains("/api/nowplaying")) {
                        WebResourceResponse npResp = handleNowPlaying(request);
                        if (npResp != null) return npResp;
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
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                mWebView.requestFocus();
                mWebView.evaluateJavascript("if (window.initTvFocus) window.initTvFocus();", null);
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
                else if (low.contains("uchile")) ref = "https://tv.uchile.cl/";
                else if (low.contains("chv") || low.contains("rudo.video")) ref = "https://www.chilevision.cl/";
                else if (low.contains("mega")) ref = "https://www.mega.cl/";
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

            int responseCode = conn.getResponseCode();
            if (responseCode >= 300 && responseCode < 400) {
                String loc = conn.getHeaderField("Location");
                if (loc != null) {
                    targetUrl = loc;
                    url = new URL(loc);
                    conn = (HttpURLConnection) url.openConnection();
                    conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36");
                    conn.setRequestProperty("Referer", ref);
                    conn.setConnectTimeout(8000);
                    conn.setReadTimeout(10000);
                }
            }

            String contentType = conn.getContentType();
            if (contentType == null) contentType = "application/octet-stream";

            boolean isM3u8 = targetUrl.toLowerCase().contains(".m3u8") || contentType.toLowerCase().contains("mpegurl");

            if (isM3u8) {
                BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                StringBuilder sb = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    String trimmed = line.trim();
                    if (trimmed.startsWith("#") && trimmed.contains("URI=\"")) {
                        line = line.replaceAll("URI=\"([^\"]+)\"", "URI=\"/api/proxy?url=" + Uri.encode(targetUrl) + "\"");
                        sb.append(line).append("\n");
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
                return new WebResourceResponse("application/vnd.apple.mpegurl", "UTF-8", 200, "OK", responseHeaders, new ByteArrayInputStream(bytes));
            }

            Map<String, String> headers = new HashMap<>();
            headers.put("Access-Control-Allow-Origin", "*");
            return new WebResourceResponse(contentType, null, 200, "OK", headers, conn.getInputStream());

        } catch (Exception e) {
            return null;
        }
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
