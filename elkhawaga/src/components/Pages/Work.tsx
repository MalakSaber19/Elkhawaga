import React from 'react';
import { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { filters, images } from '../../data';
import MainLayout from '../MainLayout';
import Button from '../Ui/Button';

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('Graphic Design');
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <MainLayout>
    <section className="bg-[#1E1E1E] text-white py-40 px-6 relative ">
      {/* Sidebar Text */}
      <div className='absolute archivo -left-14 top-40 bg-[#BE1E2D] w-[165px] h-[55px] rotate-270 text-white flex justify-center items-center text-[18px] font-medium'>
        <p> WHAT WE DO</p>
      </div>

      {/* Stars Decoration (optional) */}
      <div className="absolute left-40 top-40 text-white text-6xl">✦</div>
      <div className="absolute right-40 top-56 text-white text-6xl">✦</div>

      {/* Section Title */}
      <h2 className="racing-sans text-[48px] text-center font-racing text-white mb-4 mt-20">
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
        <div>
            <img src={"/Colorful Sticky Notes Brainstorming.jpeg"} alt="" />
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
        <Button className=' w-[225px] h-[60px]' path='/contact'>
          Discover
        </Button>

      </div>
    </section>
    </MainLayout>
  );
}