import gsap from "gsap";

export const homeAni = () => {
  const tl = gsap.timeline();

  tl.from(".hero-small-text", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
  })
    .from(
      ".hero-title",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.3",
    )
    .from(
      ".hero-description",
      {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.5",
    )
    .from(
      ".hero-buttons",
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3",
    )
    .from(
      ".hero-visual",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.6",
    );
};
