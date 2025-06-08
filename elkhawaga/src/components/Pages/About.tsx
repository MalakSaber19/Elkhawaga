import React from 'react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { filters, image } from '../../data';
import MainLayout from '../MainLayout';
import Button from '../Ui/Button';

export default function About() {
    const [currentIndex, setCurrentIndex] = useState<any>(1);
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);



    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? image.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1));
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


                {/* Slider */}

                    <div
                        className="flex items-center justify-center"
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
                                    setCurrentIndex((prev) => (prev === 0 ? image.length - 1 : prev - 1));
                                }}
                                className="cursor-pointer absolute top-1/2 left-40 w-[56px] h-[56px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
                                >
                                <IoIosArrowRoundBack size={32} />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1));
                                }}
                                className="cursor-pointer absolute top-1/2 right-40 w-[56px] h-[56px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
                            >
                                <IoIosArrowRoundForward size={32} />
                            </button>
                    </div>
            

            </section>
        </MainLayout>
    );
}