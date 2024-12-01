"use client"
import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { MdBusinessCenter } from "react-icons/md";
import { Element } from "react-scroll";
const Services = () => {
  return (
    <Element name="section3">
      <div
        className=" min-h-screen h-screen w-full py-10 md:px-20 px-8 bg-gray-100
    flex justify-center items-center flex-col gap-4"
      >
        <p className="text-lg text-blue-500 font-itallic">What we Provide</p>
        <h1 className="text-4xl font-bold text-center leading-tight">
          Provide Interective IT Solutions <br /> Business Services
        </h1>
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20">
            {[
              { title: "Business Growth", icon: <MdBusinessCenter /> },
              { title: "eCommerce Solutions", icon: <LuShoppingCart /> },
              { title: "Secure Database", icon: <RiSecurePaymentFill /> },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white hover:bg-gray-900 md:py-16 p-8 px-6  flex md:flex-col gap-6 md:gap-4 items-start justify-start shadow-md rounded-lg hover:shadow-inner-xl group"
              >
                <div className="text-5xl text-blue-500 group-hover:text-white">
                  {service.icon}
                </div>
                <div className="">
                  <h3 className="text-3xl font-bold group-hover:text-blue-500">
                    {service.title}
                  </h3>
                  <h1 className="my-3 text-start group-hover:text-white">
                    Lorem Epsun Enum Qamoda Waqarf Bota Boro
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Services;
