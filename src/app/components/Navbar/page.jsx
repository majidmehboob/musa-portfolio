"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-75 bg-gray-800">
        <div className="container mx-auto px-6 flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-white">Musa Umer</h1>
          <ul className="hidden outline-none md:flex space-x-6 text-white">
            <Link href="#home" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="#projects" className="hover:text-gray-400">
              About
            </Link>

            <Link href="#blog" className="hover:text-gray-400">
              Services
            </Link>
            <Link href="#contact" className="hover:text-gray-400">
              Portfolio
            </Link>
            <Link href="#contact" className="hover:text-gray-400">
              Contact Us
            </Link>
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
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 z-40 md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          <li>
            <Link
              href="#home"
              className="text-lg hover:text-gray-400"
              onClick={toggleSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-lg hover:text-gray-400"
              onClick={toggleSidebar}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-lg hover:text-gray-400"
              onClick={toggleSidebar}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="#blog"
              className="text-lg hover:text-gray-400"
              onClick={toggleSidebar}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}



  // <div className="font-sans">
  //   {/* Hero Section */}
  //   <section className="bg-blue-900 text-white py-20">
  //     <div className="container mx-auto text-center">
  //       <h1 className="text-4xl font-bold">
  //         Unlocking Innovation with IT Expertise
  //       </h1>
  //       <p className="mt-4">
  //         Providing professional IT services for your business growth.
  //       </p>
  //       <button className="mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded-md">
  //         Learn More
  //       </button>
  //     </div>
  //   </section>


  //   {/* Projects Section */}
  //   <section className="py-16 bg-white">
  //     <div className="container mx-auto">
  //       <h2 className="text-center text-3xl font-bold mb-10">
  //         Recent Projects
  //       </h2>
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //         {[...Array(3)].map((_, i) => (
  //           <div
  //             key={i}
  //             className="bg-gray-100 p-6 shadow-md rounded-md hover:shadow-lg"
  //           >
  //             <div className="h-40 bg-gray-300 mb-4"></div>
  //             <h3 className="text-xl font-bold">Project {i + 1}</h3>
  //             <p className="text-gray-600 mt-2">
  //               A short description of the project.
  //             </p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>

  //   {/* Testimonials Section */}
  //   <section className="py-16 bg-gray-100">
  //     <div className="container mx-auto">
  //       <h2 className="text-center text-3xl font-bold mb-10">
  //         What Clients Say
  //       </h2>
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //         {[...Array(3)].map((_, i) => (
  //           <div
  //             key={i}
  //             className="bg-white p-6 text-center shadow-md rounded-md"
  //           >
  //             <p className="text-gray-600 italic">
  //               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
  //               et urna vitae sapien."
  //             </p>
  //             <h4 className="mt-4 font-bold">Client {i + 1}</h4>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>

  //   {/* Footer */}
  //   <footer className="bg-blue-900 text-white py-6">
  //     <div className="container mx-auto text-center">
  //       <p>© 2024 Your Portfolio. All Rights Reserved.</p>
  //     </div>
  //   </footer>
  // </div>;


  {
    /* Dynamic Grid Background */
  }
  {
    /* <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,_100px)] gap-4 z-0">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-700 opacity-70"
            style={{
              width: "100px",
              height: "100px",
            }}
          ></div>
        ))}
      </div> */
  }