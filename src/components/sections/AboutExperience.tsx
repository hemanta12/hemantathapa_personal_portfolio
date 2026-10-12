import { about, experience } from "../../data/content";

const AboutExperience = (): JSX.Element => (
  <section
    id="about-experience"
    className="home-plane home-pale"
    aria-label="About and experience"
  >
    <div className="home-wrap">
      <h2 className="home-sr">About and experience</h2>
      <div className="home-about">
        <p className="home-statement">{about.pullQuote.replace(/^"|"$/g, "")}</p>
        <div className="home-bio">
          {about.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <div className="home-exp">
        {experience.map((e) => (
          <article key={e.company} className="home-exp__row">
            <div>
              <h3 className="home-h2">{e.company}</h3>
              <p className="home-meta">{e.role}</p>
              <p className="home-meta">{e.period}</p>
            </div>
            <div>
              <ul>
                {e.bullets.map((b) => (
                  <li key={b} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
              <p className="home-tags">{e.tags.join(", ")}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="home-interests">
        {about.interests.map((i) => (
          <div key={i.name}>
            <h3>{i.name}</h3>
            <p>{i.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutExperience;
