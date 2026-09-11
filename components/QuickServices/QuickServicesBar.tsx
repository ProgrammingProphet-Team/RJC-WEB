"use client";

import React from "react";
import {
  BookMarked,
  FileCheck,
  GraduationCap,
  HeartHandshake,
  Dumbbell,
  Briefcase,
  Users2,
  ShieldAlert,
} from "lucide-react";
import { quickServicesData } from "@/data/collegeData";

interface QuickServicesBarProps {
  onServiceClick?: (serviceId: string) => void;
}

export const QuickServicesBar: React.FC<QuickServicesBarProps> = ({
  onServiceClick,
}) => {
  const renderIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-[#781628] group-hover:text-white transition-colors";
    switch (iconName) {
      case "BookMarked":
        return <BookMarked className={iconClass} />;
      case "FileCheck":
        return <FileCheck className={iconClass} />;
      case "GraduationCap":
        return <GraduationCap className={iconClass} />;
      case "Handshake":
        return <HeartHandshake className={iconClass} />;
      case "Activity":
        return <Dumbbell className={iconClass} />;
      case "Briefcase":
        return <Briefcase className={iconClass} />;
      case "Users2":
        return <Users2 className={iconClass} />;
      case "ShieldAlert":
        return <ShieldAlert className={iconClass} />;
      default:
        return <BookMarked className={iconClass} />;
    }
  };

  return (
    <section className="  py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {quickServicesData.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => onServiceClick && onServiceClick(item.id)}
              className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white border border-slate-200/70 hover:border-rose-900 hover:shadow-md transition-all group hover:-translate-y-1 text-center cursor-pointer"
            >
              <div className="p-2.5 rounded-full bg-rose-50 group-hover:bg-[#781628] transition-colors mb-2">
                {renderIcon(item.iconName)}
              </div>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-[#781628] transition-colors line-clamp-1">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
