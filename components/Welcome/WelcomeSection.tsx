"use client";

import React from "react";
import Image from "next/image";

export const WelcomeSection: React.FC = () => {
  return (
    <>
      {/* Welcome Section */}
      <section id="welcome" className="py-16 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#781628] mb-6">
                Welcome to HVPS RJ College
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base text-justify">
                Hindi Vidya Prachar Samiti&apos;s Ramniranjan Jhunjhunwala College of
                Arts, Science &amp; Commerce (Empowered Autonomous) is a premier
                educational institution dedicated to providing quality education.
                Our college offers various undergraduate, postgraduate, and research
                programs designed to meet the evolving needs of industry and society.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base text-justify">
                With state-of-the-art infrastructure, experienced faculty, and
                industry-oriented curriculum, we ensure that our students receive
                the best possible education and training to excel in their chosen
                careers.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                Our commitment to excellence in education, research, and community
                service has made us one of the leading institutions in the region.
              </p>
            </div>
            <div className="relative w-full h-[350px] sm:h-[360px] rounded-xl overflow-hidden shadow-lg border border-slate-100">
              <Image
                src="/assets/home/college-infra.png"
                alt="Students at Ramniranjan Jhunjhunwala College"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NAAC Section */}
      <section className="py-12 bg-rose-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#781628] mb-2">
            National Assessment and Accreditation Council (NAAC)
          </h2>
          <p className="text-gray-700 text-sm sm:text-base font-medium">
            has accredited &apos;A&apos; Grade to Ramniranjan Jhunjhunwala College.
          </p>
        </div>
      </section>
    </>
  );
};
