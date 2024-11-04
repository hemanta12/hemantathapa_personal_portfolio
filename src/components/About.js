import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center bg-white pt-16 scroll-mt-10">
      <h2 className="text-3xl font-bold mb-8 mt-10">About Me</h2>

      <p className="text-lg text-center max-w-2xl mb-12 px-4">
        I am a passionate software developer with a strong background in backend development, API design, and web applications. 
        With experience across various tech stacks, I aim to build scalable, efficient, and user-friendly solutions.
      </p>


      {/* Cards Container */}
      <div className="w-full flex flex-col p-2 md:flex-row justify-center items-stretch max-w-5xl">
        {/* Card 1 */}
        <div className="about-card flex flex-col items-center p-8 m-4 rounded-lg shadow-md flex-1">
          {/* Image Placeholder */}
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
          {/* Title */}
          <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
          {/* Details */}
          <p className="text-center text-gray-700">
            I create intuitive and responsive user interfaces using modern frontend technologies.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className=" about-card flex flex-col items-center bg-gray-100 p-8 m-4 rounded-lg shadow-md flex-1">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
          <p className="text-center text-gray-700">
            Specializing in server-side development, database management, and application logic.
          </p>
        </div>
        
        {/* Card 3 */}
        <div className="about-card flex flex-col items-center bg-gray-100 p-8 m-4 rounded-lg shadow-md flex-1">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">API Development</h3>
          <p className="text-center text-gray-700">
            Experienced in designing and implementing robust APIs for scalable applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
