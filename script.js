const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.mobile-cancel');
const menuItems = document.querySelectorAll('.mobile-item-nav');
function toggleMenu() {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}
hamburger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
window.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.style.display = 'none';
  }
});
for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', toggleMenu);
}