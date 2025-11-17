// Initialize Locomotive Scroll with error handling
let scroll;
try {
    scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
} catch (error) {
    console.warn('Locomotive Scroll failed to initialize:', error);
}

gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: "power2",
    opacity: 0
})

Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2",{
    y:30,
    stagger:0.3,
    opacity:0,
    ease:Expo,
    duration:2
})

Shery.imageEffect("#imgntext img",{
    style:4,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.71,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":3.66,"range":[0,5]},"uFrequency":{"value":7.25,"range":[0,10]},"geoVertex":{"range":[1,64],"value":36.59},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.49,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect("#susimagewrapper img",{
    style:6,
    config:{"noiseDetail":{"value":6.11,"range":[0,100]},"distortionAmount":{"value":3.36,"range":[0,10]},"scale":{"value":49.62,"range":[0,100]},"speed":{"value":1,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect("#picimg ",{
    style:6,
    config:{"noiseDetail":{"value":6.11,"range":[0,100]},"distortionAmount":{"value":3.36,"range":[0,10]},"scale":{"value":49.62,"range":[0,100]},"speed":{"value":1,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

gsap.from("#imgntext img",{
    y:"70",
    opacity:0,
    duration: 2,
    ease:Expo,
})

Shery.imageEffect("#bimg ",{
    style:3,
    config:{"uFrequencyX":{"value":22.9,"range":[0,100]},"uFrequencyY":{"value":26.72,"range":[0,100]},"uFrequencyZ":{"value":6.11,"range":[0,100]},"geoVertex":{"range":[1,64],"value":22.64},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.280753854940034},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.03,"range":[1,15]},"durationOut":{"value":0.66,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":4.58,"range":[0,10]},"metaball":{"value":0.15,"range":[0,2],"_gsap":{"id":32}},"discard_threshold":{"value":0.6,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},
    gooey:true,
})

document.querySelector("#ftext button").addEventListener("mouseover", function(){
    gsap.to("#future video",{
        opacity:1,
        duration:1,
        ease:"power4.out",
    })
})

document.querySelector("#ftext button").addEventListener("mouseleave", function(){
    gsap.to("#future video",{
        opacity:0,
        duration:1,
        ease:"power4.out",
    })
})

