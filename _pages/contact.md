---
title: Contact
layout: default
home_design: true
searchable: true
contact_design: true
description: Contactez Mohammad Masah pour un projet backend, une intégration d’IA, une application web ou une opportunité d’alternance.

fr_url: /contact.html
en_url: /en/contact.html
lang: fr
locale: fr_FR
permalink: /contact.html
---
{% include locale.html %}
<div class="portfolio-home contact-page hp-shell">
  <div class="contact-layout">
    <section class="contact-intro" aria-labelledby="contact-title">
      <p class="hp-eyebrow">ÉCHANGEONS</p>
      <h1 id="contact-title">Créons ensemble<br>quelque chose d’<em>utile.</em></h1>
      <p class="contact-lead">Une idée, un défi technique ou une opportunité d’alternance ? Je serais ravi d’en discuter avec vous.</p>
      <div class="contact-specialties" aria-label="Domaines d’intérêt"><span>Développement backend</span><span>IA et automatisation</span><span>Applications web</span></div>
      <div class="contact-channels">
        <a class="contact-channel contact-email" href="mailto:{{ site.email }}"><span class="contact-channel-icon" aria-hidden="true">@</span><span><span class="contact-channel-label">ÉCRIVEZ-MOI DIRECTEMENT</span><strong>{{ site.email }}</strong></span><span class="contact-channel-arrow" aria-hidden="true">↗</span></a>
        <a class="contact-channel" href="https://www.linkedin.com/in/mohammad-masah"><span class="contact-channel-icon" aria-hidden="true"><i class="fab fa-linkedin-in"></i></span><span><span class="contact-channel-label">LINKEDIN</span><strong>Échangeons sur nos projets professionnels</strong></span><span class="contact-channel-arrow" aria-hidden="true">↗</span></a>
        <a class="contact-channel" href="https://github.com/mohammadmasah"><span class="contact-channel-icon" aria-hidden="true"><i class="fab fa-github"></i></span><span><span class="contact-channel-label">GITHUB</span><strong>Découvrez mon code et mes contributions</strong></span><span class="contact-channel-arrow" aria-hidden="true">↗</span></a>
      </div>
      <div class="contact-location"><span aria-hidden="true">◎</span> Basé en France <span class="contact-location-divider" aria-hidden="true">/</span> Étudiant à Epitech</div>
    </section>

    <section class="contact-form-panel" aria-labelledby="contact-form-title">
      <div class="hp-window-bar"><span class="hp-window-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>PARLONS DE VOTRE PROJET</span><span aria-hidden="true">↗</span></div>
      <div class="contact-form-body">
        <h2 id="contact-form-title">Parlez-moi de votre idée.</h2>
        <p class="contact-form-intro">Quelques mots de contexte pour commencer.</p>
        <form id="contact-form" action="https://formspree.io/f/mqeezkgz" method="POST">
          <div class="contact-field-row">
            <div class="contact-field"><label for="contact-name">Votre nom <span aria-hidden="true">*</span></label><input id="contact-name" type="text" name="name" autocomplete="name" placeholder="Alex Martin" required maxlength="120"></div>
            <div class="contact-field"><label for="contact-email">Adresse e-mail <span aria-hidden="true">*</span></label><input id="contact-email" type="email" name="_replyto" autocomplete="email" placeholder="alex@example.com" required maxlength="254"></div>
          </div>
          <div class="contact-field"><label for="contact-subject">Objet <span class="contact-optional">(facultatif)</span></label><input id="contact-subject" type="text" name="subject" placeholder="Un projet, une opportunité, une question…" maxlength="200"></div>
          <div class="contact-field"><label for="contact-message">Votre message <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" rows="6" placeholder="Que souhaitez-vous créer ou aborder ?" required maxlength="10000"></textarea></div>
          <div class="contact-submit-row"><span>Les champs marqués * sont obligatoires.</span><button class="hp-button" id="contact-submit" type="submit"><span id="contact-submit-label">Envoyer le message</span><span aria-hidden="true">↗</span></button></div>
          <p class="contact-feedback" id="contact-feedback" role="status" aria-live="polite" aria-atomic="true"></p>
          <p class="contact-form-note">Votre nom et votre e-mail me permettent de vous répondre.</p>
        </form>
      </div>
    </section>
  </div>
  <div class="contact-work"><span>Envie de découvrir mes réalisations ?</span><a class="hp-text-link" href="{{ '/categories.html#see-more' | prepend: locale_prefix | relative_url }}">Découvrir mes projets <span aria-hidden="true">↗</span></a></div>
  <footer class="hp-footer"><span>© {{ site.time | date: '%Y' }} Mohammad Masah</span><div><a href="{{ '/' | prepend: locale_prefix | relative_url }}">Accueil</a><a href="{{ '/assets/docs/MASAH_Mohammad Haroon_CV.pdf' | relative_url }}">Voir mon CV ↗</a></div></footer>
</div>
<script src="{{ '/assets/js/contact.js' | relative_url }}" defer></script>
