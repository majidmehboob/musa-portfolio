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
import WorkingWith from "./components/WorkingWith/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false); // Tracks client mount status
  const [isDarkMode, setisDarkMode] = useState(false);
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

  return (
    <div>
      <Navbar />
      <section id="hero-section">
        <HeroSection />
      </section>
      <Card />
      <section id="about-us-section">
        <AboutUs />
      </section>
      <section id="services-section">
        <Services />
      </section>
      <WorkingWith />
      <section id="testimonials-section">
        <Testimonials />
      </section>
      <section id="contact-section">
        <Contact />
      </section>
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
        className="fixed bottom-8 right-8 transition duration-300 sm:block hidden"
      >
        <button className="group w-12 hover:w-44 h-12 hover:bg-green-600 relative bg-green-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:right-8 before:hover:left-40 before:w-6 before:h-6 before:bg-green-700 before:hover:bg-green-600 before:rotate-45">
          <FaWhatsapp className="w-8 h-8 shrink-0 fill-neutral-50" />
          <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
            WhatsApp
          </span>
        </button>
      </a>
    </div>
  );
}
