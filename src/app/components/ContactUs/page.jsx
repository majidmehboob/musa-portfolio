"use client"
import { useState } from "react";
import ButtonClient from "../Buttons/whatsapp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center md:py-10 py-4 md:px-20">
      <div className="bg-gray-200 rounded-lg shadow-inner shadow-gray-400/60rounded-lg  p-10 flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-5">
            {"Let’s discuss"} <br />
            <span className="text-blue-700">on something cool</span> together
          </h2>
          <p className="text-gray-600 mb-8">{"I’m interested in .."}</p>
          <div className="flex flex-wrap gap-3">
            {[
              "Ecommerce Website",
              "Saas Website",
              "Landing page",
              "Portfolio",
              "Blog Website",
            ].map((item) => (
              <button
                key={item}
                className=" px-4 py-3 border rounded-lg focus:outline-none   bg-gray-200 shadow-[inset_-5px_-5px_8px_#ffffff7a,inset_5px_5px_8px_#a9a9aa7a] "
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <form  className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none   bg-gray-200 shadow-[inset_-5px_-5px_8px_#ffffff7a,inset_5px_5px_8px_#a9a9aa7a] "
      
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none   bg-gray-200 shadow-[inset_-5px_-5px_8px_#ffffff7a,inset_5px_5px_8px_#a9a9aa7a] "

            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="4"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none   bg-gray-200 shadow-[inset_-5px_-5px_8px_#ffffff7a,inset_5px_5px_8px_#a9a9aa7a] "
       
            ></textarea>

            <div className="relative z-20">
              <ButtonClient name="Contact Us" />
            </div>
          </form>


        </div>
      </div>
    </div>
  );
}
