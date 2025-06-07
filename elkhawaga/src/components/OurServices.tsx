import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";



const OurServices: React.FC = () => {
  return (
    <div className="relative ">
      <div className=' absolute archivo -left-14 top-14 bg-[#BE1E2D] w-[165px] h-[55px] rotate-270 text-white flex justify-center items-center text-[18px] font-medium'>
        <p> WHAT WE DO</p>
      </div>
      <div className='flex justify-evenly'>

        <div className='flex flex-col gap-[25px] w-[460px]'>
          <h2 className="racing-sans text-[48px] font-racing text-black"> Our <span className='text-white w-[233px] h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3'>Services</span></h2>
          <p className='text-[20px] text-[#444444] archivo'>Katalyst Studio offers a range of design services that are tailored to meet the unique needs of each client</p>

          <div className='group px-4 w-[450px] h-[100px] rounded-[120px] transition-all duration-300 ease-in-out flex justify-center items-center gap-4 border border-[#DDDDDD] hover:border-[#BE1E2D] hover:text-[#BE1E2D] text-[#222222]'>
            <p className='font-normal text-[30px] group-hover:text-[#BE1E2D] text-[#444444 racing-sans'>01</p>
            <p className='text-[20px] font-medium archivo'>Content Creation / Mangement</p>
            <GoArrowRight className='font-normal text-[30px]' />

          </div>
          <div className='group px-4 w-[450px] h-[100px] rounded-[120px] transition-all duration-300 ease-in-out flex justify-center items-center gap-4 border border-[#DDDDDD] hover:border-[#BE1E2D] hover:text-[#BE1E2D] text-[#222222]'>
            <p className='font-normal text-[30px] group-hover:text-[#BE1E2D] text-[#444444] racing-sans'>02</p>
            <p className='text-[20px] font-medium archivo'>Content Creation / Mangement</p>
            <GoArrowRight className='font-normal text-[30px]' />
          </div>

          <div className='group px-4 w-[450px] h-[100px] rounded-[120px] transition-all duration-300 ease-in-out flex justify-center items-center gap-4 border border-[#DDDDDD] hover:border-[#BE1E2D] hover:text-[#BE1E2D]  text-[#222222]'>
            <p className='font-normal text-[30px] group-hover:text-[#BE1E2D] text-[#444444 racing-sans'>03</p>
            <p className='text-[20px] font-medium archivo'>Content Creation / Mangement</p>
            <GoArrowRight className='font-normal text-[30px]' />
          </div>

          <div className='group px-4 w-[450px] h-[100px] rounded-[120px] transition-all duration-300 ease-in-out flex justify-center items-center gap-4 border border-[#DDDDDD] hover:border-[#BE1E2D] hover:text-[#BE1E2D]  text-[#222222]'>
            <p className='font-normal text-[30px] group-hover:text-[#BE1E2D] text-[#444444 racing-sans'>04</p>
            <p className='text-[20px] font-medium archivo'>Content Creation / Mangement</p>
            <GoArrowRight className='font-normal text-[30px]' />
          </div>
        </div>
        <div>

        </div>


        <div className="flex justify-center items-center relative group bg-white p-2 rounded-[20px] overflow-hidden w-1/3 ">
          <img className="w-full h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out " src={"/patrick-frossard-nYWfclD5jnI-unsplash (1).jpg"} alt="" />
          <div className="absolute inset-0 bg-[#0000007e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-[20px]">
            <p className="text-white w-72 text-2xl font-normal text-center px-4">
              Content Creation / Management
            </p>
          </div>

        </div>

        <div className='flex flex-col gap-[20px] archivo'>

          <div className='bg-[#222222] rounded-[32px] p-[32px] w-[280px] h-[280px] text-white'>
            <div className='h-full flex flex-col justify-between'>
              <p className='text-[18px] font-medium'>
                Ever wondered how design magic happens?
              </p>

              <div className='flex items-center gap-3 mt-4'>
                <p className='font-semibold text-[22px]'>See how we work</p>
                <div className='w-[48px] h-[48px] rounded-full bg-[#333333] flex justify-center items-center'>
                  <GoArrowUpRight className=' text-[24px]' />
                </div>
              </div>
            </div>
          </div>


          <div className='bg-[#BE1E2D] rounded-[32px] p-[32px] w-[280px] h-[280px] text-white'>
            <div className='h-full flex flex-col justify-between'>
              <p className='text-[18px] font-medium'>
                Ever wondered how design magic happens?
              </p>

              <div className='flex items-center gap-3 mt-4'>
                <p className='font-semibold text-[22px]'>See how we work</p>
                <div className='w-[48px] h-[48px] rounded-full bg-white flex justify-center items-center'>
                  <GoArrowUpRight className='text-[#333333] text-[24px]' />
                </div>
              </div>
            </div>
          </div>


        </div>





      </div>
    </div>
  );
};

export default OurServices;