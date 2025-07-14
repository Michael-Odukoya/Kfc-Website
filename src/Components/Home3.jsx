import React from "react";
import { assets, MenuData } from "../assets/assets";

const Home3 = () => {
  return (
    <>
      <div className=" text-white max-h-screen items-center overflow-hidden kfc-infoAnime absolute px-25 top-1/2 translate-y-[-50%]">
    <h1 className="text-6xl text-center mb-6">
          Our <b className="font-extrabold">Menu</b>
        </h1>
        <div className="flex flex-wrap justify-center gap-8 relative">
          
          {MenuData.map((menu, index) => (
            <div
              key={index}
              className="item3 card max-w-[364px] border shadow-lg rounded px-8 py-6 text-center"
            >
              <img
                src={menu.image}
                className="w-50 h-50  mx-auto mb-4 kfcAnime"
              />
              <h2 className="text-2xl font-medium mb-2">{menu.name}</h2>
              <p className="mb-4 ">{menu.price}</p>
              <div className="flex justify-center gap-1  mb-4">
                {Array.from({ length: menu.rating }, (item, index) => (
                  <img key={index} src={assets.star_icon} />
                ))}
              </div>
              <p >{menu.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home3;
