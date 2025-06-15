import React, { useState } from 'react';
import Button from './Ui/Button';

const Contact: React.FC = () => {
        const [formData, setFormData] = useState({
          name: "",
          email: "",
          message: "",
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();

          alert("Message sent!");
          setFormData({ name: "", email: "", message: "" });
        };
    return (
        <section className=" bg-[#222222] py-10 lg:py-16 px-4 lg:px-6 relative mt-32 ">

            <div className='lg:flex justify-between items-center lg:gap-10 lg:max-w-[1200px] mx-auto'>


                <div className='flex flex-col justify-start items-start gap-3'>
                    <div className='flex justify-center items-center gap-2 ml-1'>
                        <p className='w-[163px]  border-[1px] border-[#FFFFFF]'></p>
                        <p className='text-[16px] text-[#BE1E2D] font-bold'>Contact US</p>

                    </div>

                    <h2 className="racing-sans text-[30px] lg:text-[48px]  font-racing text-white lg:w-[500px]">

                        <span className="inline-block text-white bg-[#BE1E2D] rounded-[16px] py-1 px-3 mt-2">
                            Contact
                        </span> Us & We Can
                        Work Together
                    </h2>

                    <p className=' lg:w-[530px] text-[16px] lg:text-[20px] archivo text-[#FCFCFC] ml-1 '>
                        Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu enim id gravida pulvinar. Tristique consectetur mi curabitur congue enim dignissim
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full lg:max-w-2xl lg:mx-auto py-8 rounded-xl  space-y-5"
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE1E2D]"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE1E2D]"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#BE1E2D]"
                        ></textarea>

                        <Button className='inline-flex text-white mt-[20px] lg:mt-[35px] w-[225px] h-[60px]' path='/contact'>
                            Discover
                        </Button>
                    </form>




                </div>
                {/* Background Image */}
                <div className='hidden lg:block'>
                    <img src={"/Group 1 10.svg"} alt="" />
                </div>


            </div>






        </section>
    );
};

export default Contact;