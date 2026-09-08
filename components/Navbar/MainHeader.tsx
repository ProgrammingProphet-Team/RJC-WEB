import React from "react";
import Image from "next/image";
import Link from "next/link";

export const MainHeader: React.FC = () => {
  return (
    <div className="bg-white border-b border-slate-100 py-3 sm:py-4 px-4 sm:px-6 lg:px-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left & Center Brand Identity */}
        <div className="flex items-center gap-3.5 sm:gap-5 text-center md:text-left">
          {/* RJC Crest Logo */}
          <Link href="/" className="shrink-0 group">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-300 ">
              <Image
                src="/assets/rjc-logo.png"
                alt="Ramniranjan Jhunjhunwala College Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Typography Details */}
          <div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 tracking-wide">
              Hindi Vidya Prachar Samiti&apos;s
            </div>

            <h1 className="font-serif font-bold text-lg sm:text-2xl md:text-[26px] text-[#781628] leading-tight tracking-tight uppercase">
              Ramniranjan Jhunjhunwala College
            </h1>

            <div className="font-serif font-bold text-sm sm:text-lg md:text-[18px] text-[#781628] uppercase tracking-wide">
              Of Arts, Science &amp; Commerce
            </div>

            <div className="mt-1 flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
              <span className="inline-block bg-[#781628] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                (Empowered Autonomous)
              </span>
              <span className="text-[11px] sm:text-xs text-slate-600 font-medium hidden sm:inline">
                NAAC Re-Accredited &apos;A&apos; Grade | ESTD. 1963 | Affiliated to University of Mumbai
              </span>
            </div>
          </div>
        </div>

        {/* Right Motto / Tagline in Elegant Script / Serif */}
        {/* border-l-2 border-rose-100 */}
        <div className="hidden lg:flex flex-col items-end justify-center border-b-2 border-rose-800 pb-2 pl-6  text-right">
          <div className="font-serif italic font-medium text-slate-800 text-xl tracking-wide leading-snug">
            <span className="text-slate-900 font-semibold block">Knowledge</span>
            <span className="text-[#781628] font-semibold block">Character</span>
            <span className="text-slate-800 font-semibold block">Excellence</span>

          </div>
         
          {/* <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">
            Motto of RJC
          </div> */}
        </div>
      </div>
    </div>
  );
};
