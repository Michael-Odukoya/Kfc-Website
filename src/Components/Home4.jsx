import React from "react";
import { assets, MenuData } from "../assets/assets";

const Home4 = () => {
  return (
    <>
      <div className=" text-white max-h-screen items-center overflow-hidden kfc-infoAnime absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
        <div className="relative">

        
        <h1 className="text-6xl  text-center">
          Contact <b className="font-extrabold">Us</b>
        </h1>
       


        <form className="max-w-2xl mx-auto  pt-8 "  action="https://formsubmit.co/michaelodukoya0605@gmail.com" method="POST">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 text-left">
                    Your Name
                    <input className="w-full border border-white rounded py-3 px-4 mt-2" type="text" name="Name" placeholder="Your Name" required/>
                </div>
                <div className="w-full md:w-1/2 text-left md:pl-4">
                    Your Email
                    <input className="w-full border border-white rounded py-3 px-4 mt-2" type="email" name="Email" placeholder="Your Email" required/>
                </div>
            </div>

            <div className="my-6 text-left">
                Message
                <textarea className="w-full border border-white rounded py-3 px-4 mt-2 h-48 resize-none" name="Message" placeholder="Message" required></textarea>
            </div>
            <button className="bg-white item2 text-black py-2 px-12 mb-10 rounded-full font-bold block mx-auto cursor-pointer">Send Message</button>
        </form>
      


        </div>
      </div>
    </>
  );
};

export default Home4;
