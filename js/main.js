// Toggle dark mode

// js/main.js
document.getElementById('darkToggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle("dark");
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});


