import React from 'react';
import { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { filters, images } from '../data';
import { NavLink } from 'react-router-dom';

export default function OurBestWorks() {
  const [activeCategory, setActiveCategory] = useState('Graphic Design');
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#1E1E1E] text-white py-20 px-6 relative mt-32">
      {/* Sidebar Text */}
      <div className='absolute archivo -left-14 top-28 bg-[#BE1E2D] w-[165px] h-[55px] rotate-270 text-white flex justify-center items-center text-[18px] font-medium'>
        <p> WHAT WE DO</p>
      </div>

      {/* Stars Decoration (optional) */}
      <div className="absolute left-40 top-40 text-white text-6xl">✦</div>
      <div className="absolute right-40 top-56 text-white text-6xl">✦</div>

      {/* Section Title */}
      <h2 className="racing-sans text-[48px] text-center font-racing text-white mb-4">
        Our Best <span className='bg-[#BE1E2D] rounded-[16px] py-2 px-4 inline-block'>Works</span>
      </h2>

      <p className='text-[20px] archivo text-center text-[#FCFCFC] max-w-xl mx-auto mb-12'>
        Katalyst Studio follows a collaborative and iterative approach to design, with a focus on understanding and meeting the unique needs of each client.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {filters.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeCategory === cat ? 'bg-[#BE1E2D] text-white' : 'bg-white text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center justify-center gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className={`transition-all duration-300 overflow-hidden shadow-lg ${
                index === currentIndex ? 'scale-110' : 'scale-95 blur-sm opacity-60'
              }`}
              style={{ width: '300px', height: '300px', borderRadius: '20px' }}
            >
              <img
                src={img}
                alt="img.alt"
                className="object-cover w-full h-full"
                style={{ borderRadius: '20px' }}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className='flex justify-center gap-4 mt-4'>
          <button
            onClick={prevSlide}
            className="w-[56px] h-[56px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
          >
            <IoIosArrowRoundBack size={30} />
          </button>
          <button
            onClick={nextSlide}
            className="w-[56px] h-[56px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
          >
            <IoIosArrowRoundForward size={30} />
          </button>
        </div>

        {/* See More Button */}
        <div className="flex justify-end w-full mt-8 pr-6">
          <NavLink to={"/work"}>
          <button className="w-[166px] h-[57px] flex items-center justify-center gap-2 border border-white rounded-full hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition">
            See More <FaLongArrowAltRight />
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}