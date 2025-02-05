"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const logo = "/ptp_nav_logo.png";

export const Navigation = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center p-4 z-50">
      {/* Logo */}
      <Link href="/">
        <Image src={logo} width={100} height={100} alt="Prime Time Painting Logo" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4">
        <Link href="/" className={pathname === "/" ? "font-bold" : "text-black-500"}>
          Home
        </Link>
        <Link href="#" className={pathname === "/about" ? "font-bold" : "text-black-500"}>
          About
        </Link>
        <Link href="#" className={pathname === "/contactus" ? "font-bold" : "text-black-500"}>
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
        {menuOpen ? <FiX/> : <FiMenu />}
      </button>

      {/* Mobile Dropdown Menu with Animation */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden 
        transition-all duration-300 ease-in-out transform ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        <Link href="/" className="text-black" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="#" className="text-black" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link href="#" className="text-black" onClick={() => setMenuOpen(false)}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};
