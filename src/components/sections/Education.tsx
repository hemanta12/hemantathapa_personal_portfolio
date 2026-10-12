import { certification, education } from "../../data/content";

const CapIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 48 48"
    width="40"
    height="40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M24 9 3 19l21 10 21-10L24 9Z" />
    <path d="M11 24v10c0 3 6 6 13 6s13-3 13-6V24" />
    <path d="M45 19v12" />
  </svg>
);

const Education = (): JSX.Element => (
  <section
    id="education"
    className="home-plane"
    aria-label="Education and certifications"
  >
    <div className="home-wrap">
      <h2 className="home-display home-display--sm">Education</h2>
      <div className="home-edu-grid">
        {education.map((e, i) => (
          <article
            key={e.degree}
            className={`home-edu ${i === 0 ? "home-edu--lead" : ""}`}
          >
            <span className="home-edu__icon">
              <CapIcon />
            </span>
            <div className="home-edu__text">
              <p className="home-meta">{e.type}</p>
              <h3 className="home-h2">{e.degree}</h3>
              <p className="home-copy-text">{e.school}</p>
              <p className="home-status">
                {e.status}, {e.date}
              </p>
            </div>
          </article>
        ))}
        <article className="home-edu">
          <span className="home-edu__icon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
              alt=""
              width="40"
              height="40"
            />
          </span>
          <div className="home-edu__text">
            <p className="home-meta">Certification</p>
            <h3 className="home-h2">{certification.name}</h3>
            <p className="home-copy-text">{certification.issuer}</p>
            <p className="home-status">Earned, {certification.date}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Education;
