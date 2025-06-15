import React, { useState } from "react";
import Button from "./Ui/Button";
import { plans } from "../data";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function OurPricing() {
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);

  const nextPlan = () => {
    setCurrentPlanIndex((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  const prevPlan = () => {
    setCurrentPlanIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  return (
    <section
      id="pricing"
      className="bg-white text-[#1E1E1E] py-8 lg:py-16 px-6 relative lg:mt-32 "
    >
      {/* Section Title */}
      <div className="flex flex-col justify-center items-center gap-2 lg:gap-8 ">
        <h2 className="racing-sans text-[30px] lg:text-[48px] text-center font-racing text-[#1E1E1E] ">
          {" "}
          Simple{" "}
          <span className="text-white w-[117px] lg:w-[233px] h-[36px] lg:h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3">
            {" "}
            pricing{" "}
          </span>{" "}
          to level up your brand.{" "}
        </h2>

        <p className="text-[16px] lg:text-[20px] archivo text-center text-[#222222] max-w-md mx-auto ">
          Senior experts. On-demand requests. Fast turnarounds. Flat monthly
          fee. Cancel anytime.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 p-6 mt-[28px] lg:mt-[48px] min-h-screen">
        <div className="flex flex-col lg:hidden items-center justify-center gap-4">
          <div className="bg-[#222222] text-white p-6 rounded-3xl w-[90vw] max-w-sm shadow-xl flex flex-col justify-between min-h-[700px] hover:scale-105 transition-transform duration-300">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  {plans[currentPlanIndex].title}
                </h2>
                {plans[currentPlanIndex].note && (
                  <span className="bg-[#BE1E2D] text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {plans[currentPlanIndex].note}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-300 mb-2">
                {plans[currentPlanIndex].description}
              </p>
              <h3 className="text-3xl font-bold text-[#BE1E2D] mb-1 font-racing racing-sans ">
                {plans[currentPlanIndex].price}
              </h3>
              <p className="text-xs text-gray-400 mb-4">
                {plans[currentPlanIndex].frequency}
              </p>
              <ul className="mb-6 space-y-2">
                {plans[currentPlanIndex].features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className=" text-[#BE1E2D]">+</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex justify-center">
              <Button
                className="inline-flex mt-[35px] w-[225px] h-[60px] text-white "
                path="/contact"
              >
                Click to buy
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-4 items-center mt-4 w-full">
            <button
              onClick={prevPlan}
              className="lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] border border-[#BE1E2D] text-[#BE1E2D] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] hover:text-white rounded-full flex items-center justify-center"
            >
              <IoIosArrowRoundBack size={30} />
            </button>
            <button
              onClick={nextPlan}
              className="lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] border border-[#BE1E2D] text-[#BE1E2D] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] hover:text-white rounded-full flex items-center justify-center"
            >
              <IoIosArrowRoundForward size={30} />
            </button>
          </div>
        </div>


        <div className="hidden lg:flex flex-row justify-center items-start gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#222222] text-white p-6 rounded-3xl w-full max-w-sm shadow-xl flex flex-col justify-between min-h-[700px] hover:scale-105 transition-transform duration-300"
            >
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
                <h3 className="text-3xl font-bold text-[#BE1E2D] mb-1 font-racing racing-sans ">
                  {plan.price}
                </h3>
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
                <Button
                  className="inline-flex mt-[35px] w-[225px] h-[60px] text-white "
                  path="/contact"
                >
                  Click to buy
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
