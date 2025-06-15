import React from "react";
import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { filters, image } from "../../data";
import MainLayout from "../MainLayout";
import Button from "../Ui/Button";

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("Graphic Design");
  const [currentIndex, setCurrentIndex] = useState<any>(1);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? image.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1));
  };

  return (
    <MainLayout>
      <section className="bg-[#1E1E1E] text-white py-20 lg:py-40 px-6 relative ">

        <div className=" absolute archivo -left-9 lg:-left-14 top-32 bg-[#BE1E2D] w-[110px] h-[40px] lg:w-[165px] lg:h-[55px] rotate-270 text-white flex justify-center items-center text-[12px] lg:text-[18px] font-medium">
          <p> WHAT WE DO</p>
        </div>

        {/* Stars Decoration (optional) */}
        <div className="absolute hidden lg:block left-40 top-40 text-white lg:text-6xl">✦</div>
        <div className="absolute hidden lg:block right-40 top-56 text-white text-6xl">✦</div>

        {/* Section Title */}
        <h2 className="racing-sans text-[30px]  lg:text-[48px] text-center font-racing text-white lg:mb-4 lg:mt-20">
          Our Best{" "}
          <span className="bg-[#BE1E2D] rounded-[16px] py-1 lg:py-2 lg:px-4 inline-block">
            Works
          </span>
        </h2>

        <p className="text-[16px] lg:text-[20px] archivo text-center text-[#FCFCFC] lg:max-w-xl lg:mx-auto lg:mb-12">
          Katalyst Studio follows a collaborative and iterative approach to
          design, with a focus on understanding and meeting the unique needs of
          each client.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#BE1E2D] text-white"
                  : "bg-white text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
            {image.map((img, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectedImage({ src: img, alt: "Image description" })
                }
                className={` group relative w-[610px] h-[465px] transition-all duration-300 overflow-hidden shadow-lg bg-white p-2 rounded-[32px]`}
              >
                <img
                  src={img}
                  alt={"img.alt"}
                  className={`w-full h-full object-cover rounded-[32px]`}
                />
                <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-[20px]">
                  <p className="racing-sans text-white w-72 text-8xl font-normal text-center px-4 cursor-pointer">
                    View
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-4">
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
          <Button className="inline-flex w-[225px] h-[60px]" path="/contact">
            Discover
          </Button>
        </div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            onClick={() => {
              setSelectedImage(null);
              setCurrentIndex(-1);
            }}
          >
            <div
              className="relative max-w-3xl w-[90%] bg-white p-2 rounded-[32px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={image[currentIndex]}
                alt="selected"
                className="w-full h-auto rounded-[32px] object-cover"
              />

              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setCurrentIndex(null);
                }}
                className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-600 transition-colors duration-300 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            {/* Arrows inside Modal */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) =>
                  prev === 0 ? image.length - 1 : prev - 1
                );
              }}
              className="cursor-pointer absolute top-1/2 left-40 w-[56px] h-[56px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
            >
              <IoIosArrowRoundBack size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) =>
                  prev === image.length - 1 ? 0 : prev + 1
                );
              }}
              className="cursor-pointer absolute top-1/2 right-40 w-[56px] h-[56px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
            >
              <IoIosArrowRoundForward size={32} />
            </button>
          </div>
        )}
      </section>
    </MainLayout>
  );
}
