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
      <Navbar />
      <HeroSection />
      <Card />
      <AboutUs />
      <Services/>
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
        className="animate-bounce fixed bottom-8 right-8 bg-green-500  border-4 border-white px-3 py-3 text-3xl  hover:bg-green-800 text-white font-semibold rounded-full shadow-md transition duration-300"
      >
        <FaWhatsapp size={42} />
      </a>
    </div>
  );
}
