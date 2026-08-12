import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const skillAni = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.context(() => {
    ScrollTrigger.batch(".skill-card", {
      start: "top 85%",
      interval: 0.1,
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 60,
          opacity: 0,
          scale: 0.9,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.5)",
        });
      },
    });
  });
};
