import { useRef } from "react";
import { work } from "../../data/content";
import type { Project } from "../../data/content";

const ProjectLinks = ({ live, github, note }: Project): JSX.Element | null =>
  live || github || note ? (
    <p className="home-links">
      {live && <a href={live}>Live ↗</a>}
      {github && <a href={github}>GitHub ↗</a>}
      {note && <span>{note}</span>}
    </p>
  ) : null;

const PointList = ({ summary, points }: Project): JSX.Element => (
  <>
    <p className="home-copy-text home-summary">{summary}</p>
    {points.length > 0 && (
      <ul className="home-points">
        {points.map((pt) => (
          <li key={pt.label}>
            <strong>{pt.label}</strong> {pt.text}
          </li>
        ))}
      </ul>
    )}
  </>
);

const Feature = ({ p, lead }: { p: Project; lead?: boolean }): JSX.Element => (
  <article className={`home-feat home-feat--text ${lead ? "home-feat--lead" : ""}`}>
    <p className="home-meta">{p.category}</p>
    <h3 className="home-h1">{p.title}</h3>
    <PointList {...p} />
    <p className="home-tags">{p.tags.join(", ")}</p>
    <ProjectLinks {...p} />
  </article>
);

const Work = (): JSX.Element => {
  const [lead, ...pair] = work.featured;
  const rowRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: -1 | 1): void =>
    rowRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  return (
    <section id="work" className="home-plane" aria-label="Projects">
      <div className="home-wrap">
        <h2 className="home-display home-display--sm">Projects</h2>

        <Feature p={lead} lead />
        <div className="home-pair">
          {pair.map((p) => (
            <Feature key={p.title} p={p} />
          ))}
        </div>

        <h3 className="home-h3 home-more">More builds</h3>
        <div className="home-rowwrap">
          <button type="button" className="home-arrow home-arrow--l" onClick={() => scroll(-1)} aria-label="Scroll projects left">
            ←
          </button>
          <button type="button" className="home-arrow home-arrow--r" onClick={() => scroll(1)} aria-label="Scroll projects right">
            →
          </button>
        <div ref={rowRef} className="home-row" tabIndex={0} aria-label="More projects, scrollable">
          {work.more.map((p) => (
            <article
              key={p.title}
              className="home-card"
            >
              <div className="home-card__img">
                {p.image ? (
                  <img src={p.image} alt={`${p.title} screenshot`} width={960} height={640} loading="lazy" />
                ) : (
                  <div className="home-card__ph" aria-hidden="true">
                    {p.title.slice(0, 2)}
                  </div>
                )}
              </div>
              <p className="home-meta">{p.category}</p>
              <h3 className="home-h2">{p.title}</h3>
              <PointList {...p} />
              <p className="home-tags">{p.tags.join(", ")}</p>
              <ProjectLinks {...p} />
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
