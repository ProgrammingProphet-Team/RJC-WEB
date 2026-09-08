"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { heroSlidesData, HeroSlide } from "@/data/collegeData";

interface HeroCarouselProps {
  onExplorePrograms?: () => void;
  onAboutClick?: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onExplorePrograms,
  onAboutClick,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = heroSlidesData.length;
  const currentSlide = heroSlidesData[currentSlideIndex];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div
      className="relative w-full h-[480px] sm:h-[540px] md:h-[600px] lg:h-[640px] overflow-hidden bg-slate-900 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with smooth fade transition */}
      {heroSlidesData.map((slide, index) => {
        const isActive = index === currentSlideIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
              } transform transition-transform duration-7000`}
          >
            <Image
              src={slide.image}
              alt="Ramniranjan Jhunjhunwala College Campus Building"
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            {/* Cinematic Gradient Overlays to match the design's dark left tint and rich clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>
        );
      })}

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl py-8">
          {/* Subtitle Tagline */}
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 animate-fade-in">
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-rose-200/90 font-mono">
              {currentSlide.tagline}
            </span>
          </div>

          {/* Main Display Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-4 sm:mb-6 animate-fade-in">
            <span>{currentSlide.titlePrimary} </span>
            <span className="text-[#f48fb1]  font-arial font-medium">
              {currentSlide.titleSecondary}
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200/90 font-normal leading-relaxed max-w-xl mb-6 sm:mb-8 animate-fade-in">
            {currentSlide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in">
            <a
              href={currentSlide.ctaPrimaryHref}
              onClick={onAboutClick}
              className="inline-flex items-center space-x-2 bg-[#781628] hover:bg-[#631120] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold text-xs sm:text-sm transition-all shadow-lg hover:shadow-rose-900/30 active:scale-95 group cursor-pointer border border-rose-500/20"
            >
              <span>{currentSlide.ctaPrimaryText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={currentSlide.ctaSecondaryHref}
              onClick={onExplorePrograms}
              className="inline-flex items-center space-x-2 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold text-xs sm:text-sm transition-all border border-white/30 hover:border-white/60 active:scale-95 cursor-pointer"
            >
              <span>{currentSlide.ctaSecondaryText}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side Vertical Pillars Motif on large screens */}
      {/* <div className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 z-20 flex-col items-center bg-black/40 backdrop-blur-md px-3 py-6 rounded-lg border border-white/10 text-white/90 text-center">
        <div className="w-1.5 h-1.5 bg-[#f48fb1] rounded-full mb-3 animate-ping" />
        <div className="text-[11px] font-bold tracking-[0.25em] [writing-mode:vertical-rl] space-y-2 uppercase text-rose-100/90 font-mono">
          LEARN • GROW • BELONG • ACHIEVE
        </div>
      </div> */}

      {/* Carousel Bottom Control Bar: ← 01 / 03 → */}
      <div className="absolute right-4 sm:right-8 lg:right-16 bottom-6 sm:bottom-10 z-20 flex items-center space-x-3 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white shadow-xl">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 text-white transition-all active:scale-90 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="text-xs font-mono font-medium tracking-wider px-2 text-rose-100">
          <span className="font-bold text-white">0{currentSlideIndex + 1}</span>
          <span className="text-white/40 mx-1">/</span>
          <span className="text-white/70">0{totalSlides}</span>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 text-white transition-all active:scale-90 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
