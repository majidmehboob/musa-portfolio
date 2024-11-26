import { RiNodejsLine, RiReactjsFill } from "react-icons/ri";
import { LiaNodeJs } from "react-icons/lia";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { Element } from "react-scroll";

export default function AboutUs() {
  return (
    <Element name="section2">
      <section className="w-full min-h-screen bg-gray-200 flex justify-center items-center px-16">
        {/* Container */}
        <div className="container h-auto md:h-[80vh] md:py-10 py-0 bg-gray-300 rounded-xl shadow-md mx-auto px-6 md:px-12 flex flex-col md:flex-row  gap-8">
          {/* Left Section: About Me */}
          <div className="flex-1  flex flex-col gap-4 justify-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 w-[80%]">
              As a web developer, I am responsible for designing and developing
              web pages. My primary focus is to create responsive, user-friendly
              experiences that meet the needs of a diverse online audience.
            </p>
          </div>

          {/* Right Section: My Skills */}
          <div className="flex-1 flex flex-col gap-4  justify-end items-center h-full">
            <div className="flex flex-col gap-2">
              <h3 className="flex-none text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center md:text-left">
                My Skills
              </h3>
              <p className="text-gray-600 text-center md:text-left mb-6">
                {`Technologies I've been working with recently`}
              </p>
              {/* Skills Grid */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
                <div className="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center text-white shadow-md">
                  <span>
                    <RiNodejsLine size={42} />
                  </span>
                </div>
                <div className="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center text-white shadow-md">
                  <span>
                    <IoLogoHtml5 />
                  </span>
                </div>
                <div className="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center text-white shadow-md">
                  <span>
                    <FaCss3Alt />
                  </span>
                </div>
                <div className="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center text-white shadow-md">
                  <span>
                    <RiReactjsFill />
                  </span>
                </div>
                <div className="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center text-white shadow-md">
                  <span>
                    <SiMongodb />
                  </span>
                </div>
                <div className="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center text-white shadow-md">
                  <span>
                    <LiaNodeJs />
                  </span>
                </div>
                <div className="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center text-white shadow-md">
                  <span>
                    <SiExpress />
                  </span>
                </div>
                <div className="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center text-white shadow-md">
                  <span>Linux</span>
                </div>
                <div className="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center text-white shadow-md">
                  <span>Python</span>
                </div>
                <div className="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center text-white shadow-md">
                  <span>
                    <SiVisualstudiocode />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Lines */}
        {/* <div className="absolute top-[30%] inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 150 L400 200 L800 100 L1200 200 L1600 150"
            fill="none"
            stroke="rgba(0, 0, 0, 0.1)"
            strokeWidth="2"
          />
          <path
            d="M0 300 L400 250 L800 350 L1200 250 L1600 300"
            fill="none"
            stroke="rgba(0, 0, 0, 0.1)"
            strokeWidth="2"
          />
        </svg>
      </div> */}
      </section>
    </Element>
  );
}
