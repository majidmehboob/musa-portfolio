import React, { useEffect } from "react";
import Image from "next/image";

const SplashScreen = ({ count }) => {
      const staticCount = count || 0; 
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 z-50">
      <div className="relative text-center flex flex-col place-items-center gap-1">
        <div className="mt-4 relative">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            width={300}
            height={300}
          />
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Musa<span className="text-blue-500"> Umer</span>
          </h1>
        </div>

        <div className="h-3 w-72 bg-gray-500 rounded-full overflow-hidden">
          <div
            className="h-3 bg-blue-500 rounded-full transition-all"
            style={{
              width: `${staticCount}%`, // Dynamically adjust the width based on count
              transition: "width 0.1s ease-in-out", // Smooth transition for the progress bar
            }}
          ></div>
        </div>

        {/* Display the current count */}
        <h1 className="text-lg text-white">{staticCount}%</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
