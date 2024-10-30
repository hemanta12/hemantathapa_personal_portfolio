import React from 'react';
import carrace from '../assets/car-race.png';

const projects = [
  {
    title: 'Car Race',
    description: '2d car race',
    image: carrace, // Use imported image
    liveLink: 'https://thapahemantcarracejs.netlify.app/',
    githubLink: 'https://github.com/hemanta12/car-race-js'
  },
  
 
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-100 flex flex-col items-center py-16 scroll-mt-10"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 mt-10">Personal Projects</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card rounded-xl shadow-lg overflow-hidden flex flex-col p-5"
          >
            {/* First Row: Image */}
            <div className="w-full h-48 ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Second Row: Name and Description */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 flex-1">{project.description}</p>
            </div>
            {/* Third Row: Links */}
            <div className="p-6 pt-0 flex justify-between">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6f3af7] text-white px-4 py-2 rounded hover:bg-[#5e2ed8] transition duration-200"
              >
                Live Site
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-200"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
