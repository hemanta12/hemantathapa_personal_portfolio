import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { askFallback, askResponses } from "../../data/content";

const CHIPS = [
  "Can he ship full-stack products?",
  "Why is he moving into AI?",
  "Is he a good culture fit?",
  "When is he available?",
] as const;

const STREAM_INTERVAL_MS = 38;

// Tokenize an HTML string into complete tags, whitespace, and text words
// so innerHTML updates never produce partial tags.
function tokenizeHtml(html: string): string[] {
  const result: string[] = [];
  const regex = /<[^>]+>|[^\s<]+|\s+/g;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(html)) !== null) {
    result.push(m[0]);
  }
  return result;
}

const AskHemanta = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const responseRef = useRef<HTMLParagraphElement>(null);
  const streamIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearStream = () => {
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current);
      streamIntervalRef.current = null;
    }
  };

  const streamResponse = (html: string) => {
    clearStream();
    setShowResponse(true);

    if (responseRef.current) responseRef.current.innerHTML = "";

    const tokens = tokenizeHtml(html);
    let index = 0;

    const advance = () => {
      // Skip complete HTML tags and pure whitespace without pausing
      while (
        index < tokens.length &&
        (tokens[index].startsWith("<") || /^\s+$/.test(tokens[index]))
      ) {
        index++;
      }
      if (index >= tokens.length) {
        clearStream();
        return;
      }
      index++;
      if (responseRef.current) {
        responseRef.current.innerHTML = tokens.slice(0, index).join("");
      }
    };

    // Show first word immediately, then continue at interval
    advance();
    streamIntervalRef.current = setInterval(advance, STREAM_INTERVAL_MS);
  };

  const fireResponse = (query: string) => {
    const response =
      askResponses[query as keyof typeof askResponses] ?? askFallback;
    setActiveChip(query);
    streamResponse(response);
  };

  const handleSubmit = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setActiveChip(null);
    fireResponse(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  const handleChipClick = (chip: string) => {
    setInputValue(chip);
    fireResponse(chip);
    inputRef.current?.blur();
  };

  useEffect(() => {
    return () => clearStream();
  }, []);

  return (
    <div className="ask-hemanta" role="search" aria-label="Ask about Hemanta">
      <p className="ask-hemanta__label">Ask anything about Hemanta</p>

      <div className="ask-hemanta__input-row">
        <input
          ref={inputRef}
          type="text"
          className="ask-hemanta__input"
          placeholder="Type a question..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Ask a question about Hemanta"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          className="ask-hemanta__send"
          onClick={handleSubmit}
          aria-label="Send question"
          type="button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="#3D5672"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        className="ask-hemanta__chips"
        role="list"
        aria-label="Suggested questions"
      >
        {CHIPS.map((chip) => (
          <button
            key={chip}
            className={`ask-hemanta__chip${activeChip === chip ? " ask-hemanta__chip--active" : ""}`}
            onClick={() => handleChipClick(chip)}
            type="button"
            role="listitem"
            aria-pressed={activeChip === chip}
          >
            {chip}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {showResponse && (
          <motion.div
            className="ask-hemanta__response"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="status"
            aria-live="polite"
          >
            <div className="ask-hemanta__response-header" aria-hidden="true">
              <span className="ask-hemanta__response-dot" />
              <span>Hemanta · AI response</span>
            </div>
            <p className="ask-hemanta__response-text" ref={responseRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AskHemanta;
