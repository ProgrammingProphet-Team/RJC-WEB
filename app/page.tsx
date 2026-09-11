"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/Navbar/TopBar";
import { MainHeader } from "@/components/Navbar/MainHeader";
import { Navigation } from "@/components/Navbar/Navigation";
import { HeroCarousel } from "@/components/Hero/HeroCarousel";
import { StatsStrip } from "@/components/Stats/StatsStrip";
import { AboutSection } from "@/components/About/AboutSection";
import { AcademicPrograms } from "@/components/Academics/AcademicPrograms";
import { NewsEventsSection } from "@/components/NewsEvents/NewsEventsSection";
import { QuickServicesBar } from "@/components/QuickServices/QuickServicesBar";
import { LeadershipSection } from "@/components/Leadership/LeadershipSection";
import { CampusLifeSection } from "@/components/CampusLife/CampusLifeSection";
import { Footer } from "@/components/Footer/Footer";

// Modals
import { StudentLoginModal } from "@/components/Modals/StudentLoginModal";
import { SearchModal } from "@/components/Modals/SearchModal";
import { VideoModal } from "@/components/Modals/VideoModal";
import { ProgramDetailModal } from "@/components/Modals/ProgramDetailModal";
import { NoticeDetailModal } from "@/components/Modals/NoticeDetailModal";
import { AdmissionsModal } from "@/components/Modals/AdmissionsModal";

import {
  ProgramStream,
  AnnouncementItem,
  EventItem,
  academicProgramsData,
} from "@/data/collegeData";

export default function Home() {
  // Modal states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
  const [selectedStream, setSelectedStream] = useState<ProgramStream | null>(null);

  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<AnnouncementItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Handlers
  const handleSelectStream = (stream: ProgramStream) => {
    setSelectedStream(stream);
    setIsProgramModalOpen(true);
  };

  const handleViewAllPrograms = () => {
    setSelectedStream(academicProgramsData[0]);
    setIsProgramModalOpen(true);
  };

  const handleSelectNotice = (notice: AnnouncementItem) => {
    setSelectedNotice(notice);
    setSelectedEvent(null);
    setIsNoticeModalOpen(true);
  };

  const handleSelectEvent = (event: EventItem) => {
    setSelectedEvent(event);
    setSelectedNotice(null);
    setIsNoticeModalOpen(true);
  };

  const handleServiceClick = (serviceId: string) => {
    if (serviceId === "exam") {
      setIsLoginOpen(true);
    } else if (serviceId === "sch") {
      setIsAdmissionsOpen(true);
    } else if (serviceId === "lib") {
      // scroll to campus life
      const el = document.getElementById("campus-life");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* 1. Top Bar */}
      <TopBar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* 2. Main College Branding Header */}
      <MainHeader />

      {/* 3. Sticky Navigation Bar with Dropdowns */}
      <Navigation
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* 4. Hero Carousel (A Legacy of Learning Since 1963 - Empowering Generations) */}
      <HeroCarousel
        onAboutClick={() => {
          const el = document.getElementById("about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        onExplorePrograms={handleViewAllPrograms}
      />

      {/* 5. Key Statistics Strip */}
      {/* <StatsStrip /> */}

      {/* 6. About Section (About RJC + Vision, Mission, Values + Life at RJC Video Card) */}
      <AboutSection
        onOpenVideo={() => setIsVideoOpen(true)}
        onKnowMore={() => {
          const el = document.getElementById("leadership");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 7. Academic Programs (Arts, Science, Commerce, Self-Financing Courses) */}
      <AcademicPrograms
        onSelectStream={handleSelectStream}
        onViewAllPrograms={handleViewAllPrograms}
      />

      {/* 8. Announcements, Events & Admissions CTA */}
      <NewsEventsSection
        onSelectNotice={handleSelectNotice}
        onSelectEvent={handleSelectEvent}
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
      />

      {/* 9. Quick Services Ribbon */}
      <QuickServicesBar onServiceClick={handleServiceClick} />

      {/* 10. Leadership & Governance (Director & Principal) */}
      <LeadershipSection />

      {/* 11. Campus Life & Student Activities (NCC, NSS, Cultural Fest, Library) */}
      <CampusLifeSection />

      {/* 12. Rich Footer */}
      <Footer />

      {/* Interactive Modals */}
      <StudentLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProgram={(streamId) => {
          const matched = academicProgramsData.find((s) => s.id === streamId);
          if (matched) {
            setSelectedStream(matched);
            setIsProgramModalOpen(true);
          }
        }}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <ProgramDetailModal
        isOpen={isProgramModalOpen}
        onClose={() => setIsProgramModalOpen(false)}
        stream={selectedStream}
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
      />

      <NoticeDetailModal
        isOpen={isNoticeModalOpen}
        onClose={() => setIsNoticeModalOpen(false)}
        notice={selectedNotice}
        event={selectedEvent}
      />

      <AdmissionsModal
        isOpen={isAdmissionsOpen}
        onClose={() => setIsAdmissionsOpen(false)}
      />
    </main>
  );
}
