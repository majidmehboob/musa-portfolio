"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/hero";
import SplashScreen from "./components/SplashScreen/SplachScreen";
import Card from "./components/Card/Card";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false); // Tracks client mount status

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
      <HeroSection />
      <Card />
    </div>
  );
}
