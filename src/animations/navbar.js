import gsap from "gsap";

export const navAni = () => {
  const tl = gsap.timeline();
  tl.from(".nav-logo", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })
    .from(
      ".nav-link",
      {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.4",
    )
    .from(
      ".nav-button",
      {
        scale: 0.8,
        duration: 0.5,
        ease: "bounce",
      },
      "-=0.3",
    );
};
