import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <div className="bg-black text-white font-mono">
      <Navbar />
      <div className="px-2 md:px-6 pt-16 md:pt-0">
        <section id="home" className="pt-16 md:pt-20">
          <Home />
        </section>
        <section id="about" className="pt-16 md:pt-30">
          <About />
        </section>
        <section id="skills" className="pt-16 md:pt-20">
          <Skills />
        </section>
        <section id="projects" className="pt-16 md:pt-20">
          <Projects />
        </section>
        <section id="experience" className="pt-16 md:pt-20">
          <Experience />
        </section>
        <section id="resume" className="pt-16 md:p-20">
          <Resume />
        </section>
        <section id="education" className="pt-16 md:pt-20">
          <Education />
        </section>
        <section id="contact" className="pt-16 md:pt-20">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
