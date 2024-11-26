import Image from "next/image";
import { Element } from "react-scroll";
// import { TbBrandFiverr } from "react-icons/tb";
// import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
export default function HeroSection() {
  return (
    <Element name="section1">
      <section className="w-full h-[calc(100vh)] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        {/* Foreground Content */}
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row  items-center justify-center md:gap-10 py-20 md:py-0">
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
              We build exceptional digital experiences that take your business
              to the next level.
            </p>
            <button className="tracking-tight px-8 py-3 text-lg bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-800 text-white font-semibold rounded-full shadow-md transition duration-300">
              Book 30 minutes free consultation
            </button>
            {/* <div className="flex gap-2 md:justify-start justify-center"> */}
            {/* <button className="border-4 border-white px-3 py-3 text-3xl bg-blue-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition duration-300">
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
              </button> */}
            {/* </div> */}
          </div>

          {/* Right Section: Image */}
          <div className="flex-1 flex justify-center items-center ">
            <Image
              width={400}
              height={500}
              src="/hero_image-removebg.png"
              alt="Hero Image"
              className="w-full max-w-md md:max-w-lg md:h-auto  rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </Element>
  );
}
