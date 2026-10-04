/* Único uso de JavaScript: menú plegable en móvil. Sin dependencias, sin cookies. */
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  root.classList.add('js');

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Cerrar' : 'Menú';
  }

  setOpen(false);

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
