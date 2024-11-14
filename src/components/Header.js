import React, { useState, useEffect } from 'react';
import '../App.css';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {      
      setIsScrolled(window.scrollY > 0);
     
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']; 
    let currentSection = '';

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight; 

        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 50) {
          currentSection = id; 
        }
      }
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  };
    
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section) => {
    setActiveSection(section); 
    setIsMenuOpen(false); 
  };


  return (
    <header className={`fixed top-0 w-full z-50 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
       <nav className="flex items-center px-6 py-4 p-4 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-gray-900 tracking-wide mr-auto" style={{ fontFamily: 'serif' }}>
              HT
            </div>

         <ul className="hidden md:flex space-x-8 ml-auto">
           {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item.toLowerCase()}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className={`nav text-lg px-4 py-2 ${activeSection === item.toLowerCase() ? 'active' : ''} text-gray-900 hover:text-purple-500 transition-colors duration-200`}
                onClick={() => handleClick(item.toLowerCase())} // Update active section on click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md z-40">
            <ul className="flex flex-col items-center space-y-4 p-6">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item.toLowerCase()}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className={`nav text-lg ${activeSection === item.toLowerCase() ? 'active' : ''} text-gray-900 hover:text-purple-500 transition-colors duration-200`}
                    onClick={() => handleClick(item.toLowerCase())} // Update active section on click
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      
      </nav>
     </header>
  );
};

export default Header;