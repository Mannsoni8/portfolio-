import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const skillAni = (section) => {
  if (!section) return;

  gsap.context(() => {
    const cards = gsap.utils.toArray(".skill-card");

    gsap.set(cards, {
      y: 60,
      opacity: 0,
      scale: 0.9,
    });

    ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      once: true,

      onEnter: () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.5)",
        });
      },
    });
  }, section);
};
