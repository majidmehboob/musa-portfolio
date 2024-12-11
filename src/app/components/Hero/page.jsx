
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

  return (
    <div className="">
      <motion.section
        whileInView="visible"
        initial="hidden"
        className="w-full h-[calc(100vh)] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden relative"
      >
        {/* Foreground Content */}
        <div className="container md:mx-auto md:px-6 px-2 md:grid md:grid-cols-12 flex flex-col-reverse items-center md:justify-center justify-between md:gap-10 gap-6 py-20 md:py-0">
          {/* Left Section: Text Content */}
          <motion.div
            className="md:col-span-6 col-span-12 text-white md:text-left text-center"
            variants={textVariants}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.p
              className="text-lg md:mb-2 text-gray-300"
              variants={textVariants}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We are the dream Builders
            </motion.p>
            <motion.h1
              className="text-3xl md:text-6xl font-bold md:mb-4 tracking-wide leading-1"
              variants={textVariants}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Unlocking Innovation{" "}
              <span className="text-blue-500">with IT Expertise</span>
            </motion.h1>
            <motion.p
              className="md:text-2xl text-md md:mb-6 mb-2 text-gray-300"
              variants={textVariants}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              We build exceptional digital experiences that take your business
              to the next level.
            </motion.p>
            {/* Button Component */}
            <div className="relative md:block flex justify-center items-center z-10 overflow-visible mt-5 ">
              <ButtonClient
                name={"Book 30 minutes free consultation"}
                item={"https://calendly.com/majidmehboob1005/30min"}
              />
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
              className=" w-[50vh] h-[50vh] md:mt-0 mt-0 md:object-cover object-contain md:w-full md:max-w-lg md:h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
