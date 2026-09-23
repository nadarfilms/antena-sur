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
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity {

    private WebView mWebView;
    private WebViewAssetLoader mAssetLoader;
    private long mLastBackPressTime = 0;

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

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }

        // Identificador de Android TV para que la app web auto-inicie en modo televisión
        String customUA = "Mozilla/5.0 (Linux; Android 12; Android TV Build/STT1.220610.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 AntenaSurTV/1.0";
        settings.setUserAgentString(customUA);

        mWebView.setWebChromeClient(new WebChromeClient());

        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                // Proxy HLS inteligente nativo en Java para señales que exigen Referer (Canal 13, etc.)
                if (uri.getPath() != null && uri.getPath().contains("/api/proxy")) {
                    WebResourceResponse proxyResp = handleHlsProxy(request);
                    if (proxyResp != null) return proxyResp;
                }
                return mAssetLoader.shouldInterceptRequest(uri);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                mWebView.requestFocus();
                mWebView.evaluateJavascript("if (window.initTvFocus) window.initTvFocus();", null);
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

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        int keyCode = event.getKeyCode();
        if (keyCode == KeyEvent.KEYCODE_DPAD_UP ||
            keyCode == KeyEvent.KEYCODE_DPAD_DOWN ||
            keyCode == KeyEvent.KEYCODE_DPAD_LEFT ||
            keyCode == KeyEvent.KEYCODE_DPAD_RIGHT ||
            keyCode == KeyEvent.KEYCODE_DPAD_CENTER ||
            keyCode == KeyEvent.KEYCODE_ENTER ||
            keyCode == KeyEvent.KEYCODE_NUMPAD_ENTER ||
            keyCode == KeyEvent.KEYCODE_BUTTON_A ||
            keyCode == KeyEvent.KEYCODE_BUTTON_SELECT ||
            keyCode == KeyEvent.KEYCODE_BACK ||
            keyCode == KeyEvent.KEYCODE_BUTTON_B ||
            keyCode == KeyEvent.KEYCODE_MEDIA_PLAY ||
            keyCode == KeyEvent.KEYCODE_MEDIA_PAUSE ||
            keyCode == KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE ||
            keyCode == KeyEvent.KEYCODE_CHANNEL_UP ||
            keyCode == KeyEvent.KEYCODE_CHANNEL_DOWN ||
            (keyCode >= KeyEvent.KEYCODE_0 && keyCode <= KeyEvent.KEYCODE_9)) {

            if (event.getAction() == KeyEvent.ACTION_DOWN) {
                switch (keyCode) {
                    case KeyEvent.KEYCODE_DPAD_UP:
                        mWebView.evaluateJavascript("if (window.onTvNav) window.onTvNav('ArrowUp');", null);
                        break;
                    case KeyEvent.KEYCODE_DPAD_DOWN:
                        mWebView.evaluateJavascript("if (window.onTvNav) window.onTvNav('ArrowDown');", null);
                        break;
                    case KeyEvent.KEYCODE_DPAD_LEFT:
                        mWebView.evaluateJavascript("if (window.onTvNav) window.onTvNav('ArrowLeft');", null);
                        break;
                    case KeyEvent.KEYCODE_DPAD_RIGHT:
                        mWebView.evaluateJavascript("if (window.onTvNav) window.onTvNav('ArrowRight');", null);
                        break;
                    case KeyEvent.KEYCODE_DPAD_CENTER:
                    case KeyEvent.KEYCODE_ENTER:
                    case KeyEvent.KEYCODE_NUMPAD_ENTER:
                    case KeyEvent.KEYCODE_BUTTON_A:
                    case KeyEvent.KEYCODE_BUTTON_SELECT:
                        mWebView.evaluateJavascript("if (window.onTvNav) window.onTvNav('Enter');", null);
                        break;
                    case KeyEvent.KEYCODE_MEDIA_PLAY:
                    case KeyEvent.KEYCODE_MEDIA_PAUSE:
                    case KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE:
                        mWebView.evaluateJavascript("if (window.onTvNav) window.onTvNav('PlayPause');", null);
                        break;
                    case KeyEvent.KEYCODE_BACK:
                    case KeyEvent.KEYCODE_BUTTON_B:
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
                        break;
                    case KeyEvent.KEYCODE_CHANNEL_UP:
                        mWebView.evaluateJavascript("if (window.AntenaSurPlayer) window.AntenaSurPlayer.zapPrevious();", null);
                        break;
                    case KeyEvent.KEYCODE_CHANNEL_DOWN:
                        mWebView.evaluateJavascript("if (window.AntenaSurPlayer) window.AntenaSurPlayer.zapNext();", null);
                        break;
                    case KeyEvent.KEYCODE_0: case KeyEvent.KEYCODE_1: case KeyEvent.KEYCODE_2:
                    case KeyEvent.KEYCODE_3: case KeyEvent.KEYCODE_4: case KeyEvent.KEYCODE_5:
                    case KeyEvent.KEYCODE_6: case KeyEvent.KEYCODE_7: case KeyEvent.KEYCODE_8:
                    case KeyEvent.KEYCODE_9:
                        int digit = keyCode - KeyEvent.KEYCODE_0;
                        mWebView.evaluateJavascript("window.dispatchEvent(new KeyboardEvent('keydown', {key: '" + digit + "', code: 'Digit" + digit + "', keyCode: " + (48 + digit) + ", bubbles: true}));", null);
                        break;
                }
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
