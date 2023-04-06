let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};



const sr = ScrollReaveal({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reaveal('.home-text',{delay:200, origin:''})



ScrollReveal().reveal('.item', { delay: 250 });
ScrollReveal().reveal('.item', { duration: 500 });
ScrollReveal().reveal('.item', { delay: 375, reset: true });

// Is the same as...

ScrollReveal().reveal('.item', {
    delay: 375,
    duration: 500,
    reset: true
});