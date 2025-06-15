import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { filters, images } from "../data";
import { NavLink } from "react-router";

type ImageType = {
  src: string;
  alt: string;
};

type VisibleImage = ImageType & {
  position: "far-left" | "left" | "center" | "right" | "far-right";
  index: number;
};

export default function OurBestWorks() {
  const [activeCategory, setActiveCategory] = useState("Graphic Design");
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const typedImages = images as unknown as ImageType[];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === typedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? typedImages.length - 1 : prevIndex - 1
    );
  };

const getVisibleImages = (): VisibleImage[] => {
  const visible: VisibleImage[] = [];

  if (isSmallScreen) {
    const leftIndex =
      currentIndex === 0 ? typedImages.length - 1 : currentIndex - 1;
    visible.push({
      ...typedImages[leftIndex],
      position: "left",
      index: leftIndex,
    });

    visible.push({
      ...typedImages[currentIndex],
      position: "center",
      index: currentIndex,
    });

    const rightIndex =
      currentIndex === typedImages.length - 1 ? 0 : currentIndex + 1;
    visible.push({
      ...typedImages[rightIndex],
      position: "right",
      index: rightIndex,
    });

    return visible;
  }

  // الوضع العادي (5 صور)
  const farLeftIndex =
    currentIndex === 0
      ? typedImages.length - 2
      : currentIndex === 1
      ? typedImages.length - 1
      : currentIndex - 2;
  visible.push({
    ...typedImages[farLeftIndex],
    position: "far-left",
    index: farLeftIndex,
  });

  const leftIndex =
    currentIndex === 0 ? typedImages.length - 1 : currentIndex - 1;
  visible.push({
    ...typedImages[leftIndex],
    position: "left",
    index: leftIndex,
  });

  visible.push({
    ...typedImages[currentIndex],
    position: "center",
    index: currentIndex,
  });

  const rightIndex =
    currentIndex === typedImages.length - 1 ? 0 : currentIndex + 1;
  visible.push({
    ...typedImages[rightIndex],
    position: "right",
    index: rightIndex,
  });

  const farRightIndex =
    currentIndex === typedImages.length - 1
      ? 1
      : currentIndex === typedImages.length - 2
      ? 0
      : currentIndex + 2;
  visible.push({
    ...typedImages[farRightIndex],
    position: "far-right",
    index: farRightIndex,
  });

  return visible;
};

  const getImageStyles = (position: string) => {
    switch (position) {
      case "center":
        return {
          scale: "scale-110",
          opacity: "opacity-100",
          blur: "",
          zIndex: "z-20",
          width: "350px",
          height: "350px",
        };
      case "left":
      case "right":
        return {
          scale: "scale-100",
          opacity: "opacity-80",
          blur: "blur-[2px]",
          zIndex: "z-10",
          width: "300px",
          height: "300px",
        };
      case "far-left":
      case "far-right":
        return {
          scale: "scale-90",
          opacity: "opacity-50",
          blur: "blur-[3px]",
          zIndex: "z-0",
          width: "280px",
          height: "280px",
        };
      default:
        return {
          scale: "scale-95",
          opacity: "opacity-60",
          blur: "blur-sm",
          zIndex: "z-0",
          width: "20px",
          height: "280px",
        };
    }
  };




  return (
    <section className="bg-[#1E1E1E] text-white py-20 px-2 lg:px-6 relative mt-32 ">
      <div className=" absolute archivo -left-9 lg:-left-14 top-9 lg:top-20 bg-[#BE1E2D] w-[110px] h-[40px] lg:w-[165px] lg:h-[55px] rotate-270 text-white flex justify-center items-center text-[12px] lg:text-[18px] font-medium">
        <p> WHAT WE DO</p>
      </div>

      <div className=" hidden lg:block absolute lg:left-40 left-20 lg:top-40 top-10 text-white text-4xl lg:text-6xl">
        ✦
      </div>
      <div className=" hidden lg:block absolute lg:right-40 right-2 lg:top-56 top-32 text-white text-4xl lg:text-6xl">
        ✦
      </div>

      <h2 className="racing-sans text-[30px] lg:text-[48px] text-center font-racing text-white mb-4">
        Our Best{" "}
        <span className="bg-[#BE1E2D] rounded-[16px] lg:py-2 px-4 inline-block">
          Works
        </span>
      </h2>

      <p className="text-[16px] lg:text-[20px] archivo text-center text-[#FCFCFC] lg:max-w-xl lg:mx-auto mb-8 lg:mb-12">
        Katalyst Studio follows a collaborative and iterative approach to
        design, with a focus on understanding and meeting the unique needs of
        each client.
      </p>

      <div className="flex justify-center gap-4 mb-12">
        {filters.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`lg:px-6 px-3 py-2 rounded-full text-[12px] lg:text-sm font-semibold transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#BE1E2D] text-white"
                : "bg-white text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center justify-center gap-8 mt-10 w-full ">
          {getVisibleImages().map((img, index) => {
            const styles = getImageStyles(img.position);
            return (
              <div
                key={`${img.index}-${index}`}
                className={` transition-all duration-1000 ease-in-out overflow-hidden shadow-2xl ${styles.scale} ${styles.opacity} ${styles.blur} ${styles.zIndex}`}
                style={{
                  width: styles.width,
                  height: styles.height,
                  borderRadius: "20px",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                  onClick={() => setCurrentIndex(img.index)}
                  style={{ borderRadius: "20px" }}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
          >
            <IoIosArrowRoundBack size={30} />
          </button>
          <button
            onClick={nextSlide}
            className="lg:w-[56px] lg:h-[56px] w-[40px] h-[40px] border border-[#FCFCFC] text-[#FCFCFC] transition-all duration-300 hover:border-[#BE1E2D] hover:bg-[#BE1E2D] rounded-full flex items-center justify-center"
          >
            <IoIosArrowRoundForward size={30} />
          </button>
        </div>

        <div className="flex justify-center lg:justify-end w-full lg:mt-8 lg:pr-6">
          <NavLink to={"/work"}>
            <button className="w-[140px] h-[45px] lg:w-[166px] lg:h-[57px] flex items-center justify-center gap-2 border border-white rounded-full hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition">
              See More <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
