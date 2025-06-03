import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
  FaGitAlt,
  FaPalette,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiHibernate,
  SiKubernetes,
  SiJenkins,
  SiCircleci,
  SiPostman,
  SiFigma,
  SiAdobephotoshop,
  SiScrumalliance,
} from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";

const skillsData = [
  {
    category: "Web Development",
    skills: [
      { name: "HTML", Icon: FaHtml5 },
      { name: "CSS", Icon: FaCss3Alt },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "React", Icon: FaReact },
      { name: "Bootstrap", Icon: FaBootstrap },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Express.js", Icon: SiExpress },
      { name: "RESTful APIs", Icon: FaServer },
      { name: "MySQL", Icon: SiMysql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Spring Boot", Icon: SiSpringboot },
      { name: "JPA/Hibernate", Icon: SiHibernate },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", Icon: FaDocker },
      { name: "Kubernetes (EKS)", Icon: SiKubernetes },
      { name: "AWS", Icon: FaAws },
      { name: "Jenkins", Icon: SiJenkins },
      { name: "CI/CD", Icon: SiCircleci },
      { name: "Microservices", Icon: FaServer },
      { name: "Tomcat", Icon: FaServer },
    ],
  },
  {
    category: "AI & ML Foundations",
    skills: [
      { name: "Python", Icon: FaPython },
      { name: "NumPy", Icon: FaPython },
      { name: "Pandas", Icon: FaPython },
      { name: "scikit-learn", Icon: FaPython },
      { name: "Jupyter Notebooks", Icon: FaServer },
    ],
  },
  {
    category: "Design & Tools",
    skills: [
      { name: "UI/UX Design", Icon: FaPalette },
      { name: "Figma", Icon: SiFigma },
      { name: "Adobe Photoshop", Icon: SiAdobephotoshop },
      { name: "Git", Icon: FaGitAlt },
      { name: "Postman", Icon: SiPostman },
      { name: "Agile", Icon: FaProjectDiagram },
      { name: "Scrum", Icon: SiScrumalliance },
      { name: "JUnit (testing)", Icon: FaServer },
    ],
  },
];

const Skills = () => {
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
      id="skills"
      className="flex flex-col items-center py-16 scroll-mt-10 dark:bg-gray-900 bg-gray-50"
    >
      <div className="max-w-[1440px] w-full mx-auto px-10">
        {/* Section Heading */}
        <h2
          className="text-5xl mb-16 font-extrabold text-gray-900 dark:text-white text-center 
        fade-in opacity-0 translate-y-6 transition-opacity transition-transform duration-700"
        >
          Skills
        </h2>
        <hr className="w-48 border-gray-300 dark:border-gray-600 mx-auto mb-12" />

        {/* Skills Rows */}
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="mb-16 flex flex-col md:flex-row">
            {/* Title Column */}
            <div className="md:w-1/4 flex justify-center md:justify-center mb-6 md:mb-0 px-6">
              <h3
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 
              fade-in opacity-0 translate-y-6 transition-opacity transition-transform duration-500"
              >
                {skillCategory.category}
              </h3>
            </div>

            {/* Content Column */}
            <div className="md:w-3/4 max-w-4xl flex justify-center md:justify-start dark:shadow-gray-70/500 bg-white  ">
              <div
                className="relative  dark:bg-gray-800  p-6 rounded-r-2xl shadow-md dark:shadow-gray-700/50 
                transform-gpu will-change-transform fade-in opacity-0 
              translate-y-6 transition-opacity transition-transform duration-500"
              >
                {/* Gradient Accent Stripe */}
                <div
                  className="absolute inset-y-0 left-0 w-1 bg-gradient-to-br from-purple-400 to-pink-600 rounded-l"
                  aria-hidden="true"
                />

                {/* Badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {skillCategory.skills.map(({ name, Icon }, idx) => (
                    <span
                      key={idx}
                      className="flex items-center space-x-2 m-1 px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-900 
                      dark:text-gray-200 border border-gray-300 dark:border-gray-700 transition-colors duration-200 "
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm md:text-base cursor-pointer dark:text-gray-100">
                        {name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-6">
        <a href="#projects">
          <FiChevronDown className="w-8 h-8 text-gray-500 dark:text-gray-400 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Skills;
