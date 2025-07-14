import { assets } from "../assets/assets";

const Home1 = () => {
  return (
    <>
      <div className=" text-white max-h-screen items-center overflow-hidden kfc-infoAnime absolute px-25 top-1/2 translate-y-[-50%]">
        <div className="flex  relative flex-wrap">
          <div className="text-content pt-15 text-6xl font-light basis-1/2 ">
            <h1 className="leading-19">
              Its Finger <br /> Lickin <b className=" font-extrabold">Good.</b>
            </h1>

            <p className="text-sm font-medium pt-3 pr-20 leading-6 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatem facere consectetur veniam qui ipsam optio! Cupiditate soluta, a exercitationem aperiam provident nam repellat voluptatum molestiae libero .
              
            </p>

            <button className="cursor-pointer item2 bg-white px-10 py-3 text-black text-base font-bold rounded-full">
              Order Now
            </button>
          </div>

          <div className="img-container basis-1/2">
            <div className="flex justify-end"><img src={assets.burger_fries} className="h-110  kfcAnime"/></div>
            <div className="flex gap-2 justify-end">
              <div className=" w-10 h-0 border mt-3.5 border-white"></div>
              <p className="text-right text-xl">Always Fresh</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1;
