"use client";

import React, { useState } from "react";
import { X, BookOpen, GraduationCap, CheckCircle2, Clock, Sparkles, ArrowRight } from "lucide-react";
import { ProgramStream, academicProgramsData } from "@/data/collegeData";

interface ProgramDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  stream: ProgramStream | null;
  onOpenAdmissions?: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  isOpen,
  onClose,
  stream,
  onOpenAdmissions,
}) => {
  const [selectedStreamId, setSelectedStreamId] = useState<string>(
    stream ? stream.id : academicProgramsData[0].id
  );

  if (!isOpen) return null;

  const currentStream =
    academicProgramsData.find((s) => s.id === selectedStreamId) ||
    academicProgramsData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#781628] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-rose-200" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                Academic Programs &amp; Curriculum (NEP 2020)
              </h3>
              <p className="text-xs text-rose-200">
                Empowered Autonomous Framework under University of Mumbai
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-rose-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stream Selector Pills */}
        <div className="flex border-b border-slate-200 bg-slate-50 p-2 gap-2 overflow-x-auto">
          {academicProgramsData.map((s) => {
            const isActive = s.id === currentStream.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedStreamId(s.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#781628] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-rose-50 hover:text-[#781628] border border-slate-200"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Stream Content Details */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h4 className="font-serif font-bold text-xl text-slate-900">
              Department of {currentStream.title}
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              {currentStream.description} — Offering multidisciplinary major, minor, open elective, and vocational skill courses.
            </p>
          </div>

          {/* Department courses list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentStream.departments.map((dept, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-rose-50/40 hover:border-rose-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-rose-100 text-[#781628] uppercase">
                      {dept.level} Degree
                    </span>
                    <div className="flex items-center text-[11px] text-slate-500 font-medium">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{dept.duration}</span>
                    </div>
                  </div>
                  <h5 className="font-serif font-bold text-sm text-slate-900">
                    {dept.name}
                  </h5>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>NEP Aligned</span>
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      if (onOpenAdmissions) onOpenAdmissions();
                    }}
                    className="text-[#781628] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-slate-600 text-[11px]">
            Need syllabus copy or credit framework? Inquire with our Academic Cell.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 border border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-slate-100"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onOpenAdmissions) onOpenAdmissions();
              }}
              className="flex-1 sm:flex-none px-5 py-2 bg-[#781628] hover:bg-[#631120] text-white rounded-lg font-semibold shadow-sm"
            >
              Go to Admissions Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
