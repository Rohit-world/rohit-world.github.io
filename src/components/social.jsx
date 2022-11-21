import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BeFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/iamrohit90/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/xxRohitxx",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:rohitrs319791@gmail.com",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={"flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + link.style}
          >
            <a
              href={link.href}
              className={"flex justify-between items-center w-full text-white" }
              target='_blank' 
              rel="nonreferrer"          >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
