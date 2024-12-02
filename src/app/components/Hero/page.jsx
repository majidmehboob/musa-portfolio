
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonClient from "../Buttons/whatsapp"; // Assuming you have this component

export default function HeroSection() {
  // Hero Section animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const Card = () => {
    return (
      <div className="relative w-[180px] h-[340px] bg-black rounded-[35px] border-2 border-gray-800 p-2 shadow-lg">
        <div className="card-int h-[100%]  bg-gradient-to-br from-red-500 to-blue-900 rounded-[25px] transition-all duration-600 ease-out overflow-hidden hover:bg-gradient-to-tl">
          <div className="top absolute top-0 right-1/2 transform translate-x-1/2 w-[35%] h-[18px] bg-black rounded-b-[10px]" />
          <div className="speaker absolute top-[2px] right-1/2 transform translate-x-1/2 w-[40%] h-[2px] bg-gray-900 rounded-[2px]" />
          <div className="camera absolute top-[6px] right-[84%] transform translate-x-1/2 w-[6px] h-[6px] bg-opacity-10 bg-white rounded-full">
            <div className="int absolute w-[3px] h-[3px] bg-opacity-20 bg-blue-500 top-1/2 right-1/2 transform translate-x-1/2 translate-y-[-50%] rounded-full" />
          </div>

          <Image
            width={200}
            height={200}
            src="/logo.png" // Adjust image path if necessary
            alt="Hero Image"
            className="w-full absolute bottom-10 h-[320px] max-w-md md:max-w-lg md:h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <motion.section
        whileInView="visible"
        initial="hidden"
        className="w-full h-[calc(100vh)] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden relative"
      >
        {/* Foreground Content */}
        <div className="container md:mx-auto md:px-6 px-2 grid grid-cols-12 items-center justify-center md:gap-10 py-20 md:py-0">
          {/* Left Section: Text Content */}
          <motion.div
            className="md:col-span-6 col-span-12 text-white text-left"
            variants={textVariants}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.p
              className="md:text-lg text-sm mb-2 text-gray-300"
              variants={textVariants}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We are the dream Builders
            </motion.p>
            <motion.h1
              className="text-3xl md:text-6xl font-bold mb-4 tracking-wide leading-1"
              variants={textVariants}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Unlocking Innovation{" "}
              <span className="text-blue-500">with IT Expertise</span>
            </motion.h1>
            <motion.p
              className="text-md md:text-2xl md:mb-6 mb-2 text-gray-300"
              variants={textVariants}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              We build exceptional digital experiences that take your business
              to the next level.
            </motion.p>
            {/* Button Component */}
            <div className="relative z-10 overflow-visible">
              <ButtonClient name={"Book 30 minutes free consultation"} />
            </div>
          </motion.div>

          {/* Right Section: Image */}
          <motion.div
            className="md:col-span-6 col-span-12 flex justify-center items-center"
            variants={imageVariants}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Image
              width={400}
              height={500}
              src="/hero_image-removebg.png" // Adjust image path if necessary
              alt="Hero Image"
              className=" w-56 h-56 md:mt-0 mt-6 object-cover md:w-full md:max-w-lg md:h-auto rounded-lg shadow-lg"
            />
            <div className="hidden md:block absolute right-[10%] bottom-2">
              <Card />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
