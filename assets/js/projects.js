(() => {
  const catalog = document.querySelector('.project-catalog');
  if (!catalog) return;

  const controls = catalog.querySelector('.catalog-controls');
  const buttons = Array.from(catalog.querySelectorAll('[data-filter]'));
  const search = catalog.querySelector('#catalog-search');
  const cards = Array.from(catalog.querySelectorAll('.catalog-card'));
  const count = catalog.querySelector('#catalog-count');
  const empty = catalog.querySelector('.catalog-empty');
  let filter = 'all';
  const french = document.documentElement.lang === 'fr';
  search.value = new URLSearchParams(window.location.search).get('q') || '';
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const entries = cards.map(card => ({
    card,
    categories: card.dataset.categories.split(' '),
    text: normalize(card.dataset.search)
  }));

  function update() {
    const terms = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    entries.forEach(({ card, categories, text }) => {
      const matches = (filter === 'all' || categories.includes(filter)) && terms.every(term => text.includes(term));
      card.hidden = !matches;
      if (matches) visible++;
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    count.textContent = french
      ? `${visible} projet${visible === 1 ? '' : 's'} sur ${cards.length}`
      : `${visible} of ${cards.length} project${cards.length === 1 ? '' : 's'}`;
    empty.hidden = visible !== 0;
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    update();
  }));
  search.addEventListener('input', update);
  catalog.querySelector('#catalog-reset').addEventListener('click', () => {
    filter = 'all';
    search.value = '';
    update();
    search.focus();
  });
  controls.hidden = false;
  update();
})();
