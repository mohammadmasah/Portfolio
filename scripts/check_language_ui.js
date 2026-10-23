// Run after building: node scripts/check_language_ui.js /tmp/portfolio-bilingual-check
const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');
const path = require('path');
const build = process.argv[2];
const source = name => fs.readFileSync(`assets/js/${name}.js`, 'utf8');
const element = (extra = {}) => ({
  value: '', textContent: '', dataset: {}, handlers: {}, children: [], hidden: false,
  setAttribute(k, v) { this[k] = v; },
  addEventListener(type, fn) { this.handlers[type] = fn; },
  append(...nodes) { this.children.push(...nodes); },
  replaceChildren(...nodes) { this.children = nodes; },
  focus() { this.focused = true; },
  ...extra
});

async function checkContact(lang) {
  const ids = Object.fromEntries(['contact-form', 'contact-submit', 'contact-submit-label', 'contact-feedback', 'contact-name', 'contact-subject', 'contact-message'].map(id => [id, element()]));
  const form = ids['contact-form'];
  form.action = 'https://formspree.io/f/mqeezkgz';
  form.valid = true;
  form.reportValidity = () => form.valid;
  form.reset = () => { form.resetCalled = true; ids['contact-message'].value = ''; };
  const requests = [];
  let resolve, reject;
  vm.runInNewContext(source('contact'), {
    document: { documentElement: { lang }, getElementById: id => ids[id] },
    window: { location: { search: '?subject=TrackIt' } }, URLSearchParams,
    FormData: class { constructor(form) { this.form = form; } },
    fetch: (url, options) => { requests.push({ url, options }); return new Promise((a, b) => { resolve = a; reject = b; }); }
  });
  assert.match(ids['contact-message'].value, lang === 'fr' ? /Bonjour/ : /Hello/);
  assert.equal(ids['contact-subject'].value, 'TrackIt');
  const submit = () => form.handlers.submit({ preventDefault() {} });
  form.valid = false; await submit(); assert.equal(requests.length, 0);
  form.valid = true; ids['contact-name'].value = 'Alex Martin';
  const pending = submit();
  assert.equal(ids['contact-submit'].disabled, true);
  assert.equal(ids['contact-submit-label'].textContent, lang === 'fr' ? 'Envoi en cours…' : 'Sending…');
  await submit(); assert.equal(requests.length, 1);
  assert.equal(requests[0].url, form.action); assert.equal(requests[0].options.method, 'POST');
  resolve({ ok: true }); await pending;
  assert.equal(form.resetCalled, true);
  assert.match(ids['contact-feedback'].textContent, lang === 'fr' ? /Merci, Alex/ : /Thank you, Alex/);
  for (const networkError of [false, true]) {
    ids['contact-message'].value = 'Preserve this message';
    const pendingFailure = submit();
    if (networkError) reject(new Error('offline')); else resolve({ ok: false });
    await pendingFailure;
    assert.equal(ids['contact-feedback'].dataset.state, 'error');
    assert.match(ids['contact-feedback'].textContent, lang === 'fr' ? /conservé/ : /still here/);
    assert.equal(ids['contact-message'].value, 'Preserve this message');
    assert.equal(ids['contact-submit'].disabled, false);
    assert.equal(form['aria-busy'], 'false');
  }
}

function checkCatalog(lang) {
  const controls = element({ hidden: true });
  const buttons = ['all', 'ai', 'backend', 'frontend', 'delivery'].map(filter => element({ dataset: { filter } }));
  const search = element();
  const cards = [
    element({ dataset: { categories: 'ai backend', search: 'TrackIt React FastAPI' } }),
    element({ dataset: { categories: 'delivery', search: 'SpaceWord déploiement Docker' } })
  ];
  const count = element(), empty = element(), reset = element();
  const selectors = { '.catalog-controls': controls, '#catalog-search': search, '#catalog-count': count, '.catalog-empty': empty, '#catalog-reset': reset };
  const catalog = { querySelector: s => selectors[s], querySelectorAll: s => s === '[data-filter]' ? buttons : cards };
  vm.runInNewContext(source('projects'), {
    document: { documentElement: { lang }, querySelector: () => catalog },
    window: { location: { search: '?q=FASTAPI' } }, URLSearchParams
  });
  assert.equal(controls.hidden, false); assert.equal(cards[0].hidden, false); assert.equal(cards[1].hidden, true);
  assert.equal(count.textContent, lang === 'fr' ? '1 projet sur 2' : '1 of 2 projects');
  search.value = 'deploiement'; search.handlers.input(); assert.equal(cards[1].hidden, false);
  buttons[1].handlers.click(); assert.equal(empty.hidden, false);
  assert.equal(buttons[1]['aria-pressed'], 'true');
  reset.handlers.click(); assert.equal(cards.every(c => !c.hidden), true); assert.equal(search.focused, true);
  for (const button of buttons) {
    button.handlers.click();
    assert.equal(cards.filter(c => !c.hidden).length, cards.filter(c => button.dataset.filter === 'all' || c.dataset.categories.split(' ').includes(button.dataset.filter)).length);
  }
}

function checkSearch(lang) {
  const html = fs.readFileSync(path.join(build, lang === 'fr' ? 'index.html' : 'en/index.html'), 'utf8');
  const data = html.match(/<script type="application\/json" id="portfolio-search-data">([\s\S]*?)<\/script>/)[1];
  const form = element(), input = element(), list = element(), query = element(), close = element();
  const dialog = element({ dataset: { empty: lang === 'fr' ? 'Aucun résultat.' : 'No results.' }, showModal() { this.open = true; }, close() { this.open = false; this.handlers.close(); } });
  const ids = { 'portfolio-search-form': form, 'portfolio-search-dialog': dialog, lunrsearch: input, 'portfolio-search-list': list, 'portfolio-search-query': query, 'portfolio-search-close': close, 'portfolio-search-data': { textContent: data } };
  vm.runInNewContext(source('search'), { document: { getElementById: id => ids[id], createElement: () => element() } });
  input.value = lang === 'fr' ? 'entretiens' : 'interviews';
  form.handlers.submit({ preventDefault() {} });
  assert.equal(dialog.open, true); assert.ok(list.children.length > 0);
  assert.ok(list.children.some(item => item.children[0].href === (lang === 'fr' ? '' : '/en') + '/project-11/'));
  assert.ok(list.children.every(item => item.children[0].href.startsWith('/en/') === (lang === 'en')));
  input.value = '<img onerror=alert(1)>'; form.handlers.submit({ preventDefault() {} });
  assert.equal(query.textContent, '« <img onerror=alert(1)> »');
  assert.equal(list.children[0].textContent, dialog.dataset.empty);
  close.handlers.click(); assert.equal(dialog.open, false); assert.equal(input.focused, true);
}

(async () => {
  for (const lang of ['fr', 'en']) { await checkContact(lang); checkCatalog(lang); checkSearch(lang); }
  const links = [{ href: 'https://example.test/project-11/' }, { href: 'https://example.test/en/project-11/' }];
  vm.runInNewContext(source('languages'), { document: { querySelectorAll: () => links }, window: { location: { search: '?subject=TrackIt', hash: '#project-overview' } }, URL });
  assert.equal(links[1].href, 'https://example.test/en/project-11/?subject=TrackIt#project-overview');
  assert.equal(links[0].href, 'https://example.test/project-11/?subject=TrackIt#project-overview');
  console.log('PASS: FR/EN search, filters, contact validation/success/failure, duplicate prevention and language links. No messages sent.');
})().catch(error => { console.error(error); process.exitCode = 1; });
