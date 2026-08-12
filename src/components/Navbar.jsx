import { RiGithubLine, RiLinkedinBoxLine } from "@remixicon/react";
import { useEffect } from "react";
import { navAni } from "../animations/navbar";

const Navbar = () => {
  useEffect(() => {
    navAni();
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-6 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-surface/95 px-6 py-4 shadow-lg backdrop-blur-md">
        <a
          href="#home"
          className="nav-logo font-baby text-2xl font-black tracking-tight text-text">
          MANN<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="nav-link font-medium text-text transition-colors duration-300 hover:text-primary">
            Home
          </a>

          <a
            href="#about"
            className="nav-link font-medium text-text transition-colors duration-300 hover:text-primary">
            About
          </a>

          <a
            href="#skills"
            className="nav-link font-medium text-text transition-colors duration-300 hover:text-primary">
            Skills
          </a>

          <a
            href="#projects"
            className="nav-link font-medium text-text transition-colors duration-300 hover:text-primary">
            Projects
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="nav-button rounded-full bg-primary px-5 py-2.5 font-extrabold text-background transition-all duration-300 hover:scale-105 hover:bg-text active:scale-95">
            Contact Me
          </a>

          <a
            href="https://github.com/Mannsoni8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="nav-button flex h-10 w-10 items-center justify-center rounded-full border border-secondary bg-background text-text transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-background active:scale-95">
            <RiGithubLine size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/mann-soni-6a5182268/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="nav-button flex h-10 w-10 items-center justify-center rounded-full border border-secondary bg-background text-text transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-background active:scale-95">
            <RiLinkedinBoxLine size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
