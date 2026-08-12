import { useEffect } from "react";
import { skills } from "../data/data";
import { skillAni } from "../animations/skillAni";

const Skills = () => {
  useEffect(() => {
    skillAni();
  }, []);

  return (
    <section
      id="skills"
      className="skills-section overflow-hidden bg-background px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="skills-label mb-4 font-semibold uppercase tracking-[0.25em] text-primary">
            Skills
          </p>

          <h2 className="font-baby text-5xl font-black leading-tight text-text sm:text-6xl md:text-7xl">
            Tools I use to
            <br />
            <span className="text-primary">build things.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text/70">
            Technologies and tools I'm learning and using to build modern,
            scalable and interactive web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card group relative min-h-40 overflow-hidden rounded-2xl bg-surface p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-primary/10">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary/70">
                  {skill.category}
                </span>

                <h3 className="mt-8 font-baby text-3xl font-bold text-text transition-colors duration-300 group-hover:text-primary">
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
