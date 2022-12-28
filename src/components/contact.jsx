import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full  h-auto bg-black text-white pt-20  "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold  text-red-600 p-2 ">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        


        <div className="flex justify-center items-center mt-20">
          <form
            action="https://getform.io/f/727afbd1-2f45-43e6-b2b2-71593acb744a"
            method="post"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              id=""
              className="placeholder-slate-100 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              id=""
              className=" placeholder-slate-100 my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter Your message"
              rows="8"
              className="p-2 placeholder-slate-100 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-transparent text-bold w-40 outline   px-6 py-3 my-8 mx-auto  items-center rounded-md hover:scale-110 hover:bg-white hover:text-black duration-300  ">
              {" "}
             Send
            
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
