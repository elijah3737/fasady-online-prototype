/* КАТАЛЕЯ — общий скрипт публичных страниц: мобильное меню. */
(function () {
  'use strict';
  var hdr = document.querySelector('.hdr');
  var burger = hdr && hdr.querySelector('.burger');
  if (!burger) return;
  function close() { hdr.removeAttribute('data-open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = hdr.hasAttribute('data-open');
    if (open) { close(); } else { hdr.setAttribute('data-open', ''); burger.setAttribute('aria-expanded', 'true'); }
  });
  hdr.addEventListener('click', function (e) { if (e.target.closest('.nav a')) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
