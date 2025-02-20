import React from "react";

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
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center py-16 bg-gray-50 scroll-mt-10"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 mt-10 text-gray-800 text-center">
          Work Experience
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-500"></div>

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`mb-12 flex flex-col items-center md:flex-row ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Left Side (Date and Role) */}
                <div
                  className={`md:w-1/2 text-center md:text-center ${
                    isEven ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <p className="text-blue-500 font-semibold mb-2">
                    {exp.duration}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>

                {/* Center Dot */}
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md z-10 mt-6 md:mt-0"></div>

                {/* Right Side (Content) */}
                <div
                  className={`md:w-1/2 mt-6 md:mt-0 text-center md:text-left ${
                    isEven ? "md:pl-8" : "md:pr-8"
                  }`}
                >
                  <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    {/* Items */}
                    <ul className="space-y-4 text-gray-700">
                      {exp.items.map((item, idx) => (
                        <li key={idx}>
                          <strong>{item.title}:</strong> {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
