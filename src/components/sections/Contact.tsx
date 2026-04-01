import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";
import { site } from "../../data/content";

const CONTACT_LINKS = [
  {
    name: "Email",
    handle: "thapahemanta.dev@gmail.com",
    href: `mailto:${site.email}`,
    iconType: "email",
  },
  {
    name: "LinkedIn",
    handle: "hemantathapa",
    href: site.linkedin,
    iconType: "linkedin",
  },
  {
    name: "GitHub",
    handle: "hemantathapa",
    href: site.github,
    iconType: "github",
  },
] as const;

type ContactLink = (typeof CONTACT_LINKS)[number];

const renderSocialIcon = (iconType: ContactLink["iconType"]): JSX.Element => {
  if (iconType === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M4.75 5A1.75 1.75 0 0 0 3 6.75v10.5C3 18.216 3.784 19 4.75 19h14.5c.966 0 1.75-.784 1.75-1.75V6.75A1.75 1.75 0 0 0 19.25 5H4.75Zm-.25 2.34 7.31 5.38a.33.33 0 0 0 .38 0L19.5 7.34v9.91a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25V7.34Zm.37-.84h14.26l-7.13 5.25L4.87 6.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (iconType === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M6.18 8.76A1.74 1.74 0 1 0 6.18 5.3a1.74 1.74 0 0 0 0 3.47ZM4.9 18.7h2.58v-8.3H4.9v8.3Zm4.08 0h2.58v-4.1c0-1.08.2-2.13 1.54-2.13 1.32 0 1.34 1.23 1.34 2.2v4.03H17v-4.54c0-2.23-.48-3.95-3.09-3.95-1.25 0-2.08.69-2.42 1.34h-.04v-1.15H8.98c.03.74 0 8.3 0 8.3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 3.25a8.75 8.75 0 0 0-2.76 17.05c.44.08.6-.19.6-.42v-1.5c-2.43.53-2.94-1.17-2.94-1.17-.4-1.02-.97-1.29-.97-1.29-.8-.54.06-.53.06-.53.88.06 1.34.9 1.34.9.78 1.34 2.05.95 2.55.73.08-.57.31-.95.56-1.17-1.94-.22-3.99-.97-3.99-4.33 0-.96.34-1.75.9-2.37-.09-.22-.4-1.12.09-2.32 0 0 .73-.23 2.4.9a8.3 8.3 0 0 1 4.36 0c1.67-1.13 2.4-.9 2.4-.9.49 1.2.18 2.1.09 2.32.56.62.9 1.41.9 2.37 0 3.36-2.06 4.11-4.02 4.33.31.27.6.8.6 1.62v2.4c0 .23.15.5.61.42A8.75 8.75 0 0 0 12 3.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Contact = (): JSX.Element => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isPdfAvailable, setIsPdfAvailable] = useState<boolean | null>(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    const updateViewport = () => {
      setIsMobileViewport(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (!isResumeModalOpen) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsResumeModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isResumeModalOpen]);

  useEffect(() => {
    if (!isResumeModalOpen) {
      return;
    }

    let isMounted = true;
    setIsPdfAvailable(null);

    fetch(site.resume, { method: "HEAD" })
      .then((response) => {
        if (isMounted) {
          setIsPdfAvailable(response.ok);
        }
      })
      .catch(() => {
        if (isMounted) {
          setIsPdfAvailable(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [isResumeModalOpen]);

  const handleViewResume = () => {
    if (isMobileViewport) {
      window.open(site.resume, "_blank", "noopener,noreferrer");
      return;
    }

    setIsResumeModalOpen(true);
  };

  useEffect(() => {
    if (!isResumeModalOpen) {
      return undefined;
    }

    const scrollY = window.scrollY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyLeft = document.body.style.left;
    const previousBodyRight = document.body.style.right;
    const previousBodyWidth = document.body.style.width;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlOverscrollBehavior =
      document.documentElement.style.overscrollBehavior;
    const previousBodyOverscrollBehavior =
      document.body.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overscrollBehavior = "none";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.left = previousBodyLeft;
      document.body.style.right = previousBodyRight;
      document.body.style.width = previousBodyWidth;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overscrollBehavior =
        previousHtmlOverscrollBehavior;
      document.body.style.overscrollBehavior = previousBodyOverscrollBehavior;
      window.scrollTo(0, scrollY);
    };
  }, [isResumeModalOpen]);

  return (
    <>
      <section
        id="contact"
        className="site-shell contact-section"
        aria-label="Contact"
      >
        <span className="contact-bg-word" aria-hidden="true">
          Hemanta
        </span>

        <ScrollReveal delay={0} direction="up">
          <p className="contact-eyebrow">Get in touch</p>
        </ScrollReveal>

        <ScrollReveal delay={80} direction="up">
          <h2 className="contact-heading">
            Got a role, a project,
            <br />
            <span>or just want to talk?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={180} direction="up">
          <p className="contact-copy">
            Open to <strong>full-time engineering roles</strong> and honest
            conversations &mdash; whether you&apos;re hiring, building
            something, or a student figuring out your own path into tech.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={280} direction="up">
          <div className="availability-pill">
            <span className="avail-dot" aria-hidden="true" />
            Open to work
          </div>
        </ScrollReveal>

        <div className="contact-content">
          <div
            className="contact-social-wrap"
            role="list"
            aria-label="Social links"
          >
            {CONTACT_LINKS.map((link, index) => (
              <ScrollReveal key={link.name} delay={index * 60} direction="up">
                <a
                  className="contact-tile"
                  href={link.href}
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={
                    link.name === "Email" ? undefined : "noopener noreferrer"
                  }
                  aria-label={`${link.name}: ${link.handle}`}
                >
                  <span className="contact-tile__arrow" aria-hidden="true">
                    <svg
                      viewBox="0 0 20 20"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 14 14 6m0 0H8m6 0v6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    className={`contact-tile__icon contact-tile__icon--${link.iconType}`}
                  >
                    {renderSocialIcon(link.iconType)}
                  </span>
                  <span className="contact-tile__label">{link.name}</span>
                  <span className="contact-tile__handle">{link.handle}</span>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200} direction="up">
            <div className="contact-resume-card">
              <div className="contact-resume__info">
                <span className="contact-resume__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      d="M7 3.75A1.75 1.75 0 0 1 8.75 2h5.96c.46 0 .9.18 1.24.51l2.54 2.54c.33.34.51.78.51 1.24v13.96A1.75 1.75 0 0 1 17.25 22h-8.5A1.75 1.75 0 0 1 7 20.25V3.75Zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .14.11.25.25.25h8.5a.25.25 0 0 0 .25-.25V6.29a.25.25 0 0 0-.07-.18l-2.54-2.54a.25.25 0 0 0-.18-.07H8.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <p className="contact-resume__title">Hemanta Thapa - Resume</p>
              </div>

              <div className="contact-resume__actions">
                <button
                  type="button"
                  className="resume-btn resume-btn--view"
                  onClick={handleViewResume}
                >
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      d="M12 6.5c4.33 0 7.7 3.22 8.92 5.5-1.22 2.28-4.6 5.5-8.92 5.5S4.3 14.28 3.08 12C4.3 9.72 7.67 6.5 12 6.5Zm0 1.5c-3.55 0-6.44 2.55-7.42 4 .98 1.45 3.87 4 7.42 4s6.44-2.55 7.42-4c-.98-1.45-3.87-4-7.42-4Zm0 1.8a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Z"
                      fill="currentColor"
                    />
                  </svg>
                  View
                </button>

                <a
                  href={site.resume}
                  download
                  className="resume-btn resume-btn--download"
                >
                  <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path
                      d="M11.25 4a.75.75 0 0 1 1.5 0v9.2l2.47-2.46a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L7.72 11.8a.75.75 0 1 1 1.06-1.06l2.47 2.46V4ZM5 17.5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 17.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatePresence>
        {isResumeModalOpen ? (
          <motion.div
            className="resume-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="resume-modal-panel"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Resume preview"
            >
              <div className="resume-modal-header">
                <p className="resume-modal-title">Hemanta Thapa - Resume</p>
                <div className="resume-modal-actions">
                  <a
                    href={site.resume}
                    download
                    className="resume-btn resume-btn--download"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.25 4a.75.75 0 0 1 1.5 0v9.2l2.47-2.46a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L7.72 11.8a.75.75 0 1 1 1.06-1.06l2.47 2.46V4ZM5 17.5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 17.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    Download
                  </a>
                  <button
                    type="button"
                    className="resume-modal-close"
                    onClick={() => setIsResumeModalOpen(false)}
                    aria-label="Close resume preview"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path
                        d="M6.53 6.53a.75.75 0 0 1 1.06 0L12 10.94l4.41-4.41a.75.75 0 1 1 1.06 1.06L13.06 12l4.41 4.41a.75.75 0 1 1-1.06 1.06L12 13.06l-4.41 4.41a.75.75 0 0 1-1.06-1.06L10.94 12 6.53 7.59a.75.75 0 0 1 0-1.06Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="resume-modal-body">
                {isPdfAvailable === false ? (
                  <div className="resume-modal-placeholder">
                    <span
                      className="resume-modal-placeholder__icon"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 3.75A1.75 1.75 0 0 1 8.75 2h5.96c.46 0 .9.18 1.24.51l2.54 2.54c.33.34.51.78.51 1.24v13.96A1.75 1.75 0 0 1 17.25 22h-8.5A1.75 1.75 0 0 1 7 20.25V3.75Zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .14.11.25.25.25h8.5a.25.25 0 0 0 .25-.25V6.29a.25.25 0 0 0-.07-.18l-2.54-2.54a.25.25 0 0 0-.18-.07H8.75Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <p className="resume-modal-placeholder__file">resume.pdf</p>
                    <p className="resume-modal-placeholder__note">
                      Add your PDF to /public/resume.pdf to enable preview
                    </p>
                  </div>
                ) : (
                  <iframe
                    src={site.resume}
                    title="Resume PDF"
                    width="100%"
                    height="100%"
                    onError={() => setIsPdfAvailable(false)}
                    style={{ border: "none", borderRadius: "6px" }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Contact;
