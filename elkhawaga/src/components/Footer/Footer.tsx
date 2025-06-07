import React from "react";

export default function Footer() {
    return (
      <footer className="bg-[#222222] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Tech Yard</h2>
            <p className="text-sm text-gray-400">
              We build websites, brands, and marketing strategies to grow your business.
            </p>
          </div>
  
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Portfolio</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
  
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Web Design</a></li>
              <li><a href="#" className="hover:text-white">Social Media</a></li>
              <li><a href="#" className="hover:text-white">Branding</a></li>
              <li><a href="#" className="hover:text-white">E-commerce</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Email: <a href="mailto:info@techyard.com" className="hover:text-white">info@techyard.com</a></li>
              <li>Phone: <a href="tel:+201234567890" className="hover:text-white">+20 123 456 7890</a></li>
              <li>Location: Cairo, Egypt</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Tech Yard Web & Social Solutions. All rights reserved.
        </div>
      </footer>
    );
  }
  