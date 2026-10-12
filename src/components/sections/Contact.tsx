import { site } from "../../data/content";
import CopyEmail from "../ui/CopyEmail";

const Contact = (): JSX.Element => (
  <section
    id="contact"
    className="home-plane home-drench"
    aria-label="Contact"
  >
    <div className="home-wrap home-contact">
      <div>
        <h2 className="home-display">Let&rsquo;s talk.</h2>
        <p className="home-contact__lead">
          Open to full-time roles and good conversations. Email is the fastest way.
        </p>
        <a className="home-email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div className="home-contact__row">
          <CopyEmail email={site.email} />
          <a
            className="home-ghost"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            className="home-ghost"
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <aside className="home-resume">
        <p className="home-meta">Resume</p>
        <h3 className="home-h2">{site.name}</h3>
        <p className="home-copy-text">PDF, 2026.</p>
        <div className="home-resume__btns">
          <a
            className="home-btn home-btn--fill"
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a
            className="home-btn home-btn--line"
            href={site.resume}
            download="Hemanta_Thapa_Resume.pdf"
          >
            Download
          </a>
        </div>
      </aside>
    </div>
  </section>
);

export default Contact;
