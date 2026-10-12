import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav.tsx";
import Footer from "./components/layout/Footer.tsx";
import Hero from "./components/sections/Hero.tsx";
import Work from "./components/sections/Work.tsx";
import AboutExperience from "./components/sections/AboutExperience.tsx";
import Skills from "./components/sections/Skills.tsx";
import Education from "./components/sections/Education.tsx";
import Contact from "./components/sections/Contact.tsx";
import CalculatorContainer from "./components/calculator/CalculatorContainer.tsx";

const MainPortfolio = (): JSX.Element => {
  return (
    <>
      <a className="home-skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="home">
        <Hero />
        <AboutExperience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/tools" element={<CalculatorContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
