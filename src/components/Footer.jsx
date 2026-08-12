import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiArrowUpLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="border-t border-secondary/40 bg-background px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <a
          href="#home"
          className="font-baby text-3xl font-black tracking-tight text-text">
          MANN<span className="text-primary">.</span>
        </a>

        <p className="text-sm text-text/50">
          © {new Date().getFullYear()} Mann Soni. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Mannsoni8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary bg-surface text-text transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-background">
            <RiGithubLine size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/mann-soni-6a5182268/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary bg-surface text-text transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-background">
            <RiLinkedinBoxLine size={20} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background transition-all duration-300 hover:scale-110 hover:bg-text">
            <RiArrowUpLine size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
