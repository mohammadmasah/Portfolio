(() => {
  const counter = document.querySelector('[data-project-count]');
  if (!counter || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const root = document.documentElement;
  let value = 1;
  let visible = false;
  let timer = null;
  counter.textContent = '1';

  function update() {
    const ready = visible && !document.hidden && !root.classList.contains('show-intro');
    if (!ready) {
      clearTimeout(timer);
      timer = null;
      return;
    }
    if (timer !== null || value >= 10) return;
    // Each number stays visible; wait until the welcome animation has finished.
    timer = setTimeout(() => {
      timer = null;
      value++;
      counter.textContent = value === 10 ? '+10' : String(value);
      if (value === 10) {
        viewport.disconnect();
        welcome.disconnect();
        document.removeEventListener('visibilitychange', update);
      } else {
        update();
      }
    }, 200);
  }

  const viewport = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    update();
  }, { threshold: 1 });
  const welcome = new MutationObserver(update);
  welcome.observe(root, { attributes: true, attributeFilter: ['class'] });
  document.addEventListener('visibilitychange', update);
  viewport.observe(counter);
})();
