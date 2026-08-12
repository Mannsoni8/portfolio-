import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const contactAni = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".contact-label", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        ".contact-title",
        {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.3",
      )
      .from(
        ".contact-description",
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .from(
        ".contact-links",
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        ".contact-circle",
        {
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.7",
      );
  });
};
