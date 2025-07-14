import React from "react";
import { useState } from "react";
import Home1 from "./Components/Home1";
import Header from "./Components/Header";
import Home2 from "./Components/Home2";
import Home3 from "./Components/Home3";
import Home4 from "./Components/Home4";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Homes = [
    {
      page: <Home1/>
    },
    {
      page: <Home2/>
    },
    {
      page: <Home3/>
    },
    {
      page: <Home4/>
    }
  ];

  
  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + Homes.length - 1) % Homes.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % Homes.length);
  };

  return (
    <>
      <div className="custom-circular-gradient w-full overflow-hidden  min-h-screen">
        <Header />

        <div >
          {Homes[currentIndex].page}
        </div>

        <div className="absolute z-10 right-0 left-0 bottom-7">
        <div className=" flex justify-between px-25 items-center bg-transparent relative">
          <div className="flex gap-5 items-center text-2xl text-white"> 
            <a href="#" className="item border-2 rounded  px-2">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#" className="item border-2 rounded px-2 ">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="#" className="item border-2 rounded px-2 ">
              <i class="bx bxl-instagram"></i>
            </a>
          </div>

          <div className="flex text-2xl text-white  justify-end items-center">
         
            <button className="item px-2 py-0.5 border-2 rounded mr-2 cursor-pointer" aria-label="Previous Project" onClick={handlePrevClick}>
            <i class="bx bx-chevron-left"></i>
            </button>
            <button className=" item px-2 py-0.5 border-2 rounded  cursor-pointer" aria-label="Next Project" onClick={handleNextClick}>
            <i class="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default App;
