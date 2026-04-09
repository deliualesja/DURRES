const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

// 1. pak zoom ne fillim
tl.to(".scene", {
  scale: 1.02,
  duration: 1.2
});

// 2. grisja e letres hapet
tl.to(".tear-hole", {
  scale: 1,
  duration: 0.9,
  ease: "back.out(1.4)"
}, "+=0.4");

// 3. zona ku del Durrësi zmadhohet
tl.to(".emerge-wrap", {
  clipPath: "ellipse(42% 25% at 50% 58%)",
  duration: 1.2,
  ease: "power3.out"
}, "-=0.5");

// 4. final image del me rise + zoom
tl.fromTo(".final-map",
  {
    y: 70,
    scale: 1.1
  },
  {
    y: 0,
    scale: 1.02,
    duration: 1.4,
    ease: "power3.out"
  },
  "-=1"
);

// 5. micro movement si kamer
gsap.to(".scene", {
  x: 3,
  y: -2,
  rotate: 0.15,
  repeat: -1,
  yoyo: true,
  duration: 2.4,
  ease: "sine.inOut"
});

// 6. makina levizin
gsap.to(".car1", {
  x: 115,
  y: -38,
  rotate: -4,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".car2", {
  x: -72,
  y: 48,
  rotate: 148,
  duration: 4.6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".car3", {
  x: -112,
  y: -62,
  rotate: 150,
  duration: 5.2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});