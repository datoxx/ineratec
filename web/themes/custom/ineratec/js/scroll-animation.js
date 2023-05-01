let mm = gsap.matchMedia();
mm.add({
  isMobile: "(max-width: 500px)",
  isDesktop: "(min-width: 501px)"
}, (context) => {
  let { isMobile, isDesktop} = context.conditions;
  
  let tl =  gsap.timeline({
  scrollTrigger: {
    trigger: ".animation-container",
    scrub: 1,
    pin: true, 
  }
})
  .to(".animation-title", {
    scale: isMobile ? 36 : 100,
    duration: 2,
  })
  .to(".bg-box", {
    opacity: 0,   
  })
  .to(
    ".animation-paragraph",
    {
      pin: true,
      opacity: 1,
      y: 0,
      duration: 1
    },

  );
})
