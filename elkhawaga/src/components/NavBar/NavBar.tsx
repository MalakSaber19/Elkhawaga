import React from 'react';
import Button from '../Ui/Button';

const NavBar: React.FC = () => {
    return (
        <nav className='flex justify-evenly items-center p-4 text-white absolute top-0 left-0 right-0 z-50 '>
            <div>
                <img src={"/elkhawaga..logo -10 4 1.svg"} alt="" />
            </div>
            <div className='flex justify-between items-center gap-6 p-4'>
                <p>Home</p>
                <p>Services</p>
                <p>Portfolio</p>
                <p>Pricing</p>
                <p>About</p>
            </div>
            <Button className=' rounded-[32px] border-2 border-[#BE1E2D] py-2 px-5 transition-all duration-300 ease-in-out' path='/contact'>
                Contact us 
            </Button>

        </nav>
    );
};

export default NavBar;