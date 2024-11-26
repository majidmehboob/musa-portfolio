import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";
import { Element } from 'react-scroll';
const Page = () => {
  return (
    <Element name="section4">
      {/* Testimonials Section */}
      <section className="py-16 px-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold mb-10">
            What say our Valuable Clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-6 py-10 flex flex-col justify-center items-center gap-4   shadow-lg rounded-xl"
              >
                <FaQuoteRight className='text-6xl my-4 text-blue-500' />
                <p className="text-gray-600 italic text-center w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Proin et urna vitae sapien
                </p>
                <div className="flex justify-center items-center">
                  {[...Array(7)].map((_, i) => (
                    <MdOutlineStarPurple500 key={i} className="text-xl text-yellow-500" />
                  ))}
                </div>
                <div className="text-center">
                  <div className="h-24 w-24 bg-gray-500 rounded-full"></div>
                  <h1 className="font-bold mt-2">Elon Musk</h1>
                  <p className="text-sm ">Tesla Founder</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Page