import React from "react";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Bootstrap",
      "Tailwind CSS",
      "UI/UX Design",
      "Figma",
      "Adobe Photoshop",
      "Adobe Lightroom",
    ],
  },
  {
    category: "Backend & DevOps",
    skills: [
      "Java",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MySQL",
      "MongoDB",
      "Spring Boot",
      "JPA/Hibernate",
      "Microservices",
      "Tomcat",
      "Docker",
      "AWS",
      "Jenkins",
      "CI/CD",
      "Python",
    ],
  },
  {
    category: "Other",
    skills: ["Git", "JUnit", "Postman", "Agile", "Scrum", "UI/UX Design"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white flex flex-col items-center py-16 scroll-mt-10"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 mt-10">Skills</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {skillsData.map((skillCategory, index) => (
          <div
            key={index}
            className="skills-card rounded-lg p-6 flex flex-col hover:shadow-xl transition-shadow duration-200"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-4 text-[#6f3af7]">
              {skillCategory.category}
            </h3>
            {/* Skills List */}
            <div className="flex flex-wrap">
              {skillCategory.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-800 m-1 px-3 py-1 rounded-full border border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
