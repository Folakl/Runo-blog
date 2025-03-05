import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import facebook from '../assets/Vectorfb.png';
import Ig from '../assets/VectorIg.png';
import youtube from '../assets/Vectoryoutube - Copy.png';
import x from '../assets/VectorX.png';
import pinterest from '../assets/VectorPinterest.png';
import searchbar from '../assets/Search Line icon PNG and SVG Vector Free Download.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#menu") && !event.target.closest("#menubar")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="py-5 grid grid-cols-2 bg-[#252424] text-white lg:h-[80px] md:h-[50px] h-[50px] relative">
      {/* Logo */}
      <div className="font-bold flex justify-start ml-5">
        <h3>RUNO</h3>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden md:block block justify-self-end pr-2">
        <ion-icon
          name="menu-outline"
          id="menubar"
          className="w-[30px] h-[30px] text-white cursor-pointer"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        ></ion-icon>
      </div>

      {/* Desktop Navigation */}
      <div className="lg:grid md:hidden hidden lg:grid-cols-2 md:grid-cols-2 grid-cols-1 pr-[50px]">
        <div className="flex lg:gap-8 md:gap-5 gap-5 ml-5 lg:mt-[10px] md:mt-[10px] mt-5">
          <Link className="cursor-pointer" to="/">Home</Link>
          <Link className="cursor-pointer" to="/About">About</Link>
          <Link className="cursor-pointer" to="/Articles">Articles</Link>
          <Link className="cursor-pointer" to="/Adventure">Contact</Link>
        </div>

        {/* Icons Section */}
        <div className="lg:flex md:hidden hidden lg:gap-8 md:gap-5 lg:mt-[10px] md:mt-[10px] mx-5">
          <h3>|</h3>
          <img src={facebook} className="w-[20px] h-[20px]" alt="Facebook" />
          <img src={x} className="w-[20px] h-[20px]" alt="X (Twitter)" />
          <img src={youtube} className="w-[20px] h-[20px]" alt="YouTube" />
          <img src={pinterest} className="w-[20px] h-[20px]" alt="Pinterest" />
          <img src={Ig} className="w-[20px] h-[20px]" alt="Instagram" />
          <img src={searchbar} className="w-[20px] h-[20px]" alt="Search" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full right-2 mt-2 w-[120px] p-3 bg-white text-black shadow-lg rounded-md`}
      >
        <Link className="cursor-pointer block hover:text-gray-500 py-1" to="/">Home</Link>
        <Link className="cursor-pointer block hover:text-gray-500 py-1" to="/About">About</Link>
        <Link className="cursor-pointer block hover:text-gray-500 py-1" to="/Articles">Articles</Link>
        <Link className="cursor-pointer block hover:text-gray-500 py-1" to="/Adventure">Contact</Link>

        <hr className="border-t border-gray-300 my-3" />

        <div className="grid grid-cols-3 gap-2">
          <img src={facebook} className="w-[20px] h-[20px]" alt="Facebook" />
          <img src={x} className="w-[20px] h-[20px]" alt="X (Twitter)" />
          <img src={youtube} className="w-[20px] h-[20px]" alt="YouTube" />
          <img src={pinterest} className="w-[20px] h-[20px]" alt="Pinterest" />
          <img src={Ig} className="w-[20px] h-[20px]" alt="Instagram" />
          <img src={searchbar} className="w-[20px] h-[20px]" alt="Search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

