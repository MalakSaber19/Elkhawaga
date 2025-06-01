import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
    <section className="bg-[#1E1E1E] text-white py-16 px-6 relative">
      {/* Sidebar Text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[-90deg] bg-[#BE1E2D] px-4 py-1 rounded-tr-md rounded-tl-md text-sm font-semibold tracking-widest">
        WHAT WE DONE
      </div>

      {/* Stars Decoration (optional) */}
      <div className="absolute left-10 top-10 text-white text-xl">✦</div>
      <div className="absolute right-10 top-10 text-white text-xl">✦</div>

      {/* Section Title */}
      <h2 className="text-center text-4xl font-bold mb-4">
        Our Best <span className="bg-[#BE1E2D] px-2 py-1 rounded text-white">Works</span>
      </h2>
      <p className="text-center text-gray-300 max-w-xl mx-auto mb-8">
        Katalyst Studio follows a collaborative and iterative approach to design, with a focus on understanding and meeting the unique needs of each client.
      </p>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-5 py-2 rounded-full transition ${
              selectedFilter === filter
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

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-2 w-10 h-10 bg-[#BE1E2D] text-white rounded-full flex items-center justify-center"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* See More */}
      <div className="text-center mt-10">
        <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
          See More
        </button>
      </div>
    </section>
  );
}
