import React, { useEffect, useState } from "react";
import Button from "../Ui/Button";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex justify-evenly items-center p-4 text-white w-full top-0 left-0 right-0 fixed  z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'backdrop-blur-sm bg-black/60 py-2  mx-auto' : ' bg-transparent py-4'
    }`} >
      <div>
        <NavLink to={"/"}>
          <img src={"/elkhawaga..logo -10 4 1.svg"} alt="" />
        </NavLink>
      </div>
      <div className="flex justify-between items-center gap-6 p-4 archivo">
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
      <Button className=" " path="/contact">
        Contact us
      </Button>
    </nav>
  );
};

export default NavBar;
