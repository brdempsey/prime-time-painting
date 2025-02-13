"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export const Navigation = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Function to close all menus
  const closeAllMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className="top-0 left-0 w-full bg-white shadow-md flex justify-between items-center p-4 font-bold">
      <Link href="/">
        {/* Logo here */}
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className={pathname === "/" ? "font-bold text-red-700" : "text-black"}>
          Home
        </Link>

        {/* Services Dropdown */}
        <div className="relative">
          <button onClick={() => setServicesOpen(!servicesOpen)} className={`text-black ${servicesOpen ? "font-bold text-red-700" : ""}`}>
            Services
          </button>
          {servicesOpen && (
            <div className="absolute left-0 bg-white shadow-md mt-2 space-y-2 py-2 w-48">
              <Link href="/design" className="block px-4 text-black hover:bg-gray-100" onClick={closeAllMenus}>
                Design
              </Link>
              <Link href="/interior" className="block px-4 text-black hover:bg-gray-100" onClick={closeAllMenus}>
                Interior
              </Link>
              <Link href="#" className="block px-4 text-black hover:bg-gray-100" onClick={closeAllMenus}>
                Exterior
              </Link>
            </div>
          )}
        </div>

        {/* About Dropdown */}
        <div className="relative">
          <button onClick={() => setAboutOpen(!aboutOpen)} className={`text-black ${aboutOpen ? "font-bold text-red-700" : ""}`}>
            About Us
          </button>
          {aboutOpen && (
            <div className="absolute left-0 bg-white shadow-md mt-2 space-y-2 py-2 w-48">
              <Link href="/about-us" className="block px-4 text-black hover:bg-gray-100" onClick={closeAllMenus}>
                About PrimeTime
              </Link>
              <Link href="#" className="block px-4 text-black hover:bg-gray-100" onClick={closeAllMenus}>
                Meet Our Team
              </Link>
            </div>
          )}
        </div>

        <Link href="/gallery" className={pathname === "/gallery" ? "font-bold text-red-700" : "text-black"}>
          Gallery
        </Link>
        <Link href="/contactus" className={pathname === "/contactus" ? "font-bold text-red-700" : "text-black"}>
          Contact Us
        </Link>

        <a href="tel:+15555555555">
          <button className="bg-[#1976d2] text-white py-2 px-4 rounded hover:bg-[#1565c0] transition duration-200">
            (555) 555-5555
          </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
        {menuOpen ? <FiX className="text-black" /> : <FiMenu className="text-black" />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden transition-all duration-300 ease-in-out transform ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <Link href="/" className="text-black py-2" onClick={closeAllMenus}>
          Home
        </Link>

        {/* Services Dropdown in Mobile */}
        <div className="relative">
          <button onClick={() => setServicesOpen(!servicesOpen)} className="text-black py-2">
            Services
          </button>
          {servicesOpen && (
            <div className="absolute left-0 bg-white shadow-md mt-2 space-y-2 py-2 w-48 transition-all duration-300 ease-in-out transform z-50">
              <Link href="/design" className="block px-4 text-black hover:bg-gray-100" onClick={closeAllMenus}>
                Design
              </Link>
              <Link href="/interior" className="block px-4 text-black hover:bg-gray-100" onClick={closeAllMenus}>
                Interior
              </Link>
              <Link href="#" className="block px-4 text-black hover:bg-gray-100" onClick={closeAllMenus}>
                Exterior
              </Link>
            </div>
          )}
        </div>

        {/* About Dropdown in Mobile */}
        <div className="relative">
          <button onClick={() => setAboutOpen(!aboutOpen)} className="text-black py-2">
            About Us
          </button>
          {aboutOpen && (
            <div className="absolute left-0 bg-white shadow-md mt-2 space-y-2 py-2 w-48 transition-all duration-300 ease-in-out transform">
              <Link href="/about-us" className="block px-4 text-black hover:bg-gray-100" onClick={closeAllMenus}>
                About PrimeTime
              </Link>
              <Link href="#" className="block px-4 text-black hover:bg-gray-100" onClick={closeAllMenus}>
                Meet Our Team
              </Link>
            </div>
          )}
        </div>

        <Link href="/gallery" className="text-black py-2" onClick={closeAllMenus}>
          Gallery
        </Link>
        <Link href="/contactus" className="text-black py-2" onClick={closeAllMenus}>
          Contact Us
        </Link>

        <a href="tel:+15555555555">
          <button className="bg-[#1976d2] text-white py-2 px-4 rounded hover:bg-[#1565c0] transition duration-200">
            (555) 555-5555
          </button>
        </a>
      </div>
    </nav>
  );
};
