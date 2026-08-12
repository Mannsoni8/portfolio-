import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import { useEffect } from "react";
import { contactAni } from "../animations/contactAni";

const Contact = () => {
  useEffect(() => {
    contactAni();
  }, []);

  return (
    <section
      id="contact"
      className="contact-section relative flex min-h-screen items-center overflow-hidden bg-background px-6 py-24 sm:py-28 md:py-32">
      <div className="contact-circle absolute -right-20 -top-20 h-80 w-80 rounded-full bg-secondary/50" />

      <div className="contact-circle absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-surface" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="relative z-10 max-w-4xl">
          <p className="contact-label font-semibold uppercase tracking-[0.3em] text-primary">
            Get In Touch
          </p>

          <h2 className="contact-title mt-5 font-baby text-4xl font-black leading-tight text-text sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Let's build
            <br />
            something
            <br />
            <span className="text-primary">great.</span>
          </h2>

          <p className="contact-description mt-8 max-w-2xl text-lg leading-8 text-text/70 md:text-xl">
            Have a project idea, collaboration opportunity, or just want to
            connect? Feel free to reach out.
          </p>

          <div className="contact-links mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:mannsoni4352@gmail.com"
              className="rounded-full bg-primary px-7 py-4 text-center font-bold text-background transition-all duration-300 hover:scale-105 hover:bg-text hover:text-background active:scale-95">
              Email Me →
            </a>

            <a
              href="https://github.com/Mannsoni8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-4 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-background">
              GitHub
              <RiGithubFill size={20} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-4 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-background">
              LinkedIn
              <RiLinkedinBoxFill size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
