import { useState } from "react";
import MainLayout from "../MainLayout";
import { dataServices, filters, image } from "../../data";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Button from "../Ui/Button";
import { NavLink } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("Graphic Design");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <MainLayout>
      <section className="bg-[#1E1E1E] text-white py-40 px-6 relative ">
        {/* Sidebar Text */}
        <div className="absolute archivo -left-14 top-40 bg-[#BE1E2D] w-[165px] h-[55px] rotate-270 text-white flex justify-center items-center text-[18px] font-medium">
          <p> WHAT WE DO</p>
        </div>

        {/* Stars Decoration (optional) */}
        <div className="absolute left-40 top-40 text-white text-6xl">✦</div>
        <div className="absolute right-40 top-56 text-white text-6xl">✦</div>

        {/* Section Title */}
        <h2 className="racing-sans text-[48px] text-center font-racing text-white mb-4 mt-10 w-[650px] mx-auto">
          How Our Design Process{" "}
          <span className="bg-[#BE1E2D] rounded-[16px] py-1 px-4 inline-block">
            Works
          </span>
        </h2>

        <p className="text-[20px] archivo text-center text-[#ffffffe8] w-[680px] mx-auto mb-12 mt-4">
          Katalyst Studio follows a collaborative and iterative approach to
          design, with a focus on understanding and meeting the unique needs of
          each client.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#BE1E2D] text-white"
                  : "bg-white text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="flex flex-col items-center gap-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-9xl mx-auto">
            {dataServices.map((img, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectedImage({ src: img.src, alt: "Image description" })
                }
                className={` relative w-[550px] h-[700px]  bg-[#2A2A2A] p-10 rounded-[56px] flex flex-col justify-center items-start gap-[40px]`}
              >
                <p className=" racing-sans font-racing text-[32px] font-normal text-[#ffffffd8]">
                  {img.num}
                </p>
                <img
                  src={img.src}
                  alt={"img.alt"}
                  className={`w-[550px] h-[300px] object-cover rounded-[32px]`}
                />
                <div className="flex flex-col gap-4">
                  <p className="racing-sans font-racing text-[40px] font-normal text-white">
                    {img.title}
                  </p>
                  <p className="archivo text-[18px] font-normal text-[#ffffffd8]">
                    {img.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
        <div className="bg-[#FFFFFF] py-32 px-10 w-[110%] -translate-x-[5%] -rotate-4  mb-8 overflow-hidden relative -top-3 origin-left ">
          <div className="bg-[#BE1E2D] py-4 px-2  w-[70%] -rotate-2  mb-8 absolute -top-6 laft-0 -z-10"></div>
          <div className="rotate-4 text-[#222222] flex justify-center items-center gap-6 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <Button
              className=" inline-flex w-[225px] h-[60px] hover:text-white"
              path="/contact"
            >
              Contact us{" "}
            </Button>

            <NavLink to={"/work"}>
              <button className="w-[225px] h-[57px] flex items-center justify-center gap-2 border border-[#222222] rounded-full hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition">
                See More <FaLongArrowAltRight />
              </button>
            </NavLink>
          </div>
        </div>
    </MainLayout>
  );
}
