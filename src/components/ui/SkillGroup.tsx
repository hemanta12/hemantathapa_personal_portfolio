import type { SkillItem } from "../../data/content";

type SkillGroupProps = {
  title: string;
  items: SkillItem[];
};

const SKILL_ICON_MAP: Record<string, string> = {
  Python: "https://cdn.simpleicons.org/python",
  JavaScript: "https://cdn.simpleicons.org/javascript",
  TypeScript: "https://cdn.simpleicons.org/typescript",
  Java: "https://cdn.simpleicons.org/openjdk",
  "HTML/CSS": "https://cdn.simpleicons.org/html5",
  SQL: "https://cdn.simpleicons.org/postgresql",
  React: "https://cdn.simpleicons.org/react",
  Redux: "https://cdn.simpleicons.org/redux",
  Tailwind: "https://cdn.simpleicons.org/tailwindcss",
  Vite: "https://cdn.simpleicons.org/vite",
  Bootstrap: "https://cdn.simpleicons.org/bootstrap",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs",
  "Express.js": "https://cdn.simpleicons.org/express",
  "Spring Boot": "https://cdn.simpleicons.org/springboot",
  "REST APIs": "https://cdn.simpleicons.org/openapiinitiative",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql",
  MongoDB: "https://cdn.simpleicons.org/mongodb",
  MySQL: "https://cdn.simpleicons.org/mysql",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  Docker: "https://cdn.simpleicons.org/docker",
  Jenkins: "https://cdn.simpleicons.org/jenkins",
  Git: "https://cdn.simpleicons.org/git",
  "Cloudflare R2": "https://cdn.simpleicons.org/cloudflare",
  TensorFlow: "https://cdn.simpleicons.org/tensorflow",
  Keras: "https://cdn.simpleicons.org/keras",
  "Scikit-learn": "https://cdn.simpleicons.org/scikitlearn",
  spaCy: "https://cdn.simpleicons.org/spacy",
  Pandas: "https://cdn.simpleicons.org/pandas",
  NumPy: "https://cdn.simpleicons.org/numpy",
  LangGraph: "https://cdn.simpleicons.org/langgraph",
  LangChain: "https://cdn.simpleicons.org/langchain",
  FastAPI: "https://cdn.simpleicons.org/fastapi",
  Django: "https://cdn.simpleicons.org/django",
  pytest: "https://cdn.simpleicons.org/pytest",
  Gemini: "https://cdn.simpleicons.org/googlegemini",
  "Claude Code": "https://cdn.simpleicons.org/claude",
  Supabase: "https://cdn.simpleicons.org/supabase",
  Railway: "https://cdn.simpleicons.org/railway",
  Vercel: "https://cdn.simpleicons.org/vercel",
  "GitHub Actions": "https://cdn.simpleicons.org/githubactions",
  "Prompt Eng.": "https://cdn.simpleicons.org/anthropic",
};

const SkillGroup = ({ title, items }: SkillGroupProps): JSX.Element => {
  return (
    <article className="skill-group">
      <h3 className="skill-group__title">{title}</h3>
      <div className="skill-group__items">
        {items.map((item) => (
          <div key={item.name} className="skill-item">
            {SKILL_ICON_MAP[item.name] && (
              <span className="skill-item__icon" aria-hidden="true">
                <img
                  src={SKILL_ICON_MAP[item.name]}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </span>
            )}
            <span className="skill-item__name">{item.name}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SkillGroup;
