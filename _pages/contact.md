---
title: Contact
layout: default
home_design: true
contact_design: true
description: Get in touch with Mohammad Masah about backend development, AI integration, web applications or a work-study opportunity.

permalink: /contact.html
---
<div class="portfolio-home contact-page hp-shell">
  <div class="contact-layout">
    <section class="contact-intro" aria-labelledby="contact-title">
      <p class="hp-eyebrow">LET’S CONNECT</p>
      <h1 id="contact-title">Let’s build<br>something <em>useful.</em></h1>
      <p class="contact-lead">Have an idea, a technical challenge, or a work-study opportunity? I’d love to hear about it.</p>
      <div class="contact-specialties" aria-label="Areas of interest"><span>Backend development</span><span>AI & automation</span><span>Web applications</span></div>
      <div class="contact-channels">
        <a class="contact-channel contact-email" href="mailto:{{ site.email }}"><span class="contact-channel-icon" aria-hidden="true">@</span><span><span class="contact-channel-label">EMAIL ME DIRECTLY</span><strong>{{ site.email }}</strong></span><span class="contact-channel-arrow" aria-hidden="true">↗</span></a>
        <a class="contact-channel" href="https://www.linkedin.com/in/mohammad-masah"><span class="contact-channel-icon" aria-hidden="true"><i class="fab fa-linkedin-in"></i></span><span><span class="contact-channel-label">LINKEDIN</span><strong>Let’s connect professionally</strong></span><span class="contact-channel-arrow" aria-hidden="true">↗</span></a>
        <a class="contact-channel" href="https://github.com/mohammadmasah"><span class="contact-channel-icon" aria-hidden="true"><i class="fab fa-github"></i></span><span><span class="contact-channel-label">GITHUB</span><strong>Explore my code & contributions</strong></span><span class="contact-channel-arrow" aria-hidden="true">↗</span></a>
      </div>
      <div class="contact-location"><span aria-hidden="true">◎</span> Based in France <span class="contact-location-divider" aria-hidden="true">/</span> Epitech student</div>
    </section>

    <section class="contact-form-panel" aria-labelledby="contact-form-title">
      <div class="hp-window-bar"><span class="hp-window-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>START A CONVERSATION</span><span aria-hidden="true">↗</span></div>
      <div class="contact-form-body">
        <h2 id="contact-form-title">Tell me what you have in mind.</h2>
        <p class="contact-form-intro">A little context is a great place to start.</p>
        <form id="contact-form" action="https://formspree.io/f/mqeezkgz" method="POST">
          <div class="contact-field-row">
            <div class="contact-field"><label for="contact-name">Your name <span aria-hidden="true">*</span></label><input id="contact-name" type="text" name="name" autocomplete="name" placeholder="Alex Martin" required maxlength="120"></div>
            <div class="contact-field"><label for="contact-email">Email address <span aria-hidden="true">*</span></label><input id="contact-email" type="email" name="_replyto" autocomplete="email" placeholder="alex@example.com" required maxlength="254"></div>
          </div>
          <div class="contact-field"><label for="contact-subject">Subject <span class="contact-optional">(optional)</span></label><input id="contact-subject" type="text" name="subject" placeholder="A project, an opportunity, a question…" maxlength="200"></div>
          <div class="contact-field"><label for="contact-message">Your message <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" rows="6" placeholder="What would you like to build or discuss?" required maxlength="10000"></textarea></div>
          <div class="contact-submit-row"><span>Fields marked * are required.</span><button class="hp-button" id="contact-submit" type="submit"><span id="contact-submit-label">Send message</span><span aria-hidden="true">↗</span></button></div>
          <p class="contact-feedback" id="contact-feedback" role="status" aria-live="polite" aria-atomic="true"></p>
          <p class="contact-form-note">Your name and email help me reply to your message.</p>
        </form>
      </div>
    </section>
  </div>
  <div class="contact-work"><span>Want to see what I’m working on?</span><a class="hp-text-link" href="{{ '/categories.html#see-more' | relative_url }}">Explore my projects <span aria-hidden="true">↗</span></a></div>
  <footer class="hp-footer"><span>© {{ site.time | date: '%Y' }} Mohammad Masah</span><div><a href="{{ '/' | relative_url }}">Home</a><a href="{{ '/assets/docs/MASAH_Mohammad Haroon_CV.pdf' | relative_url }}">View résumé ↗</a></div></footer>
</div>
<script src="{{ '/assets/js/contact.js' | relative_url }}" defer></script>
