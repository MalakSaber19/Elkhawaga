import MainLayout from "../MainLayout";
import About from "../About";
import { GoArrowRight } from "react-icons/go";
import { AboutImage, LogoPartners } from "../../data";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import Button from "../Ui/Button";

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="mb-10 overflow-hidden">
        <div className="bg-[#1E1E1E] py-24 px-10 w-[110%] -translate-x-[5%] -rotate-3  mb-8 overflow-hidden relative -top-3 origin-left">
          <div className="bg-[#BE1E2D] py-2 px-2  w-[50%] -rotate-1  mb-8 absolute -bottom-10 right-1 -z-10"></div>
        </div>

        <About></About>

        <div className="flex justify-center gap-[56px] mt-20 ">
          <div className="flex flex-col gap-[25px] w-[757px]">
            <h2 className="racing-sans font-racing text-[48px] text-black">
              {" "}
              <span className="text-white w-[233px] h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3 mr-2">
                Who We{" "}
              </span>{" "}
              Are{" "}
            </h2>
            <p className="text-[24px] font-normal text-[#222222b7] archivo">
              Despite being a small team, we believe that our size gives us an
              advantage, allowing us to be nimble, adaptable, and able to work
              closely with our clients to deliver truly awesome designs.
            </p>

            <div className="flex justify-center items-center relative rounded-[32px] w-[757px]">
              <img
                className="w-full h-full rounded-[32px] "
                src={"/Colorful Sticky Notes Brainstorming.jpeg"}
                alt=""
              />
              <div className="absolute inset-0 bg-[#0000007e] flex items-start justify-start bg-gradient-to-t from-[#000000] to-[#0000] h-full w-ful rounded-[32px]">
                <img
                  className=" absolute -top-6 -left-6"
                  src={"/Star 1.svg"}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center relative rounded-[32px] w-[443px] ">
            <img
              className="w-full h-full rounded-[32px] "
              src={"/patrick-frossard-nYWfclD5jnI-unsplash (1).jpg"}
              alt=""
            />
            <div className="absolute inset-0 bg-[#0000007e] flex items-start justify-start bg-gradient-to-t from-[#000000] to-[#0000] h-full w-ful rounded-[32px] "></div>
          </div>
        </div>

        <section className="section  overflow-hidden h-[550px] relative mt-20">
          <div className=" relative mx-2 md:mx-0">
            <div className=" absolute top-32 md:left-[10%] md:w-[650px]  text-[#FFFFFF]">
              <h2 className="text-[25px]  md:text-[35px] racing-sans font-racing font-bold">
                Our{" "}
                <span className="bg-[#BE1E2D] px-1 rounded-lg text-[#FFF]">
                  Mission
                </span>
              </h2>
              <p>
                To empower businesses through innovative digital solutions,
                tailored to their unique needs, enhancing their digital presence
                and achieving their goals efficiently and effectively.
              </p>
            </div>
            <div className=" absolute z-30 top-[190px] md:top-[280px] md:right-[10%] md:w-[650px] text-[#FFFFFF] ">
              <h2 className="text-[25px]  md:text-[35px] racing-sans font-racing font-bold">
                Our{" "}
                <span className="bg-[#BE1E2D] px-1 rounded-lg  text-[#FFF]">
                  Vision
                </span>
              </h2>
              <p>
                To be the leading choice for businesses in the Middle East
                seeking digital transformation, by delivering advanced
                technological solutions and building long-term partnerships
                based on trust and innovation.
              </p>
            </div>
          </div>
          <div className="w-[2000px] h-4 bg-white rotate-[-10deg] absolute right-0 mt-60"></div>
          <div className="w-[200%] md:rotate-[-15deg] h-[550px] -z-10 bg-[#222222]  absolute top-0"></div>
          <div className="w-[200%] md:rotate-[0deg] h-[550px] -z-10 bg-[#222222]  absolute bottom-0"></div>
          <div className="absolute right-96 top-14 text-white text-6xl">✦</div>
          <div className="absolute left-96 bottom-14 text-white text-6xl">
            ✦
          </div>
        </section>

        <section className="flex flex-col justify-center items-center mt-20">
          <h2 className="racing-sans font-racing text-[48px] text-black">
            {" "}
            Our{" "}
            <span className="text-white w-[233px] h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3">
              Partners
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20 ">
            {LogoPartners.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-10 "
              >
                <img src={item} alt={"item.title"} className="w-[250px]" />
              </div>
            ))}
          </div>
          <div className="w-[40%] mt-20 h-[2px] bg-[#222222c8]"></div>
        </section>

        <section className="flex flex-col justify-center items-center mt-20">
          <h2 className="racing-sans font-racing text-[48px] text-black ">
            {" "}
            Our{" "}
            <span className="text-white w-[233px] h-[60px] bg-[#BE1E2D] rounded-[16px] py-1 px-3">
              Team
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto">
            {AboutImage.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-[390px] h-[442px] object-cover"
                />

                <div className="w-[300px] bg-[#222] border-t-8 border-[#BE1E2D] text-center py-4 -mt-6 z-10 relative">
                  <p className="text-white font-bold text-lg">{item.title}</p>
                  <p className="text-[#ffffffd8] text-sm">{item.subtitle}</p>
                </div>

                <div className="flex justify-center items-center gap-4 mt-4">
                  <div className="w-9 h-9 bg-[#BE1E2D] rounded-full flex justify-center items-center">
                    <FaFacebookF className="text-white text-sm" />
                  </div>
                  <div className="w-9 h-9 bg-[#BE1E2D] rounded-full flex justify-center items-center">
                    <FaInstagram className="text-white text-sm" />
                  </div>
                  <div className="w-9 h-9 bg-[#BE1E2D] rounded-full flex justify-center items-center">
                    <FaTwitter className="text-white text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            className=" mt-[35px] w-[225px] h-[60px] hover:text-white"
            path="/contact"
          >
            {" "}
            Contact us{" "}
          </Button>
        </section>
      </section>
    </MainLayout>
  );
}
