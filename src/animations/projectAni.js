import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectAni = (section, track) => {
  if (typeof window === "undefined" || window.innerWidth < 768) {
    return null;
  }

  const getScrollAmount = () => {
    return track.scrollWidth - window.innerWidth;
  };

  const animation = gsap.to(track, {
    x: () => -getScrollAmount(),

    ease: "none",

    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${getScrollAmount()}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  return animation;
};
