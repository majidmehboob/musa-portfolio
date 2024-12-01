
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
    <motion.section
      whileInView="visible"
      initial="hidden"
      className="w-full h-[calc(100vh)] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden relative"
    >
      {/* Foreground Content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:gap-10 py-20 md:py-0">
        {/* Left Section: Text Content */}
        <motion.div
          className="flex-1 text-white text-center md:text-left"
          variants={textVariants}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.p
            className="text-lg mb-2 text-gray-300"
            variants={textVariants}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            We are the dream Builders
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 tracking-wide leading-1"
            variants={textVariants}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Unlocking Innovation{" "}
            <span className="text-blue-500">with IT Expertise</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-6 text-gray-300"
            variants={textVariants}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            We build exceptional digital experiences that take your business to
            the next level.
          </motion.p>
          {/* Button Component */}
          <div className="relative z-10 overflow-visible">
            <ButtonClient name={"Book 30 minutes free consultation"} />
          </div>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          variants={imageVariants}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <Image
            width={400}
            height={500}
            src="/hero_image-removebg.png" // Adjust image path if necessary
            alt="Hero Image"
            className="w-full max-w-md md:max-w-lg md:h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// import Image from "next/image";
// import { Element } from "react-scroll";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
// import ButtonClient from "../Buttons/whatsapp";

// export default function HeroSection() {
//   const { ref: heroRef, inView: heroInView } = useInView({
//     threshold: 0.5, // Triggers when 50% of the section is in view
//     triggerOnce: false,
//   });

//   const heroAnimation = useAnimation();
//   const imageAnimation = useAnimation();

//   useEffect(() => {
//     if (heroInView) {
//       // Start animations when in view
//       heroAnimation.start({ opacity: 1, y: 0 });
//       imageAnimation.start({ opacity: 1, y: 0 });
//     } else {
//       // Reset animations when out of view
//       heroAnimation.start({ opacity: 0, y: 100 });
//       imageAnimation.start({ opacity: 0, y: 100 });
//     }
//   }, [heroInView, heroAnimation, imageAnimation]);

//   return (
//     <Element name="section1">
//       <div
//         ref={heroRef}
//         className="w-full h-[calc(100vh)] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden relative"
//       >
//         {/* Foreground Content */}
//         <motion.div
//           className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:gap-10 py-20 md:py-0"
//           initial={{ opacity: 0, y: 100 }}
//           animate={heroAnimation}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Left Section: Text Content */}
//           <div className="flex-1 text-white text-center md:text-left">
//             <motion.p
//               className="text-lg mb-2 text-gray-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={heroAnimation}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               We are the dream Builders
//             </motion.p>
//             <motion.h1
//               className="text-4xl md:text-6xl font-bold mb-4 tracking-wide leading-1"
//               initial={{ opacity: 0, y: 30 }}
//               animate={heroAnimation}
//               transition={{ delay: 0.5, duration: 0.6 }}
//             >
//               Unlocking Innovation{" "}
//               <span className="text-blue-500">with IT Expertise</span>
//             </motion.h1>
//             <motion.p
//               className="text-xl md:text-2xl mb-6 text-gray-300"
//               initial={{ opacity: 0, y: 40 }}
//               animate={heroAnimation}
//               transition={{ delay: 0.7, duration: 0.6 }}
//             >
//               {`We build exceptional digital experiences that take your business to the next level.`}
//             </motion.p>
//             {/* Button Component */}
//             <div className="relative z-10 overflow-visible">
//               <ButtonClient name={"Book 30 minutes free consultation"} />
//             </div>
//           </div>

//           {/* Right Section: Image */}
//           <motion.div
//             className="flex-1 flex justify-center items-center"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={imageAnimation}
//             transition={{ delay: 0.9, duration: 0.6 }}
//           >
//             <Image
//               width={400}
//               height={500}
//               src="/hero_image-removebg.png"
//               alt="Hero Image"
//               className="w-full max-w-md md:max-w-lg md:h-auto rounded-lg shadow-lg"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </Element>
//   );
// }

// "use client";
// import Image from "next/image";
// import { Element } from "react-scroll";
// import { motion } from "framer-motion";
// import Button from "../Buttons/main";
// import ButtonClient from "../Buttons/whatsapp";

// export default function HeroSection() {
//   return (
//     <Element name="section1">
//       <div className="w-full h-[calc(100vh)] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden relative">
//         {/* Foreground Content */}
//         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:gap-10 py-20 md:py-0">
//           {/* Left Section: Text Content */}
//           <div className="flex-1 text-white text-center md:text-left">
//             <motion.p
//               className="text-lg mb-2 text-gray-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               We are the dream Builders
//             </motion.p>
//             <motion.h1
//               className="text-4xl md:text-6xl font-bold mb-4 tracking-wide leading-1"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//             >
//               Unlocking Innovation{" "}
//               <span className="text-blue-500">with IT Expertise</span>
//             </motion.h1>
//             <motion.p
//               className="text-xl md:text-2xl mb-6 text-gray-300"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.6 }}
//             >
//               {`We build exceptional digital experiences that take your business to the next level.`}
//             </motion.p>
//             {/* Button Component */}
//             <div className="relative z-10 overflow-visible">
//               <ButtonClient name={"Book 30 minutes free consultation"}/>
//               {/* <Button name={"Book 30 minutes free consultation"} /> */}
//             </div>
//           </div>

//           {/* Right Section: Image */}
//           <motion.div
//             className="flex-1 flex justify-center items-center"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.9, duration: 0.6 }}
//           >
//             <Image
//               width={400}
//               height={500}
//               src="/hero_image-removebg.png"
//               alt="Hero Image"
//               className="w-full max-w-md md:max-w-lg md:h-auto rounded-lg shadow-lg"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </Element>
//   );
// }
