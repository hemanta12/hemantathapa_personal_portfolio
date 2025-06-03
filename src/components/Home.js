import React, { useState } from "react";
import "../App.css";
import {
  FiGithub,
  FiLinkedin,
  FiCopy,
  FiCheckCircle,
  FiDownload,
  FiEye,
  FiChevronDown,
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
      className="max-w-[1440px] w-full m-auto relative min-h-screen flex flex-col md:flex-row md:space-x-12  items-center
                 justify-between px-10 py-16
                 bg-white dark:bg-gray-900 dark:text-gray-100"
    >
      {/* ─── LEFT COLUMN ────────────────────────────────────────────────────────── */}
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
        {/* Name + code icon */}
        <h1 className="text-6xl md:text-6xl font-extrabold text-gray-900 dark:text-white flex items-center flex-nowrap mt-8 md:mt-0 lg:mt-0 xl:mt-0">
          Hemanta Thapa
          <span className="ml-3 text-3xl text-gray-300 dark:text-gray-600 select-none">
            &lt;/&gt;
          </span>
        </h1>
        {/* Gradient subtitle */}
        <p
          className="text-3xl md:text-3xl font-extrabold mb-8
                   bg-clip-text text-transparent
                   bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Full-Stack Developer Pivoting into AI
        </p>
        {/* Description */}
        <p className="text-lg text-gray-700 max-w-lg dark:text-gray-300  mb-12">
          Bridging the gap between robust web solutions and intelligent systems.
          Exploring the frontiers of AI to build smarter, more impactful
          applications.
        </p>
        {/* Email + copy */}
        <div
          className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 w-full sm:w-80 md:w-96 rounded-lg border
               border-gray-200 dark:border-gray-700 transition-colors duration-200 mb-12"
        >
          <span className="text-lg text-gray-800 dark:text-gray-200">
            thapahemanta.dev@gmail.com
          </span>
          <button
            onClick={copyEmail}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {copied ? (
              <FiCheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <FiCopy className="w-5 h-5 text-blue-500" />
            )}
          </button>
        </div>
        {/* Download + Projects  */}
        <div className="w-full flex items-center space-x-10 mt-8 mb-12">
          <a
            href={resume}
            download
            className="flex items-center text-base md:text-lg text-gray-900 dark:text-gray-100
               hover:underline hover:text-purple-500 transition-colors duration-200"
          >
            <FiDownload className="mr-2" />
            Download Resume
          </a>
          <a
            href="#projects"
            className="flex items-center text-base md:text-lg text-gray-900 dark:text-gray-100
              hover:underline hover:text-purple-500 transition-colors duration-200"
          >
            <FiEye className="mr-2" />
            See My Projects
          </a>
        </div>
        {/* Social icons under CTAs */}
        <div className="flex space-x-6 mt-8">
          <a
            href="https://github.com/hemanta12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="w-10 h-10" />
          </a>
          <a
            href="https://linkedin.com/in/thapahemanta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-10 h-10" />
          </a>
        </div>
      </div>

      {/* ─── RIGHT COLUMN ───────────────────────────────────────────────────────── */}
      <div className="w-full md:w-1/2 relative flex justify-center mt-12 md:mt-0 ml-auto">
        {/* subtle tech‐themed halo */}
        <div
          className="absolute -inset-6 bg-gradient-to-br
                     from-purple-100 via-pink-100 to-yellow-100
                     opacity-40 blur-3xl rounded-full"
        ></div>
        <img
          src={profilePic}
          alt="Hemanta Thapa"
          className="relative w-80 h-80  rounded-full border-4 border-white
                     shadow-xl object-cover"
        />
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about">
          <FiChevronDown className="w-8 h-8 text-gray-500 dark:text-gray-400 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Home;
