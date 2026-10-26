(() => {
  'use strict';
  document.querySelectorAll('[data-project-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.hp-carousel-track');
    const previous = carousel.querySelector('.hp-carousel-previous');
    const next = carousel.querySelector('.hp-carousel-next');
    const toggle = carousel.querySelector('.hp-carousel-toggle');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cards = Array.from(track.children);
    if (cards.length < 2) return;
    // A second copy lets the end join the beginning without reversing or jumping.
    cards.forEach((card) => {
      const copy = card.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      copy.setAttribute('tabindex', '-1');
      copy.removeAttribute('aria-labelledby');
      copy.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
      track.appendChild(copy);
    });
    let paused = reducedMotion.matches;
    let focused = false;
    let visible = false;
    let frame;
    let lastTime;
    let position = 0;
    const pixelsPerSecond = 26;

    const loopWidth = () => track.children[cards.length].offsetLeft - cards[0].offsetLeft;
    const updateControls = () => {
      toggle.textContent = paused ? toggle.dataset.playLabel : toggle.dataset.pauseLabel;
    };
    const move = (step) => {
      const distance = cards[1].offsetLeft - cards[0].offsetLeft;
      const width = loopWidth();
      let start = track.scrollLeft % width;
      if (step < 0 && start < distance) start += width;
      track.scrollTo({ left: start, behavior: 'instant' });
      track.scrollTo({
        left: start + step * distance,
        behavior: reducedMotion.matches ? 'instant' : 'smooth'
      });
    };
    const animate = (time) => {
      if (lastTime !== undefined) {
        // Cap long frames so a busy browser never makes the cards leap forward.
        position = (position + pixelsPerSecond * Math.min(time - lastTime, 64) / 1000) % loopWidth();
        track.scrollLeft = position;
      }
      lastTime = time;
      frame = requestAnimationFrame(animate);
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      lastTime = undefined;
      position = track.scrollLeft;
      if (paused || focused || !visible || document.hidden || loopWidth() <= 0) return;
      frame = requestAnimationFrame(animate);
    };

    previous.hidden = next.hidden = toggle.hidden = false;
    previous.addEventListener('click', () => { move(-1); schedule(); });
    next.addEventListener('click', () => { move(1); schedule(); });
    toggle.addEventListener('click', () => {
      paused = !paused;
      updateControls();
      schedule();
    });
    carousel.addEventListener('focusin', () => { focused = true; schedule(); });
    carousel.addEventListener('focusout', (event) => {
      focused = carousel.contains(event.relatedTarget);
      schedule();
    });
    // A touch gesture gives the visitor control until they choose to resume.
    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'mouse') { paused = true; updateControls(); schedule(); }
    });
    document.addEventListener('visibilitychange', schedule);
    window.addEventListener('resize', () => { updateControls(); schedule(); });
    reducedMotion.addEventListener('change', () => {
      paused = reducedMotion.matches;
      updateControls();
      schedule();
    });
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    }, { threshold: 0.25 }).observe(carousel);
    updateControls();
  });
})();
