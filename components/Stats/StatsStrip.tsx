import React from "react";
import {
  Trophy,
  Users,
  UserCheck,
  BookOpen,
  Award,
  Landmark,
} from "lucide-react";
import { statisticsData, StatItem } from "@/data/collegeData";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-7 h-7 text-[#781628]" />,
  Users: <Users className="w-7 h-7 text-[#781628]" />,
  UserCheck: <UserCheck className="w-7 h-7 text-[#781628]" />,
  BookOpen: <BookOpen className="w-7 h-7 text-[#781628]" />,
  Award: <Award className="w-7 h-7 text-[#781628]" />,
  Landmark: <Landmark className="w-7 h-7 text-[#781628]" />,
};

export const StatsStrip: React.FC = () => {
  return (
    <section className="relative z-30 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-xl shadow-slate-200/80 border border-slate-100 p-4 sm:p-6 transition-all">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {statisticsData.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex items-center space-x-3.5 ${
                idx > 0 ? "pt-3 sm:pt-0 sm:pl-4" : ""
              } group hover:-translate-y-0.5 transition-transform`}
            >
              <div className="p-2.5 rounded-lg bg-rose-50/80 group-hover:bg-rose-100/80 transition-colors shrink-0">
                {iconMap[stat.iconName] || <Trophy className="w-7 h-7 text-[#781628]" />}
              </div>
              <div className="min-w-0">
                <div className="font-serif font-black text-xl sm:text-2xl text-slate-900 leading-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium truncate">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
