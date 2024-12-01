"use client";
import { useEffect, useState } from "react";
import { RiNodejsLine, RiReactjsFill } from "react-icons/ri";
import { LiaNodeJs } from "react-icons/lia";
import {
  SiExpress,
  SiMongodb,
  SiVisualstudiocode,
  SiFirebase,
  SiBootstrap,
  SiJavascript,
} from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

export default function AboutUs() {
  const icons = [
    { component: <RiNodejsLine size={42} />, color: "#539E43" },
    { component: <IoLogoHtml5 size={42} />, color: "#E44D26" },
    { component: <FaCss3Alt size={42} />, color: "#1572B6" },
    { component: <RiReactjsFill size={42} />, color: "#61DAFB" },
    { component: <SiMongodb size={42} />, color: "#47A248" },
    { component: <SiExpress size={42} />, color: "#000000" },
    { component: <SiFirebase size={42} />, color: "#FFCA28" },
    { component: <SiBootstrap size={42} />, color: "#7952B3" },
    { component: <SiVisualstudiocode size={42} />, color: "#007ACC" },
    {
      component: <SiJavascript size={42} style={{ fill: "#F7DF1E" }} />, // JavaScript icon with fill color
      color: "#F7DF1E",
    },
  ];

  // State to track mouse position
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  // Update position based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCirclePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate random circles inside the main background circle
  const generateRandomCircles = (num) => {
    const circles = [];
    for (let i = 0; i < num; i++) {
      const size = Math.random() * 40 + 20; // Random size between 20px and 60px
      const xPos = Math.random() * 100 - 50; // Random x position between -50% and 50%
      const yPos = Math.random() * 100 - 50; // Random y position between -50% and 50%
      const opacity = Math.random() * 0.4 + 0.2; // Random opacity between 0.2 and 0.6

      circles.push(
        <motion.div
          key={i}
          className="absolute bg-blue-900 rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `calc(50% + ${xPos}%)`,
            top: `calc(50% + ${yPos}%)`,
            opacity,
          }}
          animate={{
            x: [0, xPos],
            y: [0, yPos],
            opacity: [opacity, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        ></motion.div>
      );
    }
    return circles;
  };

  return (
    <Element name="section2">
      <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center px-16">
        {/* Container */}
        <div className="relative container h-auto md:h-[80vh] md:py-10 py-0 bg-gray-300 rounded-xl shadow-md mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8 overflow-hidden">
          {/* Background Circle */}
          <motion.div
            className="absolute w-96 h-96 bg-blue-200 z-10 rounded-full blur-3xl pointer-events-none"
            style={{
              x: circlePosition.x - 192, // Adjusting to center the circle
              y: circlePosition.y - 192,
            }}
          >
            {/* Multiple smaller circles/blurred spots */}
            {generateRandomCircles(10)}{" "}
            {/* You can change the number for more circles */}
          </motion.div>

          {/* Left Section: About Me */}
          <div className="flex-1 flex flex-col gap-4 justify-start text-center md:text-left">
            <h2 className="z-20 text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              About Me
            </h2>
            <p className="z-20 text-lg md:text-xl text-gray-600 leading-relaxed mb-6 w-[80%]">
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
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
                {icons.map((icon, index) => (
                  <motion.div
                    key={index}
                    className="z-20 w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center shadow-md cursor-grab"
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
    </Element>
  );
}
