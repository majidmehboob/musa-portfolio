"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close sidebar if it's open
  };

  return (
    <>
      <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-75 bg-gray-800">
        <div className="container mx-auto px-6 flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-white">
            <span className="bg-blue-800 rounded-md px-2 py-1">Musa</span> Umer
          </h1>
          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-6 text-white">
            <li>
              <a
                href="#hero-section"
                className="hover:text-gray-400"
                onClick={(e) => scrollToSection(e, "hero-section")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us-section"
                className="hover:text-gray-400"
                onClick={(e) => scrollToSection(e, "about-us-section")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services-section"
                className="hover:text-gray-400"
                onClick={(e) => scrollToSection(e, "services-section")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials-section"
                className="hover:text-gray-400"
                onClick={(e) => scrollToSection(e, "testimonials-section")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact-section"
                className="hover:text-gray-400"
                onClick={(e) => scrollToSection(e, "contact-section")}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Hamburger Icon for small screens */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] bg-gray-800 text-gray-400 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 z-40 md:hidden`}
      >
        <ul className="flex flex-col items-start pl-5 pr-5 justify-start pt-5 h-full w-full space-y-6">
          <li className="pb-3 border-b border-gray-500 w-full">
            <a
              href="#hero-section"
              className="text-lg hover:text-gray-400 "
              onClick={(e) => scrollToSection(e, "hero-section")}
            >
              Home
            </a>
          </li>
          <li className="pb-3 border-b w-full border-gray-500">
            <a
              href="#about-us-section"
              className="text-lg hover:text-gray-400"
              onClick={(e) => scrollToSection(e, "about-us-section")}
            >
              About
            </a>
          </li>
          <li className="pb-3 border-b w-full border-gray-500">
            <a
              href="#services-section"
              className="text-lg hover:text-gray-400"
              onClick={(e) => scrollToSection(e, "services-section")}
            >
              Services
            </a>
          </li>
          <li className="pb-3 border-b w-full border-gray-500">
            <a
              href="#testimonials-section"
              className="text-lg hover:text-gray-400"
              onClick={(e) => scrollToSection(e, "testimonials-section")}
            >
              Portfolio
            </a>
          </li>
          <li className="pb-3 border-b w-full border-gray-500">
            <a
              href="#contact-section"
              className="text-lg hover:text-gray-400"
              onClick={(e) => scrollToSection(e, "contact-section")}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
