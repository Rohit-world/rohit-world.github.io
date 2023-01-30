import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import chakraUI from "../assets/chakraUI.png";
import expressJS from "../assets/expressJS.png";
import mongodb from "../assets/mongodb.png";
import mongoose from "../assets/mongoose.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import npm from "../assets/npm.png";
import virtualStudio from "../assets/virtualStudio.png";
import git from "../assets/git.png"
import tailwind from "../assets/tailwind.png"


const Skills = () => {

const mySkill=[{
    id:1,
    src:html,
    title:"HTML",
    style:"shadow-orange-500"
},{
    id:2,
    src:css,
    title:"CSS",
    style:"shadow-blue-500"
},{
    id:3,
    src:javascript,
    title:"JavaScript",
    style:"shadow-yellow-500"
},{
    id:4,
    src:react,
    title:"ReactJS",
    style:"shadow-blue-700"
    
},{
    id:5,
    src:redux,
    title:"Redux",
    style:"shadow-purple-500"
},
{
  id:6,
  src:git,
  title:"Git",
  style:"shadow-orange-600"
},{
    id:7,
    src:chakraUI,
    title:"Chakra UI",
    style:"shadow-teal-200"
}
,{
  id:8,
  src:npm,
  title:"NPM",
  style:"shadow-red-500"
},{
  id:9,
  src:node,
  title:"Node JS",
  style:"shadow-green-500"
},

{
id:11,
src:mongodb,
title:"Mongo DB"

},

  {
    id:13,
    src:mongoose,
    title:"Mongoose",
    
    },

{
  id:10,
  src:virtualStudio,
  title:"Visual Studio",
  style:"shadow-blue-500"
}

]

  return (
    <div
      name="skills"
      className=" w-full  h-auto backdrop-blur-md "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold  text-transparent bg-gradient-to-b from-orange-500 to-yellow-300 bg-clip-text p-2 ">Skills and Tools</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {mySkill.map(({id,src,title,style})=>(
              <div key={id} className={`hover:scale-125 scale-105 duration-500 py-2 rounded-lg  bg-white text-black `} >
              <img src={src} alt={title} className="w-20  mx-auto"/>
            <p className= {` italic  mt-4  font-bold`}  >{title}</p>
              </div>
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default Skills;
