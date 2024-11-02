const sectionNFT = document.querySelector('.js-section-nft')

const nft01 = document.querySelector('.nft-01');
const nft02 = document.querySelector('.nft-02');
const nft03 = document.querySelector('.nft-03');
const nft04 = document.querySelector('.nft-04');

function startAnimation(elem, xPosition) {
    gsap.to(elem, {
        x: xPosition,
        duration: 2,
        // ease: "bounce.out",
        scrollTrigger: {
            trigger: sectionNFT,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            // markers: true
        }
    })
}

startAnimation(nft01, -420);
startAnimation(nft02, -125);
startAnimation(nft03, 125);
startAnimation(nft04, 420);

//tilte animation
const myText = new SplitType('#my-text')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 1,
    duration: 0.3,
    onComplete: function () {
        gsap.to('.by-code', {
            opacity: 1,
        });
    },
})

//The animation
gsap.to('.the-end', {
    scale: 2.5,
    scrub: true,
    scrollTrigger: {
        trigger: ".the-end",
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        // markers: true
    }
});

gsap.to('.abobora', {
    rotation: 360,
    transformOrigin: 'center center',
    left: '40%',
    duration: 2,
    scrollTrigger: {
        trigger: ".js-section-abobora",
        start: 'top center',
        end: 'bottom center',
        pin: true,
        scrub: true,
    },
})

