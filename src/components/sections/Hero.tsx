import { hero, site } from "../../data/content";
import AskHemanta from "../ui/AskHemanta";
import RoleTransition from "../ui/RoleTransition";

const Hero = (): JSX.Element => (
  <section
    id="hero"
    className="home-plane home-hero"
    aria-label="Hero"
  >
    <div className="home-wrap">
      <h1 className="home-display">
        Hi, I am <span className="home-accent">Hemanta</span>
      </h1>
      <RoleTransition />
      <div className="home-chat">
        <AskHemanta />
      </div>
      <div className="home-ctas">
        <a className="home-btn home-btn--fill" href="#work">
          {hero.ctaWork}
        </a>
        <div className="home-resumebar">
          <span>{hero.ctaResume}</span>
          <a
            className="home-iconbtn"
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View resume"
            title="View resume"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </a>
          <a
            className="home-iconbtn"
            href={site.resume}
            download="Hemanta_Thapa_Resume.pdf"
            aria-label="Download resume"
            title="Download resume"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
