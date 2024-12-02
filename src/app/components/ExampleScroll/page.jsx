"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Custom hook to check if an element is in view
const useIsInView = (ref, threshold = 0.2) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const isVisible =
        rect.top < windowHeight * (1 - threshold) && rect.bottom > 0;
      setIsInView(isVisible);
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, threshold]);

  return isInView;
};

const ScrollAnimation = ({ children }) => {
  const controls = useAnimation(); // Controls animation
  const ref = useRef(null);
  const isInView = useIsInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Scroll = () => {
  const items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="min-h-screen space-y-10 bg-gray-100 p-10">
      {items.map((item, index) => (
        <ScrollAnimation key={index}>
          <div className="p-6 bg-white shadow-lg rounded-lg">{item}</div>
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default Scroll;
