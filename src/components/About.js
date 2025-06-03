import React from "react";
import "../App.css";
import { FiChevronDown } from "react-icons/fi";

const About = () => {
  // ------------- 1. “Who I Am” text-------------
  const whoIAmParagraphs = [
    "I’m a junior-to-mid-level Full-Stack Developer and current AI master’s student, now looking for internships or entry-level roles where I can deepen my hands-on experience.",

    "Over the past two years I completed one full-time and one part-time remote role (Kuebiko Inc. and Takeo Tech LLC) building small-to-medium React / Node.js applications on AWS. Working alongside senior engineers, I helped containerize micro-services with Docker, set up Jenkins pipelines, and wrote unit tests that pushed overall coverage close to 95 percent.",

    "My next goal is to transfer those web-dev & DevOps skills into machine-learning workflows and AI-driven products.",
  ];

  // ------------- 2. “What I Build” cards  -------------
  const buildCards = [
    {
      title: "Web & Cloud",
      points: [
        "Re-worked a React student portal and added 15+ Node.js APIs, cutting manual workflows 40 % (Takeo Tech)",
        "Deployed to AWS EC2 & S3 and improved deployment speed 25 % via Docker + Jenkins",
      ],
    },
    {
      title: "DevOps & Infrastructure",
      points: [
        "Wrote Docker-Compose files for local dev and assisted the DevOps lead in configuring Jenkins jobs",
        "Piloted a small EKS test cluster during a “Kubernetes for Developers” course (certification in progress)",
      ],
    },
    {
      title: "AI & ML",
      points: [
        "Built university coursework ML projects in Python (NumPy, Pandas, scikit-learn) and documented experiments in Jupyter",
        "Currently exploring ways to integrate lightweight ML models into portfolio side-projects",
      ],
    },
  ];

  // ------------- 3. “Outside the Code” text -------------
  const outsideTheCodeParagraphs = [
    "Continuous learning is my default mode: I join live web seminars, connect with engineers on LinkedIn, and follow YouTube channels on the latest AI techniques—often turning those ideas into weekend prototypes. When I’m away from the keyboard, you’ll usually find me on a soccer or basketball court, strumming my guitar, or heading out for a hike.",
    "Let’s connect and see how I can help bring your ideas to life!",
  ];

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 scroll-mt-10">
      <div className="max-w-[1440px] w-full mx-auto px-10 py-16 flex flex-col">
        {/* ─── “About Me” Heading ───────────────────────────────────────────── */}
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-16 text-center">
          About Me
        </h2>
        <hr className="w-48 border-gray-300 dark:border-gray-600 mx-auto mb-12" />

        {/* ─── Subsection 1: “Who I Am” ────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row mb-16">
          {/* Subheading on left*/}
          <div className="md:w-1/4 flex justify-center md:justify-center mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Who I Am
            </h3>
          </div>

          {/* Content on right */}
          <div className="md:w-3/4">
            {whoIAmParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ─── Subsection 2: “What I Build” ─────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row mb-16">
          {/* Subheading on left */}
          <div className="md:w-1/4 flex justify-center md:justify-center mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              What I Build
            </h3>
          </div>

          {/* Cards on right */}
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {buildCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-start bg-white  dark:bg-gray-800 p-6 rounded-2xl shadow-lg dark:shadow-gray-700/50 
                transition-transform duration-200 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700/70"
              >
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {card.title}
                </h4>
                <ul className="space-y-4 w-full">
                  {card.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="pl-4 border-l-4 border-purple-400 text-gray-700 dark:text-gray-200 leading-snug"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Subsection 3: “Outside the Code” ─────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row mb-16">
          {/* Subheading on left */}
          <div className="md:w-1/4 flex justify-center md:justify-center mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Outside the Code
            </h3>
          </div>

          {/* Content on right */}
          <div className="md:w-3/4">
            {outsideTheCodeParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <a href="#experience">
            <FiChevronDown className="w-8 h-8 text-gray-500 dark:text-gray-400 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
