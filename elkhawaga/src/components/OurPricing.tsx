import React from 'react';
import Button from './Ui/Button';
import { plans } from '../data';

export default function OurPricing() {

    return (
        <section id='pricing' className="bg-white text-[#1E1E1E] py-16 px-6 relative mt-32 ">


            {/* Section Title */}
            <div className='flex flex-col justify-center items-center gap-8 '>

                <h2 className="racing-sans text-[48px] text-center font-racing text-[#1E1E1E] "> Simple <span className='text-white w-[233px] h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3'> pricing  </span>  to level up your brand. </h2>

                <p className='text-[20px] archivo text-center text-[#222222] max-w-md mx-auto '>Senior experts. On-demand requests. Fast
                    turnarounds. Flat monthly fee. Cancel anytime.</p>

            </div>

            {/* Pricing Plans */}
            <div className="flex flex-col lg:flex-row justify-center items-start gap-6 p-6 mt-[48px] min-h-screen">
                {plans.map((plan, index) => (
                    <div key={index} className="bg-[#222222] text-white p-6 rounded-3xl w-full max-w-sm shadow-xl flex flex-col justify-between min-h-[700px] hover:scale-105 transition-transform duration-300">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">{plan.title}</h2>
                                {plan.note && (
                                    <span className="bg-[#BE1E2D] text-white text-xs font-semibold px-2 py-1 rounded-full">
                                        {plan.note}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-300 mb-2">{plan.description}</p>
                            <h3 className="text-3xl font-bold text-[#BE1E2D] mb-1 font-racing racing-sans ">{plan.price}</h3>
                            <p className="text-xs text-gray-400 mb-4">{plan.frequency}</p>
                            <ul className="mb-6 space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-[#BE1E2D]">+</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-auto flex justify-center">
                            <Button className=' mt-[35px] w-[225px] h-[60px] text-white ' path='/contact'>
                            Click to buy
                            </Button>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}
