import React from "react";


const Footer = () => {
  return (
    <>
      <div className="absolute z-10 right-0 left-0 bottom-7">
        <div className=" flex justify-between px-25 items-center bg-transparent relative">
          <div className="flex gap-5 items-center text-2xl text-white"> 
            <a href="#" className="border-2 rounded  px-2">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#" className="border-2 rounded px-2 ">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="#" className="border-2 rounded px-2 ">
              <i class="bx bxl-instagram"></i>
            </a>
          </div>

          <div className="flex text-2xl text-white  justify-end items-center">
         
            <button className="px-2 py-0.5 border-2 rounded mr-2 cursor-pointer" aria-label="Previous Project" >
            <i class="bx bx-chevron-left"></i>
            </button>
            <button className="px-2 py-0.5 border-2 rounded mr-2 cursor-pointer" aria-label="Next Project">
            <i class="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

