document.addEventListener('DOMContentLoaded', () => {
  particlesJS.load('particles-js', 'particles.json', () => {
    console.log('callback - particles.js config loaded');
  });

  $('.popover-links').popover()
});
