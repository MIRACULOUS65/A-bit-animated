const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger:.1,
    y:10,
    duration:2,
    power: escape3,
    opacity:0

})