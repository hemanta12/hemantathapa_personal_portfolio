import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { hero, site } from "../../data/content";
import AskHemanta from "../ui/AskHemanta";
import RoleTransition from "../ui/RoleTransition";

const Hero = (): JSX.Element => {
  const [isReady, setIsReady] = useState(false);
  const [firstVisitSequence, setFirstVisitSequence] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let mounted = true;

    const markReady = (playEntrySequence: boolean) => {
      if (!mounted) return;
      setFirstVisitSequence(playEntrySequence);
      setIsReady(true);
    };

    const hasVisited = sessionStorage.getItem("visited");

    if (hasVisited || prefersReducedMotion) {
      markReady(false);
      return () => {
        mounted = false;
      };
    }

    const fontsReady =
      "fonts" in document
        ? (document as Document & { fonts: FontFaceSet }).fonts.ready
        : Promise.resolve();

    fontsReady
      .catch(() => undefined)
      .finally(() => {
        sessionStorage.setItem("visited", "true");
        markReady(true);
      });

    return () => {
      mounted = false;
    };
  }, [prefersReducedMotion]);

  const immediate = useMemo(() => ({ opacity: 1, y: 0 }), []);
  const getEntryTransition = (delay: number, duration: number) => ({
    duration: prefersReducedMotion ? 0 : duration,
    ease: "easeOut",
    delay: prefersReducedMotion ? 0 : delay,
  });

  return (
    <section
      id="hero"
      className="site-shell section-block hero-block"
      aria-label="Hero"
    >
      <div className="hero-rule" aria-hidden="true" />

      <div
        className="hero-content"
        style={{ visibility: isReady ? "visible" : "hidden" }}
      >
        <motion.h1
          className="hero-name"
          initial={
            firstVisitSequence && !prefersReducedMotion
              ? { opacity: 0, y: 20 }
              : immediate
          }
          animate={immediate}
          transition={getEntryTransition(0.2, 0.5)}
        >
          Hi, I am <span className="hero-name__accent">Hemanta</span>
        </motion.h1>

        <motion.div
          initial={
            firstVisitSequence && !prefersReducedMotion
              ? { opacity: 0, y: 12 }
              : immediate
          }
          animate={immediate}
          transition={getEntryTransition(0.5, 0.45)}
        >
          <RoleTransition />
        </motion.div>

        <motion.div
          initial={
            firstVisitSequence && !prefersReducedMotion
              ? { opacity: 0, y: 10 }
              : immediate
          }
          animate={immediate}
          transition={getEntryTransition(0.65, 0.4)}
        >
          <AskHemanta />
        </motion.div>

        <motion.div
          className="hero-ctas"
          initial={firstVisitSequence ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={getEntryTransition(0.8, 0.35)}
        >
          <a
            className="hero-cta hero-cta--filled"
            href="#work"
            data-cursor="hover"
          >
            {hero.ctaWork}
          </a>
          <a
            className="hero-cta hero-cta--outline"
            href="#contact"
            data-cursor="hover"
          >
            {hero.ctaContact}
          </a>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={firstVisitSequence ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={getEntryTransition(1.1, 0.35)}
          aria-hidden="true"
        >
          <div className="scroll-track">
            <span className="scroll-fill" />
          </div>
        </motion.div>
      </div>

      <div className="hero-rule" aria-hidden="true" />

      <motion.div
        className="hero-bottom-strip"
        initial={firstVisitSequence ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={getEntryTransition(0.95, 0.35)}
      >
        <p className="hero-belief-quote">
          <span className="hero-belief-quote__mark" aria-hidden="true">
            &ldquo;
          </span>
          Technology exists to solve real problems and make life genuinely
          better — and that&apos;s the only reason to build anything.
        </p>

        <p className="hero-availability">
          <span className="avail-dot" aria-hidden="true" />
          Open to work
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
