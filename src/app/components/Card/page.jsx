import React from 'react'
import { RiSecurePaymentFill } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { MdBusinessCenter } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
const Card = () => {
  return (
    <section className=" py-10 md:px-20 px-8 bg-blue-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Business Growth", icon: <MdBusinessCenter /> },
            { title: "eCommerce Solutions", icon: <LuShoppingCart /> },
            { title: "Secure Database", icon: <RiSecurePaymentFill /> },
            { title: "Audience Growth", icon: <SiGoogleanalytics /> },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gray-900 md:p-8 p-6 flex md:flex-col gap-6 md:gap-4 place-items-center shadow-md rounded-2xl hover:shadow-inner-xl group"
            >
              <div className="text-5xl text-blue-500 group-hover:text-white">
                {service.icon}
              </div>
              <div className="flex md:justify-center justify-start  md:items-center flex-col gap-2 ">
                <h3 className="text-2xl font-bold group-hover:text-blue-500">
                  {service.title}
                </h3>
                <h1 className="md:text-center text-start group-hover:text-white">
                  Lorem Epsun Enum Qamoda Waqarf Bota Boro
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card