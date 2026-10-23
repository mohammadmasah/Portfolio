(() => {
  const form = document.getElementById('portfolio-search-form');
  const dialog = document.getElementById('portfolio-search-dialog');
  if (!form || !dialog || typeof dialog.showModal !== 'function') return;
  const input = document.getElementById('lunrsearch');
  const list = document.getElementById('portfolio-search-list');
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const documents = JSON.parse(document.getElementById('portfolio-search-data').textContent);
  const entries = documents.map(doc => ({ ...doc, search: normalize(`${doc.title} ${doc.description} ${doc.body}`) }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    const terms = normalize(query).split(/\s+/);
    const results = entries.filter(doc => terms.every(term => doc.search.includes(term)));
    list.replaceChildren();
    document.getElementById('portfolio-search-query').textContent = `« ${query} »`;
    results.forEach(doc => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = doc.url;
      const title = document.createElement('strong');
      title.textContent = doc.title;
      const description = document.createElement('span');
      description.textContent = doc.description;
      link.append(title, description);
      item.append(link);
      list.append(item);
    });
    if (!results.length) {
      const item = document.createElement('li');
      item.textContent = dialog.dataset.empty;
      list.append(item);
    }
    dialog.showModal();
  });
  document.getElementById('portfolio-search-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => input.focus());
})();
