import React from 'react';
import Button from './Ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className=' relative'>
      <img src={"/Property 1=Default.png"} alt="" className=' w-full' />
      <div className=' absolute top-2/12 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-[15px] text-white w-[950px]'>
        <div className='w-[450px] h-[110px]  bg-[#BE1E2D] rounded-[16px] flex justify-center items-center '>
          <p className="text-[60px] racing-sans">EL KHWAGA</p>
        </div>
        <p className="text-[48px] racing-sans">Digital  Marketing Agency</p>
        <p className="text-[#DDDDDD] text-[24px]  text-center archivo">
          Katalyst Design Studio is a dynamic and innovative design agency that brings creative ideas to life.  We works with a wide range of clients to develop unique and effective branding, web design, and graphic design solutions.
        </p>
        <Button className=' mt-[35px] w-[225px] h-[60px]' path='/contact'>
          Discover
        </Button>
      </div>
      <div className='absolute bottom-2/12 flex justify-center items-center w-full'>

        <div className="relative group bg-white p-2 rounded-[20px] overflow-hidden rotate-6 w-[370px] h-[370px]">
          <img className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:scale-95 " src={"/patrick-frossard-nYWfclD5jnI-unsplash (1).jpg"} alt="" />

          <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-[20px]">
            <p className="text-white w-72 text-2xl font-normal text-center px-4">
              Content Creation / Management
            </p>
          </div>
        </div>

        <div className="relative group bg-white p-2 rounded-[20px] overflow-hidden -rotate-6 w-[370px] h-[370px]">
          <img
            className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:scale-95"
            src="/Person in Orange Beanie Working on Laptop.jpeg"
            alt=""
          />

          <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-[20px]">
            <p className="text-white w-72 text-2xl font-normal text-center px-4">
              Content Creation / Management
            </p>
          </div>
        </div>

        <div className="relative group bg-white p-2 rounded-[20px] overflow-hidden rotate-6 w-[370px] h-[370px]">
          <img className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:scale-95 " src={"/patrick-frossard-nYWfclD5jnI-unsplash (1).jpg"} alt="" />

          <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-[20px]">
            <p className="text-white w-72 text-2xl font-normal text-center px-4">
              Content Creation / Management
            </p>
          </div>
        </div>
        <div className="relative group bg-white p-2 rounded-[20px] overflow-hidden -rotate-6 w-[370px] h-[370px]">
          <img className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:scale-95 " src={"/Person in Orange Beanie Working on Laptop.jpeg"} alt="" />

          <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-[20px]">
            <p className="text-white w-72 text-2xl font-normal text-center px-4">
              Content Creation / Management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;