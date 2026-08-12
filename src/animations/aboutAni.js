import gsap from "gsap";

export const aboutAni = () => {
  gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".about-label", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        ".about-title",
        {
          y: 70,
          opacity: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.3",
      )
      .from(
        ".about-text",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .from(
        ".about-card",
        {
          x: 80,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.5",
      );
  });
};
