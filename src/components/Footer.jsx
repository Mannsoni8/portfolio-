import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiArrowUpLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="border-t border-secondary/40 bg-background px-4 py-8 sm:px-6 sm:py-10">
      <div
        className="
          mx-auto flex w-full max-w-7xl flex-col items-center gap-6 text-center md:flex-row  md:justify-between md:text-left ">
        <a
          href="#home"
          aria-label="Go to homepage"
          className="font-baby text-2xl font-black tracking-tight text-text transition-colors duration-300 hover:text-primary sm:text-3xl ">
          MANN<span className="text-primary">.</span>
        </a>

        <p
          className=" max-w-xs text-xs leading-5 text-text/50 sm:max-w-none sm:text-sm
          ">
          © {new Date().getFullYear()} Mann Soni. All rights reserved.
        </p>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="https://github.com/Mannsoni8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary bg-surface  text-text transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-background active:scale-95 sm:h-10 sm:w-10 ">
            <RiGithubLine size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/mann-soni-6a5182268/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary             bg-surface text-text transition-all duration-300 hover:scale-110 hover:border-primary             hover:bg-primary hover:text-background active:scale-95 sm:h-10 sm:w-10 ">
            <RiLinkedinBoxLine size={19} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-background transition-all duration-300 hover:scale-110 hover:bg-text active:scale-95 sm:h-10 sm:w-10">
            <RiArrowUpLine size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
