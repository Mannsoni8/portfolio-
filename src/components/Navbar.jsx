import { useEffect, useState } from "react";
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMenuLine,
  RiCloseLine,
} from "@remixicon/react";

import { navAni } from "../animations/navbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    navAni();

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5">
      {/* Navbar Container */}
      <div
        className="
          relative mx-auto
          flex w-full max-w-7xl
          items-center justify-between
          rounded-2xl
          bg-surface/95
          px-4 py-3
          shadow-lg
          backdrop-blur-md
          sm:px-5 sm:py-3.5
          md:px-6 md:py-4
        ">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="
            nav-logo
            shrink-0
            font-baby
            text-xl
            font-black
            tracking-tight
            text-text
            sm:text-2xl
          ">
          MANN<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
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

        {/* Right Side */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Desktop Contact */}
          <a
            href="#contact"
            className="
              nav-button
              hidden
              rounded-full
              bg-primary
              px-4 py-2
              text-sm
              font-extrabold
              text-background
              transition-all
              duration-300
              hover:scale-105
              hover:bg-text
              active:scale-95
              sm:px-5 sm:py-2.5
              sm:text-base
              md:inline-flex
            ">
            Contact Me
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Mannsoni8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              nav-button
              hidden
              h-9 w-9
              items-center
              justify-center
              rounded-full
              border
              border-secondary
              bg-background
              text-text
              transition-all
              duration-300
              hover:scale-105
              hover:border-primary
              hover:bg-primary
              hover:text-background
              active:scale-95
              sm:h-10 sm:w-10
              md:inline-flex
            ">
            <RiGithubLine size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mann-soni-6a5182268/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              nav-button
              hidden
              h-9 w-9
              items-center
              justify-center
              rounded-full
              border
              border-secondary
              bg-background
              text-text
              transition-all
              duration-300
              hover:scale-105
              hover:border-primary
              hover:bg-primary
              hover:text-background
              active:scale-95
              sm:h-10 sm:w-10
              md:inline-flex
            ">
            <RiLinkedinBoxLine size={20} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="
              flex
              h-9 w-9
              items-center
              justify-center
              rounded-full
              border
              border-secondary
              bg-background
              text-text
              transition-all
              duration-300
              hover:scale-105
              hover:border-primary
              hover:bg-primary
              hover:text-background
              active:scale-95
              sm:h-10 sm:w-10
              md:hidden
            ">
            {menuOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              absolute
              left-0
              right-0
              top-[calc(100%+8px)]
              rounded-2xl
              bg-surface/95
              p-4
              shadow-2xl
              backdrop-blur-xl
              md:hidden
            ">
            <div className="flex flex-col gap-2">
              {/* Links */}
              <a
                href="#home"
                onClick={closeMenu}
                className="
                  rounded-xl
                  bg-background/80
                  px-4 py-3
                  text-sm
                  font-medium
                  text-text
                  transition-all
                  duration-300
                  hover:bg-primary
                  hover:text-background
                  sm:text-base
                ">
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="
                  rounded-xl
                  bg-background/80
                  px-4 py-3
                  text-sm
                  font-medium
                  text-text
                  transition-all
                  duration-300
                  hover:bg-primary
                  hover:text-background
                  sm:text-base
                ">
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="
                  rounded-xl
                  bg-background/80
                  px-4 py-3
                  text-sm
                  font-medium
                  text-text
                  transition-all
                  duration-300
                  hover:bg-primary
                  hover:text-background
                  sm:text-base
                ">
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="
                  rounded-xl
                  bg-background/80
                  px-4 py-3
                  text-sm
                  font-medium
                  text-text
                  transition-all
                  duration-300
                  hover:bg-primary
                  hover:text-background
                  sm:text-base
                ">
                Projects
              </a>

              {/* Divider */}
              <div className="my-2 h-px bg-secondary/50" />

              {/* Contact */}
              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  rounded-xl
                  bg-primary
                  px-4 py-3
                  text-center
                  text-sm
                  font-extrabold
                  text-background
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-text
                  sm:text-base
                ">
                Contact Me
              </a>

              {/* Social Links */}
              <div className="mt-1 flex items-center justify-center gap-3">
                <a
                  href="https://github.com/Mannsoni8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    flex
                    h-10 w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-secondary
                    bg-background
                    text-text
                    transition-all
                    duration-300
                    hover:border-primary
                    hover:bg-primary
                    hover:text-background
                  ">
                  <RiGithubLine size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/mann-soni-6a5182268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-10 w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-secondary
                    bg-background
                    text-text
                    transition-all
                    duration-300
                    hover:border-primary
                    hover:bg-primary
                    hover:text-background
                  ">
                  <RiLinkedinBoxLine size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
