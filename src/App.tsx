import Nav from "./components/layout/Nav.tsx";
import Footer from "./components/layout/Footer.tsx";
import Hero from "./components/sections/Hero.tsx";
import Work from "./components/sections/Work.tsx";
import AboutExperience from "./components/sections/AboutExperience.tsx";
import Skills from "./components/sections/Skills.tsx";
import Education from "./components/sections/Education.tsx";
import Contact from "./components/sections/Contact.tsx";

const App = (): JSX.Element => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <AboutExperience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
