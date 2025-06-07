import React from 'react';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaLongArrowAltLeft } from 'react-icons/fa';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";


const filters = ['Graphic Design', 'Video Graphic', 'Visual Design'];
const images = [
  '/Property 1=Default.png',
  '/Property 1=Default.png',
  '/Property 1=Default.png',
  '/Property 1=Default.png',
  '/Property 1=Default.png',

];

export default function OurBestWorks() {
  const [selectedFilter, setSelectedFilter] = useState('Graphic Design');
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-[#1E1E1E] text-white py-16 px-6 relative mt-32">
      {/* Sidebar Text */}
      <div className=' absolute archivo -left-14 top-28 bg-[#BE1E2D] w-[165px] h-[55px] rotate-270 text-white flex justify-center items-center text-[18px] font-medium'>
        <p> WHAT WE DO</p>
      </div>

      {/* Stars Decoration (optional) */}
      <div className="absolute left-40 top-40 text-white text-6xl">✦</div>
      <div className="absolute right-40 top-56 text-white text-6xl">✦</div>


      {/* Section Title */}
          <h2 className="racing-sans text-[48px] text-center font-racing text-white">  Our Best <span className='text-white w-[233px] h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3'> Works</span></h2>

          <p className='text-[20px] archivo text-center text-[#FCFCFC] max-w-xl mx-auto mb-8'>Katalyst Studio follows a collaborative and iterative approach to design, with a focus on understanding and meeting the unique needs of each client.</p>



      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-5 py-2 rounded-full transition ${selectedFilter === filter
              ? 'bg-[#BE1E2D] text-white'
              : 'bg-white text-[#333]'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="relative flex items-center justify-center">
        {/* Cards */}
        <div className="flex gap-6 overflow-hidden w-[80%]">
          {images
            .slice(currentIndex, currentIndex + 3)
            .map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt=""
                className="w-[250px] h-[300px] rounded-[20px] object-cover transition-all duration-300 shadow-lg"
              />
            ))}
        </div>

      </div>

      <div className='flex  items-center justify-center mt-8 '>

        {/* Arrows */}
        <div className='flex-1 flex justify-center gap-2'>
        <button
          onClick={prev}
          className=" w-[56px] h-[56px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300  hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
        >
          <IoIosArrowRoundBack size={30} />
        </button>
        <button
          onClick={next}
          className=" w-[56px] h-[56px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300  hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
        >
          <IoIosArrowRoundForward size={30}  />
        </button>
        </div>


      {/* See More */}
      <div className="flex justify-end ">
        <button className="w-[166px] h-[57px] flex items-center justify-center gap-2 border border-white  rounded-full hover:border-[#BE1E2D]  hover:text-[#BE1E2D] transition">
          See More <FaLongArrowAltRight/>
        </button>
      </div>
      </div>
    </section>
  );
}
