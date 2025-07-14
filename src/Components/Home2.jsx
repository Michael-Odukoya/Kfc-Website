import React from "react";
import { assets } from "../assets/assets";

const Home2 = () => {
  return (
    <>
      <div className=" text-white max-h-screen items-center overflow-hidden kfc-infoAnime absolute px-25 top-1/2 translate-y-[-50%]" id="About">
        <div className="flex relative flex-wrap">
          <div className="img-container basis-1/2">
            <div className="flex">
              <img src={assets.logo2} className="h-100  kfcAnime" />
            </div>
            <div>
              <p className="text-4xl kfc pl-15 pt-4">Hartland Sanders</p>
            </div>
          </div>

          <div className="text-content text-6xl font-light basis-1/2">
            <h1 className="leading-19">
              About <b className=" font-extrabold ">Us</b>
            </h1>

            <p className="text-sm font-medium pt-3 leading-6 text-justify">
              KFC, short for Kentucky Fried Chicken, is one of the world's most
              recognizable fast-food chains, specializing in fried chicken.
              Founded by Colonel Harland Sanders in 1930, KFC has grown from a
              small roadside restaurant in Corbin, Kentucky to a global brand
              with over 30,000 locations across 150 countries. The company is
              known for its Original Recipe chicken, seasoned with a secret
              blend of 11 herbs and spices, a formula that has remained
              unchanged since Sanders first developed it. KFC is a subsidiary of
              Yum! Brands, which also owns Pizza Hut and Taco Bell. Beyond
              serving finger-lickin' good chicken, KFC is committed to
              sustainability, community engagement, and innovation in the food
              industry. The brand continues to expand globally, adapting to
              local tastes while maintaining its signature flavorsKFC, short for
              Kentucky Fried Chicken, is a globally recognized fast-food brand
              specializing in crispy fried chicken made with its famous 11 herbs
              and spices. Founded in 1930 by Colonel Harland Sanders, KFC has
              grown to over 30,000 locations in more than 150 countries, serving
              millions daily. As part of Yum! Brands, KFC combines tradition
              with innovation, adapting to local tastes while maintaining its
              signature flavors. Whether it's the Original Recipe chicken, spicy
              variations, or unique side dishes, KFC continues to be a favorite
              for crispy, flavorful meals worldwide. We Offer you the best chicken to satify your craving.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
