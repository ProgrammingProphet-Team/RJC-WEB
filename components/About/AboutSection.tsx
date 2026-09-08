"use client";

import React from "react";
import Image from "next/image";
import {
  Eye,
  Target,
  Users2,
  ArrowRight,
  Play,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface AboutSectionProps {
  onOpenVideo?: () => void;
  onKnowMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenVideo,
  onKnowMore,
}) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          {/* Left Column: About Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#781628] font-mono">
                About
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                R. J. College
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed text-justify">
              Hindi Vidya Prachar Samiti&apos;s Ramniranjan Jhunjhunwala College of
              Arts, Science &amp; Commerce (Empowered Autonomous) is a premier
              institution in Mumbai, committed to providing quality education,
              fostering research, and nurturing ethical values. Since 1963, we have
              been shaping future-ready individuals through academic excellence and
              holistic development.
            </p>

            <div className="pt-2">
              <button
                onClick={onKnowMore}
                className="inline-flex items-center space-x-2 bg-[#781628] hover:bg-[#631120] text-white px-5 py-2.5 rounded-md font-semibold text-xs tracking-wide transition-all shadow-md active:scale-95 cursor-pointer group"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Middle Column: Vision, Mission, Values */}
          <div className="lg:col-span-4 space-y-4">
            {/* Vision */}
            <div className="p-4 rounded-xl border border-slate-100 bg-rose-50/40 hover:bg-rose-50/80 transition-all hover:shadow-md flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-rose-100 flex items-center justify-center shrink-0 text-[#781628]">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 font-serif">
                  Our Vision
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  To be a center of excellence in higher education, empowering students through focused teaching and research.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="p-4 rounded-xl border border-slate-100 bg-rose-50/40 hover:bg-rose-50/80 transition-all hover:shadow-md flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-rose-100 flex items-center justify-center shrink-0 text-[#781628]">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 font-serif">
                  Our Mission
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  To empower students with knowledge, values, and skills for a better tomorrow. &ldquo;Knowledge is all Ambrosia&rdquo;.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="p-4 rounded-xl border border-slate-100 bg-rose-50/40 hover:bg-rose-50/80 transition-all hover:shadow-md flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-rose-100 flex items-center justify-center shrink-0 text-[#781628]">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 font-serif">
                  Our Values
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Integrity, Inclusion, Innovation, Social Responsibility, and Academic Discipline.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Life at RJC Video Card */}
          <div className="lg:col-span-4">
            <div
              onClick={onOpenVideo}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl group cursor-pointer border border-slate-200"
            >
              {/* Image */}
              <Image
                src="/assets/home/college-infra-2.png"
                alt="Life at Ramniranjan Jhunjhunwala College Campus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:bg-black/40 transition-colors" />

              {/* Center Play Button with ripple */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-white/30 animate-ping" />
                  <div className="relative w-14 h-14 rounded-full bg-white/95 text-[#781628] shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-serif font-bold text-lg text-white">
                  Life at RJC
                </div>
                <div className="text-xs text-rose-200 font-medium tracking-wide">
                  Tradition • Transformation • Together
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
