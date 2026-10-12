import { useState } from "react";

const CopyEmail = ({ email }: { email: string }): JSX.Element => {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <button type="button" className="home-copy" onClick={copy}>
        {done ? "Copied ✓" : "Copy email"}
      </button>
      <span className="home-sr" aria-live="polite">
        {done ? "Email copied to clipboard" : ""}
      </span>
    </>
  );
};

export default CopyEmail;
