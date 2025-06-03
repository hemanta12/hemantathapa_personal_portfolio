import React, { useEffect } from "react";
import { FiCode, FiChevronDown } from "react-icons/fi";

const experiences = [
  {
    company: "TAKEO TECH LLC",
    role: "Software Engineer (Part-Time, Remote)",
    duration: "August 2024 - January 2025",
    items: [
      {
        title: "Alumni Connect Platform (EdTech)",
        description:
          "Revamped React-based student portal with alumni networking module, enabling mentorship for 500+ users and increasing engagement by 15%. Developed 15+ RESTful APIs (Node.js/Express) reducing manual workflows by 40%.",
      },
      {
        title: "DevOps & Deployment",
        description:
          "Containerized services using Docker and deployed via Jenkins CI/CD to AWS EC2, improving deployment speed by 25%. Authored technical specifications reducing onboarding time for new developers by 40%.",
      },
      {
        title: "UI Optimization",
        description:
          "Conducted A/B testing on Bootstrap components, boosting user retention by 12%. Resolved React/Spring Boot compatibility issues, improving system performance by 20%.",
      },
    ],
  },
  {
    company: "KUEBIKO, INC",
    role: "Programmer Analyst/Software Developer (Full-Time, Remote)",
    duration: "February 2023 - July 2024",
    items: [
      {
        title: "TalentConnect Lite ATS",
        description:
          "Built full-stack Applicant Tracking System (React/Node.js/MongoDB) automating job postings for 200+ users, reducing HR manual data entry by 40%. Implemented RBAC security achieving zero unauthorized access incidents.",
      },
      {
        title: "Quality Assurance",
        description:
          "Created 50+ Jest test scripts achieving 95% test coverage, reducing post-deployment bugs by 25%. Migrated legacy data with Python scripts, improving query speed by 20%.",
      },
      {
        title: "TimeTrak Timesheet System",
        description:
          "Developed timesheet approval workflow (React/Node.js/MySQL) reducing invoice processing time by 30%. Automated PDF generation and integrated JWT authentication with zero security breaches.",
      },
    ],
  },
];

const Experience = () => {
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
      id="experience"
      className="min-h-screen flex flex-col items-center py-16  dark:bg-gray-900 scroll-mt-10"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-5xl bg-clip-text mb-16 font-extrabold text-gray-900 dark:text-white text-center 
                    fade-in opacity-0 translate-y-6 transition-opacity transition-transform duration-700"
        >
          Work Experience
        </h2>
        <hr className="w-48 border-gray-300 dark:border-gray-600 mx-auto mb-12" />

        <div className="relative">
          {/* Gradient Timeline Line */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-2
                       bg-gradient-to-b from-purple-400 to-pink-600 rounded"
          />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.company + exp.duration}
                className={`mb-16 flex flex-col items-center md:flex-row fade-in opacity-0 translate-y-6 transition-opacity transition-transform duration-700 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Left Side (Date & Role) */}
                <div
                  className={`md:w-1/2 text-center md:text-right ${
                    isEven ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <p
                    className="text-lg font-semibold mb-2
                               bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                  >
                    {exp.duration}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 tracking-wide mt-1">
                    {exp.company}
                  </p>
                </div>

                {/* Center Dot */}
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full border-4 border-white shadow-md z-10 mt-4 md:mt-0" />

                {/* Right Side (Details Card) */}
                <div
                  className={`md:w-1/2 mt-6 md:mt-0 ${
                    isEven ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="relative  bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-white-700/50 duration-300">
                    {/* Gradient Stripe on Left Edge */}
                    <div
                      className="absolute inset-y-0 left-0 w-1 bg-gradient-to-br from-purple-400 to-pink-600 rounded-l"
                      aria-hidden="true"
                    />

                    {/* Items List */}
                    <ul className="space-y-6 text-gray-700 dark:text-gray-300 ">
                      {exp.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <FiCode className="mt-1 text-purple-500 flex-shrink-0 w-5 h-5" />
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                              {item.title}
                            </p>
                            <p className="leading-snug dark:text-gray-200">
                              {item.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center pt-6">
          <a href="#skills">
            <FiChevronDown className="w-8 h-8 text-gray-500 dark:text-gray-400 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
