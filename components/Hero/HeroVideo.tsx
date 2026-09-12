"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { heroSlidesData } from "@/data/collegeData";

interface HeroVideoProps {
  onExplorePrograms?: () => void;
  onAboutClick?: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  onExplorePrograms,
  onAboutClick,
}) => {
  const currentSlide = heroSlidesData[0]; // Using the first slide's data for the text

  return (
    <div className="relative w-full h-[480px] sm:h-[600px] md:h-[640px] lg:h-[730px] overflow-hidden bg-slate-900 select-none">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-clip/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Cinematic Gradient Overlays to match the design's dark left tint and rich clarity */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" /> */}
        <div className="absolute inset-0 bg-black/60" />

        {/* <div className="absolute inset-0 bg-rose-900/20" /> */}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl py-8">
          {/* Subtitle Tagline */}
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 animate-fade-in">
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-slate-200/90 font-mono">
              {currentSlide.tagline}
            </span>
          </div>

          {/* Main Display Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-5xl lg:text-[70px] font-bold text-white tracking-tight leading-[1.08] mb-4 sm:mb-6 animate-fade-in">
            <span>{currentSlide.titlePrimary} </span>
            <span className="text-rose-300 font-arial">
              {currentSlide.titleSecondary}
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200/90 font-normal leading-relaxed max-w-xl tracking-wide mb-6 sm:mb-8 animate-fade-in">
            {currentSlide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in">
            <a
              href={currentSlide.ctaPrimaryHref}
              onClick={onAboutClick}
              className="inline-flex items-center space-x-2 bg-rose-900 hover:bg-rose-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold text-xs sm:text-sm transition-all shadow-lg hover:shadow-rose-900/30 active:scale-95 group cursor-pointer border border-rose-500/20"
            >
              <span>{currentSlide.ctaPrimaryText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={currentSlide.ctaSecondaryHref}
              onClick={onExplorePrograms}
              className="inline-flex items-center space-x-2 bg-black/10 hover:bg-black/20 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold text-xs sm:text-sm transition-all border border-slate-200 hover:border-slate-100 active:scale-95 cursor-pointer"
            >
              <span>{currentSlide.ctaSecondaryText}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
