import React, { useEffect } from "react";
import { FiChevronRight, FiGithub, FiChevronDown } from "react-icons/fi";
import carrace from "../assets/car-race.png";
import dumpnotes from "../assets/dumpnotes.png";
import trackmyfinance from "../assets/trackmyfinance-dashboard.png";

const projects = [
  {
    title: "Car Race",
    description:
      "2D car racing game where players avoid obstacles and chase a high score.",
    image: carrace,
    liveLink: "https://thapahemantcarracejs.netlify.app",
    githubLink: "https://github.com/hemanta12/car-race-js",
  },
  {
    title: "Dumpnotes",
    description:
      "A minimalist note-taking app with user authentication and live syncing.",
    image: dumpnotes,
    liveLink: "https://dumpnotess.netlify.app",
    githubLink: "https://github.com/hemanta12/DumpNotes",
  },
  {
    title: "TrackMyFinance",
    description:
      "Personal finance tracker with charts, expense categories, and PDF export.",
    image: trackmyfinance,
    liveLink: "https://track-my-finance.vercel.app",
    githubLink: "https://github.com/hemanta12/trackYourFinance",
  },
];

const Projects = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="  flex flex-col items-center py-16  dark:bg-gray-900 scroll-mt-10"
    >
      {/* Section Heading */}
      <h2
        className="text-5xl bg-clip-text font-extrabold text-gray-900 dark:text-white mb-16 text-center 
                    fade-in opacity-0 translate-y-6 
                    transition-opacity transition-transform duration-700"
      >
        Personal Projects
      </h2>
      <hr className="w-48 border-gray-300 dark:border-gray-600 mx-auto mb-12" />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mb-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative  dark:bg-gray-700 rounded-2xl shadow-md overflow-hidden
                      fade-in opacity-0 translate-y-6
                    transition-opacity duration-700 ease-out
                     transition-transform duration-200 ease-in
                    hover:scale-105 "
          >
            {/* Gradient Accent Stripe */}
            <div
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-br from-purple-400 to-pink-600 rounded-l"
              aria-hidden="true"
            />

            {/* Project Image */}
            <div className="relative w-full h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-5 rounded-2xl"></div>
              <img
                src={project.image}
                alt={project.title}
                className="relative w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1 bg-gray-50 dark:bg-gray-800">
              <h3 className="text-2xl font-semibold mb-3 text-center md:text-left font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className=" text-gray-700 dark:text-gray-200 mb-6 leading-relaxed text-center md:text-left">
                {project.description}
              </p>
              <div className="mt-auto flex justify-center md:justify-start space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 
                  bg-gradient-to-r from-purple-600 to-pink-500 
                 
                  text-white px-4 py-2 rounded-lg 
                 transition duration-200 ease-in-out"
                >
                  <span>Live Site</span>
                  <FiChevronRight className="transform group-hover:translate-x-1 transition-transform duration-200 ease-in-out" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-gray-600
                  bg-gray-700 hover:bg-gray-600 
                  text-white px-4 py-2 rounded-lg 
                   transition duration-200 ease-in-out"
                >
                  <span>GitHub Repo</span>
                  <FiGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-6">
        <a href="#contact">
          <FiChevronDown className="w-8 h-8 text-gray-500 dark:text-gray-400 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
