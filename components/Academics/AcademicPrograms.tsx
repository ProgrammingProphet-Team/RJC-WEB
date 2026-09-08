"use client";

import React from "react";
import {
  GraduationCap,
  FlaskConical,
  BarChart3,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { academicProgramsData, ProgramStream } from "@/data/collegeData";

interface AcademicProgramsProps {
  onSelectStream: (stream: ProgramStream) => void;
  onViewAllPrograms: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-8 h-8 text-[#781628]" />,
  FlaskConical: <FlaskConical className="w-8 h-8 text-blue-700" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-emerald-700" />,
  Users: <Users className="w-8 h-8 text-amber-700" />,
};

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({
  onSelectStream,
  onViewAllPrograms,
}) => {
  return (
    <section id="academics" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Academic Programs
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              We offer a wide range of undergraduate, postgraduate and research
              programs across Arts, Science, Commerce and Self-Financing Courses.
            </p>
          </div>

          <div>
            <button
              onClick={onViewAllPrograms}
              className="inline-flex items-center space-x-2 border border-slate-300 hover:border-[#781628] hover:bg-white text-slate-700 hover:text-[#781628] px-5 py-2 rounded-md font-semibold text-xs tracking-wide transition-all shadow-xs active:scale-95 cursor-pointer group"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 4 Program Stream Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicProgramsData.map((stream) => (
            <div
              key={stream.id}
              onClick={() => onSelectStream(stream)}
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer flex flex-col justify-between group ${stream.lightBgClass}`}
            >
              <div>
                {/* Stream Icon */}
                <div className="w-14 h-14 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {iconMap[stream.iconName] || <GraduationCap className="w-8 h-8" />}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#781628] transition-colors">
                  {stream.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-normal">
                  {stream.description}
                </p>
              </div>

              {/* Action arrow indicator */}
              <div className="pt-6 mt-4 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                  {stream.departments.length} Courses
                </span>
                <div
                  className={`w-7 h-7 rounded-full bg-white shadow-xs flex items-center justify-center transition-all group-hover:translate-x-1 ${stream.colorClass}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
