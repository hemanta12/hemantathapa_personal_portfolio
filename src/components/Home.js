import React, { useState } from "react";
import "../App.css";
import {
  FiGithub,
  FiLinkedin,
  FiCopy,
  FiCheckCircle,
  FiDownload,
} from "react-icons/fi";
import profilePic from "../assets/profile.JPG";
import resume from "../assets/Hemanta_thapa_SoftwareEngineer_Resume.pdf";

const Home = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("thapahemanta.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-col lg:flex-row items-center justify-between px-8 bg-gray-50"
    >
      {/* Resume Button */}

      {/* Left: Name and Job Title */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 space-y-6 px-4 py-8 lg:py-12 lg:pr-8 text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight w-full">
          Hemanta Thapa
        </h1>

        <div className="space-y-4">
          <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-6 -mt-2">
            Full-Stack Developer
          </p>
          <p className="text-lg mt-6 md:text-xl text-gray-600 leading-relaxed">
            Building Modern, Scalable Web Applications
          </p>
        </div>

        {/* Email Section */}
        <div className="flex items-center group bg-blue-50/50 p-4 rounded-lg border border-blue-200 transition-all hover:border-blue-300">
          {/* <FiMail className="w-6 h-6 text-blue-600 mr-2 shrink-0 email-ping" /> */}
          <div className="flex items-center">
            <span className="text-lg font-medium text-blue-800">
              thapahemanta.dev@gmail.com
            </span>
            <button
              onClick={copyEmail}
              className="ml-3 opacity-100 transition-opacity hover:text-blue-600"
            >
              {copied ? (
                <FiCheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <FiCopy className="w-5 h-5 text-blue-500 hover:text-blue-600" />
              )}
            </button>
          </div>
        </div>

        <a
          href={resume}
          download
          className="mt-4 lg:mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 mx-auto lg:mx-0"
        >
          <FiDownload className="inline mr-2 -mt-1" />
          Download Resume
        </a>
      </div>

      {/* Center: Profile Image */}
      <div className="relative flex items-center justify-center mb-5 lg:mb-0 ">
        <img
          src={profilePic}
          alt="Hemanta Thapa"
          className="w-full max-w-xs sm:max-w-xs md:max-w-xs lg:max-w-md xl:max-w-md object-cover aspect-square rounded-full shadow-lg border-4 border-gray-200 transition-transform transform hover:scale-105"
        />
        <span className="absolute bottom-2 right-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md animate-bounce">
          Let's Connect!
        </span>
      </div>

      {/* Right Contact Info */}
      <div className="flex flex-col items-center lg:items-end space-y-6 w-full lg:w-auto mb-10 lg:mb-20 text-center lg:text-right px-4">
        <div className="flex flex-col items-center lg:items-end space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6 lg:space-x-0 lg:flex-col lg:space-y-6 justify-center lg:justify-start ">
            <a
              href="https://github.com/hemanta12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-gray-200 transition-colors duration-200 group relative p-3 rounded-full hover:bg-blue-100 transition-colors duration-200 group relative"
              aria-label="GitHub profile"
            >
              <FiGithub className="w-8 h-8 text-gray-700" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                GitHub
                <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></span>
              </span>
            </a>

            <a
              href="https://linkedin.com/in/thapahemanta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-gray-200 transition-colors duration-200 group relative p-3 rounded-full hover:bg-blue-100 transition-colors duration-200 group relative"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin className="w-8 h-8 text-gray-700" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                LinkedIn
                <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
