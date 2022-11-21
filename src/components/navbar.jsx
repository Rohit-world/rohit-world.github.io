import React from "react";
import{Link} from "react-scroll"

import { FaBars, FaTimes } from "react-icons/fa";
import Logo1 from "../assets/Logo1.png"

const Navbar = () => {
  const [nav, setnav] = React.useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];
  
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black z-10 fixed px-4">
      <div>
       <img className="w-20 rounded-xl" src={Logo1} alt="" />
      </div>

      <ul className="hidden md:flex">
        {links.map(({link,id}) => (
          <li
            key={id}
            className="px-4 cursor-pointer  capitalize font-bold  text-white hover:scale-105 duration-200"
          >
           <Link to={link} smooth duration={500}> {link}  </Link>
          </li>
        ))}
      </ul>

      <div onClick={()=>setnav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav?<FaTimes size={30}/>:<FaBars size={30} />}
      </div>
     {nav &&  <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
      {links.map(({link,id}) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
             <Link onClick={()=>setnav(!nav)} to={link} smooth duration={500}> {link}  </Link>
          </li>
        ))}

      </ul>}

    </div>
  );
};

export default Navbar;
