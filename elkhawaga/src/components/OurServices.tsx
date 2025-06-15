import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router";
import { items } from "../data";

const OurServices: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative  ">
      <div className=" absolute archivo -left-9 lg:-left-14 -top-20 lg:top-0 bg-[#BE1E2D] w-[110px] h-[40px] lg:w-[165px] lg:h-[55px] rotate-270 text-white flex justify-center items-center text-[12px] lg:text-[18px] font-medium">
        <p> WHAT WE DO</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-evenly  items-center lg:items-stretch w-full lg:mt-10  ">
        <div className="flex flex-col gap-[15px] lg:gap-[25px] md:w-[60%] lg:w-[460px] px-1 lg:px-0">
          <h2 className="racing-sans font-racing text-[30px] lg:text-[48px] text-black text-center lg:text-left">
            {" "}
            Our{" "}
            <span className="text-white w-[138px] h-[36px] lg:w-[233px] lg:h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3">
              Services
            </span>
          </h2>
          <p className="text-[16px] lg:text-[20px] text-[#444444] archivo text-center lg:text-left ">
            Katalyst Studio offers a range of design services that are tailored
            to meet the unique needs of each client
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4 lg:hidden">
              <div className="group px-4 w-full h-[100px] rounded-[120px] transition-all duration-300 ease-in-out flex justify-center items-center gap-3 border border-[#DDDDDD] hover:border-[#BE1E2D] hover:text-[#BE1E2D] text-[#222222]">
                <p className="font-normal text-[30px] group-hover:text-[#BE1E2D] text-[#444444] racing-sans">
                  {items[currentIndex].number}
                </p>
                <p className="text-[18px] font-medium archivo">
                  {items[currentIndex].text}
                </p>
                <GoArrowRight className="font-normal text-[30px]" />
              </div>

              <div className="flex gap-6 mt-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full border border-[#BE1E2D] text-[#BE1E2D] hover:bg-[#BE1E2D] hover:text-white transition-all duration-300"
                >
                  <GoArrowLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full border border-[#BE1E2D] text-[#BE1E2D] hover:bg-[#BE1E2D] hover:text-white transition-all duration-300"
                >
                  <GoArrowRight size={24} />
                </button>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="group px-4 w-[450px] h-[100px] rounded-[120px] transition-all duration-300 ease-in-out flex justify-center items-center gap-4 border border-[#DDDDDD] hover:border-[#BE1E2D] hover:text-[#BE1E2D] text-[#222222]"
                >
                  <p className="font-normal text-[30px] group-hover:text-[#BE1E2D] text-[#444444] racing-sans">
                    {item.number}
                  </p>
                  <p className="text-[20px] font-medium archivo">{item.text}</p>
                  <GoArrowRight className="font-normal text-[30px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
<div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-4 justify-center mt-4 px-1 lg:hidden">
  {/* الصورة: تاخد 2 عمود و 2 صف */}
  <div className="relative group bg-white p-2 rounded-[20px] overflow-hidden col-span-2 row-span-2">
    <img
      className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out"
      src={"/patrick-frossard-nYWfclD5jnI-unsplash (1).jpg"}
      alt=""
    />
    <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-[20px]">
      <p className="text-white w-72 text-2xl font-normal text-center px-4">
        Content Creation / Management
      </p>
    </div>
  </div>

  {/* أول بلوك نصي */}
  <NavLink className={"cursor-pointer col-span-1 row-span-1"} to={"/services"}>
    <div className="bg-[#222222] rounded-[24px] p-[20px] text-white h-full flex flex-col justify-between">
      <p className="text-[10px] font-medium">
        Ever wondered how design magic happens?
      </p>
      <div className="flex items-center gap-3 mt-4">
        <p className="font-semibold text-[10px]">See how we work</p>
        <div className="w-[28px] h-[28px] rounded-full bg-[#333333] flex justify-center items-center hover:scale-125 transition-all duration-300 ease-in-out">
          <GoArrowUpRight className="text-[18px]" />
        </div>
      </div>
    </div>
  </NavLink>

  {/* ثاني بلوك نصي */}
  <NavLink className={"cursor-pointer col-span-1 row-span-1"} to={"/expert"}>
    <div className="bg-[#BE1E2D] rounded-[24px] p-[20px] text-white h-full flex flex-col justify-between">
      <p className="text-[10px] font-medium">
        Looking for design experts who can bring your vision to life?
      </p>
      <div className="flex items-center gap-3 mt-4">
        <p className="font-semibold text-[10px]">Meet our expert</p>
        <div className="w-[28px] h-[28px] rounded-full bg-white flex justify-center items-center hover:scale-125 transition-all duration-300 ease-in-out">
          <GoArrowUpRight className="text-[#333333] text-[18px]" />
        </div>
      </div>
    </div>
  </NavLink>
</div>


        <div className=" hidden lg:flex justify-center items-center relative group bg-white p-2 rounded-[20px] overflow-hidden w-1/2 lg:w-1/3 ">
          <img
            className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out "
            src={"/patrick-frossard-nYWfclD5jnI-unsplash (1).jpg"}
            alt=""
          />
          <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-[20px]">
            <p className="text-white w-72 text-2xl font-normal text-center px-4">
              Content Creation / Management
            </p>
          </div>
        </div>

        <div className=" hidden lg:flex flex-col gap-[20px] archivo">
          <NavLink className={"cursor-pointer "} to={"/services"}>
            <div className="bg-[#222222] rounded-[32px] p-[32px] w-[280px] h-[280px] text-white">
              <div className="h-full flex flex-col justify-between">
                <p className="text-[18px] font-medium">
                  Ever wondered how design magic happens?
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <p className="font-semibold text-[22px]">See how we work</p>
                  <div className="w-[48px] h-[48px] rounded-full bg-[#333333] flex justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out">
                    <GoArrowUpRight className=" text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink className={"cursor-pointer "} to={"/expert"}>
            <div className="bg-[#BE1E2D] rounded-[32px] p-[32px] w-[280px] h-[280px] text-white">
              <div className="h-full flex flex-col justify-between">
                <p className="text-[18px] font-medium">
                  Looking for design experts who can bring your vision to life?
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <p className="font-semibold text-[22px]">Meet our expert</p>
                  <div className="w-[48px] h-[48px] rounded-full bg-white flex justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out">
                    <GoArrowUpRight className="text-[#333333] text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
