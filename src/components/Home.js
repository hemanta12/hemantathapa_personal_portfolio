import React from 'react';
import '../App.css';
import profilePic from '../assets/profile.JPG'; 
import resume from  '../assets/Hemanta-Thapa-Resume.pdf';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-col lg:flex-row items-center justify-between px-8 bg-gray-50">
      
      <div className="absolute w-64 h-64 bg-blue-300 opacity-20 rounded-full top-10 -left-20 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-purple-300 opacity-20 rounded-full top-30 left-1/4 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-blue-300 opacity-20 rounded-full -bottom-10 -right-5 animate-pulse"></div>

     {/* Left: Name and Job Title */}
      <div className="flex flex-col items-start lg:items-start w-full lg:w-1/3  lg:mb-0 text-center lg:text-left ">
        <h1 className="text-5xl font-extrabold text-gray-900 mt-5 lg:mt-12">
             Hemanta Thapa
         </h1>
              <p className="text-xl md:text-2xl mt-4 font-medium text-gray-700 lg:mt-4">
                Full-Stack Developer
              </p>
              <p className="text-lg font-medium text-gray-600 mt-2">
                Building Modern, Scalable Web Applications
              </p>

       </div>

       {/* Center: Profile Image */}
       <div className="relative flex items-center justify-center mb-5 lg:mb-0 ">
         <img 
        src={profilePic} 
        alt="Hemanta Thapa" 
        className="w-full max-w-xs sm:max-w-xs md:max-w-xs lg:max-w-lg xl:max-w-xl object-cover aspect-square rounded-full shadow-lg border-4 border-gray-200 transition-transform transform hover:scale-105"
         />
         <span className="absolute bottom-2 right-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md animate-bounce">
          Let's Connect!
        </span>
      </div>

      {/* Right: Contact Info */}
      <div className="flex flex-col items-start lg:items-end space-y-4 w-full lg:w-auto mb-10 lg:mb-20 text-center lg:text-right">
        {/* GitHub */}
         <a href="https://github.com/hemanta12" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 transition hover:text-gray-800" >
         <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-6 h-6 transition-transform transform hover:scale-110" />
        </a>

       {/* LinkedIn */}
       <a href="https://www.linkedin.com/in/hemantathapa" target="_blank" rel="noopener noreferrer"className="flex items-center space-x-2 transition hover:text-gray-800" >
         <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6 transition-transform transform hover:scale-110" />
         </a>

         {/* Email */}
         <div className="flex items-center space-x-2">
           <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-6 h-6 transition-transform transform hover:scale-110" />
           <span className="text-gray-800">contact.thapahemanta@gmail.com</span>
         </div>

         {/* Resume Download */}
         <a 
              href={resume} 
              download 
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full shadow-md font-semibold transition duration-300 transform hover:scale-105"
              >Download Resume</a>
       </div>
     </section>

  );
};

export default Home;
