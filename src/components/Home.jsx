import { useEffect } from "react";
import { homeAni } from "../animations/homeAni";

const Home = () => {
  useEffect(() => {
    homeAni();
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background px-6 pt-28"
    >
      <div className="hero-circle absolute right-[15%] top-[20%] h-24 w-24 rounded-full bg-secondary/70" />

      <div className="hero-circle absolute bottom-[20%] right-[30%] h-16 w-16 rounded-full bg-primary/80" />

      <div className="hero-circle absolute left-[45%] top-[30%] h-12 w-12 rounded-full bg-text/20" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="relative z-10">
          <p className="hero-small-text mb-4 text-lg font-medium text-primary">
            Hello, I'm
          </p>

          <h1 className="hero-title font-baby text-5xl font-black leading-none tracking-tight text-text sm:text-6xl md:text-8xl">
            MANN<span className="text-primary">.</span>
          </h1>

          <h2 className="hero-description mt-6 max-w-xl text-2xl font-semibold text-text sm:text-3xl md:text-4xl">
            Full Stack Developer
          </h2>

          <p className="hero-description mt-4 max-w-xl text-base leading-7 text-text/70 sm:text-lg">
            I build modern, interactive web applications using React,
            TypeScript, Node.js and modern web technologies.
          </p>

          <div className="hero-buttons mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-primary px-7 py-3 font-bold text-background transition-all duration-300 hover:scale-105 hover:bg-text active:scale-95"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border-2 border-primary px-7 py-3 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-background"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual relative flex items-center justify-center">
          <div className="relative mx-auto h-[320px] w-full max-w-[320px] sm:h-[400px] sm:max-w-[400px] md:h-[450px] md:max-w-[450px]">
            <div className="absolute inset-10 rounded-full border-2 border-primary/40" />

            <div className="hero-circle absolute right-4 top-10 h-24 w-24 rounded-full bg-secondary sm:h-28 sm:w-28" />

            <div className="hero-circle absolute bottom-10 left-8 h-20 w-20 rounded-full bg-primary sm:h-24 sm:w-24" />

            <div className="hero-circle absolute bottom-20 right-12 h-16 w-16 rounded-full bg-text/20 sm:h-20 sm:w-20" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-primary/20 bg-surface/80 shadow-xl backdrop-blur-md sm:h-52 sm:w-52">
                <span className="font-baby text-4xl text-primary sm:text-5xl">
                  DEV
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
