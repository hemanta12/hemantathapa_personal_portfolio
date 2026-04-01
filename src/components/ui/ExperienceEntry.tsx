import type { ExperienceEntry as ExperienceEntryType } from "../../data/content";
import { motion } from "framer-motion";

type ExperienceEntryProps = {
  entry: ExperienceEntryType;
  delayMs?: number;
};

const ExperienceEntry = ({
  entry,
  delayMs = 0,
}: ExperienceEntryProps): JSX.Element => {
  return (
    <article className="exp-entry">
      <motion.span
        className="exp-entry__dot"
        aria-hidden="true"
        initial={{ borderColor: "rgba(11, 21, 32, 0.15)" }}
        whileInView={{ borderColor: "var(--accent)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: (delayMs + 300) / 1000,
        }}
      />
      <p className="exp-entry__period">{entry.period}</p>
      <h3 className="exp-entry__company">{entry.company}</h3>
      <p className="exp-entry__role">{entry.role}</p>
      <ul className="exp-entry__bullets">
        {entry.bullets.map((bullet, index) => (
          <motion.li
            key={bullet}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: (delayMs + index * 80) / 1000,
            }}
            dangerouslySetInnerHTML={{ __html: bullet }}
          />
        ))}
      </ul>
      <div className="chip-row">
        {entry.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ExperienceEntry;
