---
title: À propos
layout: default
home_design: true
searchable: true
about_design: true
description: Découvrez Mohammad Masah, étudiant en développement full-stack à Epitech Paris, issu du droit, de la défense des droits humains et de la coordination de projets, avec un intérêt pour le backend et l’IA.

fr_url: /about.html
en_url: /en/about.html
lang: fr
locale: fr_FR
permalink: /about.html
---
{% include locale.html %}
<div class="portfolio-home about-page">
  <section class="about-hero hp-shell" aria-labelledby="about-title">
    <div class="about-introduction">
      <p class="hp-eyebrow">À PROPOS</p>
      <h1 id="about-title">Mohammad Masah.<br><em>Un parcours différent.<br>Un esprit pragmatique.</em></h1>
      <p class="about-role">Développeur full-stack <span aria-hidden="true">/</span> Automatisation IA</p>
      <p class="about-lead">Étudiant en développement Web Full-Stack à Epitech Paris, je conçois des applications modernes en alliant la rigueur du code à la puissance de l'IA et de l'automatisation.</p>
      <p class="about-summary">Avant de programmer, j’ai travaillé dans la coordination de projets humanitaires et de protection. Aujourd’hui, j’apporte au développement logiciel cette même rigueur organisationnelle, le sens du collectif et une forte capacité à résoudre des problèmes complexes.</p>
      <div class="hp-actions"><a class="hp-button" href="{{ '/contact.html' | prepend: locale_prefix | relative_url }}">Faisons connaissance <span aria-hidden="true">↗</span></a><a class="hp-button hp-button-secondary" href="{{ '/assets/docs/MASAH_Mohammad Haroon_CV.pdf' | relative_url }}">Voir mon CV <span aria-hidden="true">↓</span></a></div>
      <p class="about-opportunity">À la recherche d’une opportunité d’alternance en développement web.</p>
    </div>
    <aside class="about-profile" aria-label="Mon profil en bref">
      <div class="hp-window-bar"><span class="hp-window-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>LA PERSONNE DERRIÈRE LE CODE</span><span aria-hidden="true">&lt;/&gt;</span></div>
      <div class="about-portrait"><img src="{{ '/assets/images/MASAH.jpg' | relative_url }}" alt="Portrait de Mohammad Masah" fetchpriority="high"></div>
      <div class="about-profile-body"><p class="about-profile-name">Mohammad Masah</p><p class="about-profile-role">Apprendre. Créer. Progresser.</p><dl class="about-facts"><div><dt>Localisation</dt><dd>Paris, France</dd></div><div><dt>Formation</dt><dd>Epitech Paris</dd></div><div><dt>Langues</dt><dd>Français, anglais, persan</dd></div></dl></div>
    </aside>
  </section>

  <section class="about-story hp-shell" aria-labelledby="about-story-title">
    <div class="about-section-heading"><p class="hp-eyebrow">MON PARCOURS</p><h2 id="about-story-title">Du droit<br> au code.</h2><p>Un nouveau domaine.<br>La même envie de résoudre des problèmes.</p></div>
    <ol class="about-timeline">
      <li><span class="about-step" aria-hidden="true">01</span><div><span class="hp-label">LES FONDATIONS</span><h3>Droit et sciences politiques</h3><p>J’ai obtenu mon diplôme universitaire à Hérat, en Afghanistan. Le droit m’a appris à analyser des informations complexes, à interroger les hypothèses et à construire une argumentation claire.</p></div></li>
      <li><span class="about-step" aria-hidden="true">02</span><div><span class="hp-label">EXPÉRIENCE PROFESSIONNELLE</span><h3>Droits humains et coordination de projets</h3><p>Mon expérience de défenseur des droits humains et de coordinateur de projets auprès d’organisations internationales, dont Medica Mondiale, a renforcé ma communication, mon esprit d’équipe et mon sens des responsabilités.</p></div></li>
      <li><span class="about-step" aria-hidden="true">03</span><div><span class="hp-label">AUJOURD’HUI</span><h3>Développement full-stack à Epitech</h3><p>Je mets cet esprit d’analyse en pratique avec des applications web, des API REST et des outils d’IA, en reliant les interfaces React aux services qui les font fonctionner.</p></div></li>
    </ol>
  </section>

  <section class="about-focus hp-shell" aria-labelledby="about-focus-title">
    <div class="hp-section-top"><div><p class="hp-eyebrow">CE QUE JE DÉVELOPPE</p><h2 id="about-focus-title">Mes domaines techniques.</h2></div><p>Des compétences illustrées par des projets.</p></div>
    <div class="about-focus-grid">
      <article class="about-focus-card"><span class="about-focus-icon" aria-hidden="true">{ }</span><h3>Backend et API</h3><p>Logique applicative, endpoints REST, authentification et bases de données : les fondations d’une application web utile.</p><div class="hp-tags"><span>FastAPI</span><span>Node.js</span><span>Laravel</span><span>PostgreSQL</span></div><a class="hp-project-link" href="{{ '/porject-6/' | prepend: locale_prefix | relative_url }}">Découvrir NEXUS <span aria-hidden="true">↗</span></a></article>
      <article class="about-focus-card"><span class="about-focus-icon" aria-hidden="true">✳</span><h3>Intégration d’IA et automatisation</h3><p>Assistants contextualisés, modèles locaux et workflows connectés. TrackIt applique ces idées à la recherche d’emploi et à la préparation aux entretiens.</p><div class="hp-tags"><span>LangChain</span><span>Ollama</span><span>n8n</span><span>API de LLM</span></div><a class="hp-project-link" href="{{ '/project-11/' | prepend: locale_prefix | relative_url }}">Découvrir TrackIt <span aria-hidden="true">↗</span></a></article>
      <article class="about-focus-card"><span class="about-focus-icon" aria-hidden="true">&gt;_</span><h3>Tests et déploiement</h3><p>Tests automatisés, environnements conteneurisés et builds reproductibles. J’utilise ces outils pour faciliter l’exécution et la maintenance des projets.</p><div class="hp-tags"><span>Docker</span><span>GitHub Actions</span><span>Cypress</span><span>Git</span></div><a class="hp-project-link" href="{{ '/porject-7/' | prepend: locale_prefix | relative_url }}">Découvrir SpaceWord <span aria-hidden="true">↗</span></a></article>
    </div>
  </section>

  <section class="about-connect hp-shell" aria-labelledby="about-connect-title"><div><p class="hp-eyebrow">LA PROCHAINE ÉTAPE</p><h2 id="about-connect-title">Créons et apprenons ensemble.</h2><p>Je serais ravi d’échanger sur votre projet, votre équipe ou une opportunité d’alternance.</p></div><div class="about-connect-actions"><a class="hp-button" href="{{ '/contact.html' | prepend: locale_prefix | relative_url }}">Discutons ensemble <span aria-hidden="true">↗</span></a><a class="hp-text-link" href="{{ '/categories.html#see-more' | prepend: locale_prefix | relative_url }}">Voir tous les projets <span aria-hidden="true">↗</span></a></div></section>
  <footer class="hp-footer hp-shell"><span>© {{ site.time | date: '%Y' }} Mohammad Masah</span><div><a href="https://github.com/mohammadmasah">GitHub ↗</a><a href="https://www.linkedin.com/in/mohammad-masah">LinkedIn ↗</a><a href="{{ '/assets/docs/MASAH_Mohammad Haroon_CV.pdf' | relative_url }}">CV ↗</a></div></footer>
</div>
