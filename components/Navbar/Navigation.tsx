"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { navigationLinks, NavItem } from "@/data/navigationData";

interface NavigationProps {
  onOpenAdmissions?: () => void;
  onOpenLogin?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenAdmissions,
  onOpenLogin,
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (item: NavItem) => {
    if (item.title === "Admissions" && onOpenAdmissions) {
      // If admission action
    }
  };

  return (
    <nav
      ref={navRef}
      className={`bg-white border-y border-slate-200 sticky top-0 z-40 transition-all duration-200 ${
        isScrolled ? "shadow-md py-0" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-13">
          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationLinks.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isHome = item.title === "Home";
              const isOpen = activeMenu === item.title;

              return (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(item)}
                    className={`flex items-center uppercase space-x-1 px-2.5 py-3.5 text-[13px] font-semibold tracking-normal transition-colors relative ${
                      isHome
                        ? "text-[#781628] font-bold"
                        : "text-slate-700 hover:text-[#781628]"
                    }`}
                  >
                    <span>{item.title}</span>
                    {hasChildren && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover:text-[#781628] ${
                          isOpen ? "rotate-180 text-[#781628]" : ""
                        }`}
                      />
                    )}
                    {/* Active Bottom Underline indicator */}
                    {isHome && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#781628] rounded-full" />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {hasChildren && isOpen && (
                    <div className="absolute left-0 top-full w-72 bg-white rounded-b-lg shadow-xl border border-slate-100 py-2 animate-fade-in z-50">
                      <div className="px-3 py-1.5 mb-1 border-b border-slate-100 bg-slate-50/70 text-[11px] font-bold text-[#781628] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#781628]" />
                        <span>{item.title} Overview</span>
                      </div>
                      <div className="max-h-[380px] overflow-y-auto py-1">
                        {item.children?.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-3.5 py-2 hover:bg-rose-50/60 transition-colors group/item"
                          >
                            <div className="text-[13px] font-semibold text-slate-800 group-hover/item:text-[#781628] flex items-center justify-between">
                              <span>{subItem.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#781628]" />
                            </div>
                            {subItem.description && (
                              <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {subItem.description}
                              </div>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile brand text & Toggle */}
          <div className="flex lg:hidden items-center justify-between w-full py-2">
            <span className="font-serif font-bold text-[#781628] text-sm">
              R. J. College (Autonomous)
            </span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-[#781628] hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 max-h-[80vh] overflow-y-auto animate-fade-in shadow-2xl">
          <div className="space-y-1">
            {navigationLinks.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = activeMobileDropdown === item.title;

              return (
                <div key={item.title} className="border-b border-slate-100 last:border-0">
                  <div className="flex items-center justify-between py-2.5">
                    <a
                      href={item.href}
                      onClick={() => !hasChildren && setMobileOpen(false)}
                      className="text-sm font-semibold text-slate-800 hover:text-[#781628]"
                    >
                      {item.title}
                    </a>
                    {hasChildren && (
                      <button
                        onClick={() =>
                          setActiveMobileDropdown(isExpanded ? null : item.title)
                        }
                        className="p-1.5 text-slate-500 hover:text-[#781628]"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#781628]" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <div className="pl-4 pb-2 space-y-2 border-l-2 border-rose-200 ml-2">
                      {item.children?.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1 text-xs text-slate-600 hover:text-[#781628]"
                        >
                          <div className="font-medium text-slate-800">{subItem.title}</div>
                          {subItem.description && (
                            <div className="text-[10px] text-slate-400">{subItem.description}</div>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 flex gap-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                if (onOpenLogin) onOpenLogin();
              }}
              className="flex-1 bg-[#781628] text-white py-2 text-xs font-semibold rounded text-center"
            >
              Student ERP Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
