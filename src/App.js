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
    <div  className="App gap-x-10" >
   <Navbar/>
   <Home/>
   <About/>
   <Projects/>
   <Skills/>
   <Github/>
   <Contact/>
   <Social/>
   
    
    </div>
  );
}

export default App;
