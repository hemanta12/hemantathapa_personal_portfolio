/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-multi-str */
import React from "react";
import frontendVector from "../assets/frontend-vector.jpg";
import backendVector from "../assets/backend-vector.jpg";
import apiVector from "../assets/api-vector.jpg";

const About = () => {
  const aboutMe =
    "Full-Stack Developer with 2+ years of experience building scalable web applications in EdTech and staffing industries. \
    Skilled in React, Node.js, and AWS cloud solutions, I specialize in automating workflows and delivering user-centric systems \
    that have increased engagement by 15% and reduced manual processes by 40%. Advocate for Agile methodologies and test-driven development, \
    I thrive in cross-functional teams to create robust digital experiences. When not coding, you'll find me exploring the outdoors \
    or contributing to open-source projects. Let's connect and discuss how I can help bring your ideas to life!";

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center bg-white pt-16 scroll-mt-10"
    >
      <h2 className="text-3xl font-bold mb-8 mt-10">About Me</h2>

      <p className="text-lg text-center max-w-3xl mb-12 px-4">{aboutMe}</p>

      {/* Cards Container */}
      <div className="w-full flex flex-col p-2 md:flex-row justify-center items-stretch max-w-7xl">
        <div className="about-card flex flex-col items-center p-8 m-4 rounded-lg shadow-md flex-1">
          <img
            src={frontendVector}
            className="w-28 h-28 rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Frontend Engineering</h3>
          <p className="text-center text-gray-700">
            "Built responsive interfaces with React/Redux and contributed to A/B
            testing initiatives that improved user retention. Experienced in
            writing testable code with Jest and collaborating on UI/UX
            improvements."
          </p>
        </div>

        {/* Card 2 */}
        <div className=" about-card flex flex-col items-center bg-gray-100 p-8 m-4 rounded-lg shadow-md flex-1">
          <img
            src={backendVector}
            className="w-28 h-28 rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
          <p className="text-center text-gray-700">
            "Developed REST APIs with Node.js/Spring Boot and assisted in
            optimizing database queries. Worked on implementing secure
            authentication systems and improving backend performance."
          </p>
        </div>

        {/* Card 3 */}
        <div className="about-card flex flex-col items-center bg-gray-100 p-8 m-4 rounded-lg shadow-md flex-1">
          <img
            src={apiVector}
            className="w-28 h-28 rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">API Development</h3>
          <p className="text-center text-gray-700">
            "Gained exposure to CI/CD pipelines using Jenkins and Docker,
            supporting deployments on AWS. Collaborated on maintaining reliable
            cloud infrastructure for user-facing applications."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
