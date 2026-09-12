"use client";

import React from "react";
import Image from "next/image";
import {
  Megaphone,
  Calendar,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Rocket,
  GraduationCap,
} from "lucide-react";
import {
  announcementsData,
  eventsData,
  AnnouncementItem,
  EventItem,
} from "@/data/collegeData";

interface NewsEventsSectionProps {
  onSelectNotice: (item: AnnouncementItem) => void;
  onSelectEvent: (item: EventItem) => void;
  onOpenAdmissions: () => void;
}

export const NewsEventsSection: React.FC<NewsEventsSectionProps> = ({
  onSelectNotice,
  onSelectEvent,
  onOpenAdmissions,
}) => {
  return (
    <section id="notices" className="py-16 sm:pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Latest Announcements */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl border border-slate-200/80 bg-white shadow-xs">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <Megaphone className="w-5 h-5 lg:w-6 lg:h-6 text-[#781628]" />
                  <h3 className="font-serif font-bold text-lg lg:text-xl text-slate-900">
                    Latest Announcements
                  </h3>
                </div>
                <button
                  onClick={() => onSelectNotice(announcementsData[0])}
                  className="text-xs lg:text-sm font-semibold text-[#781628] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Announcements List */}
              <div className="space-y-3.5">
                {announcementsData.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectNotice(item)}
                    className="flex items-start space-x-3.5 p-2 rounded-lg hover:bg-rose-50/50 transition-colors cursor-pointer group"
                  >
                    {/* Date Block */}
                    <div className="shrink-0 w-11 lg:w-12 text-center bg-slate-100 group-hover:bg-[#781628] group-hover:text-white rounded-md py-1 lg:py-1.5 px-1 lg:px-1.5 transition-colors">
                      <div className="font-serif font-bold text-sm lg:text-base leading-none">
                        {item.day}
                      </div>
                      <div className="text-[10px] lg:text-[11px] uppercase font-semibold text-slate-500 group-hover:text-rose-100">
                        {item.month}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="text-xs lg:text-sm font-medium text-slate-800 group-hover:text-[#781628] transition-colors leading-snug line-clamp-2">
                        {item.title}
                        {item.isNew && (
                          <span className="inline-block ml-1.5 bg-[#781628] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-sm uppercase tracking-wide">
                            New
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Events & Activities */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 rounded-2xl border border-slate-200/80 bg-white shadow-xs">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-[#781628]" />
                  <h3 className="font-serif font-bold text-lg lg:text-xl text-slate-900">
                    Events &amp; Activities
                  </h3>
                </div>
                <button
                  onClick={() => onSelectEvent(eventsData[0])}
                  className="text-xs lg:text-sm font-semibold text-[#781628] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Events List */}
              <div className="space-y-3.5">
                {eventsData.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => onSelectEvent(event)}
                    className="flex items-start space-x-3.5 p-2 rounded-lg hover:bg-rose-50/50 transition-colors cursor-pointer group"
                  >
                    {/* Date Block */}
                    <div className="shrink-0 w-11 lg:w-12 text-center bg-slate-100 group-hover:bg-[#781628] group-hover:text-white rounded-md py-1 lg:py-1.5 px-1 lg:px-1.5 transition-colors">
                      <div className="font-serif font-bold text-sm lg:text-base leading-none">
                        {event.day}
                      </div>
                      <div className="text-[10px] lg:text-[11px] uppercase font-semibold text-slate-500 group-hover:text-rose-100">
                        {event.month}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="text-xs lg:text-sm font-medium text-slate-800 group-hover:text-[#781628] transition-colors leading-snug line-clamp-2">
                        {event.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Admissions Banner Card */}
          <div className="lg:col-span-4">
            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl bg-[#520d1b] flex flex-col justify-end p-6 sm:p-8 text-white group border border-rose-900/30">
              {/* Background Campus/Students Image */}
              <Image
                src="/assets/home/college-infra.png"
                alt="Admissions at Ramniranjan Jhunjhunwala College"
                fill
                className="object-cover mix-blend-overlay opacity-30 group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-rose-50/10 via-rose-50/10 to-transparent" />

              {/* Content */}
              <div className="relative z-10 space-y-4 lg:space-y-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] lg:text-xs font-mono tracking-widest text-rose-100 uppercase">
                  <GraduationCap className="w-3 h-3 lg:w-4 lg:h-4 text-rose-100" />
                  <span>Admissions Open</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Be a part of the RJC Legacy
                </h3>

                <p className="text-xs lg:text-sm text-rose-200/90 font-medium tracking-wide">
                  Learn. Grow. Belong. Achieve.
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOpenAdmissions}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#781628] hover:bg-[#631120] text-white px-6 py-2.5 lg:px-8 lg:py-3 rounded-md font-semibold text-xs lg:text-sm tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer border border-rose-400/30 group/btn"
                  >
                    <span>Admissions 2026–27</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
