import { hero } from "../../data/content";
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
        <a className="home-btn home-btn--line" href="#contact">
          {hero.ctaContact}
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
