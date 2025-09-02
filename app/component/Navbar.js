"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="w-full bg-white fixed top-0 z-50 shadow-sm px-4 sm:px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between relative">
          {/* Left: Hamburger menu on mobile */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <FaBars className="text-xl text-[#79287a]" />
              <span className="font-bold text-[#79287a]">MENU</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <span className="text-[#79287a] hover:text-[#79287a] text-sm font-medium transition-colors cursor-pointer">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0 text-center">
            <Link href="/">
              <div
                style={{ fontFamily: "var(--font-sacramento)" }}
                className="text-2xl sm:text-4xl font-bold text-[#79287a] px-6 py-2 cursor-pointer"
              >
                Beauty For You
              </div>
            </Link>
          </div>

          {/* Right: Desktop social icons / Mobile call button */}
          <div className="flex items-center">
            {/* Desktop Social Icons */}
            <div className="hidden lg:flex space-x-3">
              <a
                href="https://www.facebook.com/share/19GEidojQ2/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full text-[#3b5998] hover:bg-[#3b5998] hover:text-white transition-colors"
                aria-label="Facebook page"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://www.instagram.com/beautyforyou515?igsh=eXR3aWlxaDJndTFl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-colors"
                aria-label="Instagram profile"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://wa.me/918420507317"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                aria-label="WhatsApp chat"
              >
                <FaWhatsapp size={14} />
              </a>
            </div>

            {/* Mobile: Contact/Call Button */}
            <a
              href="tel:8420507317"
              className="lg:hidden bg-[#79287a] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md flex items-center gap-2"
            >
              <FaPhone size={12} />
              Call Now
            </a>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="w-full bg-white shadow-lg py-4 px-6 lg:hidden mt-2 space-y-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <span
                  className="block py-3 text-[#79287a] font-medium border-b border-[#f0e6d9] hover:text-[#79287a] cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-[#eee]">
              <a
                href="https://www.facebook.com/share/19GEidojQ2/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#3b5998] hover:bg-[#3b5998] hover:text-white transition-colors"
                aria-label="Facebook page"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/beautyforyou515?igsh=eXR3aWlxaDJndTFl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-colors"
                aria-label="Instagram profile"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://wa.me/918420507317"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                aria-label="WhatsApp chat"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}