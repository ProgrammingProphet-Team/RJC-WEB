"use client";

import React from "react";
import { GraduationCap, Search, User, ExternalLink } from "lucide-react";

interface TopBarProps {
  onOpenSearch: () => void;
  onOpenLogin: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenSearch, onOpenLogin }) => {
  return (
    <div className="bg-[#781628] text-white text-xs tracking-wide  relative z-30 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
        {/* Left: Affiliation */}
        <div className="flex items-center space-x-2 text-rose-100 font-medium">
          <GraduationCap className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">Affiliated to University of Mumbai</span>
          <span className="sm:hidden text-[11px]">Univ. of Mumbai</span>
        </div>

        {/* Right: Quick Links, Search & Student Login */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Quick Links */}
          <nav className="hidden md:flex items-center space-x-3 text-rose-100/90 text-[11px] font-medium">
            <a href="#alumni" className="hover:text-white transition-colors">Alumni</a>
            <span className="text-rose-300/40">|</span>
            <a href="#iqac" className="hover:text-white transition-colors">IQAC</a>
            <span className="text-rose-300/40">|</span>
            <a href="#nirf" className="hover:text-white transition-colors">NIRF</a>
            <span className="text-rose-300/40">|</span>
            <a href="#feedback" className="hover:text-white transition-colors">Feedback</a>
            <span className="text-rose-300/40">|</span>
            <a href="#careers" className="hover:text-white transition-colors">Careers</a>
            <span className="text-rose-300/40">|</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </nav>

          {/* Search Trigger Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search website"
            className="p-1.5 rounded-full hover:bg-white/10 text-rose-200 hover:text-white transition-all cursor-pointer flex items-center gap-1"
            title="Search"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden lg:inline text-[11px] font-normal text-rose-200">Search</span>
          </button>

          {/* Student Login Button */}
          <button
            onClick={onOpenLogin}
            className="bg-rose-800 hover:bg-rose-700  hover:border-rose-400/50 text-white px-3 h-[36px] flex items-center space-x-1.5 font-semibold text-[12px] shadow-sm transition-all border border-rose-400/20 active:scale-95 cursor-pointer"
          >
            <User className="w-4 h-4 " />
            <span>Student Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};
