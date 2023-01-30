import React from "react";
import calendlyLogo from "../assets/calendly.png";
import kickstarterLogo from "../assets/kickstarter.png";
import weatherLogo from "../assets/weather.png";
import pharmeasylogo from "../assets/pharmeasylogo.png"
import movingcar from "../assets/MovingCar.png"
import ExproBook from "../assets/ExproBook.png"
const Projects = () => {
  const project = [
    {
      id: 1,
      src: pharmeasylogo,
      git: "https://github.com/prem-sardhan/electric-school-1726",

      deployed: "https://holistic-remedies.netlify.app/",
      title: " Holistic Remedies",
      description:
        "A Frontend Pharma application where you can buy Products with seprate admin side  ",
      techstacks: ["React",

      "JS",
      
      "CSS",
      
      "Chakra UI","SendGrid","Material UI"],
    },
    {
      id: 1,
      src: ExproBook,
      git: "https://github.com/aamirkhan9420/-roomy-tree-8865",

      deployed: "https://exprobook.netlify.app/",
      title: " EXPROBOOK",
      description:
        "Exprobook is an online travel shopping platform. The website can be used to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages.",
      techstacks: ["React",

      "JS",
      
      "Chakra UI","NodeJS","Express JS","MongoDB"],
    },
    
    
    
    {
      id: 2,
      src: calendlyLogo,
      git: "https://github.com/Rohit-world/greedy-roof-9177",
      deployed: "https://startling-moonbeam-144a90.netlify.app/",
      title: "CALENDLY",
      description:
        "A Fully responsive Clone of Calendly.com Where You can Schedule Meetings",
      techstacks: ["HTML", "CSS", "JS", "API"],
    },
    {
      id: 3,

      src: kickstarterLogo,
      deployed: "https://xxrohitxx-kickstarter.netlify.app/",
      git: "https://github.com/Rohit-world/economic-nest-8248/tree/main/Kickstarter",
      title: "KICKSTARTER",
      description:
        "Kickstarter Clone where You can see the projects Created on Kickstarter",
      techstacks: ["HTML", "CSS", "JS", "React", "ChakraUI"],
    },
    {
      id: 4,
      src: movingcar,
      git: "https://github.com/Rohit-world/MovingCar",

      deployed: "https://car-verce-rohit.vercel.app/",
      title: "MOVING CAR",
      description:
        "A mini project where I tried some animations of CSS and made a moving car ",
      techstacks: ["HTML", "CSS", "JS"],
    },
    {
      id: 5,
      src: weatherLogo,
      git: "https://github.com/Rohit-world/Weather-App",

      deployed: "https://cool-yeot-d2f099.netlify.app/",
      title: "WEATHER APP",
      description:
        "A Responsive Weather app That shows current weather with forcaste of 5 days and the map of the particular city ",
      techstacks: ["HTML", "CSS", "JS", "API"],
    },
    
  ];

  return (
    <div
      name="projects"
      className=" text-white pt-24 backdrop-blur-md"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-transparent bg-gradient-to-b from-orange-500 to-yellow-300 bg-clip-text">
            Projects
          </p>
          <p className="py-6">Check Out some of my work right here</p>
        </div>
        <div className="grid  gap-10 sm:px-0">
          {project.map(
            ({ id, src, git, deployed, title, description, techstacks }) => (
              <div key={id} className="relative">

                <div className="absolute inset-0 bg-yellow-600 blur-sm"></div>

                <div
                
                className=" relative shadow-md bg-black shadow-slate-100 rounded-lg duration-200 hover:scale-105"
              >
                <div className="grid sm:flex justify-evenly gap-5">
                  <div >
                    {" "}
                    <img
                      width="100%"
                      className="rounded-md " 
                      src={src}
                      alt=""
                    />
                  </div>

                  <div className=" grid pl-10 pr-5 pt-5 gap-5 items-center text-center">
                    <p className=" sm:text-4xl font-extrabold ">{title}</p>
                    <p className="text-sm italic  md:text-xl">{description}</p>
                    <div className="grid grid-cols-2 gap-5 ">
                      {techstacks.map((ele) => (
                        <button
                          key={ele}
                          className=" bg-white  shadow-md shadow-slate-500 text-black font-semibold hover:scale-105 py-1 px-3 border border-white  rounded md:text-lg max-w-lg"
                        >
                          {ele}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center font-bold">
                  <a target="_blank" href={deployed}>
                    {" "}
                    <button className=" text-2xl w-1/2 px-6 py-3 m-4 duration-200 
                    hover:scale-105 ">
                      Live{" "}
                    </button>
                  </a>
                  <a href={git} target="_blank">
                    <button className="text-2xl w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>






              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
