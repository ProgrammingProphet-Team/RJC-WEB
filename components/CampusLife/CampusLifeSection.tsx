import React from "react";
import Image from "next/image";
import { Shield, Trophy, Music, Library, Sparkles, ArrowRight } from "lucide-react";

export const CampusLifeSection: React.FC = () => {
  return (
    <section id="campus-life" className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#781628] text-xs font-semibold tracking-wider uppercase mb-2 font-mono">
              {/* <Sparkles className="w-3.5 h-3.5" /> */}
              <span>Vibrant Campus Community</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Life at R. J. College
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Beyond textbooks — leadership in NCC, social impact through NSS, competitive sports tournaments, and Mumbai&apos;s celebrated cultural fest.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: NCC */}
          <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/assets/ncc/ncc-group.png"
                alt="NCC Cadets RJ College"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute top-3 left-3 bg-[#781628] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <Shield className="w-3 h-3" />
                <span>NCC Army &amp; Navy</span>
              </div> */}
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif font-bold text-base text-slate-900 group-hover:text-[#781628] transition-colors">
                  National Cadet Corps
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Premier unit producing RDC contingents, national drill winners, and commissioned armed forces officers.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Independence Day & Community */}
          <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/assets/ncc/ncc-independence-day.png"
                alt="National Celebrations and NSS RJ College"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute top-3 left-3 bg-emerald-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>NSS &amp; Social Outreach</span>
              </div> */}
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif font-bold text-base text-slate-900 group-hover:text-[#781628] transition-colors">
                  National Celebrations &amp; NSS
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Community health camps, blood donation drives, tree plantation initiatives, and rural development camps.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Cultural Fest */}
          <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/assets/home/event.png"
                alt="Jhunjhunwala Utsav Cultural Fest"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute top-3 left-3 bg-purple-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <Music className="w-3 h-3" />
                <span>Jhunjhunwala Utsav</span>
              </div> */}
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif font-bold text-base text-slate-900 group-hover:text-[#781628] transition-colors">
                  Cultural Fest &amp; Talent Arena
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Mumbai&apos;s inter-collegiate youth extravaganza featuring performing arts, theatre, music, fashion, and fine arts.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Central Library */}
          <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/assets/home/library.png"
                alt="Central Library RJ College"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute top-3 left-3 bg-blue-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <Library className="w-3 h-3" />
                <span>Central Knowledge Hub</span>
              </div> */}
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif font-bold text-base text-slate-900 group-hover:text-[#781628] transition-colors">
                  Library &amp; Digital Databases
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Over 1,00,000 volumes, OPAC system, N-LIST e-journals, DELNET access, and quiet air-conditioned reading halls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
