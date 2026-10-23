(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const button = document.getElementById('contact-submit');
  const label = document.getElementById('contact-submit-label');
  const feedback = document.getElementById('contact-feedback');
  const name = document.getElementById('contact-name');
  const subject = document.getElementById('contact-subject');
  const message = document.getElementById('contact-message');
  const french = document.documentElement.lang === 'fr';
  const requestedProject = new URLSearchParams(window.location.search).get('subject');
  if (requestedProject) {
    subject.value = requestedProject.slice(0, 200);
    message.value = french
      ? `Bonjour Mohammad,\n\nJe souhaiterais accéder au code du projet ${requestedProject.slice(0, 200)}.`
      : `Hello Mohammad,\n\nI would like to request code access for the ${requestedProject.slice(0, 200)} project.`;
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (button.disabled || !form.reportValidity()) return;
    const data = new FormData(form);
    const firstName = name.value.trim().split(/\s+/)[0];
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    label.textContent = french ? 'Envoi en cours…' : 'Sending…';
    feedback.textContent = '';
    delete feedback.dataset.state;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Submission failed');
      feedback.dataset.state = 'success';
      feedback.textContent = french
        ? `Merci${firstName ? `, ${firstName}` : ''} ! Votre message a été envoyé. Je vous répondrai par e-mail.`
        : `Thank you${firstName ? `, ${firstName}` : ''}! Your message has been sent. I’ll get back to you by email.`;
      form.reset();
    } catch {
      feedback.dataset.state = 'error';
      feedback.textContent = french
        ? 'L’envoi de votre message n’a pas pu être confirmé. Réessayez ou contactez-moi directement par e-mail. Votre texte a été conservé.'
        : 'Your message could not be confirmed as sent. Please try again, or use the email link to contact me directly. Your message is still here.';
    } finally {
      button.disabled = false;
      form.setAttribute('aria-busy', 'false');
      label.textContent = french ? 'Envoyer le message' : 'Send message';
    }
  });
})();
