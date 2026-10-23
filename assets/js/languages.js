// Preserve the section and project enquiry when switching languages.
document.querySelectorAll('[data-language-link]').forEach(link => {
  const target = new URL(link.href);
  target.search = window.location.search;
  target.hash = window.location.hash;
  link.href = target.href;
});
