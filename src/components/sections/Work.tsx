import SectionHeader from "../ui/SectionHeader";
import FeaturedProject from "../ui/FeaturedProject";
import ProjectCard from "../ui/ProjectCard";
import ScrollReveal from "../ui/ScrollReveal";
import { work } from "../../data/content";

const Work = (): JSX.Element => {
  return (
    <section
      id="work"
      className="site-shell section-block"
      aria-label="Selected work"
    >
      <SectionHeader title="Selected" em="Work" />

      <div className="featured-projects">
        {work.featured.map((project, index) => (
          <ScrollReveal
            key={project.title}
            direction={index === 0 ? "left" : "right"}
            delay={0}
          >
            <FeaturedProject project={project} reverse={index === 1} />
          </ScrollReveal>
        ))}
      </div>

      <div className="more-builds">
        <span>More builds</span>
        <div />
      </div>

      <div className="project-grid">
        {work.grid.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 80}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Work;
