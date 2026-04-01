import SectionHeader from "../ui/SectionHeader";
import SkillGroup from "../ui/SkillGroup";
import { skills } from "../../data/content";
import { motion, useReducedMotion } from "framer-motion";

const Skills = (): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.06,
      },
    },
  };

  const cellVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="skills"
      className="site-shell section-block"
      aria-label="Skills and toolkit"
    >
      <SectionHeader title="Skills" em="Toolkit" />

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {Object.entries(skills).map(([group, items]) => (
          <motion.div key={group} variants={cellVariants}>
            <SkillGroup title={group} items={items} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
