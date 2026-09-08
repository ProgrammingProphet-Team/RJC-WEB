"use client";

import React, { useState } from "react";
import {
  X,
  Sparkles,
  CheckCircle2,
  FileDown,
  ArrowRight,
  GraduationCap,
  Send,
  HelpCircle,
} from "lucide-react";

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionsModal: React.FC<AdmissionsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"steps" | "inquiry" | "faq">("steps");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stream: "Science",
    course: "B.Sc Data Science & AI",
    percentage: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#781628] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-rose-200" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-900/60 text-rose-200 text-[10px] font-mono uppercase tracking-wider mb-0.5">
                <Sparkles className="w-3 h-3 text-rose-300" />
                <span>Academic Session 2025–2026</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white">
                Admissions at R. J. College (Autonomous)
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-rose-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
          <button
            onClick={() => setActiveTab("steps")}
            className={`py-3 text-center transition-colors ${
              activeTab === "steps"
                ? "bg-white text-[#781628] border-b-2 border-[#781628]"
                : "hover:text-slate-900"
            }`}
          >
            Admission Steps
          </button>
          <button
            onClick={() => setActiveTab("inquiry")}
            className={`py-3 text-center transition-colors ${
              activeTab === "inquiry"
                ? "bg-white text-[#781628] border-b-2 border-[#781628]"
                : "hover:text-slate-900"
            }`}
          >
            Direct Inquiry Form
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            className={`py-3 text-center transition-colors ${
              activeTab === "faq"
                ? "bg-white text-[#781628] border-b-2 border-[#781628]"
                : "hover:text-slate-900"
            }`}
          >
            Admission FAQs
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === "steps" && (
            <div className="space-y-4">
              <div className="border-l-2 border-[#781628] pl-3 py-0.5">
                <h4 className="font-serif font-bold text-slate-900 text-sm">
                  First Year UG &amp; PG Degree Admissions
                </h4>
                <p className="text-xs text-slate-500">
                  Follow these essential stages to secure admission at RJ College:
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#781628] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-800">
                      University of Mumbai Pre-Admission Online Enrolment
                    </h5>
                    <p className="text-slate-600 mt-0.5">
                      Register on mumoa.digitaluniversity.ac and choose Ramniranjan Jhunjhunwala College (Code: 228).
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#781628] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-800">
                      RJ College Online Application Form
                    </h5>
                    <p className="text-slate-600 mt-0.5">
                      Fill out the autonomous college admission form on our admissions portal with your marks and preferred Major/Minor combination.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#781628] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-800">
                      Merit List Declaration &amp; Document Verification
                    </h5>
                    <p className="text-slate-600 mt-0.5">
                      Check published Merit Lists on our website. Selected candidates undergo physical/online verification of HSC marksheet and caste certificate (if applicable).
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#781628] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    4
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-800">
                      Fee Payment &amp; Enrollment Confirmation
                    </h5>
                    <p className="text-slate-600 mt-0.5">
                      Pay the admission fees online through the student portal to generate the digital Fee Receipt and Roll Number.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "inquiry" && (
            <div>
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-base">
                    Inquiry Submitted Successfully!
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Thank you! Our admission counsellor will contact you shortly on your provided phone and email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Aarav Sharma"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#781628]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#781628]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="aarav@example.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#781628]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        HSC / 12th Percentage (%)
                      </label>
                      <input
                        type="text"
                        value={formData.percentage}
                        onChange={(e) =>
                          setFormData({ ...formData, percentage: e.target.value })
                        }
                        placeholder="e.g. 88.5%"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#781628]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Academic Stream
                      </label>
                      <select
                        value={formData.stream}
                        onChange={(e) =>
                          setFormData({ ...formData, stream: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#781628] bg-white"
                      >
                        <option>Science</option>
                        <option>Commerce</option>
                        <option>Arts</option>
                        <option>Self-Financing Programs</option>
                        <option>Postgraduate (M.Sc/M.Com/M.A)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Course Preference
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) =>
                          setFormData({ ...formData, course: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#781628] bg-white"
                      >
                        <option>B.Sc Data Science &amp; AI</option>
                        <option>B.Sc Computer Science</option>
                        <option>B.Sc Information Technology</option>
                        <option>B.Sc Biotechnology</option>
                        <option>B.Com (General)</option>
                        <option>B.Com (Accounting &amp; Finance - BAF)</option>
                        <option>Bachelor of Management Studies (BMS)</option>
                        <option>B.A. in Mass Media (BAMMC)</option>
                        <option>B.A. in English / Psychology</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#781628] hover:bg-[#631120] text-white py-2.5 rounded-lg font-semibold shadow-md transition-all active:scale-98 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Admission Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {activeTab === "faq" && (
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <h5 className="font-bold text-slate-900">
                  Is attendance compulsory under Autonomous regulations?
                </h5>
                <p className="text-slate-600 mt-1">
                  Yes, minimum 75% attendance in lectures and practicals is mandatory as per University of Mumbai and Autonomous Ordinances.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <h5 className="font-bold text-slate-900">
                  Are scholarships available for reserved categories and merit students?
                </h5>
                <p className="text-slate-600 mt-1">
                  Yes, government scholarships (MahaDBT) and Hindi Vidya Prachar Samiti institutional fee concessions are provided to eligible students.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <h5 className="font-bold text-slate-900">
                  Where is the college located?
                </h5>
                <p className="text-slate-600 mt-1">
                  Ramniranjan Jhunjhunwala College is located right opposite Ghatkopar Railway Station (West), offering seamless suburban rail &amp; Metro connectivity.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <button
            onClick={() => alert("Downloading Prospectus 2025-26 PDF...")}
            className="inline-flex items-center space-x-1.5 text-[#781628] hover:underline font-semibold"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Prospectus 2025–26</span>
          </button>
          <button
            onClick={onClose}
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-1.5 rounded-lg font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
