import React from 'react';
import Button from './Ui/Button';

export default function OurBecome() {

    return (
        <section className="bg-[#1E1E1E] text-white py-16 px-6 relative mt-32 ">
            {/* Sidebar Text */}
            <div className=' absolute archivo -left-14 top-28 bg-[#BE1E2D] w-[165px] h-[55px] rotate-270 text-white flex justify-center items-center text-[18px] font-medium'>
                <p> WHAT WE DO</p>
            </div>

            {/* Stars Decoration (optional) */}
            <div className="absolute left-40 top-40 text-white text-6xl">✦</div>
            <div className="absolute right-40 top-56 text-white text-6xl">✦</div>


            {/* Section Title */}
            <div className='flex flex-col justify-center items-center gap-10'>

                <h2 className="racing-sans text-[48px] text-center font-racing text-white w-[650px]"> <span className='text-white w-[233px] h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3'> Become part</span> of the design revolution</h2>

                <p className='text-[20px] archivo text-center text-[#FCFCFC] max-w-xl mx-auto '>Read through our testimonials to see why our clients love working with us and how we can help you achieve your business goals through creative and effective design.</p>

                <Button className=' mt-[35px] w-[225px] h-[60px]' path='/contact'>
                    Discover
                </Button>

            </div>


        </section>
    );
}
