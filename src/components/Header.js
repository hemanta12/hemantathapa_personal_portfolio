import React, { useState, useEffect } from 'react';
import '../App.css';
import projects from '../assets/projects.png'
import work from '../assets/briefcase.png'
import skills from '../assets/solution.png'
import about from '../assets/about.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {      
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    

    // Scroll spy logic
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']; // IDs of sections
    let currentSection = '';

    sections.forEach(id => {
      const section = document.getElementById(id); // Get the section by ID
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight; 

        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 50) { // Adjust the threshold as necessary
          currentSection = id; // Set the current section
        }
      }
    });


    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the current section's nav link
    if (currentSection) {
      const activeLink = document.querySelector(`a.nav[href="#${currentSection}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
      }
      };
    
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);






  return (
    <header className={`fixed top-0 w-full z-50 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <nav className="flex justify-between items-center p-4 md:p-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 ml-1">Hemanta Thapa</h1>

        {/* Navigation for small screens (icons) and large screens (text) */}
        <ul className="flex space-x-4 mr-5">
          <li>
            <a href="#home" className="md:hidden">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" className="w-6 h-6" />
            </a>
            <a href="#home" className="hidden active nav p-1 md:inline-block ">Home</a>
          </li>
          <li>
            <a href="#about" className="md:hidden">
              <img src={about} alt="About" className="w-6 h-6" />
            </a>
            <a href="#about" className="hidden nav p-1 md:inline-block">About</a>
          </li>
          
          <li>
            <a href="#experience" className="md:hidden">
              <img src={work} alt="Experience" className="w-6 h-6" />
            </a>
            <a href="#experience" className="hidden nav p-1 md:inline-block">Experience</a>
          </li>
          <li>
            <a href="#projects" className="md:hidden">

              <img src={projects} alt="Projects" className="w-6 h-6" />
            </a>
            <a href="#projects" className="hidden nav p-1 md:inline-block ">Projects</a>
          </li>
          <li>
            <a href="#skills" className="md:hidden">
              <img src={skills} alt="Skills" className="w-6 h-6" />
            </a>
            <a href="#skills" className="hidden nav p-1 md:inline-block">Skills</a>
          </li>
          <li>
            <a href="#contact" className="md:hidden">
              <img src={skills} alt="Skills" className="w-6 h-6" />
            </a>
            <a href="#contact" className="hidden nav p-1 md:inline-block">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
