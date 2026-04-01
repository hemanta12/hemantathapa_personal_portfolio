import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  distance?: number;
  duration?: number;
  className?: string;
};

const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 0.7,
  className,
}: ScrollRevealProps): JSX.Element => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const hiddenY = direction === "up" ? distance : 0;
  const hiddenX =
    direction === "left" ? -distance : direction === "right" ? distance : 0;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: hiddenY, x: hiddenX }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: prefersReducedMotion ? 0 : duration,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: delay / 1000,
        },
      }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
