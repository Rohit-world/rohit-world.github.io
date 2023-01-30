import About from "./components/about";
import Contact from "./components/contact";
import Github from "./components/github";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Social from "./components/social";

function App() {
  return (
    <div
      
      className="  bg-[url('https://i.ibb.co/vLDk1WV/star.gif')] bg-no-repeat bg-cover  bg-black "
    >
      <Navbar />
      <Home  />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
      {/* <Social/> */}
    </div>
  );
}

export default App;
