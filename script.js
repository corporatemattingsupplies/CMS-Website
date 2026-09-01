const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.topbar nav');

menuButton?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.addEventListener('click', event => {
  if (event.target.closest('a')) {
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
