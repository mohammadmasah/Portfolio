"""Validate the generated bilingual site: python3 scripts/check_languages.py BUILD_DIR."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import json
import sys

root = Path(sys.argv[1])


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.lang = None
        self.links = []
        self.switches = []
        self.alternates = {}
        self.ids = []
        self.cards = []
        self.search_text = ''
        self.in_search = False
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'html':
            self.lang = a['lang']
        if 'id' in a:
            self.ids.append(a['id'])
        if tag == 'a':
            self.links.append(a)
            if 'data-language-link' in a:
                self.switches.append(a)
            if 'catalog-card' in a.get('class', '').split():
                self.cards.append(a)
        if tag == 'link' and 'hreflang' in a:
            self.alternates[a['hreflang']] = urlsplit(a['href']).path
        if tag == 'script' and a.get('id') == 'portfolio-search-data':
            self.in_search = True

    def handle_endtag(self, tag):
        if tag == 'script':
            self.in_search = False

    def handle_data(self, text):
        if self.in_search:
            self.search_text += text


def file_for(url):
    path = root / unquote(urlsplit(url).path).lstrip('/')
    return path / 'index.html' if path.is_dir() else path


slugs = [p.stem for p in Path('_projects_en').glob('*.md')]
assert len(slugs) == len(list(Path('_posts').glob('*.md'))) == 11
routes = ['/', '/about.html', '/contact.html', '/categories.html', '/privacy-policy.html',
          '/tags.html', '/authors-list.html', '/author-jane.html', '/author-sal.html', '/404.html']
routes += [f'/{slug}/' for slug in slugs]
for route in routes:
    for lang, prefix in [('fr', ''), ('en', '/en')]:
        url = prefix + route
        path = file_for(url)
        assert path.is_file(), url
        page = Page(path)
        assert page.lang == lang, (url, page.lang)
        assert len(page.ids) == len(set(page.ids)), (url, 'duplicate IDs')
        assert page.alternates == {'fr': route, 'en': '/en' + route, 'x-default': route}, url
        assert len(page.switches) == 2, url
        for switch in page.switches:
            expected = route if switch['lang'] == 'fr' else '/en' + route
            assert switch['href'] == expected, (url, switch)
            assert ('aria-current' in switch) == (switch['lang'] == lang), url
        for link in page.links:
            href = link.get('href', '')
            if not href.startswith('/'):
                continue
            target = file_for(href)
            assert target.is_file(), (url, href)
            if 'data-language-link' not in link and not href.startswith('/assets/'):
                assert href.startswith('/en/') == (lang == 'en'), (url, 'cross-language link', href)
            fragment = urlsplit(href).fragment
            if fragment and target.suffix == '.html':
                assert unquote(fragment) in Page(target).ids, (url, href, 'missing anchor')
        documents = json.loads(page.search_text)
        assert len(documents) == 15, (url, 'search document count', len(documents))
        assert len({doc['url'] for doc in documents}) == 15
        assert all(doc['url'].startswith('/en/') == (lang == 'en') for doc in documents), url
        assert all(file_for(doc['url']).is_file() for doc in documents), url
        if route == '/categories.html':
            assert len(page.cards) == len({c['href'] for c in page.cards}) == 11
            assert all(card['data-categories'] for card in page.cards)
            assert page.cards[0]['href'] == prefix + '/project-11/'
            assert all(card.get('data-search') for card in page.cards)

# The English collection must not pollute the French project count or feed.
assert '/en/' not in (root / 'feed.xml').read_text()
print(f'PASS: {len(routes) * 2} localized pages, paired language switches, internal links, anchors, search indexes and 11 projects per language.')
