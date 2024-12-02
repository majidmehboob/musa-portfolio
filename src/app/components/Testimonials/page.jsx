"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";

const Page = () => {
  const testimonials = [
    {
      client: "Bravodude",
      desc: "Working with Musa Umer has been an absolute pleasure. They delivered a stunning, responsive website that exceeded my expectations. From understanding my requirements to providing innovative solutions, their expertise in web development truly stands out. The project was completed on time, and communication throughout was seamless. I highly recommend Musa Umer for anyone looking for a skilled and reliable web developer!",
    },
    {
      client: "Cindy S",
      desc: "Highly recommend using Musa Umer to be your social media manager! He works very hard at what he does and will truly bring your brand to life. He will always make sure you are satisfied with your order and take great care of you in a professional manner. 10/10!!! Thank you Musa Umer",
    },
    {
      client: "cornellt",
      desc: "Musa is the best virtual assistant. He is very attentive - and does not miss details. He is hard working and follows through on his promises. I especially appreciated his communication style ~ he is in touch throughout process and lets you know his status frequently. He is excellent! Top recommendation from me!",
    },
  ];

  return (
    <div className="px-4 md:px-20 py-10 sm:px-8 lg:px-20 bg-[var(--background)]">
      <div className="container mx-auto">
        <h2 className="text-center text-gray-200 text-2xl md:text-3xl font-bold mb-10">
          What Our Valuable Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-gray-200 shadow-[inset_-5px_-5px_8px_#ffffff7a,inset_5px_5px_8px_#a9a9aa7a] p-6 py-4 flex flex-col justify-between items-center gap-4 rounded-xl min-h-[350px]"
            >
              <FaQuoteRight className="text-5xl sm:text-6xl my-4 text-blue-500" />
              <p className="text-gray-600 italic text-center w-[90%] sm:w-[80%]">
                {testimonial.desc}
              </p>
              <div className="flex justify-center items-center">
                {[...Array(5)].map((_, i) => (
                  <MdOutlineStarPurple500
                    key={i}
                    className="text-sm sm:text-lg lg:text-xl text-yellow-500"
                  />
                ))}
              </div>
              <div className="text-center">
                <div className="h-20 w-20 sm:h-24 sm:w-24 bg-gray-500 rounded-full overflow-hidden">
                  <Image
                    className="h-full w-full object-cover"
                    src={`/pic${i + 1}.jpg`}
                    alt={`Client ${testimonial.client}`}
                    width={120}
                    height={120}
                  />
                </div>
                <h1 className="font-bold mt-2 text-base sm:text-lg">
                  {testimonial.client}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500">
                  Tesla Founder
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
