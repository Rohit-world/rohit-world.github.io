import React from 'react';
import calendlyLogo from "../assets/calendly.png"
import kickstarterLogo from "../assets/kickstarter.png"
import weatherLogo from "../assets/weather.png"
const Projects = () => {

    const project= [
{
    id:1,
    src:calendlyLogo,
    git:"https://github.com/xxRohitxx/greedy-roof-9177",
    deployed:"https://startling-moonbeam-144a90.netlify.app/"
},
{
    id:2,
    src:kickstarterLogo,
    deployed:"https://xxrohitxx-kickstarter.netlify.app/",
    git:"https://github.com/xxRohitxx/economic-nest-8248/tree/main/Kickstarter",

},
{
    id:3,
    src:weatherLogo,
    git: "https://github.com/xxRohitxx/Weather-App",
   
    deployed:"https://cool-yeot-d2f099.netlify.app/"

},
    ]
    return (
        <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check Out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {project.map(({id,src,git,deployed})=>(
                
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img  className='rounded-md duration-200 hover:scale-105' src={src } alt="" />
                    <div className='flex items-center justify-center '>
                      <a target="_blank" href={deployed}>  <button   className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo </button></a>
                    <a href={git} target="_blank"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>Code</button></a>
                    </div>
                </div>
                
           
            ))}
             </div>

            


        </div>

        </div>
    );
}

export default Projects;
