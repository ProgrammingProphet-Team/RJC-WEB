"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (windowHeight > 0) {
        const scroll = totalScroll / windowHeight;
        setScrollProgress(scroll);
      } else {
        setScrollProgress(0);
      }

      // Show button after scrolling down a bit (e.g., 300px)
      if (totalScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case page loads scrolled down
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circle properties
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  // Ensure we don't go below 0 or above circumference
  const strokeDashoffset = Math.max(0, circumference - scrollProgress * circumference);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-[52px] h-[52px] bg-white rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 focus:outline-none"
        aria-label="Scroll to top"
      >
        {/* Background/Track Circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 52 52">
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="transparent"
            stroke="#f1f5f9" // slate-100
            strokeWidth="2"
          />
          {/* Progress Circle */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="transparent"
            stroke="#781628" // brand rose color
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>

        {/* Arrow Icon */}
        <ArrowUp className="w-5 h-5 text-slate-700 group-hover:-translate-y-1 group-hover:text-[#781628] transition-all duration-300 relative z-10" />
      </button>
    </div>
  );
};
