import type { MouseEvent } from "react";
import { site } from "../../data/content";

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  const handleBackToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const scopedWindow = window as Window & {
      __lenis?: {
        scrollTo: (
          target: number | string,
          options?: { duration?: number; easing?: (t: number) => number },
        ) => void;
      };
    };

    if (scopedWindow.__lenis) {
      scopedWindow.__lenis.scrollTo(0, {
        duration: 1.8,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__inner">
        <p>
          © {year} {site.name} · Built with React + Vite
        </p>
        <p>{site.name}</p>
        <nav className="footer-links" aria-label="Footer links">
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={site.resume}>Resume</a>
          <a href="#hero" onClick={handleBackToTop}>
            Back to top ↑
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
