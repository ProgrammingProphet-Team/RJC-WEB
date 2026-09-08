"use client";

import React, { useState } from "react";
import { X, User, Lock, ExternalLink, GraduationCap, BookOpen, KeyRound, ShieldCheck } from "lucide-react";

interface StudentLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentLoginModal: React.FC<StudentLoginModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"student" | "faculty" | "lms" | "results">("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#781628] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-rose-200" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-white">
                RJC Digital Portal
              </h3>
              <p className="text-[11px] text-rose-200">
                Single Sign-On for Students &amp; Staff
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-rose-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600">
          <button
            onClick={() => setActiveTab("student")}
            className={`py-2.5 text-center transition-colors ${
              activeTab === "student"
                ? "bg-white text-[#781628] border-b-2 border-[#781628]"
                : "hover:text-slate-900"
            }`}
          >
            Student ERP
          </button>
          <button
            onClick={() => setActiveTab("faculty")}
            className={`py-2.5 text-center transition-colors ${
              activeTab === "faculty"
                ? "bg-white text-[#781628] border-b-2 border-[#781628]"
                : "hover:text-slate-900"
            }`}
          >
            Faculty
          </button>
          <button
            onClick={() => setActiveTab("lms")}
            className={`py-2.5 text-center transition-colors ${
              activeTab === "lms"
                ? "bg-white text-[#781628] border-b-2 border-[#781628]"
                : "hover:text-slate-900"
            }`}
          >
            Moodle LMS
          </button>
          <button
            onClick={() => setActiveTab("results")}
            className={`py-2.5 text-center transition-colors ${
              activeTab === "results"
                ? "bg-white text-[#781628] border-b-2 border-[#781628]"
                : "hover:text-slate-900"
            }`}
          >
            Exam Results
          </button>
        </div>

        {/* Body Form */}
        <div className="p-6">
          {loginSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto animate-bounce">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-800 text-base">
                Authenticated Successfully
              </h4>
              <p className="text-xs text-slate-500">
                Redirecting to your RJC Student Dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {activeTab === "student"
                    ? "PRN / Student ID"
                    : activeTab === "faculty"
                    ? "Employee Code"
                    : activeTab === "results"
                    ? "Seat No / Roll No"
                    : "Moodle Username"}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={
                      activeTab === "student"
                        ? "e.g. RJC20240981"
                        : "Enter your registered ID"
                    }
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#781628]/20 focus:border-[#781628]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {activeTab === "results" ? "Mother's First Name (Verification)" : "Password"}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type={activeTab === "results" ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={
                      activeTab === "results" ? "e.g. Sunita" : "••••••••"
                    }
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#781628]/20 focus:border-[#781628]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px]">
                <label className="flex items-center space-x-1.5 text-slate-600">
                  <input type="checkbox" className="rounded text-[#781628] focus:ring-0" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-[#781628] font-semibold hover:underline">
                  Forgot credentials?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#781628] hover:bg-[#631120] text-white py-2.5 rounded-lg text-xs font-semibold transition-all shadow-md active:scale-98 cursor-pointer mt-2"
              >
                {activeTab === "results" ? "View Examination Results" : "Sign In"}
              </button>
            </form>
          )}

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>New Admission?</span>
            <a
              href="#admissions"
              onClick={onClose}
              className="text-[#781628] font-semibold hover:underline flex items-center gap-1"
            >
              <span>Register for 2025–26</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
