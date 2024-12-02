"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiSecurePaymentFill } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { MdBusinessCenter } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";

const Card = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-10 md:px-20 px-8 bg-gray-200">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {[
            {
              title: "Business Growth",
              icon: <MdBusinessCenter />,
              desc: "Boost your business growth with strategies that drive results and unlock new opportunities for success!",
            },
            {
              title: "eCommerce Solutions",
              icon: <LuShoppingCart />,
              desc: "Boost your online sales with seamless eCommerce solutions designed for growth and customer satisfaction!",
            },
            {
              title: "Secure Database",
              icon: <RiSecurePaymentFill />,
              desc: "Ensure data safety with secure, scalable database solutions designed for reliability and accessibility!",
            },
            {
              title: "Audience Growth",
              icon: <SiGoogleanalytics />,
              desc: "Accelerate audience growth with tailored strategies to increase engagement, reach, and brand visibility!",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-center items-center gap-4 p-8 bg-gray-200 rounded-2xl shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#ffffff] transition-shadow duration-300"
            >
              <div className="text-5xl text-blue-500">{service.icon}</div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
              <svg
                className="absolute z-10 inset-0 left-0 top-0 w-full h-full fill-sky-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 204.000000 113.000000"
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
              >
                <g
                  stroke="none"
                  transform="translate(0.000000,113.000000) scale(0.100000,-0.100000)"
                >
                  <path
                    d="M850 1069 c-23 -48 -27 -66 -19 -85 5 -14 9 -40 9 -57 0 -18 4 -38 9
            -46 9 -14 19 36 19 99 1 44 7 71 17 78 9 6 35 56 35 67 0 3 -9 5 -20 5 -15 0 -28 -16 -50 -61z"
                  ></path>
                  <path d="M1662 1099 c-24 -17 -40 -34 -38 -37 3 -3 14 2 24 11 10 10 22 17 25 17 4 0 16 9 27 20 30 30 9 24 -38 -11z"></path>
                  <path d="M101 1104 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"></path>
                  <path d="M1090 1070 c0 -6 7 -10 15 -10 8 0 15 2 15 4 0 2 -7 6 -15 10 -8 3 -15 1 -15 -4z"></path>
                  <path d="M1 1023 c1 -53 6 -49 11 10 2 20 0 37 -4 37 -4 0 -8 -21 -7 -47z"></path>
                  <path d="M1121 1024 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"></path>
                  <path d="M101 984 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"></path>
                  <path d="M1140 958 c0 -9 5 -20 10 -23 13 -8 13 5 0 25 -8 13 -10 13 -10 -2z"></path>
                  <path d="M1286 955 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7 -7 -4 -15z"></path>
                  <path d="M1647 930 c-13 -15 -14 -20 -3 -20 7 0 16 9 19 20 3 11 4 20 3 20 -1 0 -9 -9 -19 -20z"></path>
                  <path d="M1171 925 c1 -19 18 -51 18 -35 0 8 -4 22 -9 30 -5 8 -9 11 -9 5z"></path>
                  <path
                    d="M8 875 c6 -11 22 -33 36 -49 27 -30 33 -60 16 -71 -6 -4 -19 -24 -30 -45 l-20 -39 43 -32 c23 -18 43 -34 45 -34 1 -1 4 -60 7 -131 4 -121 6 -130 30 -153 19 -20 25 -22 25 -9 0 8 -7 21 -15 28 -14 12 -15 23 -14 177 1 8 -13
              116 -66 129 -29 7 -35 44 -10 64 8 7 15 19 15 27 0 7 6 16 14 19 27 10 -11 78 -68 124 -18 14 -18 14 -8 -5z"
                  ></path>
                  <path d="M862 830 c-12 -27 -26 -52 -31 -54 -5 -3 -2 -26 7 -51 14 -44 14 -46 -13 -85 -22 -32 -27 -47 -22 -77 11 -63 29 -65 21 -2 -6 52 -5 58 21 82 26 24 27 27 17 69 -9 34 -8 47 3 65 16 25 36 103 26 103 -3 0 -16 -22 -29 -50z"></path>
                  <path d="M1200 872 c0 -16 67 -89 74 -81 3 3 -12 25 -34 49 -22 24 -40 38 -40 32z"></path>
                  <path d="M1567 826 c-4 -10 -1 -13 8 -9 8 3 12 9 9 14 -7 12 -11 11 -17 -5z"></path>
                  <path d="M1536 773 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"></path>
                  <path d="M1270 770 c0 -5 7 -10 15 -10 8 0 15 -7 15 -15 0 -8 4 -15 9 -15 5 0 11 -10 14 -22 4 -12 9 -19 12 -16 14 13 -9 60 -36 74 -17 8 -29 10 -29 4z"></path>
                  <path d="M1344 672 c-19 -12 -29 -109 -24 -236 5 -142 18 -135 17 9 -2 156 2 188 26 216 17 19 4 27 -19 11z"></path>
                  <path d="M1398 673 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"></path>
                  <path d="M1463 673 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"></path>
                  <path d="M848 433 c2 -36 5 -63 7 -61 1 2 6 28 9 59 5 42 4 58 -6 61 -10 4 -12 -9 -10 -59z"></path>
                  <path d="M1698 403 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"></path>
                  <path d="M872 345 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"></path>
                  <path d="M1810 345 c0 -10 40 -45 53 -45 6 0 8 1 6 3 -2 1 -16 13 -31 26 -16 14 -28 21 -28 16z"></path>
                </g>
              </svg>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
