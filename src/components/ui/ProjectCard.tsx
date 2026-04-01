import type { GridProject } from "../../data/content";
import { motion, useReducedMotion } from "framer-motion";

type ProjectCardProps = {
  project: GridProject;
};

const LinkIcon = ({ type }: { type: "live" | "github" }): JSX.Element => {
  if (type === "live") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 3a9 9 0 0 0-2.84 17.54c.45.08.61-.2.61-.44v-1.67c-2.49.54-3.01-1.04-3.01-1.04-.4-1.03-.98-1.3-.98-1.3-.8-.56.06-.55.06-.55.9.06 1.36.92 1.36.92.78 1.34 2.05.95 2.56.73.08-.57.31-.95.56-1.17-1.99-.22-4.08-1-4.08-4.43 0-.98.35-1.78.92-2.4-.09-.23-.4-1.13.09-2.35 0 0 .75-.24 2.47.92a8.57 8.57 0 0 1 4.5 0c1.72-1.16 2.47-.92 2.47-.92.49 1.22.18 2.12.09 2.35.57.62.92 1.42.92 2.4 0 3.44-2.1 4.2-4.1 4.43.32.28.61.82.61 1.66v2.47c0 .24.16.52.62.44A9 9 0 0 0 12 3Z"
        fill="currentColor"
      />
    </svg>
  );
};

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const liveHref = project.live.trim();
  const githubHref = project.github.trim();

  return (
    <motion.article
      className="project-card"
      data-cursor="hover"
      whileHover={{
        y: prefersReducedMotion ? 0 : -4,
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border-hover)",
        transition: {
          duration: prefersReducedMotion ? 0 : 0.2,
          ease: "easeOut",
        },
      }}
    >
      <div
        className="project-card__thumb"
        style={{ background: project.color }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            width={1200}
            height={675}
          />
        ) : (
          <span aria-hidden="true">{project.icon}</span>
        )}
      </div>

      <div className="project-card__body">
        <p className="project-card__badge">
          <span className="project-card__badge-dot" aria-hidden="true" />
          {project.category}
        </p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="chip-row">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-card__links">
          <a
            href={liveHref || "#"}
            className={`project-link project-link--live${liveHref ? "" : " is-disabled"}`}
            target={liveHref ? "_blank" : undefined}
            rel={liveHref ? "noopener noreferrer" : undefined}
            aria-disabled={!liveHref}
            tabIndex={liveHref ? undefined : -1}
            onClick={(event) => {
              if (!liveHref) {
                event.preventDefault();
              }
            }}
          >
            <LinkIcon type="live" />
            <span>Live</span>
          </a>
          <a
            href={githubHref || "#"}
            className={`project-link project-link--github${githubHref ? "" : " is-disabled"}`}
            target={githubHref ? "_blank" : undefined}
            rel={githubHref ? "noopener noreferrer" : undefined}
            aria-disabled={!githubHref}
            tabIndex={githubHref ? undefined : -1}
            onClick={(event) => {
              if (!githubHref) {
                event.preventDefault();
              }
            }}
          >
            <LinkIcon type="github" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
