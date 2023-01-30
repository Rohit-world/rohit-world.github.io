import React from 'react';
import profilePic from "../assets/profilePic2.png"
import{MdKeyboardArrowRight}from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import ProfilePic from "../assets/pic.png"



const Home = () => {
    return (
        <div name="home" className='h-screen w-full  text-white backdrop-blur-md '>
           <div className='max-w-screen-lg mx-auto flex  items-center  h-full px-4 md:flex-row justify-center'>
            <div className='flex flex-col justify-center h-full '>
                <h1 className='text-3xl md:text-3xl lg:text-5xl italic font-bold md:whitespace-nowrap text-white'>
                Full Stack <span className='text-transparent bg-gradient-to-b from-orange-500 to-yellow-300 bg-clip-text'>Developer</span>
                </h1>
                <p className='text-sm py-4 max-w-md md:text-2xl italic'>
                Hi, I am Rohit Kumar an aspiring full-stack developer with a specialization in MERN stack with problem solving skills
                </p>

                <div>
                  
                   
                </div>

            </div>
            <div >
              <  img src={ProfilePic} alt="profile-pic" className='shadow-yellow-300 rounded-full mx-auto w-2/3 md:w-2/4 shadow-lg ' /></div>
            

            <div  className=''>
           <ul className="flex-col space-y-10">
        {links.map((link) => (
          <li className='hover:opacity-90 duration-300 hover'  key={link.id} 
           
          >
            <a 
              href={link.href}

              target='_blank' 
              rel="nonreferrer"          >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
           </div>


            
          
          
           </div>
          
           {/* <div className='flex text-center '>
            <h1 className='mx-auto'>Rohit</h1>
           </div> */}

       
        </div>
    );
}

export default Home;









const links = [
    {
      id: 1,
      child: (
        <>
        <FaLinkedin className='hover:scale-110 hover:text-blue-500' size={40} />
        </>
      ),
      href: "https://www.linkedin.com/in/iamrohit90/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
         <FaGithub className='hover:scale-110 hover:text-orange-600' size={40} />
        </>
      ),
      href: "https://github.com/Rohit-world",
    },
    {
      id: 3,
      child: (
        <>
         
          <HiOutlineMail className='hover:scale-110 hover:text-green-500' size={40} />
        </>
      ),
      href: "mailto:rohitrs319791@gmail.com",
      style: "rounded-br-md",
    },
  ];