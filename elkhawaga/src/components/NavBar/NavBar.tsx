import React from 'react';
import Button from '../Ui/Button';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav className='flex justify-evenly items-center p-4 text-white absolute top-0 left-0 right-0 z-50  '>
            <div>
            <NavLink to={"/"}>
                <img src={"/elkhawaga..logo -10 4 1.svg"} alt="" />
            </NavLink>
            </div>
            <div className='flex justify-between items-center gap-6 p-4 archivo'>
                <NavLink to={"/"}><p>Home</p> </NavLink>
                <NavLink to={"/services"}><p>Services</p>  </NavLink>
                <NavLink to={"/work"}><p>Portfolio</p> </NavLink>
                <NavLink to={"/pricing"}><p>Pricing</p> </NavLink>
                <NavLink to={"/about"}><p>About</p> </NavLink>
            </div>
            <Button className=' ' path='/contact'>
                Contact us
            </Button>

        </nav>
    );
};

export default NavBar;