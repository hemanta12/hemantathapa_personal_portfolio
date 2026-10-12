import SkillGroup from "../ui/SkillGroup";
import { skills } from "../../data/content";

const Skills = (): JSX.Element => (
  <section
    id="skills"
    className="home-plane home-pale"
    aria-label="Skills and toolkit"
  >
    <div className="home-wrap">
      <h2 className="home-display home-display--sm">Skills</h2>
      <div className="home-skills">
        {Object.entries(skills).map(([group, items]) => (
          <SkillGroup key={group} title={group} items={items} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
