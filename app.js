const openMenu = document.querySelector('.hamburger-icon');
const closeMenu = document.querySelector('.hamburger-icon-close');
const mobileMenu = document.querySelector('.mobile-menu-links');

function toggleMenu(isOpen) {
    openMenu.style.display = isOpen ? 'none' : 'block';
    closeMenu.style.display = isOpen ? 'block' : 'none';
    mobileMenu.style.display = isOpen ? 'flex' : 'none';
}

openMenu.addEventListener('click', () => toggleMenu(true));
closeMenu.addEventListener('click', () => toggleMenu(false));
