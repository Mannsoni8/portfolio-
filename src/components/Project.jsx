import { useEffect, useRef } from "react";
import { projects } from "../data/data";
import { projectAni } from "../animations/projectAni";

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;
    if (window.innerWidth < 768) return;

    projectAni(sectionRef.current, trackRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section relative overflow-hidden bg-background px-6 py-24 md:py-0">
      <div className="absolute left-6 top-10 z-10 md:left-12">
        <p className="font-semibold uppercase tracking-[0.25em] text-primary">
          Selected Work
        </p>

        <h2 className="mt-2 font-baby text-5xl font-black text-text md:text-7xl">
          Projects<span className="text-primary">.</span>
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex flex-col gap-8 pt-32 md:flex-row md:h-screen md:w-max md:items-center md:gap-12 md:px-12">
        {projects.map((project) => (
          <article
            key={project.number}
            className="project-card relative mx-auto flex w-full max-w-3xl flex-col justify-between overflow-hidden rounded-[2rem] bg-surface p-8 shadow-2xl md:h-[70vh] md:w-[65vw] md:p-12">
            <span className="font-baby text-6xl font-black text-primary/20 md:text-8xl">
              {project.number}
            </span>

            <div className="relative z-10 max-w-2xl">
              <h3 className="font-baby text-4xl font-black text-text md:text-6xl">
                {project.title}
                <span className="text-primary">.</span>
              </h3>

              <p className="mt-2 max-w-xl text-base leading-7 text-text/70 md:text-lg">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-text">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 mb-2 inline-block rounded-full bg-primary px-6 py-3 font-bold text-background transition-all duration-300 hover:scale-105 hover:bg-text active:scale-95">
                View Project →
              </a>
            </div>

            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 md:h-96 md:w-96" />
          </article>
        ))}
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-sm font-bold text-text md:flex">
        <span>SCROLL</span>
        <span className="text-2xl text-primary">→</span>
      </div>
    </section>
  );
};

export default Projects;
