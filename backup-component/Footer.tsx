import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    // #420a14
    // border-t-4 border-[#781628]
    <footer id="contact" className="bg-[#420A14] text-white pt-14 pb-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 pb-8 border-b border-rose-900/50">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col space-y-6">
            <div className="flex items-start space-x-4">
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0 bg-white p-2 rounded-xl border border-white/20 backdrop-blur-xs">
                <Image
                  src="/assets/rjc-logo.png"
                  alt="Ramniranjan Jhunjhunwala College Seal"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="text-xs lg:text-sm text-rose-200/90 font-medium">
                  Hindi Vidya Prachar Samiti&apos;s
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg lg:text-xl text-white leading-tight uppercase mt-0.5">
                  Ramniranjan Jhunjhunwala College
                </h3>
                <div className="font-serif font-semibold text-xs sm:text-sm lg:text-base text-rose-200 uppercase">
                  Of Arts, Science &amp; Commerce
                </div>
                <div className="mt-1 text-[11px] lg:text-xs font-bold text-rose-300 uppercase tracking-wider">
                  (Empowered Autonomous)
                </div>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#781628] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-white group-hover:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#781628] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-white group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#781628] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-white group-hover:scale-110 transition-transform"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#781628] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-white group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#781628] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-white group-hover:scale-110 transition-transform"><path d="M2.5 7.1C2.5 7.1 2 9.5 2 12c0 2.5.5 4.9.5 4.9.3 1.6 1.6 2.9 3.2 3.2C8.2 20.5 12 20.5 12 20.5s3.8 0 6.3-.4c1.6-.3 2.9-1.6 3.2-3.2.5-.5.5-2.9.5-2.9C22 11.5 21.5 9.1 21.5 9.1c-.3-1.6-1.6-2.9-3.2-3.2C15.8 5.5 12 5.5 12 5.5s-3.8 0-6.3.4C4.1 6.2 2.8 7.5 2.5 7.1z"/><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 xl:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm lg:text-base text-white uppercase tracking-wider border-b border-rose-800 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs lg:text-sm text-rose-100 font-medium">
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white hover:underline transition-colors">
                  Academics
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white hover:underline transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#notices" className="hover:text-white hover:underline transition-colors">
                  Examination
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors">
                  IQAC &amp; NAAC
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Get in Touch */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm lg:text-base text-white uppercase tracking-wider border-b border-rose-800 pb-2 inline-block">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs lg:text-sm text-rose-100 font-normal">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-rose-100 shrink-0 mt-0.5" />
                <span>
                  Opposite Ghatkopar Railway Station, Ghatkopar (West), Mumbai - 400086, Maharashtra, India.
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-rose-100 shrink-0" />
                <a href="tel:+912225152263" className="hover:text-white">
                  +91 22 2515 2263 / 2515 1763
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-rose-100 shrink-0" />
                <a href="mailto:info@rjcollege.edu.in" className="hover:text-white">
                  info@rjcollege.edu.in
                </a>
              </div>
            </div>
          </div>


        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs lg:text-sm text-rose-200 gap-3">
          <div>
            &copy; {new Date().getFullYear()} Ramniranjan Jhunjhunwala College. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Disclaimers</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {/* <span>|</span> */}
            {/* <a href="#" className="hover:text-white transition-colors">Sitemap</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
