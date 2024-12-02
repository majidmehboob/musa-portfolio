"use client";
import { useEffect, useState } from "react";
import { RiNodejsLine, RiReactjsFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import {
  SiMongodb,
  SiExpress,
  SiVisualstudiocode,
  SiBootstrap,
  SiJavascript,
} from "react-icons/si";
import { FaWordpress } from "react-icons/fa"; // Import WordPress logo
import { motion } from "framer-motion";

export default function AboutUs() {
  const icons = [
    { component: <RiNodejsLine size={42} />, color: "#539E43" },
    { component: <IoLogoHtml5 size={42} />, color: "#E44D26" },
    { component: <FaCss3Alt size={42} />, color: "#1572B6" },
    { component: <RiReactjsFill size={42} />, color: "#61DAFB" },
    { component: <SiMongodb size={42} />, color: "#47A248" },
    { component: <SiExpress size={42} />, color: "#000000" },
    { component: <FaWordpress size={42} />, color: "#21759B" }, // Added WordPress icon
    { component: <SiBootstrap size={42} />, color: "#7952B3" },
    { component: <SiVisualstudiocode size={42} />, color: "#007ACC" },
    {
      component: <SiJavascript size={42} style={{ fill: "#F7DF1E" }} />,
      color: "#F7DF1E",
    },
  ];

  // State to track mouse position
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [circleScale, setCircleScale] = useState(1); // For scale effect

  // Update position and scale based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCirclePosition({ x: clientX, y: clientY });

      // Set scale based on mouse position
      const distX = Math.abs(clientX - window.innerWidth / 2);
      const distY = Math.abs(clientY - window.innerHeight / 2);
      const distance = Math.sqrt(distX ** 2 + distY ** 2);
      const maxDist = Math.sqrt(
        (window.innerWidth / 2) ** 2 + (window.innerHeight / 2) ** 2
      );
      const scale = 1 - (distance / maxDist) * 0.2; // Shrinks circle as it moves closer to content
      setCircleScale(Math.max(scale, 0.8)); // Prevents shrinking too much
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div >
      <div className="flex justify-center items-center min-h-screen bg-gray-100 md:px-20 px-4 py-4 md:py-0">
        {/* Container */}
        <div className="bg-gray-200 py-4 rounded-lg shadow-inner shadow-gray-400/60 relative container h-auto md:h-[80vh] md:py-10  mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8 overflow-hidden">
          {/* Background Circle with inset shadow */}
          <motion.div
            className="absolute w-96 h-96 bg-blue-200 z-10 rounded-full pointer-events-none shadow-[inset_-15px_-15px_30px_rgba(0,0,0,0.2),inset_15px_15px_30px_rgba(0,0,0,0.15)]"
            style={{
              x: circlePosition.x - 192, // Adjusting to center the circle
              y: circlePosition.y - 192,
            }}
            animate={{
              scale: circleScale, // Apply the scaling effect based on mouse position
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            {/* No random circles, just the background circle with inset shadow */}
          </motion.div>

          {/* Left Section: About Me */}
          <div className="flex-1 flex flex-col gap-4 md:justify-start justify-center text-center md:text-left">
            <h2 className="z-20 text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              About Me
            </h2>
            <p className="z-20 text-center md:text-left text-lg md:text-xl text-gray-600 leading-relaxed md:mb-6 mb-2 md:w-[80%] w-full">
              {` As a web developer, I am responsible for designing and developing
              web pages. My primary focus is to create responsive, user-friendly
              experiences that meet the needs of a diverse online audience.`}
            </p>
          </div>

          {/* Right Section: My Skills */}
          <div className="flex-1 flex flex-col gap-4 justify-end items-center h-full">
            <div className="flex flex-col gap-2">
              <h3 className="z-20 text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center md:text-left">
                My Skills
              </h3>
              <p className="z-20 text-gray-600 text-center md:text-left mb-6">
                {`Technologies I've been working with recently`}
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 md:grid-cols-5 md:gap-4 gap-2 place-items-center">
                {icons.map((icon, index) => (
                  <motion.div
                    key={index}
                    className="h-16 w-16 md:mt-6 mt-2 mb-2 aspect-square bg-gray-200 shadow-[inset_-5px_-5px_8px_#ffffff7a,inset_5px_5px_8px_#a9a9aa7a] z-20 rounded-lg flex items-center justify-center cursor-grab"
                    drag
                    dragConstraints={{
                      top: -50,
                      bottom: 50,
                      left: -50,
                      right: 50,
                    }}
                    style={{ color: icon.color }}
                  >
                    {icon.component}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
