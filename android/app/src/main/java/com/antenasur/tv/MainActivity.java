package com.antenasur.tv;

import android.annotation.SuppressLint;
import androidx.appcompat.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private static final String PREFS_NAME = "AntenaSurPrefs";
    private static final String KEY_SERVER_URL = "server_url";
    private static final String DEFAULT_CLOUD_URL = "https://antena-sur.onrender.com";
    private static final String DEFAULT_LOCAL_URL = "http://192.168.1.33:8080";

    private WebView mWebView;
    private SharedPreferences mPrefs;
    private String mCurrentUrl;
    private boolean mHasLoadedSuccessfully = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Pantalla completa sin título ni barra de estado
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(
                WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN
        );
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        mPrefs = getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        mCurrentUrl = mPrefs.getString(KEY_SERVER_URL, DEFAULT_LOCAL_URL);

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

        WebSettings settings = mWebView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);

        // Habilitar contenido mixto (HTTP/HTTPS) en streams HLS
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }

        // User-Agent de Smart TV para garantizar compatibilidad
        String customUA = "Mozilla/5.0 (Linux; Android 12; Android TV Build/STT1.220610.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 AntenaSurTV/1.0";
        settings.setUserAgentString(customUA);

        mWebView.setWebChromeClient(new WebChromeClient());

        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                mHasLoadedSuccessfully = true;
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                super.onReceivedError(view, request, error);
                if (request.isForMainFrame()) {
                    showConnectionErrorDialog();
                }
            }
        });

        // Habilitar foco para el control remoto D-pad
        mWebView.setFocusable(true);
        mWebView.setFocusableInTouchMode(true);
        mWebView.requestFocus();

        loadUrl(mCurrentUrl);
    }

    private void loadUrl(String url) {
        mCurrentUrl = url;
        mWebView.loadUrl(url);
    }

    private void showConnectionErrorDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Antena Sur - Conexión TV");
        builder.setMessage("No se pudo conectar al servidor en:\n" + mCurrentUrl + "\n\nVerifica que tu servidor esté activo o introduce la URL:");

        final EditText input = new EditText(this);
        input.setText(mCurrentUrl);
        builder.setView(input);

        builder.setPositiveButton("Reintentar", (dialog, which) -> {
            String newUrl = input.getText().toString().trim();
            if (!newUrl.isEmpty()) {
                mPrefs.edit().putString(KEY_SERVER_URL, newUrl).apply();
                loadUrl(newUrl);
            }
        });

        builder.setNegativeButton("Usar Nube", (dialog, which) -> {
            mPrefs.edit().putString(KEY_SERVER_URL, DEFAULT_CLOUD_URL).apply();
            loadUrl(DEFAULT_CLOUD_URL);
        });

        builder.setNeutralButton("Usar Wi-Fi Local", (dialog, which) -> {
            mPrefs.edit().putString(KEY_SERVER_URL, DEFAULT_LOCAL_URL).apply();
            loadUrl(DEFAULT_LOCAL_URL);
        });

        builder.setCancelable(false);
        builder.show();
    }

    private void showChangeUrlDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Configurar Servidor de Antena Sur");
        builder.setMessage("Ingresa la dirección IP local o URL de Render:");

        final EditText input = new EditText(this);
        input.setText(mCurrentUrl);
        builder.setView(input);

        builder.setPositiveButton("Guardar", (dialog, which) -> {
            String newUrl = input.getText().toString().trim();
            if (!newUrl.isEmpty()) {
                mPrefs.edit().putString(KEY_SERVER_URL, newUrl).apply();
                loadUrl(newUrl);
                Toast.makeText(this, "Cargando: " + newUrl, Toast.LENGTH_SHORT).show();
            }
        });

        builder.setNegativeButton("Cancelar", null);
        builder.show();
    }

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        int keyCode = event.getKeyCode();

        // Botón Menú del control remoto: abrir diálogo de servidor
        if (keyCode == KeyEvent.KEYCODE_MENU && event.getAction() == KeyEvent.ACTION_UP) {
            showChangeUrlDialog();
            return true;
        }

        // Tecla Atrás (Back)
        if (keyCode == KeyEvent.KEYCODE_BACK && event.getAction() == KeyEvent.ACTION_DOWN) {
            // Enviar tecla Escape al reproductor para cerrar guía si está abierta
            mWebView.evaluateJavascript(
                    "(function() { " +
                    "  const ev = new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', keyCode: 27, which: 27, bubbles: true }); " +
                    "  document.dispatchEvent(ev); " +
                    "})()", null);
            return true;
        }

        // Tecla Reproducir / Pausar del control
        if ((keyCode == KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE || keyCode == KeyEvent.KEYCODE_HEADSETHOOK)
                && event.getAction() == KeyEvent.ACTION_DOWN) {
            mWebView.evaluateJavascript("if (window.AntenaSurPlayer) window.AntenaSurPlayer.togglePlayPause();", null);
            return true;
        }

        // Canal Arriba / Abajo del control de TV (Channel Up / Down)
        if (keyCode == KeyEvent.KEYCODE_CHANNEL_UP && event.getAction() == KeyEvent.ACTION_DOWN) {
            mWebView.evaluateJavascript("if (window.AntenaSurPlayer) window.AntenaSurPlayer.zapPrevious();", null);
            return true;
        }
        if (keyCode == KeyEvent.KEYCODE_CHANNEL_DOWN && event.getAction() == KeyEvent.ACTION_DOWN) {
            mWebView.evaluateJavascript("if (window.AntenaSurPlayer) window.AntenaSurPlayer.zapNext();", null);
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
