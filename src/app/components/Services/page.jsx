"use client";
import React, { useRef } from "react";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineCampaign, MdOutlineStorefront } from "react-icons/md";

const Services = () => {
  const scale = useRef();
  return (
    <div
      ref={scale}
      className="min-h-screen h-auto w-full py-10 px-6 md:px-20 lg:px-20 bg-[var(--background)] flex flex-col items-center gap-6"
    >
      <p className="text-2xl font-bold text-blue-500 italic">What we Provide</p>
      <h1 className="text-2xl md:text-4xl text-gray-200 font-bold text-center leading-snug md:leading-tight">
        Provide Interactive IT Solutions <br /> Business Services
      </h1>
      <div className="container mx-auto mt-10">
        <div className="md:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Web Development",
              icon: <RiTeamLine />,
              desc: "We build responsive, interactive, and cutting-edge websites tailored to elevate your business presence online.",
            },
            {
              title: "Digital Marketing",
              icon: <MdOutlineCampaign />,
              desc: "Grow your audience and improve engagement with strategic digital campaigns and innovative marketing solutions.",
            },
            {
              title: "Amazon Account Management",
              icon: <MdOutlineStorefront />,
              desc: "Optimize your Amazon store with inventory management, data analytics, and marketing expertise to maximize profits.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-200 hover:bg-gray-900 py-10 px-6 flex flex-col gap-4 items-start justify-start shadow-md rounded-lg hover:shadow-inner-xl group transition-all duration-300"
            >
              <div className="text-5xl text-blue-500 group-hover:text-white">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-blue-500">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-500 group-hover:text-white">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
