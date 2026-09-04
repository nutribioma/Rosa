(function () {
  "use strict";

  // ---------------------------------------------------------------------
  // Google Analytics (opcional) + consentimiento de cookies
  // ---------------------------------------------------------------------
  // Deja esto vacío ("") para que la web no use ninguna cookie ni analítica
  // (así está publicada mientras tanto). En cuanto tengas un ID de Google
  // Analytics 4 (formato "G-XXXXXXXXXX"), ponlo aquí y se activará el
  // banner de cookies y, si el usuario acepta, Google Analytics.
  var GA_MEASUREMENT_ID = "";

  function loadGoogleAnalytics() {
    if (!GA_MEASUREMENT_ID) return;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function initCookieConsent() {
    if (!GA_MEASUREMENT_ID) return; // nada que consentir si no hay analítica

    var STORAGE_KEY = "asibru_consent";
    var stored;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { stored = null; }

    if (stored === "granted") { loadGoogleAnalytics(); return; }
    if (stored === "denied") { return; }

    var banner = document.getElementById("cookieBanner");
    if (!banner) return;
    banner.hidden = false;

    var accept = document.getElementById("cookieAccept");
    var reject = document.getElementById("cookieReject");

    if (accept) accept.addEventListener("click", function () {
      try { localStorage.setItem(STORAGE_KEY, "granted"); } catch (e) {}
      banner.hidden = true;
      loadGoogleAnalytics();
    });
    if (reject) reject.addEventListener("click", function () {
      try { localStorage.setItem(STORAGE_KEY, "denied"); } catch (e) {}
      banner.hidden = true;
    });
  }

  initCookieConsent();

  // Año dinámico en el footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  var header = document.getElementById("siteHeader");
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Cierra el menú al pulsar un enlace
    if (nav) {
      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          header.classList.remove("nav-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  // Sombra del header al hacer scroll
  var onScroll = function () {
    if (window.scrollY > 8) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  if (header) {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Animación de aparición al hacer scroll (mejora progresiva: el CSS
  // muestra el contenido por defecto; aquí activamos el estado oculto
  // inicial solo si vamos a poder revelarlo con el observer).
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    revealEls.forEach(function (el) { el.classList.add("reveal-init"); });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });

    // Red de seguridad: si algún elemento no llega a activarse (pestaña en
    // segundo plano, restauración de scroll del navegador, etc.), lo
    // mostramos igualmente para que nunca quede contenido oculto.
    window.setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }, 2000);
  }
})();
