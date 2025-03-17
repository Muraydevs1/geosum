import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white py-12">
      <div className="container mx-auto px-6 md:px-20">
        {/* Top Section - Contact */}
        <div className="text-center mb-10" id="Contacts">
          <p className="text-gray-400 uppercase tracking-wide">LET'S WORK TOGETHER</p>
          <h2 className="text-4xl font-bold text-orange-400 mt-2">
            +233 (0) 554061972
          </h2>
          <p className="mt-2 text-gray-300">Queen street, community 25 - Tema</p>
          <p className="text-gray-300">geosumresources@gmail.com</p>
        </div>

        {/* Bottom Section - Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-700 pt-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400">GeoSum Resource</h3>
            <p className="text-gray-300 mt-2">
            We provide the best industrial and technological services throughout Ghana.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="text-xl hover:text-orange-400 cursor-pointer" />
              <FaInstagram className="text-xl hover:text-orange-400 cursor-pointer" />
              <FaTwitter className="text-xl hover:text-orange-400 cursor-pointer" />
              <FaYoutube className="text-xl hover:text-orange-400 cursor-pointer" />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li className="hover:text-orange-400 cursor-pointer">About Us</li>
              <li className="hover:text-orange-400 cursor-pointer">Services</li>
              <li className="hover:text-orange-400 cursor-pointer">Projects</li>
              <li className="hover:text-orange-400 cursor-pointer">Contacts</li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li className="hover:text-orange-400 cursor-pointer">Construction Services</li>
              <li className="hover:text-orange-400 cursor-pointer">Mine Planning and Engineering Services</li>
              <li className="hover:text-orange-400 cursor-pointer">Geological engineering Services</li>
              <li className="hover:text-orange-400 cursor-pointer">Survey and Geotechnical Services</li>
              <li className="hover:text-orange-400 cursor-pointer">Health and Safety</li>
              <li className="hover:text-orange-400 cursor-pointer">Software and Data Management Services</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <form onSubmit={(e)=>e.preventDefault()}>
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-gray-300 mt-2">
              Send us an Email.
            </p>
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2 mt-4 bg-gray-800 text-white rounded outline-none"
            />
            <textarea name="message" placeholder="Message" rows={3} id="" className="w-full border border-orange-300 rounded py-3 px-4 mt-2 h-48 resize-none"></textarea>
            <button className="w-full mt-3 py-2 bg-orange-400 text-white rounded hover:bg-orange-500">
              SEND
            </button>
          </form>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex justify-between text-gray-400 text-sm">
          <p>© muray_dev</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 