import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      <Experience />
      <Projects/>
      <Skills/>
      <Contact/>
      {/* We will add other sections like About, Projects, etc. later */}
    </div>
  );
}

export default App;
