// menu responsive code
var menu = document.querySelector('.menu');
var menu_toggle = document.querySelector('.menu_toggle');

menu_toggle.onclick = function(){
   menu_toggle.classList.toggle('active');
   menu.classList.toggle('responsive'); 
}

//site animation

const header = document.querySelector('header');
const title_span = document.querySelectorAll('.left h1 span');
const p = document.querySelector('.left p')
const a = document.querySelector('.left a')
const img = document.querySelector('.image_bird')

window.addEventListener('load',()=>{
   
    const TL = gsap.timeline({paused: true});
    TL
    .staggerFrom(header , 2 , {y:-100 , opacity:0, ease: "power2.out"}, 0.1)
    .staggerFrom(img , 1 , {x:1000 , opacity:0, ease: "power2.out"}, 0.3)
    .staggerFrom(title_span, 1 , {opacity:0, ease: "power2.out"}, 0.1)
    .staggerFrom(p, 1 , {opacity:0, ease: "power2.out"}, 0.2)
    .staggerFrom(a , 1 , {opacity:0, ease: "power2.out"}, 0.3)
    
    TL.play()
})


/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


