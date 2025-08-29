document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const scrollTop = document.getElementById('scrollTop');
  const body = document.body;

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.setAttribute('aria-label', `Switch to ${body.dataset.theme === 'dark' ? 'light' : 'dark'} theme`);
  });

  // Scroll to top
  scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Keyboard navigation
  document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
      }
    });
  });

  // Add animation classes if needed
});