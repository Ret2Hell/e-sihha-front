"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setProgressValue(latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dashOffset = 113.1 * (1 - progressValue);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-600 z-50 origin-left"
        style={{ scaleX }}
      />
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white shadow-lg z-50 flex items-center justify-center"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="relative">
            {/* Background circle */}
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2"
            />
            {/* Progress circle */}
            <motion.circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="113.1"
              strokeDashoffset={dashOffset}
              transform="rotate(-90 20 20)"
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            {/* Arrow icon */}
            <path
              d="M20 15 L20 25 M15 20 L20 15 L25 20"
              stroke="#0f766e"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </>
  );
};

export default ScrollProgress;
