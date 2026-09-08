import React from "react";
import Image from "next/image";
import { Quote, Award, Sparkles } from "lucide-react";

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-16 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#781628] text-xs font-semibold tracking-wider uppercase mb-2 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guiding Vision</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Leadership &amp; Governance
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Steering academic innovation, institutional autonomy, and holistic student growth since inception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Director Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row gap-6 items-center sm:items-start group">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-rose-100 group-hover:border-[#781628] transition-colors">
              <Image
                src="/assets/home/director.png"
                alt="Director Dr. Usha Mukundan"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <Quote className="w-6 h-6 text-[#781628]/30 mb-2 mx-auto sm:mx-0" />
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                &ldquo;Our endeavor is to ignite young minds with relentless curiosity, ethical groundedness, and transformative knowledge to meet the evolving demands of our global society.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <h4 className="font-serif font-bold text-base text-slate-900">
                  Dr. (Mrs.) Usha Mukundan
                </h4>
                <p className="text-xs text-[#781628] font-semibold">
                  Director, Hindi Vidya Prachar Samiti
                </p>
                <p className="text-[11px] text-slate-400">
                  Former Principal &amp; Senior Research Guide
                </p>
              </div>
            </div>
          </div>

          {/* Principal Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row gap-6 items-center sm:items-start group">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-rose-100 group-hover:border-[#781628] transition-colors">
              <Image
                src="/assets/home/principal.png"
                alt="Principal Dr. Himanshu Dawda"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <Quote className="w-6 h-6 text-[#781628]/30 mb-2 mx-auto sm:mx-0" />
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                &ldquo;R. J. College provides an inclusive, autonomous ecosystem where every student is mentored to excel academically, innovate fearlessly, and lead with compassion.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <h4 className="font-serif font-bold text-base text-slate-900">
                  Dr. Himanshu Dawda
                </h4>
                <p className="text-[#781628] text-xs font-semibold">
                  Principal, R. J. College (Autonomous)
                </p>
                <p className="text-[11px] text-slate-400">
                  Dean of Academics &amp; Institutional Head
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
