/* Medicapteurs : comportements communs du site. Aucune dépendance. */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Empreinte de pression sous le pointeur, sur les boutons et les cartes produit */
  var PRINT = ".mc-btn, .mc-plate";
  document.addEventListener("pointermove", function (e) {
    var el = e.target && e.target.closest ? e.target.closest(PRINT) : null;
    if (!el) return;
    var r = el.getBoundingClientRect();
    el.style.setProperty("--mx", e.clientX - r.left + "px");
    el.style.setProperty("--my", e.clientY - r.top + "px");
  }, { passive: true });

  /* Langue choisie : mémorisée pour la page d'accueil racine */
  document.querySelectorAll("[data-lang]").forEach(function (a) {
    a.addEventListener("click", function () {
      try { localStorage.setItem("mc-lang", a.getAttribute("data-lang")); } catch (e) {}
    });
  });

  /* En-tête : fond plein dès qu'on quitte le haut de l'accueil */
  var hdr = document.querySelector("[data-hdr]");
  if (hdr) {
    var onScroll = function () { hdr.classList.toggle("is-stuck", window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Menus déroulants : Produits (grand menu), Solutions, Entreprise */
  var btns = Array.prototype.slice.call(document.querySelectorAll("[data-menu-btn]"));
  var canHover = window.matchMedia("(hover: hover)").matches;
  var closeTimer;
  function panelOf(btn) { return document.getElementById(btn.getAttribute("aria-controls")); }
  function setMenu(btn, open) {
    var panel = panelOf(btn);
    if (!panel) return;
    panel.hidden = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  function closeAll(except) {
    btns.forEach(function (b) { if (b !== except) setMenu(b, false); });
    if (hdr) hdr.classList.toggle("is-open", btns.some(function (b) { return b.getAttribute("aria-expanded") === "true"; }));
  }
  btns.forEach(function (btn) {
    var panel = panelOf(btn);
    btn.addEventListener("click", function () {
      // Un menu qui vient de s'ouvrir au survol reste ouvert quand on clique dessus
      if (btn.getAttribute("aria-expanded") === "true" && Date.now() - (btn._hoverAt || 0) < 600) return;
      var open = btn.getAttribute("aria-expanded") !== "true";
      closeAll(btn); setMenu(btn, open); closeAll(btn);
    });
    if (canHover && panel) {
      btn.addEventListener("mouseenter", function () { clearTimeout(closeTimer); if (btn.getAttribute("aria-expanded") !== "true") btn._hoverAt = Date.now(); closeAll(btn); setMenu(btn, true); closeAll(btn); });
      [btn, panel].forEach(function (el) {
        el.addEventListener("mouseleave", function () { closeTimer = setTimeout(function () { setMenu(btn, false); closeAll(null); }, 220); });
        el.addEventListener("mouseenter", function () { clearTimeout(closeTimer); });
      });
    }
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest("[data-menu-btn], [data-menu]")) closeAll(null);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var openBtn = btns.filter(function (b) { return b.getAttribute("aria-expanded") === "true"; })[0];
    if (openBtn) { closeAll(null); setMenu(openBtn, false); closeAll(null); openBtn.focus(); }
  });

  /* Menu mobile */
  var drawerBtn = document.querySelector("[data-drawer-btn]");
  var drawer = document.querySelector("[data-drawer]");
  if (drawerBtn && drawer) {
    var setDrawer = function (open) {
      drawer.hidden = !open;
      drawerBtn.setAttribute("aria-expanded", open ? "true" : "false");
      hdr.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    drawerBtn.addEventListener("click", function () { setDrawer(drawer.hidden); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !drawer.hidden) { setDrawer(false); drawerBtn.focus(); }
    });
    drawer.addEventListener("click", function (e) { if (e.target.closest("a")) setDrawer(false); });
  }

  /* Accueil : quatre empreintes de pas qui s'impriment sur la piste, du talon aux orteils.
     Chaque cellule prend une couleur de l'échelle de pression du logiciel Medicapteurs. */
  var BLOBS = [[0.50, 0.86, 0.30, 0.11, 1.00], [0.34, 0.62, 0.26, 0.22, 0.52], [0.50, 0.37, 0.40, 0.10, 0.80], [0.68, 0.36, 0.15, 0.07, 1.00], [0.74, 0.14, 0.11, 0.07, 0.72], [0.52, 0.13, 0.07, 0.05, 0.45], [0.38, 0.15, 0.06, 0.045, 0.40], [0.26, 0.18, 0.055, 0.04, 0.34], [0.16, 0.22, 0.05, 0.035, 0.30]];
  function footprint(stepDelay) {
    var h = "";
    for (var r = 0; r < 34; r++) {
      for (var c = 0; c < 16; c++) {
        var x = (c + 0.5) / 16, y = (r + 0.5) / 34, v = 0;
        for (var i = 0; i < BLOBS.length; i++) {
          var b = BLOBS[i], d = Math.hypot((x - b[0]) / b[2], (y - b[1]) / b[3]);
          if (d < 1) v = Math.max(v, b[4] * (1 - d * d * 0.85));
        }
        if (v < 0.1) { h += "<i></i>"; continue; }
        var level = Math.min(6, Math.max(1, Math.ceil(v * 6)));
        h += '<i class="c" style="background:var(--pressure-' + level + ');animation-delay:' + (stepDelay + (1 - y) * 0.45).toFixed(2) + 's"></i>';
      }
    }
    return h;
  }
  document.querySelectorAll("[data-step]").forEach(function (el) {
    el.innerHTML = footprint(parseFloat(el.getAttribute("data-step")) || 0);
  });

  /* Apparition douce des sections */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
