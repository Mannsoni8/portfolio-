import { useEffect, useRef } from "react";
import { skills } from "../data/data";
import { skillAni } from "../animations/skillAni";

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cleanup = skillAni(sectionRef.current);

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="skills-section overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="skills-heading mb-12 max-w-3xl sm:mb-14 md:mb-16">
          <p
            className="
              skills-label mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:mb-4 sm:text-sm sm:tracking-[0.25em]">
            Skills
          </p>

          <h2 className="font-baby text-4xl font-black leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl">
            Tools I use to
            <br />
            <span className="text-primary">build things.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-text/70 sm:mt-6 sm:text-lg sm:leading-8">
            Technologies and tools I'm learning and using to build modern,
            scalable and interactive web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card group relative min-h-36 overflow-hidden rounded-2xl bg-surface p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/10 sm:min-h-40 sm:p-6">
              <div
                className="
                  absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-150"
              />

              <div className="relative z-10 flex h-full min-h-24 flex-col justify-between sm:min-h-28">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary/70 sm:text-sm ">
                  {skill.category}
                </span>

                <h3 className="mt-6 font-baby text-2xl font-bold text-text transition-colors duration-300 group-hover:text-primary sm:mt-8 sm:text-3xl">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
