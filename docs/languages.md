# Langues du portfolio

Le français est la langue par défaut, sur les URL existantes. L’anglais est disponible sous `/en/`. Les pages sont générées en HTML par Jekyll : leur traduction ne dépend pas de JavaScript et ne provoque pas de changement de langue au chargement.

- Pages françaises : `index.html`, `_pages/` et `_posts/`.
- Pages anglaises : `_pages/en/` et `_projects_en/` (collection Jekyll native).
- Chaque paire partage `fr_url` et `en_url`, avec `lang` et `locale` propres à sa langue.
- Navigation et libellés communs : `_data/translations.json` et `_includes/locale.html`.
- Cartes et ressources : fichiers `_data/home_projects*`, `_data/project_pages*` et `_data/project_catalog*`. Les fichiers portant le suffixe `_fr` sont français ; ceux sans suffixe sont anglais.
- Messages interactifs : `assets/js/contact.js`, `projects.js` et `search.js`.

Pour ajouter un projet, créer sa fiche française dans `_posts/` et son équivalent anglais dans `_projects_en/`, avec le même `slug` et la même `date`. Renseigner les URL jumelles et les données de carte dans les deux langues. Les listes, la recherche, les liens précédent/suivant et le sélecteur de langue utilisent ces informations.

Les liens de navigation restent dans la langue sélectionnée. FR / EN conserve l’ancre et les paramètres de la page. Les images, noms de technologies, dépôts et fichiers téléchargeables sont partagés entre les langues. Le CV PDF existant est conservé.

## Vérification

```sh
bundle exec jekyll build --destination /tmp/portfolio-bilingual-check --disable-disk-cache
python3 scripts/check_languages.py /tmp/portfolio-bilingual-check
node scripts/check_language_ui.js /tmp/portfolio-bilingual-check
```

Les tests vérifient les pages jumelles, les liens internes, les ancres, les index de recherche et les comportements interactifs dans les deux langues. Les envois du formulaire sont simulés.

Après un changement de `_config.yml`, relancer `jekyll serve` pour charger la collection anglaise. La pagination de l’ancien thème n’est pas utilisée : la liste des projets affiche tous les projets et les filtre dans chaque langue.
