import React from 'react';
import Button from './Ui/Button';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { arrows } from '../data';



export default function About() {

    return (
        <section className=" text-[#1E1E1E] py-10 lg:py-16 xl:px-6 relative lg:mt-20 ">

            {/* Section Title */}
            <div className='flex flex-col justify-center items-center gap-4 lg:gap-10'>

                <h2 className="racing-sans text-[30px] lg:text-[48px] text-center font-racing text-white lg:w-[650px]">
                    <span className='text-white w-[233px] h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3'>About</span></h2>

                <p className='text-[16px] lg:text-[20px] archivo text-center text-[#222222] lg:max-w-md lg:mx-auto '>Senior experts. On-demand requests. Fast
                    turnarounds. Flat monthly fee. Cancel anytime.</p>

                <div className="flex flex-wrap justify-center gap-2">
                    {arrows.map((item, index) => (
                        <div key={index} className="w-[180px] lg:w-[300px] flex flex-col justify-center items-center gap-[10px] p-4 lg:p-10 bg-[#222222] rounded-[32px]">
                            <img src={item.icon} alt={item.title} className="w-[25px] h-[25px] lg:w-10 lg:h-10" />
                            <h3 className="text-[18px] lg:text-[28px] font-semibold archivo text-white mt-4 lg:mt-6">{item.title}</h3>
                            <h3 className="racing-sans text-[30px] lg:text-[48px] text-white font-racing">{item.num}</h3>
                        </div>
                    ))}
                </div>

                <Button className='inline-flex mt-[20px] lg:mt-[35px] w-[225px] h-[60px] text-black hover:text-white' path='/contact'>
                    Discover
                </Button>

            </div>


        </section>
    );
}
 