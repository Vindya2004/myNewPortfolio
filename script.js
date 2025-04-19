let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
ScrollReveal({
    distance: '80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content,heading,.skills h1,.assignment h1,.services h1,.projects h1',{origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form,.container,.project-container' ,{origin: 'button'});
ScrollReveal().reveal('.home-content h1, .about-img,.services-container', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});
ScrollReveal().reveal('.footer',{origin:'bottom'});
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer' , 'Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay:1200,
    loop:true,
});