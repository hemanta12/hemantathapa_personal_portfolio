import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";
import { certification, education } from "../../data/content";

const Education = (): JSX.Element => {
  return (
    <section
      id="education"
      className="site-shell section-block"
      aria-label="Education and credentials"
    >
      <SectionHeader title="Education" em="Credentials" />

      <div className="degree-grid">
        {education.map((item, index) => (
          <ScrollReveal key={item.degree} delay={index * 100}>
            <article
              className={`degree-card${item.current ? " degree-card--current" : ""}`}
            >
              <p className="degree-card__type">{item.type}</p>
              <h3 className="degree-card__degree">{item.degree}</h3>
              <p className="degree-card__school">{item.school}</p>
              <p
                className={`degree-card__status-pill${
                  item.current ? " degree-card__status-pill--current" : ""
                }`}
              >
                <span
                  className={`degree-card__status-dot${
                    item.current ? " degree-card__status-dot--pulse" : ""
                  }`}
                  aria-hidden="true"
                />
                {item.status}
              </p>
              <p className="degree-card__date">{item.date}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <div className="cert-row">
          <div className="cert-badge">
            <span className="cert-badge__icon" aria-hidden="true">
              AWS
            </span>
            <div className="cert-badge__info">
              <p className="cert-badge__name">{certification.name}</p>
              <span className="cert-badge__date">{certification.date}</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Education;
