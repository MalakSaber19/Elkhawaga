import React from 'react';
import Button from './Ui/Button';
import { section } from '../data';

const HeroSection: React.FC = () => {
  return (
    <section className=' relative'>
      <img src={"/Property 1=Default.png"} alt="" className=' w-full h-screen lg:h-full' />
      <div className=' absolute top-2/12 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-[21px] lg:gap-[15px] text-white w-[400px] lg:w-[950px]'>
        <div className='w-[223px] h-[46px] lg:w-[450px] lg:h-[110px]  bg-[#BE1E2D] rounded-[12px] lg:rounded-[16px] flex justify-center items-center '>
          <p className="text-[30px] lg:text-[60px] racing-sans">EL KHWAGA</p>
        </div>
        <p className="text-[28px] lg:text-[48px] racing-sans">Digital  Marketing Agency</p>
        <p className="text-[#DDDDDD] text-[20px] lg:text-[24px]  text-center archivo">
          Katalyst Design Studio is a dynamic and innovative design agency that brings creative ideas to life.  We works with a wide range of clients to develop unique and effective branding, web design, and graphic design solutions.
        </p>
        <Button className='inline-flex mt-[10px] lg:mt-[35px] w-[225px] h-[60px]' path='/contact'>
          Discover
        </Button>
      </div>

<div className='absolute bottom-[10px] 2xl:bottom-2/12  lg:flex justify-center items-center w-full gap-4 hidden '>
  {section.map((img, index) => (
    <div
      key={index}
      className={`relative group bg-white p-2 rounded-[20px] overflow-hidden ${img.rotate} xl:w-[370px] xl:h-[370px] w-[250px] h-[250px]  `}
    >
      <img
        className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:scale-95"
        src={img.src}
        alt={img.alt}
      />
      <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-[20px]">
        <p className="text-white w-72 text-2xl font-normal text-center px-4">
          Content Creation / Management
        </p>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default HeroSection;