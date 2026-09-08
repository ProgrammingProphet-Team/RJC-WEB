"use client";

import React from "react";
import { X, Calendar, Download, Share2, Megaphone, FileText, CheckCircle } from "lucide-react";
import { AnnouncementItem, EventItem } from "@/data/collegeData";

interface NoticeDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  notice: AnnouncementItem | null;
  event: EventItem | null;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({
  isOpen,
  onClose,
  notice,
  event,
}) => {
  if (!isOpen || (!notice && !event)) return null;

  const title = notice ? notice.title : event?.title;
  const dateStr = notice
    ? `${notice.day} ${notice.month}, ${notice.year}`
    : `${event?.day} ${event?.month}, ${event?.year}`;
  const category = notice ? notice.category : event?.category;
  const details = notice ? notice.fullDetails : event?.description;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#781628] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              {notice ? (
                <Megaphone className="w-4 h-4 text-rose-200" />
              ) : (
                <Calendar className="w-4 h-4 text-rose-200" />
              )}
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-rose-300">
                Official Institutional Circular
              </span>
              <h3 className="font-serif font-bold text-sm text-white line-clamp-1">
                {category}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-rose-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#781628]" />
              <span>Published Date: {dateStr}</span>
            </div>
            <span className="bg-rose-100 text-[#781628] font-bold text-[10px] px-2 py-0.5 rounded-full uppercase">
              {category}
            </span>
          </div>

          <h4 className="font-serif font-bold text-base text-slate-900 leading-snug">
            {title}
          </h4>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed space-y-2">
            <p>{details}</p>
            {event?.location && (
              <p className="font-semibold text-slate-900 pt-1">
                📍 Location: {event.location} | ⏰ Time: {event.time}
              </p>
            )}
          </div>

          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified by Office of the Registrar, R. J. College (Autonomous)</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => alert("Downloading official PDF notification document...")}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#781628] bg-white border border-slate-300 hover:border-[#781628] px-3.5 py-2 rounded-lg transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Circular PDF</span>
          </button>

          <button
            onClick={onClose}
            className="bg-[#781628] hover:bg-[#631120] text-white px-5 py-2 rounded-lg text-xs font-semibold shadow-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
