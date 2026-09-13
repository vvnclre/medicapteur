(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* Year */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Header scroll state + progress bar */
  const header = $("#siteHeader");
  const progress = $("#scrollProgress");
  const toTop = $("#toTop");

  let ticking = false;
  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    header.classList.toggle("is-scrolled", y > 12);
    toTop.classList.toggle("is-visible", y > 600);

    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (y / max) * 100 : 0;
    progress.style.width = pct + "%";
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* Mobile nav */
  const navToggle = $("#navToggle");
  const mainNav = $("#mainNav");
  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  $$("#mainNav a").forEach(a => a.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));

  /* Smooth anchor scroll with header offset */
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  /* Reveal on scroll */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in-view"));
  }

  /* Count-up numbers */
  const counters = $$(".count-up");
  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    if (reduceMotion) { el.textContent = target.toLocaleString("fr-FR"); return; }
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target).toLocaleString("fr-FR");
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(c => cio.observe(c));
  }

  /* Process rail fill */
  const processRail = $(".process-rail");
  const processFill = $("#processFill");
  const processSteps = $$(".process-step");
  if (processRail && processSteps.length) {
    const pio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
      const done = processSteps.filter(s => s.classList.contains("in-view")).length;
      if (processFill) processFill.style.width = (done / processSteps.length) * 100 + "%";
    }, { threshold: 0.5 });
    processSteps.forEach(s => pio.observe(s));
  }

  /* Magnetic buttons */
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    $$(".magnetic").forEach(btn => {
      let raf = null;
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          btn.style.setProperty("--btnx", (x * 0.18).toFixed(1) + "px");
          btn.style.setProperty("--btny", (y * 0.28).toFixed(1) + "px");
        });
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.setProperty("--btnx", "0px");
        btn.style.setProperty("--btny", "0px");
      });
    });
  }

  /* Tilt cards */
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    $$(".tilt").forEach(card => {
      let raf = null;
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform = `perspective(700px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 9).toFixed(2)}deg) translateY(-4px)`;
        });
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* Pressure heatmap simulation */
  const pressureMap = $("#pressureMap");
  const pressureMax = $("#pressureMax");
  if (pressureMap) {
    const cols = 12, rows = 14;
    const cells = [];
    const frag = document.createDocumentFragment();
    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement("i");
      frag.appendChild(cell);
      cells.push(cell);
    }
    pressureMap.appendChild(frag);

    const footMask = (col, row) => {
      const cx = col / (cols - 1), cy = row / (rows - 1);
      const heel = cy > 0.72 && Math.abs(cx - 0.5) < 0.30;
      const arch = cy > 0.4 && cy < 0.72 && Math.abs(cx - 0.42) < 0.16;
      const ball = cy > 0.18 && cy < 0.42 && Math.abs(cx - 0.5) < 0.30;
      const toes = cy < 0.18 && Math.abs(cx - 0.48) < 0.28;
      return heel || arch || ball || toes;
    };

    const activeCells = [];
    cells.forEach((cell, idx) => {
      const col = idx % cols, row = Math.floor(idx / cols);
      if (footMask(col, row)) activeCells.push({ cell, col, row });
      else cell.style.opacity = "0";
    });

    const palette = ["#4A3B2E55", "#FFC24D55", "#FF7A29AA", "#FF4D1FCC", "#C2410CE0"];

    function tick() {
      let max = 0;
      activeCells.forEach(({ cell, row }) => {
        const bias = row > 8 || row < 4 ? 0.55 : 0.3;
        const v = Math.random();
        const level = Math.min(4, Math.floor((v + bias) * palette.length / 1.5));
        cell.style.background = palette[Math.max(0, Math.min(level, palette.length - 1))];
        max = Math.max(max, level);
      });
      if (pressureMax) {
        const kpa = 40 + max * 55 + Math.round(Math.random() * 8);
        pressureMax.textContent = kpa + " kPa";
      }
    }

    tick();
    if (!reduceMotion) {
      let interval = setInterval(tick, 900);
      const hio = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!interval) interval = setInterval(tick, 900);
          } else if (interval) {
            clearInterval(interval);
            interval = null;
          }
        });
      }, { threshold: 0.1 });
      hio.observe(pressureMap);
    }
  }

  /* Contact form (front-end only) */
  const form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const btn = form.querySelector("button[type=submit]");
      btn.classList.add("is-sent");
      btn.disabled = true;
      setTimeout(() => {
        form.reset();
        btn.classList.remove("is-sent");
        btn.disabled = false;
      }, 2600);
    });
  }
})();
