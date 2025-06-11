import React from 'react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import {  AboutImage } from '../../data';
import MainLayout from '../MainLayout';
import Button from '../Ui/Button';
import OurBestWorks from '../OurWork';

export default function Expert() {
    const [currentIndex, setCurrentIndex] = useState<any>(0);
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);



    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? AboutImage.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === AboutImage.length - 1 ? 0 : prev + 1));
    };

    const currentImage = AboutImage[currentIndex];


    return (
        <MainLayout>
            <section className="bg-[#1E1E1E] text-white py-28 px-6 relative ">
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
                <div className='flex flex-col items-center gap-20'>

                    <div
                        className="flex items-center justify-center mt-10"

                    >
                        <div
                            className="relative max-w-[400px]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image */}
                            <img
                                src={currentImage.src}
                                alt="selected"
                                className="w-full h-auto  object-cover"
                            />
                            <div className='text-[#222222] flex flex-col gap-3 w-[315px] h-[120px] justify-center items-center  border-t-8 border-[#BE1E2D] absolute left-1/2 -translate-x-1/2  -bottom-10 bg-white'>
                            <p className='text-[24px] font-medium'>{currentImage.title}</p>
                            <p className='text-[18px] font-normal' >{currentImage.subtitle}</p>

                            </div>

                            
                        </div>
                            {/* Arrows inside Modal */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex((prev) => (prev === 0 ? AboutImage.length - 1 : prev - 1));
                                }}
                                className="cursor-pointer absolute top-1/2 left-40 w-[56px] h-[56px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
                                >
                                <IoIosArrowRoundBack size={32} />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex((prev) => (prev === AboutImage.length - 1 ? 0 : prev + 1));
                                }}
                                className="cursor-pointer absolute top-1/2 right-40 w-[56px] h-[56px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
                            >
                                <IoIosArrowRoundForward size={32} />
                            </button>
                    </div>

                   <p className='max-w-[674px] text-[#ffffffc4] archivo text-center flex justify-center text-[20px] font-normal'>Katalyst Studio follows a collaborative and iterative approach to design, with a focus on understanding and meeting the unique needs of each client.</p>
            
                </div>

                <OurBestWorks></OurBestWorks>


            </section>
        </MainLayout>
    );
}