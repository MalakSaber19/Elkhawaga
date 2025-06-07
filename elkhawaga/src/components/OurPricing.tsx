import React from 'react';
import Button from './Ui/Button';

export default function OurPricing() {

    return (
        <section className="bg-white text-[#1E1E1E] py-16 px-6 relative mt-32 ">


            {/* Section Title */}
            <div className='flex flex-col justify-center items-center gap-8 '>

                <h2 className="racing-sans text-[48px] text-center font-racing text-[#1E1E1E] "> Simple <span className='text-white w-[233px] h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3'> pricing  </span>  to level up your brand. </h2>

                <p className='text-[20px] archivo text-center text-[#222222] max-w-md mx-auto '>Senior experts. On-demand requests. Fast
                turnarounds. Flat monthly fee. Cancel anytime.</p>

            </div>


        </section>
    );
}
