"use client";
import React, { useState } from "react";
import Image from "next/image";

const SplashScreen = ({ count }) => {
  const staticCount = count || 0;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[var(--background)] z-50">
      <div className="relative text-center flex flex-col place-items-center gap-4 px-4">
        <div className="mt-4 relative w-full max-w-sm md:max-w-md">
          {/* Image Placeholder */}
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              width={400}
              height={400}
              className="h-92 w-92"
            />
          

          <h1 className="z-10 text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            Musa<span className="text-blue-500"> Umer</span>
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="h-2 sm:h-3 w-full max-w-sm bg-gray-500 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all"
            style={{
              width: `${staticCount}%`, // Dynamically adjust the width based on count
              transition: "width 0.1s ease-in-out", // Smooth transition for the progress bar
            }}
          ></div>
        </div>

        {/* Display the current count */}
        <h1 className="text-sm sm:text-lg md:text-xl text-white">
          {staticCount}%
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
