import React from 'react';
import Button from './Ui/Button';

export default function OurBecome() {

    return (
        <section className="bg-[#1E1E1E] text-white py-14 px-2 lg:py-16 lg:px-6 relative  ">
            {/* Sidebar Text */}
            <div className=' absolute archivo -left-9 lg:-left-14 top-20 bg-[#BE1E2D] w-[110px] h-[40px] lg:w-[165px] lg:h-[55px] rotate-270 text-white flex justify-center items-center text-[12px] lg:text-[18px] font-medium'>
                <p> WHAT WE DO</p>
            </div>

            {/* Stars Decoration (optional) */}
            <div className="absolute left-5 lg:left-40 bottom-10 lg:bottom-56 text-white text-3xl lg:text-6xl">✦</div>
            <div className="absolute right-5 lg:right-40 top-10 lg:top-56 text-white text-3xl lg:text-6xl">✦</div>


            {/* Section Title */}
            <div className='flex flex-col justify-center items-center gap-4 lg:gap-10'>

                <h2 className="racing-sans text-[30px] lg:text-[48px] text-center font-racing text-white lg:w-[650px]"> <span className='text-white w-[190px] h-[37px] lg:w-[233px] lg:h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3'> Become part</span> of the design revolution</h2>

                <p className='text-[16px] lg:text-[20px] archivo text-center text-[#FCFCFC] lg:max-w-xl lg:mx-auto '>Read through our testimonials to see why our clients love working with us and how we can help you achieve your business goals through creative and effective design.</p>

                <Button className='inline-flex mt-[20px] lg:mt-[35px] w-[225px] h-[60px]' path='/contact'>
                    Discover
                </Button>

            </div>


        </section>
    );
}
