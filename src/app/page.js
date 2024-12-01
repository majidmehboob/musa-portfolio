"use client";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import Navbar from "./components/Navbar/page";
import HeroSection from "./components/Hero/page";
import SplashScreen from "./components/SplashScreen/SplachScreen";
import Card from "./components/Card/page";
import AboutUs from "./components/AboutUs/page";
import Testimonials from "./components/Testimonials/page";
import Contact from "./components/ContactUs/page";
import Services from "./components/Services/page";
import whatsappButton from "./components/Buttons/whatsapp";
import ButtonClient from "./components/Buttons/whatsapp";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false); // Tracks client mount status
  const [isDarkMode,setisDarkMode]=useState(false)
  useEffect(() => {
    // Ensure this only runs in the client (after hydration)
    setMounted(true);

    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 5 seconds
    }, 5000);

    const counter = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          clearInterval(counter); // Stop the counter at 100
          return 100;
        }
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(counter);
    };
  }, []);

  // Ensure no dynamic rendering during SSR
  if (!mounted) {
    return null; // Or a loading spinner, but avoid rendering dynamic content
  }

  if (isLoading) {
    return <SplashScreen count={count} />;
  }
 function toggleTheme(isDarkMode) {
   if (isDarkMode) {
     document.documentElement.style.setProperty("--background", "#1a202c");
     document.documentElement.style.setProperty("--foreground", "#f7fafc");
     document.documentElement.style.setProperty("--primary", "#2b6cb0");
     document.documentElement.style.setProperty("--secondary", "#38a169");
   } else {
     document.documentElement.style.setProperty("--background", "#f5f5f5");
     document.documentElement.style.setProperty("--foreground", "#333333");
     document.documentElement.style.setProperty("--primary", "#3498db");
     document.documentElement.style.setProperty("--secondary", "#2ecc71");
   }
 }

  return (
    //     <div className={toggleTheme(isDarkMode)+"bg-background h-screen w-full"}>
    //     <button onClick={()=>setisDarkMode(!isDarkMode)}>Click ME</button>
    //   <h1 className="text-primary">Welcome to My App</h1>
    //   <p className="text-secondary">This is a secondary text color.</p>
    // </div>
    <div>
    {/* <div className=" relative flex min-h-screen w-full justify-center items-center">
  <ButtonClient/>
    </div> */}
      <Navbar />
      <HeroSection />
      <Card/>
      <AboutUs />
      <Services />
      <Testimonials />
      <Contact />
      <footer className="w-full bg-gray-900 text-gray-400 py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Musa Umer Portfolio. All Rights Reserved.
        </p>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923336512969" // Replace "your-number" with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8  transition duration-300"
      >
        <button class="group w-12 hover:w-44 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
          <svg
            y="0"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            width="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            height="100"
            class="w-8 h-8 shrink-0 fill-neutral-50"
          >
            <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
          </svg>
          <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
            WhatsApp 
          </span>
        </button> 
        {/* <FaWhatsapp size={42} /> */}
      </a>
    </div>
  );
}
