import About from "./components/about";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Social from "./components/social";


function App() {


  return (
    <div  className="App" >
   <Navbar/>
   <Home/>
   <About/>
   <Projects/>
   <Skills/>
   <Social/>
   
    
    </div>
  );
}

export default App;
