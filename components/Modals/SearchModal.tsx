"use client";

import React, { useState } from "react";
import { Search, X, BookOpen, FileText, ArrowRight, Sparkles } from "lucide-react";
import { academicProgramsData, announcementsData, eventsData } from "@/data/collegeData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgram?: (streamId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProgram,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const filteredPrograms = academicProgramsData
    .flatMap((stream) =>
      stream.departments.map((dept) => ({
        ...dept,
        streamTitle: stream.title,
        streamId: stream.id,
      }))
    )
    .filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.streamTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const filteredNotices = announcementsData.filter(
    (n) =>
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Header */}
        <div className="p-4 border-b border-slate-200 flex items-center space-x-3 bg-slate-50/60">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses, syllabus, notices, admissions (e.g. Data Science, BAMMC, Exam, NAAC)..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-slate-400 hover:text-slate-600 px-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Recommendations */}
        <div className="px-4 py-2 bg-white border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px]">
          <span className="text-slate-400 font-medium shrink-0">Trending:</span>
          {["Data Science", "B.Com", "Admissions 2025", "ATKT Exam", "Biotechnology", "NEP 2020"].map(
            (tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="bg-slate-100 hover:bg-rose-50 hover:text-[#781628] text-slate-600 px-2.5 py-0.5 rounded-full whitespace-nowrap transition-colors"
              >
                {tag}
              </button>
            )
          )}
        </div>

        {/* Search Results Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Programs Match */}
          {filteredPrograms.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-[#781628] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Academic Courses ({filteredPrograms.length})</span>
              </div>
              <div className="space-y-2">
                {filteredPrograms.slice(0, 6).map((prog) => (
                  <div
                    key={prog.name}
                    onClick={() => {
                      if (onSelectProgram) onSelectProgram(prog.streamId);
                      onClose();
                    }}
                    className="p-3 rounded-lg border border-slate-100 hover:border-rose-200 hover:bg-rose-50/40 transition-colors cursor-pointer group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-[#781628]">
                        {prog.name}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {prog.description}
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 group-hover:text-[#781628] shrink-0 ml-2">
                      {prog.streamTitle} • {prog.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notices Match */}
          {filteredNotices.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-[#781628] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Announcements &amp; Circulars ({filteredNotices.length})</span>
              </div>
              <div className="space-y-2">
                {filteredNotices.map((notice) => (
                  <div
                    key={notice.id}
                    onClick={onClose}
                    className="p-3 rounded-lg border border-slate-100 hover:border-rose-200 hover:bg-rose-50/40 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div className="text-xs font-semibold text-slate-800">
                      {notice.title}
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-sm shrink-0 ml-2">
                      {notice.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredPrograms.length === 0 && filteredNotices.length === 0 && (
            <div className="py-12 text-center text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-xs">No matching results found for &ldquo;{searchQuery}&rdquo;</p>
              <p className="text-[11px] text-slate-400 mt-1">
                Try searching for general keywords like Arts, Science, Commerce, Exam, or Research.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
