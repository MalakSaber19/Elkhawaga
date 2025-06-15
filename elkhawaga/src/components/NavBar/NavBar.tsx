import React, { useEffect, useState } from "react";
import Button from "../Ui/Button";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex lg:justify-evenly justify-between items-center p-4 text-white w-full top-0 left-0 right-0 fixed z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "backdrop-blur-sm bg-black/60 py-2  mx-auto"
          : " bg-transparent py-4"
      }`}
    >
      <div className="flex justify-center items-center lg:w-[100px] w-[70px] ">
        <NavLink to={"/"}>
          <img src={"/elkhawaga..logo -10 4 1.svg"} alt="" />
        </NavLink>
      </div>

      <div className="lg:flex justify-between items-center gap-6 p-4 archivo  hidden">
        <NavLink to={"/"}>
          <p>Home</p>{" "}
        </NavLink>
        <NavLink to={"/services"}>
          <p>Services</p>{" "}
        </NavLink>
        <NavLink to={"/work"}>
          <p>Portfolio</p>{" "}
        </NavLink>
        <HashLink smooth to="/#pricing">
          <p>Pricing</p>
        </HashLink>{" "}
        <NavLink to={"/about"}>
          <p>About</p>{" "}
        </NavLink>
      </div>

      <Button className="hidden lg:block" path="/contact">
        Contact us
      </Button>


      <div className="lg:hidden">
        {isOpen ? (
          <IoCloseOutline size={30} onClick={() => setIsOpen(false)} />
        ) : (
          <IoMenuOutline size={30} onClick={() => setIsOpen(true)} />
        )}
      </div>


      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 text-white flex flex-col items-center gap-4 py-6 lg:hidden z-40">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/work" onClick={() => setIsOpen(false)}>
            Portfolio
          </NavLink>
          <HashLink smooth to="/#pricing" onClick={() => setIsOpen(false)}>
            Pricing
          </HashLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <Button path="/contact" className="">
            Contact us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
