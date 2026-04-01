import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type DirectLinkProps = {
  name: string;
  handle: string;
  href: string;
  iconType: "email" | "linkedin" | "github";
  iconBg: string;
  iconColor: string;
  inverted?: boolean;
  copyText?: string;
};

const LinkIcon = ({
  type,
}: {
  type: DirectLinkProps["iconType"];
}): JSX.Element => {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm2.1.25 6.9 5.32L18.9 7H5.1Zm13.9 1.26-6.39 4.93a1 1 0 0 1-1.22 0L5 8.26v8.99c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V8.26Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M6.5 8.25A1.75 1.75 0 1 0 6.5 4.75a1.75 1.75 0 0 0 0 3.5Zm-1.25 2h2.5V19h-2.5v-8.75Zm5 0h2.39v1.2h.03c.39-.73 1.39-1.45 2.87-1.45 2.42 0 3.46 1.49 3.46 4.17V19h-2.5v-4.51c0-1.36-.25-2.39-1.68-2.39-1.4 0-2 1.01-2 2.39V19h-2.57v-8.75Z"
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

const CopyIcon = (): JSX.Element => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M8.75 4A1.75 1.75 0 0 0 7 5.75v9.5C7 16.22 7.78 17 8.75 17h7.5c.97 0 1.75-.78 1.75-1.75v-9.5C18 4.78 17.22 4 16.25 4h-7.5Zm-.25 1.75c0-.14.11-.25.25-.25h7.5c.14 0 .25.11.25.25v9.5a.25.25 0 0 1-.25.25h-7.5a.25.25 0 0 1-.25-.25v-9.5ZM5.75 7A1.75 1.75 0 0 0 4 8.75v9.5C4 19.22 4.78 20 5.75 20h7.5A1.75 1.75 0 0 0 15 18.25v-.5h-1.5v.5a.25.25 0 0 1-.25.25h-7.5a.25.25 0 0 1-.25-.25v-9.5c0-.14.11-.25.25-.25h.5V7h-.5Z"
      fill="currentColor"
    />
  </svg>
);

const CheckIcon = (): JSX.Element => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M9.55 16.45a1 1 0 0 1-.71-.29l-3-3a1 1 0 1 1 1.41-1.41l2.3 2.29 6.2-6.2a1 1 0 1 1 1.41 1.42l-6.9 6.9a1 1 0 0 1-.71.29Z"
      fill="currentColor"
    />
  </svg>
);

const DirectLink = ({
  name,
  handle,
  href,
  iconType,
  iconBg,
  iconColor,
  inverted = false,
  copyText,
}: DirectLinkProps): JSX.Element => {
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleCopy = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (!copyText) return;

    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1300);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      className={`direct-link${inverted ? " direct-link--inverted" : ""}`}
      data-cursor="hover"
      whileHover={
        prefersReducedMotion
          ? undefined
          : { y: -2, borderColor: "var(--border-hover)" }
      }
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <a
        className="direct-link__row"
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={copyText ? `Send email to ${handle}` : `Visit ${name}`}
      >
        <span
          className="direct-link__icon"
          style={{ background: iconBg, color: iconColor }}
        >
          <LinkIcon type={iconType} />
        </span>
        <span className="direct-link__handle">{handle}</span>
      </a>

      {copyText ? (
        <button
          type="button"
          className="direct-link__copy"
          onClick={handleCopy}
          aria-label="Copy email address"
          title={copied ? "Copied!" : "Copy email"}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      ) : (
        <span className="direct-link__arrow" aria-hidden="true">
          ↗
        </span>
      )}
    </motion.div>
  );
};

export default DirectLink;
