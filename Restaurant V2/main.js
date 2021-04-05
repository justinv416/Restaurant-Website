const hamburgerMenu = document.querySelector('.hamburger-icon');
const mobileNav = document.querySelector('.mobile-nav');
const navbar =document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
})

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0)';
    } else if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'black';
    }
})

