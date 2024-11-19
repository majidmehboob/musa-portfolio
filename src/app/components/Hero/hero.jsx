import Image from "next/image";
import { TbBrandFiverr } from "react-icons/tb";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh)] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Dynamic Grid Background */}
      {/* <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,_100px)] gap-4 z-0">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-700 opacity-70"
            style={{
              width: "100px",
              height: "100px",
            }}
          ></div>
        ))}
      </div> */}

      {/* Foreground Content */}
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row  items-center gap-10 relative z-10">
        {/* Left Section: Text Content */}
        <div className="flex-1 text-white text-center md:text-left">
          <p className="text-lg mb-2 text-gray-300">
            We are the dream Builders
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide leading-1">
            Unlocking Innovation{" "}
            <span className=" text-blue-500">with IT Expertise</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            We build exceptional digital experiences that take your business to
            the next level.
          </p>
          <div className="flex gap-2 md:justify-start justify-center">
            <button className="border-4 border-white px-3 py-3 text-3xl bg-blue-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition duration-300">
              <FaInstagram />
            </button>
            <button className="border-4 border-white px-3 py-3 text-3xl bg-blue-500 hover:bg-blue-800 text-white font-semibold rounded-full shadow-md transition duration-300">
              <FaFacebookF />
            </button>
            <button className="border-4 border-white px-3 py-3 text-3xl bg-blue-500 hover:bg-blue-800 text-white font-semibold rounded-full shadow-md transition duration-300">
              <FaLinkedinIn />
            </button>
            <button className="border-4 border-white px-3 py-3 text-3xl bg-blue-500 hover:bg-green-800 text-white font-semibold rounded-full shadow-md transition duration-300">
              <TbBrandFiverr />
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 flex justify-center items-center ">
          <Image
            width={400}
            height={500}
            src="/hero_image-removebg.png"
            alt="Hero Image"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
