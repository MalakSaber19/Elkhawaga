import React from 'react';
import Button from './Ui/Button';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const arrows = [
    { icon: '/Vector.svg', title: 'Graphic Design',num:"+2" },
    { icon: '/Vector.svg', title: 'Graphic Design',num:"+150" },
    { icon: '/Vector.svg', title: 'Graphic Design',num:"95%" },
    { icon: '/Vector.svg', title: 'Graphic Design',num:"+100" },

];

export default function About() {

    return (
        <section className=" text-[#1E1E1E] py-16 px-6 relative mt-32 ">

            {/* Section Title */}
            <div className='flex flex-col justify-center items-center gap-10'>

                <h2 className="racing-sans text-[48px] text-center font-racing text-white w-[650px]">
                    <span className='text-white w-[233px] h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3'>About</span></h2>


                <p className='text-[20px] archivo text-center text-[#222222] max-w-md mx-auto '>Senior experts. On-demand requests. Fast
                    turnarounds. Flat monthly fee. Cancel anytime.</p>

                <div className="flex gap-4">
                    {arrows.map((item, index) => (
                        <div key={index} className="w-[300px] flex flex-col justify-center items-center gap-[10px] p-10 bg-[#222222] rounded-[32px]">
                            <img src={item.icon} alt={item.title} className="w-10 h-10" />
                            <h3 className="text-[28px] font-semibold archivo text-white mt-6">{item.title}</h3>
                            <h3 className="racing-sans text-[48px] text-white font-racing">{item.num}</h3>
                        </div>
                    ))}
                </div>

                <Button className=' mt-[35px] w-[225px] h-[60px] text-black hover:text-white' path='/contact'>
                    Discover
                </Button>

            </div>


        </section>
    );
}
 