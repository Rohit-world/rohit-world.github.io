import React from 'react';
import profilePic from "../assets/profilePic2.png"
import{MdKeyboardArrowRight}from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";



const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-black text-white'>
           <div className='max-w-screen-lg mx-auto flex  items-center  h-full px-4 md:flex-row justify-center'>
            <div className='flex flex-col justify-center h-full '>
                <h1 className='text-3xl md:text-3xl lg:text-5xl italic font-bold md:whitespace-nowrap text-red-600'>
                Full Stack Developer
                </h1>
                <p className='text-sm py-4 max-w-md md:text-2xl italic'>
                Hi, I am Rohit Kumar an aspiring full-stack developer with a specialization in MERN stack with problem solving skills
                </p>

                <div>
                  
                   
                </div>

            </div>
            <div ><  img src={profilePic} alt="profile-pic" className='rounded-full mx-auto w-2/3 md:w-2/4 shadow-lg shadow-red-500' /></div>
            

            <div  className=''>
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
         <FaLinkedin className='hover:scale-110' size={40} />
        </>
      ),
      href: "https://www.linkedin.com/in/iamrohit90/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
         <FaGithub className='hover:scale-110' size={40} />
        </>
      ),
      href: "https://github.com/Rohit-world",
    },
    {
      id: 3,
      child: (
        <>
         
          <HiOutlineMail className='hover:scale-110' size={40} />
        </>
      ),
      href: "mailto:rohitrs319791@gmail.com",
      style: "rounded-br-md",
    },
  ];