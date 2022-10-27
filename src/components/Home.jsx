import React from 'react';
import profilePic from "../assets/profilePic2.png"
import{MdKeyboardArrowRight}from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";



const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
           <div className='max-w-screen-lg mx-auto flex  items-center  h-full px-4 md:flex-row justify-center'>
            <div className='flex flex-col justify-center h-full '>
                <h1 className='text-3xl md:text-3xl lg:text-5xl font-bold md:whitespace-nowrap'>
                Full stack  developer
                </h1>
                <p className='text-sm text-gray-500 py-4 max-w-md md:text-2xl '>
                Aspiring full-stack developer with a specialization in MERN stack with problem solving skills
                </p>

                <div>
                   <a href="/Rohit-Kumar-Resume.pdf" target="_blank" >
                   <button className='text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 '>
                  
                  Resume
                  <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight className='ml-1' size={25}/></span>
                 </button>
                   </a>
                   
                </div>

            </div>
            <div ><  img src={profilePic} alt="profile-pic" className='rounded-full mx-auto w-2/3 md:w-2/4 ' /></div>
            

            <div  className='lg:hidden'>
           <ul className="flex-col space-y-10">
        {links.map((link) => (
          <li className='hover:opacity-40 duration-300 hover'  key={link.id} 
           
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
          
           

       
        </div>
    );
}

export default Home;









const links = [
    {
      id: 1,
      child: (
        <>
         <FaLinkedin className='hover:scale-110' size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/iamrohit90/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
         <FaGithub className='hover:scale-110' size={30} />
        </>
      ),
      href: "https://github.com/xxRohitxx",
    },
    {
      id: 3,
      child: (
        <>
         
          <HiOutlineMail className='hover:scale-110' size={30} />
        </>
      ),
      href: "mailto:rohitrs319791@gmail.com",
      style: "rounded-br-md",
    },
  ];