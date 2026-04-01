import SectionHeader from "../ui/SectionHeader";
import ExperienceEntry from "../ui/ExperienceEntry.tsx";
import ScrollReveal from "../ui/ScrollReveal";
import { about, experience } from "../../data/content";

const AboutExperience = (): JSX.Element => {
  return (
    <section
      id="about-experience"
      className="site-shell section-block"
      aria-label="About and experience"
    >
      <SectionHeader title="About" em="& Experience" />

      <div className="about-exp-grid">
        <div className="about-col">
          <div className="bio-copy">
            {about.bio.map((paragraph, index) => (
              <ScrollReveal key={paragraph} delay={100 + index * 80}>
                <p>{paragraph}</p>
              </ScrollReveal>
            ))}
          </div>

          <div className="interests-block">
            <p className="eyebrow">Interests</p>
            <div className="interest-list">
              {about.interests.map((interest, index) => (
                <ScrollReveal key={interest.name} delay={index * 80}>
                  <div className="interest-item">
                    <span className="interest-item__icon">{interest.icon}</span>
                    <div>
                      <p className="interest-item__name">{interest.name}</p>
                      <p className="interest-item__sub">{interest.sub}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="exp-col">
          <p className="eyebrow eyebrow--line eyebrow--experience">
            Work experience
          </p>
          <div className="exp-timeline">
            {experience.map((entry, index) => (
              <ScrollReveal key={entry.company} delay={index * 150}>
                <div className="exp-timeline__item-wrap">
                  <ExperienceEntry entry={entry} delayMs={index * 150} />
                  {index < experience.length - 1 ? (
                    <div className="exp-divider" aria-hidden="true" />
                  ) : null}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
