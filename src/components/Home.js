import React from 'react';
import '../App.css';
import profilePic from '../assets/profile.JPG'; // Use your image here
import resume from  '../assets/Hemanta Thapa - Full-Stack Software Developer - Resume.pdf';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-col lg:flex-row items-center justify-between px-8 bg-gray-50">
      
      {/* Background Circles */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>

      {/* Left: Name and Job Title */}
      <div className="flex flex-col items-start w-full mb-6 lg:w-1/3  lg:mb-0">
        <p className="text-2xl sm:text-2xl mt-5 md:text-5xl lg:text-6xl text-gray-600 lg:mt-12 break-words w-full text-center ">
            Full-Stack Developer
        </p>
      </div>



      {/* Center: Profile Image */}
      <div className="flex items-center justify-center mb-5 lg:mb-0 ">
        <img 
        src={profilePic} 
        alt="Hemanta Thapa" 
        className="w-full max-w-xs sm:max-w-xs md:max-w-xs lg:max-w-lg xl:max-w-xl object-cover aspect-square rounded-full shadow-lg border-4 border-gray-200" />
      </div>

      {/* Right: Contact Info */}
      <div className="flex flex-col items-start md:items-center lg:items-end space-y-3 w-full lg:w-auto mb-10 lg:mb-20 mr-5">
        {/* GitHub */}
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2" >
          <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"className="flex items-center space-x-2" >
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          <span className="text-gray-800">contact.thapahemanta@gmail.com</span>
        </div>

        {/* Resume Download */}
        <a href={resume} download className="resume  text-white py-1 px-3 sm:px-4 rounded-lg shadow-md text-xs sm:text-sm md:text-base transition">Download Resume</a>
      </div>
    </section>

  );
};

export default Home;
