import carRaceImage from "../assets/car-race.png";
import dumpnotesImage from "../assets/dumpnotes.png";
import resumePdf from "../assets/Hemanta_thapa_Resume_2026_base.pdf";
import profileImage from "../assets/profile.jpg";
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
  belief: string;
  role1: string;
  role2: string;
  bgWord: string;
  personality: string[];
  personalityIcons: string[];
  stackChips: string[];
  ctaWork: string;
  ctaContact: string;
  profileImage: string;
};

export type FeaturedProject = {
  index: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  live: string;
  github: string;
  imageLight: boolean;
};

export type GridProject = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  icon: string;
  color: string;
  image?: string;
};

export type WorkContent = {
  featured: FeaturedProject[];
  grid: GridProject[];
};

export type InterestItem = {
  icon: string;
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
  abbr: string;
  bg: string;
  color: string;
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
  linkedin: "https://linkedin.com/in/hemantathapa",
  github: "https://github.com/hemantathapa",
  resume: resumePdf,
};

export const navLinks: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#about-experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const hero: HeroContent = {
  belief:
    "I believe technology - whether a website, an app, or an AI agent - exists to solve real problems and make life genuinely better. Innovation just means that help reaches more people, faster.",
  role1: "Full-Stack Engineer",
  role2: "& AI Builder",
  bgWord: "Build",
  personality: ["Guitar", "Soccer", "Writing", "Food", "Basketball"],
  personalityIcons: ["♪", "◎", "✦", "◈", "◉"],
  stackChips: ["React", "Node.js", "TypeScript", "Python", "AWS"],
  ctaWork: "See my work",
  ctaContact: "Get in touch",
  profileImage,
};

export const work: WorkContent = {
  featured: [
    {
      index: "01",
      category: "Full-Stack · CMS · Booking",
      title: "Sasa Eyebrow Threading",
      subtitle: "Full-stack CMS & booking platform",
      description:
        "Built the entire product from scratch - PostgreSQL through Node.js/Express to React, with a secure JWT admin portal, automated Google Places review caching via daily cron jobs, and a custom image pipeline using Cloudflare R2.",
      tags: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Tailwind",
        "Cloudflare R2",
        "JWT",
      ],
      image: sasabrowsImage,
      live: "https://sasaeyebrowsthreading.com",
      github: "",
      imageLight: false,
    },
    {
      index: "02",
      category: "Frontend · SPA · Performance",
      title: "Swift Modern Solutions",
      subtitle: "High-performance marketing SPA",
      description:
        "Mobile-first SPA built for conversion. Custom Light/Dark theme with localStorage persistence, honeypot spam mitigation on lead capture, and component architecture targeting 90+ Lighthouse scores across performance and accessibility.",
      tags: ["React", "Vite", "Tailwind CSS", "React Router", "JavaScript"],
      image: smsImage,
      live: "",
      github: "https://swiftmodernsolutions.com",
      imageLight: true,
    },
  ],
  grid: [
    {
      title: "TrackMyFinance",
      category: "Shipped build",
      description:
        "Personal finance tracker with charts, expense categories, and PDF export.",
      tags: ["React", "Node.js", "MySQL", "Chart.js"],
      github: "",
      live: "",
      icon: "$",
      color: "#1C3348",
      image: trackMyFinanceImage,
    },
    {
      title: "Dumpnotes",
      category: "Shipped build",
      description:
        "A minimalist note-taking app with user authentication and live syncing.",
      tags: ["React", "Firebase", "CSS"],
      github: "",
      live: "",
      icon: "✎",
      color: "#243040",
      image: dumpnotesImage,
    },
    {
      title: "Car Race",
      category: "Shipped build",
      description:
        "2D car racing game where players avoid obstacles and chase a high score.",
      tags: ["JavaScript", "HTML Canvas"],
      github: "",
      live: "",
      icon: "▶",
      color: "#2A2040",
      image: carRaceImage,
    },
  ],
};

export const about: AboutContent = {
  pullQuote:
    '"I got into engineering because I wanted to build things that actually matter - not just things that technically work."',
  bio: [
    "I am a full-stack engineer with a background in computer science and two years of production experience building web applications. Right now I am deepening my understanding of machine learning and AI systems - not to chase a trend, but because I think intelligent software is the most direct path to the kind of impact I care about.",
    "I approach problems analytically - mapping the terrain before writing a line of code. On a team, I am the person who asks why before asking how.",
  ],
  interests: [
    {
      icon: "♪",
      name: "Guitar & Music",
      sub: "Rhythm and structure - the same things I look for in good code.",
    },
    {
      icon: "◎",
      name: "Soccer & Basketball",
      sub: "Team sports. Reading the system, adapting fast.",
    },
    {
      icon: "✦",
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
      "Revamped a React-based alumni portal serving <strong>500+ users</strong>, improving UX and reliability.",
      "Built <strong>15+ RESTful APIs</strong> with Node.js/Express, automating profile management workflows.",
      "Containerized with Docker, deployed to <strong>AWS EC2</strong> - reduced deployment time by 25%.",
    ],
    tags: ["React", "Node.js", "AWS EC2", "Docker", "REST APIs"],
  },
  {
    company: "Kuebiko, Inc",
    role: "Programmer Analyst",
    period: "Feb 2023 - Jul 2024",
    bullets: [
      "Built a full-stack <strong>Applicant Tracking System</strong> from scratch - React, Node.js, MongoDB.",
      "Implemented <strong>RBAC and JWT authentication</strong> for secure multi-role access control.",
      "Achieved <strong>95% test coverage</strong> with Jest for stable continuous deployment.",
    ],
    tags: ["React", "Node.js", "MongoDB", "JWT", "Jest", "RBAC"],
  },
];

export const skills: Record<string, SkillItem[]> = {
  Languages: [
    { name: "Python", abbr: "Py", bg: "#1A2840", color: "#4B8BBE" },
    { name: "JavaScript", abbr: "JS", bg: "#2A2400", color: "#F7DF1E" },
    { name: "TypeScript", abbr: "TS", bg: "#1A2A4A", color: "#3178C6" },
    { name: "Java", abbr: "Jv", bg: "#2A1A00", color: "#E76F00" },
    { name: "HTML/CSS", abbr: "H", bg: "#2A1500", color: "#E44D26" },
    { name: "SQL", abbr: "SQL", bg: "#001A2A", color: "#00758F" },
  ],
  Frontend: [
    { name: "React", abbr: "Re", bg: "#1A2E42", color: "#61DAFB" },
    { name: "Redux", abbr: "Rx", bg: "#200A40", color: "#764ABC" },
    { name: "Tailwind", abbr: "Tw", bg: "#001824", color: "#38BDF8" },
    { name: "Vite", abbr: "Vi", bg: "#1A0A2A", color: "#BD34FE" },
    { name: "Bootstrap", abbr: "Bs", bg: "#1A0030", color: "#7952B3" },
  ],
  Backend: [
    { name: "Node.js", abbr: "No", bg: "#1A3320", color: "#68A063" },
    { name: "Express.js", abbr: "Ex", bg: "#0A0A0A", color: "#AAAAAA" },
    { name: "Spring Boot", abbr: "Sp", bg: "#001A10", color: "#6DB33F" },
    { name: "REST APIs", abbr: "API", bg: "#1A1A1A", color: "#AAAAAA" },
  ],
  Databases: [
    { name: "PostgreSQL", abbr: "Pg", bg: "#001030", color: "#336791" },
    { name: "MongoDB", abbr: "Mg", bg: "#0A1A00", color: "#47A248" },
    { name: "MySQL", abbr: "My", bg: "#001830", color: "#4479A1" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", abbr: "AWS", bg: "#1A0C00", color: "#FF9900" },
    { name: "Docker", abbr: "Dk", bg: "#001230", color: "#2496ED" },
    { name: "Jenkins", abbr: "Jk", bg: "#001A20", color: "#D33833" },
    { name: "Git", abbr: "Git", bg: "#1A0500", color: "#F05032" },
    {
      name: "Cloudflare R2",
      abbr: "CF",
      bg: "#001A2A",
      color: "#F38020",
    },
  ],
  "AI & Data Science": [
    { name: "TensorFlow", abbr: "TF", bg: "#1A0A00", color: "#FF6F00" },
    { name: "Keras", abbr: "Ks", bg: "#1A0005", color: "#D00000" },
    {
      name: "Scikit-learn",
      abbr: "Sk",
      bg: "#001A0A",
      color: "#F89939",
    },
    { name: "spaCy", abbr: "Sp", bg: "#001A10", color: "#09A3D5" },
    { name: "Pandas", abbr: "Pd", bg: "#000A1A", color: "#150458" },
    { name: "NumPy", abbr: "Np", bg: "#001A1A", color: "#4DABCF" },
    { name: "Prompt Eng.", abbr: "PE", bg: "#1A1A00", color: "#CCAA00" },
  ],
};

export const education: EducationEntry[] = [
  {
    type: "Graduate Degree",
    degree: "Master of Science in Artificial Intelligence",
    school: "University of the Cumberlands",
    status: "In Progress",
    date: "Expected Aug 2026",
    current: true,
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
  "Can he ship full-stack products?": `Yes — <span class="hl">React, Node.js, PostgreSQL, AWS</span> in production. Built a complete <span class="hl">CMS and booking platform</span> from scratch and a high-performance <span class="hl">marketing SPA</span> targeting 90+ Lighthouse scores. He owns the full stack.`,
  "Why is he moving into AI?": `Not a pivot — an extension. Two years of <span class="hl">production engineering</span> gives him something most AI engineers don't have: real systems thinking. He's pursuing an <span class="hl">MS in AI</span> to add intelligence to products he already knows how to ship.`,
  "Is he a good culture fit?": `Analytically wired — maps the problem before touching the keyboard. Plays <span class="hl">soccer and basketball</span>, so he understands team dynamics instinctively. Writes clearly, which usually means he thinks clearly. Calm, curious, direct.`,
  "When is he available?": `Open to work <span class="hl">now</span>. Looking for <span class="hl">full-time engineering roles</span> — preferably remote — where the work actually matters to real people. Quick to onboard, ready to ship.`,
};

export const askFallback = `Hemanta is a <span class="hl">full-stack engineer</span> with 2+ years shipping production apps — React, Node.js, PostgreSQL, AWS. Currently deepening into <span class="hl">AI and machine learning</span> through an MS program. Open to work, remote-first.`;
