const tl = gsap.timeline({
  defaults: { ease: "power2.inOut" }
});

// camera micro movement
gsap.to(".scene", {
  x: 2,
  y: -2,
  rotate: 0.2,
  duration: 2.4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// car motion
gsap.to(".car-1", {
  x: 110,
  y: -36,
  duration: 4.2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".car-2", {
  x: -85,
  y: 52,
  duration: 4.8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".car-3", {
  x: -120,
  y: -58,
  duration: 5.2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// main animation
tl.to(".map-base", {
  scale: 1.03,
  duration: 1.2
});

tl.to(".hand-pin", {
  x: -120,
  y: 160,
  duration: 1.35,
  ease: "power2.out"
});

tl.to(".hand-pin", {
  x: -128,
  y: 182,
  duration: 0.2,
  ease: "power1.inOut"
});

tl.to(".hand-pin", {
  x: -122,
  y: 170,
  duration: 0.18,
  ease: "power1.out"
});

tl.to(".tear-ring", {
  scale: 1,
  opacity: 1,
  duration: 0.55,
  ease: "back.out(1.6)"
}, "-=0.02");

tl.to(".emerge-mask", {
  clipPath: "circle(29% at 50% 64%)",
  webkitClipPath: "circle(29% at 50% 64%)",
  duration: 1.05,
  ease: "power3.out"
}, "-=0.08");

tl.to(".durres-final", {
  scale: 1.01,
  y: 0,
  duration: 1.2,
  ease: "power3.out"
}, "-=0.88");

tl.to(".hand-pin", {
  x: 70,
  y: -40,
  duration: 0.95,
  ease: "power2.in"
}, "-=0.55");

tl.to(".car", {
  opacity: 1,
  duration: 0.35,
  stagger: 0.08
}, "-=0.2");
