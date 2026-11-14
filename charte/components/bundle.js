/* Medicapteurs — place l'empreinte de pression sous le pointeur (boutons et cartes produit). */
window.Medicapteurs = (function () {
  var SELECTOR = '.mc-btn, .mc-plate';
  function onMove(e) {
    var el = e.target && e.target.closest ? e.target.closest(SELECTOR) : null;
    if (!el) return;
    var r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }
  function onLeave(e) {
    var el = e.target && e.target.closest ? e.target.closest(SELECTOR) : null;
    if (el && e.target === el) { el.style.removeProperty('--mx'); el.style.removeProperty('--my'); }
  }
  document.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerdown', onMove, { passive: true });
  document.addEventListener('pointerleave', onLeave, true);
  return { selector: SELECTOR };
})();
