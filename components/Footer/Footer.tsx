import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Heart,
  Globe,
  Share2,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#420a14] text-white pt-14 pb-8 border-t-4 border-[#781628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-rose-900/50">
          {/* Col 1: Brand & Logo (lg:col-span-5) */}
          <div className="lg:col-span-5 flex items-start space-x-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white/10 p-2 rounded-xl border border-white/20 backdrop-blur-xs">
              <Image
                src="/assets/rjc-logo.png"
                alt="Ramniranjan Jhunjhunwala College Seal"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <div className="text-xs text-rose-200/90 font-medium">
                Hindi Vidya Prachar Samiti&apos;s
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-white leading-tight uppercase mt-0.5">
                Ramniranjan Jhunjhunwala College
              </h3>
              <div className="font-serif font-semibold text-xs sm:text-sm text-rose-200 uppercase">
                Of Arts, Science &amp; Commerce
              </div>
              <div className="mt-1 text-[11px] font-bold text-rose-300 uppercase tracking-wider">
                (Empowered Autonomous)
              </div>
              <p className="text-xs text-rose-100/70 mt-3 leading-relaxed max-w-sm">
                Committed to delivering holistic, value-based education and transformative research under University of Mumbai.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-rose-800 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-rose-200/90 font-medium">
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

          {/* Col 3: Get in Touch (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-rose-800 pb-2 inline-block">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs text-rose-200/90 font-normal">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <span>
                  Opposite Ghatkopar Railway Station, Ghatkopar (West), Mumbai - 400086, Maharashtra, India.
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-rose-300 shrink-0" />
                <a href="tel:+912225152263" className="hover:text-white">
                  +91 22 2515 2263 / 2515 1763
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-rose-300 shrink-0" />
                <a href="mailto:info@rjcollege.edu.in" className="hover:text-white">
                  info@rjcollege.edu.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Follow Us & Social Media (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider border-b border-rose-800 pb-2 inline-block">
              Follow Us
            </h4>
            <p className="text-xs text-rose-200/70">
              Stay connected with college events, results, and circulars.
            </p>
            <div className="flex items-center space-x-2 pt-1">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#781628] flex items-center justify-center text-rose-200 hover:text-white transition-all border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#781628] flex items-center justify-center text-rose-200 hover:text-white transition-all border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#781628] flex items-center justify-center text-rose-200 hover:text-white transition-all border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#781628] flex items-center justify-center text-rose-200 hover:text-white transition-all border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#781628] flex items-center justify-center text-rose-200 hover:text-white transition-all border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-rose-200/70 gap-3">
          <div>
            &copy; {new Date().getFullYear()} Ramniranjan Jhunjhunwala College. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors">Disclaimers</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
