"use client";

import React from "react";
import { X, Sparkles, MapPin, Award } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col">
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <h3 className="font-serif font-bold text-sm sm:text-base text-white">
              Life at Ramniranjan Jhunjhunwala College (Empowered Autonomous)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&controls=1"
            title="RJ College Campus Life and Showcase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Footer info bar */}
        <div className="p-4 bg-slate-950 text-slate-300 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-800">
          <div className="flex items-center space-x-2 text-rose-200">
            <MapPin className="w-4 h-4 text-rose-400" />
            <span>Ghatkopar (West), Mumbai – Opposite Railway Station</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-400 text-[11px]">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>NAAC Re-Accredited &apos;A&apos; Grade | Autonomous Since 2018</span>
          </div>
        </div>
      </div>
    </div>
  );
};
