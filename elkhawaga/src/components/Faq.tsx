import React, { useState } from 'react';
import Button from './Ui/Button';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase for a full refund.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide.",
    },
    {
      question: "How can I track my order?",
      answer: "You will receive a tracking number via email once your order is shipped.",
    },
  ];

export default function FAQs() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };


    return (
        <section className=" text-[#1E1E1E] py-16 px-6 relative mt-32 ">

            {/* Section Title */}
            <div className='flex flex-col justify-center items-center gap-3'>
                <div className='flex justify-center items-center gap-2 '>
                    <p className='w-[163px]  border-[1px] border-[#222222]'></p>
                    <p className='text-[16px] text-[#222222] font-normal'>FAQs</p>
                    <p className='w-[163px]  border-[1px] border-[#222222]'></p>

                </div>

                <h2 className="racing-sans text-[48px] text-center font-racing text-[#202020] w-[500px]">
                    Frequently Asked<br />
                    <span className="inline-block text-white bg-[#BE1E2D] rounded-[16px] py-1 px-3 mt-2">
                        Questions
                    </span>
                </h2>



            </div>

            <div className="w-full max-w-6xl mx-auto mt-10 space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className=" rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className={`w-full flex justify-between items-center p-6 text-left text-lg font-medium  transition ${activeIndex === index ? "bg-[#222222] text-[#FFFFFF] " : "bg-[#F0F0F0] text-[#222222]"
                                    }`}
                        >
                            {faq.question}
                            <FaChevronDown
                                className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180 " : ""
                                    }`}
                            />
                        </button>
                        {activeIndex === index && (
                            <div className="px-4 p-4 text-gray-700 text-base">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>


        </section>
    );
}
