import { useEffect } from "react";
import { aboutAni } from "../animations/aboutAni";

const About = () => {
  useEffect(() => {
    aboutAni();
  }, []);

  return (
    <section
      id="about"
      className="about-section relative overflow-hidden bg-background px-6 py-24 sm:py-28 md:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">
        <div>
          <p className="about-label mb-4 font-semibold uppercase tracking-[0.25em] text-primary">
            About Me
          </p>

          <h2 className="about-title font-baby text-5xl font-black leading-tight text-text sm:text-6xl md:text-7xl">
            Building ideas
            <br />
            into <span className="text-primary">reality.</span>
          </h2>

          <div className="about-text mt-8 max-w-xl space-y-5 text-lg leading-8 text-text/70">
            <p>
              I'm a Computer Science student and a full-stack developer
              passionate about building modern and interactive web experiences.
            </p>

            <p>
              I enjoy working with React, TypeScript, Node.js and modern
              frontend technologies while continuously improving my problem
              solving and development skills.
            </p>

            <p>
              Recently, I've been exploring GSAP and creative web animations to
              make interfaces feel more interactive and engaging.
            </p>
          </div>

          <div className="about-text mt-8">
            <a
              href="#projects"
              className="inline-block rounded-full bg-primary px-7 py-3 font-bold text-background transition-all duration-300 hover:scale-105 hover:bg-text hover:text-background active:scale-95"
            >
              Explore My Work
            </a>
          </div>
        </div>

        <div className="about-card relative">
          <div className="relative rounded-3xl bg-surface p-8 shadow-2xl">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary" />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Currently Learning
              </p>

              <h3 className="mt-4 font-baby text-4xl text-text">Full Stack</h3>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-background p-4 text-center font-bold text-primary transition-transform duration-300 hover:-translate-y-1">
                  React
                </div>

                <div className="rounded-xl bg-secondary p-4 text-center font-bold text-text transition-transform duration-300 hover:-translate-y-1">
                  TypeScript
                </div>

                <div className="rounded-xl bg-primary p-4 text-center font-bold text-background transition-transform duration-300 hover:-translate-y-1">
                  Node.js
                </div>

                <div className="rounded-xl bg-background p-4 text-center font-bold text-primary transition-transform duration-300 hover:-translate-y-1">
                  GSAP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
