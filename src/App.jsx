import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocilaLinks from "./components/SocilaLinks";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocilaLinks />
    </>
  );
}

export default App;
