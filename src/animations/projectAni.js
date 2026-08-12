import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectAni = (section, track) => {
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
