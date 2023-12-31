'use strict';

const tl = gsap.timeline();

tl.fromTo('.js-main-title',{
    x:'-50%'
},{
    x:0,
    duration:1.5,
    ease:"bounce.out"
}).fromTo('.js-img',{
    y:'20%',
    opacity:0
},{
    y:0,
    duration:1.0,
    opacity:1,
    delay:2.0
});

var textWrap = document.querySelectorAll('.js-span');
textWrap.forEach((t) => (
    t.innerHTML = t.textContent.replace(/\S/g,'<span>$&</span>')
));

gsap.fromTo('.js-span span',{
    opacity:0,
    x:'-10px',
    scale:10
},{
    x:0,
    scale:1,
    opacity:1,
    stagger:0.2,
    scrollTrigger: {
        trigger:'.js-about',
        start:'top center',
        // markers: true
    }
});

