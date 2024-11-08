import React from 'react';
import frontendVector from '../assets/frontend-vector.jpg';
import backendVector from '../assets/backend-vector.jpg';
import apiVector from '../assets/api-vector.jpg';


const About = () => {

  const aboutMe = 
      "I'm a full-stack software developer passionate about building impactful, efficient solutions. \
      With expertise in React, Spring Boot, and cloud tech, I love transforming ideas into robust digital \
      experiences that solve real-world challenges. I’m committed to continuous learning and enjoy diving \
      into new tools and frameworks that elevate my work. Outside of development, you’ll find me playing \
      soccer or exploring the outdoors. Check out my projects, and feel free to connect if you’d like to chat!"

  return (
    <section id="about" className="min-h-screen flex flex-col items-center bg-white pt-16 scroll-mt-10">
      <h2 className="text-3xl font-bold mb-8 mt-10">About Me</h2>

      <p className="text-lg text-center max-w-3xl mb-12 px-4">
        {aboutMe}
      </p>


      {/* Cards Container */}
      <div className="w-full flex flex-col p-2 md:flex-row justify-center items-stretch max-w-7xl">
        <div className="about-card flex flex-col items-center p-8 m-4 rounded-lg shadow-md flex-1">
          <img 
            src = {frontendVector}
            className="w-28 h-28 rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
          <p className="text-center text-gray-700">
          Focused on building efficient, responsive, and engaging web interfaces.
          Experienced with React, JavaScript, and modern UI/UX principles to deliver 
          intuitive user experiences across devices.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className=" about-card flex flex-col items-center bg-gray-100 p-8 m-4 rounded-lg shadow-md flex-1">
        <img 
            src = {backendVector}
            className="w-28 h-28 rounded-full mb-4 object-cover"
            />
          <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
          <p className="text-center text-gray-700">
          Building the core infrastructure of applications with a focus on data management, performance, and 
          security. Skilled in developing scalable backend architectures that support seamless user experiences.
          </p>
        </div>
        
        {/* Card 3 */}
        <div className="about-card flex flex-col items-center bg-gray-100 p-8 m-4 rounded-lg shadow-md flex-1">
        <img 
            src = {apiVector}
            className="w-28 h-28 rounded-full mb-4 object-cover"
            />
          <h3 className="text-xl font-semibold mb-2">API Development</h3>
          <p className="text-center text-gray-700">
          Building robust APIs for seamless data flow and system integration. Specializing in secure, 
          scalable endpoints and optimizing performance for reliable communication between services and
           applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
