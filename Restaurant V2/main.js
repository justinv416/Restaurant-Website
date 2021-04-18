const hamburgerMenu = document.querySelector('.hamburger-icon');
const mobileNav = document.querySelector('.mobile-nav');
const navbar = document.querySelector('.navbar');
const mobileNavList = document.querySelector('.mobile-nav-list');
const sliderMenuImg = document.querySelector('.slider-menu-img');
// container for image srcs
const sliderImgs = [
    './img/tim-toomey-pe9dvM1rQkM-unsplash.jpg', 
    './img/wesual-click-DhLl68_M5k4-unsplash.jpg', 
    './img/amirali-mirhashemian-fimM6mgqv6M-unsplash.jpg', 
    './img/david-b-townsend-3kINsXyellA-unsplash.jpg'
]
// current image
let imageIndex = 0;

// change image function
const changeImg = () => {
    imageIndex++;
    if (imageIndex < sliderImgs.length) {
        sliderMenuImg.src = sliderImgs[imageIndex]
    } else {
        imageIndex = 0;
        sliderMenuImg.src = sliderImgs[imageIndex]   
    }
}

setInterval(changeImg, 4000)

/* Toggle Mobile Menu */

mobileNavList.addEventListener('click', () => {
    mobileNav.classList.toggle('visible');
})

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('visible');
})

/* Main NAvbar Color Change On Scroll */

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0)';
        navbar.style.borderBottom = 'none'
    } else if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'black';
        navbar.style.borderBottom = '1px solid var(--metallic-gold)'
    }
})

/* GSAP Animations */

gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about-content',
        toggleActions: 'restart none none none'
    },
    duration: 1,
    x: 100,
    stagger: 0.2
});

gsap.from('.menu-content', {
    scrollTrigger: {
        trigger: '.menu-content',
        toggleActions: 'restart none none none'
    },
    duration: 1,
    x: -100,
    stagger: 0.2
});
