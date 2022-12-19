import React from "react";
import{Link} from "react-scroll"

import { FaBars, FaTimes,FaHome } from "react-icons/fa";
import Logo1 from "../assets/Logo1.png"

const Navbar = () => {
  const [nav, setnav] = React.useState(false);
  const links = [
    { id: 1, link: "home",name:"Home",icon:<FaHome/> },
    { id: 2, link: "about",name:"About"  },
    { id: 3, link: "projects" ,name:"Project" },
    { id: 4, link: "skills",name:"Skills" },
    { id: 5, link: "contact",name:"Contact" },

  ];
  
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black z-10 fixed px-4 shadow-lg shadow-slate-500">
      <div>
       <img className="w-20 rounded-xl" src={Logo1} alt="" />
       
      </div>

      <ul className="hidden md:flex">
        <li className="px-10 cursor-pointer  capitalize font-bold p-1 hover:scale-125 duration-200  subpixel-antialiased   rounded-md outline  "><a 
target="_blank"        href="https://drive.google.com/file/d/1Q67N5ciL7noBTZAwTPRWFGc7JrSvJdIv/view?usp=share_link">Resume</a></li>
        {links.map(({link,id,name}) => (
          <li
            key={id}
            className="px-10 cursor-pointer  capitalize font-bold   hover:scale-125 duration-200  subpixel-antialiased flex justify-center gap-6 text-xl " 
          >
          <Link to={link} smooth duration={500}> {name}  </Link>
          </li>
        ))}
      </ul>



      

      <div onClick={()=>setnav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav?<FaTimes size={30}/>:<FaBars size={30} />}
      </div>
     {nav &&  <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
     <li className="px-10 cursor-pointer text-4xl  capitalize font-bold p-1 hover:scale-125 duration-200  subpixel-antialiased   rounded-md outline  "><a 
target="_blank"        href="https://drive.google.com/file/d/1Q67N5ciL7noBTZAwTPRWFGc7JrSvJdIv/view?usp=share_link">Resume</a></li>
      {links.map(({link,id}) => (
          <li
            key={id}
            className="  px-4 cursor-pointer capitalize py-6 text-4xl"
          >
           
             <Link onClick={()=>setnav(!nav)} to={link} smooth duration={500}> {link}  </Link>
          </li>
        ))}

      </ul>}

    </div>
  );
};

export default Navbar;
