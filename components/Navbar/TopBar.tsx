"use client";

import React from "react";
import { GraduationCap, Search, User, ExternalLink } from "lucide-react";

interface TopBarProps {
  onOpenSearch: () => void;
  onOpenLogin: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenSearch, onOpenLogin }) => {
  return (
    <div className="bg-white text-white text-xs tracking-wide  relative z-30 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
        {/* Left: Affiliation */}
        <div className="flex items-center space-x-2 text-rose-900 font-medium">
          <GraduationCap className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline text-[14px]">Affiliated to University of Mumbai</span>
          <span className="sm:hidden text-[11px]">Univ. of Mumbai</span>
        </div>

        {/* Right: Quick Links, Search & Student Login */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Quick Links */}
          <nav className="hidden md:flex items-center space-x-3 text-rose-900 text-[14px] font-medium">
            <a href="#alumni" className="hover:text-rose-800 transition-colors">Alumni</a>
            <span className="text-rose-300/40">|</span>
            <a href="#iqac" className="hover:text-rose-800 transition-colors">IQAC</a>
            <span className="text-rose-300/40">|</span>
            <a href="#nirf" className="hover:text-rose-800 transition-colors">NIRF</a>
            <span className="text-rose-300/40">|</span>
            <a href="#feedback" className="hover:text-rose-800 transition-colors">Feedback</a>
            <span className="text-rose-300/40">|</span>
            <a href="#careers" className="hover:text-rose-800 transition-colors">Careers</a>
            {/* <span className="text-rose-300/40">|</span> */}
            {/* <a href="#contact" className="hover:text-rose-800 transition-colors">Contact Us</a>
            <span className="text-rose-300/40">|</span> */}
          </nav>

          {/* Search Trigger Button */}
          {/* <button
            onClick={onOpenSearch}
            aria-label="Search website"
            className="py-1.5 text-rose-900  transition-all cursor-pointer flex items-center gap-1"
            title="Search"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden lg:inline text-[12px] font-normal text-rose-900">Search</span>
          </button> */}

          {/* Student Login Button */}
          <button
            onClick={onOpenLogin}
            className="bg-rose-800 hover:bg-rose-800 rounded hover:border-rose-400/50 py-1 text-white px-2 h-[28px] flex items-center space-x-1.5 font-semibold text-[12px] shadow-sm transition-all border border-rose-400/20 active:scale-95 cursor-pointer"
          >
            <User className="w-4 h-4 " />
            <span className="text-[14px]">Student Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};
