"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const WorkingWith = () => {
  const [inView, setInView] = useState(false); // Track if the component is in view
  const ref = useRef(null); // Reference to the component to check its visibility

  // Use useEffect for visibility simulation
  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight * 0.9) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define animation for the images
  const imagesCount = 5;

  return (
    <div
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-20 bg-gray-100 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Container to hold images */}
      <h1 className="md:text-3xl text-center text-xl my-4 font-bold">
        {`Some of the Amazing Clients I've Worked With`}
      </h1>
      <div className="relative w-full bg-gray-200 py-8 px-4 rounded-lg shadow-inner shadow-gray-400/60 flex justify-center md:gap-8 gap-2 items-center">
        {Array.from({ length: imagesCount }).map((_, i) => (
          <motion.div
            key={i}
            className="flex md:flex-row flex-col justify-center items-center"
            initial={{ opacity: 0 }} // Start images off-screen to the right
            animate={inView ? { opacity: 1 } : {}} // Fade in image when in view
            transition={{
              duration: 1,
              delay: i * 0.3, // Delay to stagger images
              ease: "easeInOut",
            }}
          >
            <Image
              src={`/logo${i + 1}.jpg`} // Correct path for images
              height={120}
              width={120}
              alt={`Logo ${i + 1}`} // Correct alt string interpolation
              className="h-16 w-16  object-fill md:h-32 md:w-32 border rounded-lg p-1 aspect-square "
            />
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator (optional) */}
      <div
        className="scroll-indicator"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <motion.div
          className="bg-blue-600 w-20 h-2 rounded-full"
          animate={{
            opacity: 1, // Fade in the scroll indicator as images come into view
          }}
        />
      </div>
    </div>
  );
};

export default WorkingWith;
