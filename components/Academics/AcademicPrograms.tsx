"use client";

import React from "react";
import {
  GraduationCap,
  FlaskConical,
  BarChart3,
  Users,
  ArrowRight,
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
  Users: <Users className="w-8 h-8 text-amber-600" />,
};

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({
  onSelectStream,
  onViewAllPrograms,
}) => {
  return (
    <section id="academics" className="py-16 sm:py-20 bg-rose-100/30 border-t border-slate-100">
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
              className="inline-flex items-center bg-rose-900 text-white space-x-2 border border-slate-300  hover:bg-rose-800 hover:text-white px-5 py-2 rounded-md font-semibold text-xs md:text-sm tracking-wide transition-all shadow-xs active:scale-95 cursor-pointer group"
            >
              <span>View All Programs</span>
              {/* <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /> */}
            </button>
          </div>
        </div>

        {/* 4 Program Stream Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicProgramsData.map((stream) => {
            const titleColor = stream.theme === "sfc" ? "text-slate-900" : stream.colorClass;
            return (
              <div
                key={stream.id}
                onClick={() => onSelectStream(stream)}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-40 w-full shrink-0">
                  <img 
                    src={stream.image} 
                    alt={stream.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Icon Circle Cutout Overlay */}
                  <div className="absolute -bottom-8 left-5 w-16 h-16 bg-white rounded-full flex items-center justify-center z-10">
                    {iconMap[stream.iconName] || <GraduationCap className="w-8 h-8" />}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 pt-10 flex flex-col flex-1">
                  <h3 className={`font-serif text-xl font-bold mb-2 ${titleColor}`}>
                    {stream.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {stream.description}
                  </p>
                  
                  {/* Action Link */}
                  <div className="mt-6 flex items-center text-[14px] font-bold text-[#781628]">
                    Learn More <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
