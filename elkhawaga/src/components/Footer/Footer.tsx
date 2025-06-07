import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlinePhone , MdOutlineEmail  } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";




export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#333] pb-10">
        {/* Logo and About */}
        <div className="space-y-4">
          <div className="flex flex-col justify-center items-start gap-2">
            <img src="/elkhawaga..logo -10 4 1.svg" alt="logo" className="w-32 h-20" />
            <div>
              <h3 className="text-white font-bold">El-khawaga Degital Marketing</h3>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Scelerisque vitae et vitae suspendisse vulputate vestibulum tortor nisi cursus. Egestas nulla in
          </p>
          <div className="flex gap-3">
            <div className="bg-[#BE1E2D] p-2 rounded-full"><FaFacebookF /></div>
            <div className="bg-[#BE1E2D] p-2 rounded-full"><FaInstagram /></div>
            <div className="bg-[#BE1E2D] p-2 rounded-full"><FaTwitter /></div>
            <div className="bg-[#BE1E2D] p-2 rounded-full"><FaLinkedinIn /></div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Content Creation</li>
            <li>Website Dev</li>
            <li>Mobile Dev</li>
            <li>SEO</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Compliance</li>
            <li>Case Studies</li>
            <li>Webinars</li>
            <li>Developers</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact Information</h4>
          <ul className="space-y-3 text-md">
            <li className="flex items-center gap-2 text-[#BE1E2D]">
              <MdOutlineEmail  /> <span className="text-gray-300">canvaslancer@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 text-[#BE1E2D]">
              <MdOutlinePhone/> <span className="text-gray-300">+00012345678</span>
            </li>
            <li className="flex items-center gap-2 text-[#BE1E2D]">
              <SlLocationPin /> <span className="text-gray-300">Lorem Ipsum Dummy text</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4 px-4">
        <p>Copyright © Canvas Lancer, 2023. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Website Terms</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
}
