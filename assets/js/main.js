// Portfolio Simon Paillaud : langue, barre de lecture, agrandissement des images, copie de l'e-mail.
(function () {
  var pages = { fr: document.querySelector('[data-lang="fr"]'), en: document.querySelector('[data-lang="en"]') };
  var meta = {
    fr: { t: 'Simon Paillaud · Product Designer', d: 'Simon Paillaud, Product Designer UX/UI. Refonte de trois sites franchise, design system, étude de cas et CV.' },
    en: { t: 'Simon Paillaud · Product Designer', d: 'Simon Paillaud, UX/UI Product Designer. Redesign of three franchise websites, design system, case study and resume.' }
  };
  var cur = 'en', bars = document.querySelectorAll('.progress');

  function save(v) { try { localStorage.setItem('lang', v); } catch (e) {} }
  function saved() { try { return localStorage.getItem('lang'); } catch (e) { return null; } }

  // Section visible en haut de l'écran, pour garder sa place au changement de langue
  function currentSec() {
    var best = null;
    pages[cur].querySelectorAll('[data-sec]').forEach(function (e) { if (e.getBoundingClientRect().top <= 120) best = e; });
    return best ? { id: best.dataset.sec, off: best.getBoundingClientRect().top } : null;
  }

  function show(l, keep) {
    var pos = keep ? currentSec() : null;
    pages.fr.hidden = l !== 'fr'; pages.en.hidden = l !== 'en'; cur = l;
    document.documentElement.lang = l;
    document.title = meta[l].t;
    document.querySelector('meta[name=description]').content = meta[l].d;
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.set === l)); });
    if (pos) {
      var t = pages[l].querySelector('[data-sec="' + pos.id + '"]');
      if (t) window.scrollTo(0, t.getBoundingClientRect().top + window.scrollY - pos.off);
    }
    progress();
  }

  // Langue : #fr ou #en dans l'adresse, sinon le dernier choix, sinon l'anglais
  var h = location.hash.slice(1);
  show((h === 'en' || h === 'fr') ? h : (saved() || 'en'), false);
  window.addEventListener('hashchange', function () { var x = location.hash.slice(1); if (x === 'en' || x === 'fr') show(x, false); });
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      var l = b.dataset.set; save(l);
      try { history.replaceState(null, '', '#' + l); } catch (e) {}
      show(l, true);
    });
  });

  // Barre de lecture
  function progress() {
    var d = document.documentElement, max = d.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    bars.forEach(function (b) { b.style.width = (p * 100) + '%'; });
  }
  window.addEventListener('scroll', progress, { passive: true });
  window.addEventListener('resize', progress);

  // Agrandissement des images
  var lb = document.getElementById('lb'), lbi = document.getElementById('lb-img');
  document.querySelectorAll('.zoom').forEach(function (z) {
    z.addEventListener('click', function () {
      var i = z.querySelector('img'); lbi.src = i.src; lbi.alt = i.alt;
      lb.querySelector('.lb-close').setAttribute('aria-label', cur === 'en' ? 'Close' : 'Fermer');
      if (lb.showModal) lb.showModal(); else window.open(i.src);
    });
  });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });

  // Copie de l'e-mail
  document.querySelectorAll('.copy').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.parentNode.querySelector('.mail'), ok = cur === 'en' ? ['Copied', 'Selected'] : ['Copiée', 'Sélectionnée'];
      function sel() { var r = document.createRange(); r.selectNodeContents(t); var s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = ok[1]; }
      try { navigator.clipboard.writeText(t.textContent).then(function () { b.textContent = ok[0]; }, sel); } catch (e) { sel(); }
    });
  });
})();
