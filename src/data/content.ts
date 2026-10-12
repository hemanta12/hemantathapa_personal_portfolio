import carRaceImage from "../assets/car-race.png";
import calculatorPreviewImage from "../assets/calculator-preview.png";
import resumePdf from "../assets/Hemanta_thapa_Resume_2026_base.pdf";
import profileImage from "../assets/hero.jpg";
import trackMyFinanceImage from "../assets/trackmyfinance-dashboard.png";
import sasabrowsImage from "../assets/sasabrows-homepage.webp";
import smsImage from "../assets/sms.png";

export type SiteContent = {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
};

export type HeroContent = {
  ctaWork: string;
  ctaContact: string;
  profileImage: string;
};

export type Project = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  live: string;
  github: string;
  note?: string;
  image?: string;
};

export type WorkContent = {
  featured: Project[];
  more: Project[];
};

export type InterestItem = {
  name: string;
  sub: string;
};

export type AboutContent = {
  pullQuote: string;
  bio: string[];
  interests: InterestItem[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export type SkillItem = {
  name: string;
};

export type EducationEntry = {
  type: string;
  degree: string;
  school: string;
  status: string;
  date: string;
  current: boolean;
};

export type CertificationContent = {
  name: string;
  issuer: string;
  date: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export const site: SiteContent = {
  name: "Hemanta Thapa",
  email: "thapahemanta.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/thapahemanta/",
  github: "https://github.com/hemanta12",
  resume: resumePdf,
};

export const navLinks: NavItem[] = [
  { label: "Experience", href: "#about-experience" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
  { label: "Tools", href: "/tools" },
];

export const hero: HeroContent = {
  ctaWork: "See my projects",
  ctaContact: "Get in touch",
  profileImage,
};

export const work: WorkContent = {
  // featured[0] is the main project; the rest sit side by side beneath it.
  featured: [
    {
      category: "AI Agent, LLM Systems",
      title: "DoveAI",
      description:
        "Personal AI assistant on a LangGraph agent graph with intent routing, about 40 database tools, and a verification gate that rejects replies not backed by real tool calls. Handles Whisper voice input, images, PDFs, and Gmail drafts. Langfuse tracing, multi-provider routing (Gemini, OpenAI, DeepSeek via OpenRouter) with per-model cost accounting and a monthly spend ceiling, plus prompt-injection and PII guards.",
      tags: ["LangGraph", "FastAPI", "Supabase", "React", "Langfuse"],
      live: "",
      github: "",
      note: "Demo on request",
    },
    {
      category: "Full-Stack, Real-Time, PWA",
      title: "BrokeEven",
      description:
        "No-signup Splitwise alternative for friends and housemates. Everyone in a group sees balances update live, with cent-exact split math. 9 active users, 2 groups, 20 expenses, and about 300 tests running in CI.",
      tags: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Socket.io"],
      live: "https://brokeeven.swiftmodernsolutions.com/",
      github: "",
      note: "Code on request",
    },
    {
      category: "RAG, MSAI Team Project",
      title: "Handbook FAQ Chatbot",
      description:
        "RAG chatbot over a 77-page handbook, built by a team of 5; my part was extraction, chunking, and adaptive retrieval. Page-level chunking (76 chunks) fixed a failure that collapsed the document into one chunk. An adaptive top-5 retriever (margin 0.4, ceiling 1.25) refuses out-of-scope questions instead of guessing.",
      tags: ["Python", "PDFPlumber", "FAISS", "sentence-transformers"],
      live: "",
      github: "https://github.com/hemanta12/FAQ-chatbot",
    },
  ],
  more: [
    {
      category: "Full-Stack, Django",
      title: "LetsQuiz",
      description:
        "No-login trivia for solo play or 2 to 6 players in one room. 1,795 questions. Local play only.",
      tags: ["Django REST", "PostgreSQL", "React", "TypeScript"],
      live: "",
      github: "",
      note: "Code on request",
    },
    {
      category: "Paused",
      title: "TheBiasLens",
      description:
        "News analysis with fact-check retrieval. Paused mid-build; not deployed.",
      tags: ["FastAPI", "React", "Python"],
      live: "",
      github: "",
    },
    {
      category: "Full-Stack, CMS, Booking",
      title: "Sasa Eyebrow Threading",
      description:
        "CMS and booking platform built from scratch: JWT admin portal, cached Google reviews via cron, Cloudflare R2 image pipeline.",
      tags: ["React", "Node.js", "PostgreSQL", "Cloudflare R2"],
      image: sasabrowsImage,
      live: "https://sasaeyebrowsthreading.com",
      github: "",
    },
    {
      category: "Frontend, SPA",
      title: "Swift Modern Solutions",
      description:
        "Mobile-first marketing SPA with light/dark theme and spam-protected lead capture, targeting 90+ Lighthouse scores.",
      tags: ["React", "Vite", "Tailwind CSS"],
      image: smsImage,
      live: "https://swiftmodernsolutions.com/",
      github: "",
    },
    {
      category: "Tool",
      title: "Compound Growth Calculator",
      description:
        "Side-by-side compound interest simulator with inflation adjustment and retirement visualization.",
      tags: ["React", "TypeScript", "Recharts"],
      image: calculatorPreviewImage,
      live: "/tools",
      github: "https://github.com/hemanta12/compound-calculator",
    },
    {
      category: "Shipped build",
      title: "TrackMyFinance",
      description:
        "Personal finance tracker with charts, expense categories, and PDF export.",
      tags: ["React", "Node.js", "MySQL", "Chart.js"],
      image: trackMyFinanceImage,
      live: "",
      github: "",
    },
    {
      category: "Shipped build",
      title: "Car Race",
      description:
        "2D car racing game where players avoid obstacles and chase a high score.",
      tags: ["JavaScript", "HTML Canvas"],
      image: carRaceImage,
      live: "",
      github: "",
    },
  ],
};

export const about: AboutContent = {
  pullQuote:
    '"I build AI systems the way I build software: they have to work for real people, not just in a demo."',
  bio: [
    "I am an engineer focusing on AI right now. I have 2+ years of software engineering experience building web apps, and I finished a master's in Artificial Intelligence in August 2026.",
    "What I have learned building with AI is that the model is the easy part. The hard part is everything around it: making sure it only says what it can back up, letting it say \"I don't know\", and watching what it costs to run. A demo that works once is not a product, and most of my time goes into closing that gap.",
    "I like to understand a problem before I write code. On a team, I am the person who asks why before asking how.",
  ],
  interests: [
    {
      name: "Guitar & Music",
      sub: "Rhythm and structure, the same things I look for in good code.",
    },
    {
      name: "Soccer & Basketball",
      sub: "Team sports. Reading the system, adapting fast.",
    },
    {
      name: "Writing & Food",
      sub: "Clarity of thought. Appreciation for craft.",
    },
  ],
};

export const experience: ExperienceEntry[] = [
  {
    company: "Takeo Tech LLC",
    role: "Software Engineer",
    period: "Aug 2024 - Jan 2025",
    bullets: [
      "Developed <strong>15+ RESTful APIs</strong> (Node.js/Express) for profile management, job referrals, and notifications.",
      "Added an <strong>alumni networking module</strong> to the React portal, increasing engagement by 15%.",
      "Containerized services with Docker and deployed via Jenkins CI/CD to <strong>AWS EC2</strong>, improving deployment speed by 25%.",
    ],
    tags: ["React", "Node.js", "AWS EC2", "Docker", "Jenkins", "REST APIs"],
  },
  {
    company: "Kuebiko, Inc",
    role: "Programmer Analyst / Software Developer",
    period: "Feb 2023 - Jul 2024",
    bullets: [
      "Built an <strong>Applicant Tracking System</strong> (React, Node.js, MongoDB) replacing spreadsheets for 200+ users, cutting HR effort by 40%.",
      "Built a <strong>timesheet and billing app</strong> (React, Node.js, MySQL) with approval workflows and PDF invoicing for 20+ consultants.",
      "Migrated legacy candidate data to MongoDB with Python scripts, improving query speed by 20%.",
    ],
    tags: ["React", "Node.js", "MongoDB", "MySQL", "Python"],
  },
];

export const skills: Record<string, SkillItem[]> = {
  Languages: ["Python", "TypeScript", "JavaScript", "SQL", "Java"].map((name) => ({ name })),
  Frameworks: [
    "LangGraph",
    "LangChain",
    "FastAPI",
    "React",
    "Express.js",
    "Node.js",
    "Django",
    "pytest",
  ].map((name) => ({ name })),
  "ML / GenAI": [
    "RAG",
    "OpenAI",
    "Gemini",
    "FAISS",
    "Langfuse",
    "TensorFlow",
    "Keras",
    "Prompt Eng.",
    "Pandas",
    "NumPy",
    "Claude Code",
  ].map((name) => ({ name })),
  "Cloud & Data": [
    "AWS",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "Railway",
    "Vercel",
    "Docker",
    "GitHub Actions",
  ].map((name) => ({ name })),
};

export const education: EducationEntry[] = [
  {
    type: "Graduate Degree",
    degree: "Master of Science in Artificial Intelligence",
    school: "University of the Cumberlands",
    status: "Completed",
    date: "Aug 2026",
    current: false,
  },
  {
    type: "Undergraduate Degree",
    degree: "Bachelor of Science in Computer Science",
    school: "San Francisco State University",
    status: "Completed",
    date: "Dec 2022",
    current: false,
  },
];

export const certification: CertificationContent = {
  name: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services",
  date: "Sep 2024",
};

export const askResponses: Record<string, string> = {
  "Can he ship full-stack products?": `Yes. <span class="hl">React, Node.js, PostgreSQL, AWS</span> in production. Built a complete <span class="hl">CMS and booking platform</span> from scratch and <span class="hl">BrokeEven</span>, a real-time expense-splitting app with about 300 tests in CI. He owns the full stack.`,
  "Why is he moving into AI?": `Not a pivot, an extension. Two years of <span class="hl">production engineering</span> plus an <span class="hl">MS in AI</span> (Aug 2026) means he builds LLM systems with real systems thinking: <span class="hl">tool-using agents</span>, retrieval, tracing, and cost control.`,
  "Is he a good culture fit?": `Analytically wired. He maps the problem before touching the keyboard. Plays <span class="hl">soccer and basketball</span>, so he understands team dynamics instinctively. Writes clearly, which usually means he thinks clearly. Calm, curious, direct.`,
  "When is he available?": `Open to work <span class="hl">now</span>. Looking for <span class="hl">full-time roles</span>, preferably remote or in the Bay Area, where the work actually matters to real people. Quick to onboard, ready to ship.`,
};

export const askFallback = `Hemanta is an <span class="hl">AI engineer</span> with an MS in AI and 2+ years shipping production web apps: React, Node.js, PostgreSQL, AWS. He builds <span class="hl">LangGraph agents and RAG systems</span>. Open to work, remote-first.`;
