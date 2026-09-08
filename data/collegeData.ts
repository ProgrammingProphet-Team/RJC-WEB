export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  iconName: string;
}

export interface HeroSlide {
  id: number;
  tagline: string;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  image: string;
  ctaPrimaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryText: string;
  ctaSecondaryHref: string;
}

export interface ProgramStream {
  id: string;
  title: string;
  theme: "arts" | "science" | "commerce" | "sfc";
  description: string;
  iconName: string;
  colorClass: string;
  lightBgClass: string;
  borderClass: string;
  badgeClass: string;
  accentColor: string;
  departments: {
    name: string;
    level: "UG" | "PG" | "PhD" | "Diploma";
    duration: string;
    description: string;
    intake?: number;
    careerProspects?: string[];
  }[];
}

export interface AnnouncementItem {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  category: "Admissions" | "Examinations" | "Academics" | "Research" | "General";
  isNew?: boolean;
  link?: string;
  fullDetails?: string;
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  category: "Seminar" | "Cultural" | "Alumni" | "Workshop" | "Sports";
  location?: string;
  time?: string;
  description?: string;
}

export interface QuickServiceItem {
  id: string;
  title: string;
  iconName: string;
  href: string;
  badge?: string;
}

export const heroSlidesData: HeroSlide[] = [
  {
    id: 1,
    tagline: "A LEGACY OF LEARNING SINCE 1963",
    titlePrimary: "Empowering",
    titleSecondary: "Generations",
    description: "Nurturing minds. Building character. Creating opportunities for a brighter tomorrow.",
    image: "/assets/home/college-infra.png",
    ctaPrimaryText: "About RJC",
    ctaPrimaryHref: "#about",
    ctaSecondaryText: "Explore Programs",
    ctaSecondaryHref: "#academics",
  },
  {
    id: 2,
    tagline: "NAAC RE-ACCREDITED 'A' GRADE (CGPA 3.50)",
    titlePrimary: "Academic",
    titleSecondary: "Excellence",
    description: "Empowered Autonomous Institution affiliated to the prestigious University of Mumbai.",
    image: "/assets/home/college-infra-2.png",
    ctaPrimaryText: "Admissions 2025-26",
    ctaPrimaryHref: "#admissions",
    ctaSecondaryText: "View Accreditations",
    ctaSecondaryHref: "#about",
  },
  {
    id: 3,
    tagline: "HOLISTIC STUDENT DEVELOPMENT & RESEARCH",
    titlePrimary: "Tradition &",
    titleSecondary: "Innovation",
    description: "State-of-the-art research laboratories, vibrant NCC/NSS units, and industry-oriented certifications.",
    image: "/assets/home/college-infra.png",
    ctaPrimaryText: "Campus Life",
    ctaPrimaryHref: "#campus-life",
    ctaSecondaryText: "Research Cell",
    ctaSecondaryHref: "#research",
  },
];

export const statisticsData: StatItem[] = [
  {
    id: "excellence",
    value: "60+",
    label: "Years of Excellence",
    iconName: "Trophy",
  },
  {
    id: "students",
    value: "10,000+",
    label: "Students",
    iconName: "Users",
  },
  {
    id: "faculty",
    value: "100+",
    label: "Faculty Members",
    iconName: "UserCheck",
  },
  {
    id: "programs",
    value: "50+",
    label: "Programs",
    iconName: "BookOpen",
  },
  {
    id: "naac",
    value: "A Grade",
    label: "by NAAC",
    iconName: "Award",
  },
  {
    id: "autonomous",
    value: "Autonomous",
    label: "Since 2018",
    iconName: "Landmark",
  },
];

export const academicProgramsData: ProgramStream[] = [
  {
    id: "arts",
    title: "Arts",
    theme: "arts",
    description: "Explore programs in Humanities and Social Sciences",
    iconName: "GraduationCap",
    colorClass: "text-[#781628]",
    lightBgClass: "bg-rose-50/70 hover:bg-rose-50 border-rose-100",
    borderClass: "border-rose-200",
    badgeClass: "bg-rose-100 text-rose-800",
    accentColor: "#781628",
    departments: [
      { name: "B.A. in English Literature", level: "UG", duration: "3 Years", description: "In-depth study of world literatures, critical theory, creative writing, and linguistic proficiency." },
      { name: "B.A. in Economics", level: "UG", duration: "3 Years", description: "Micro & macro economics, econometrics, public finance, development economics, and policy analysis." },
      { name: "B.A. in Psychology", level: "UG", duration: "3 Years", description: "Cognitive psychology, behavioral studies, counseling fundamentals, and psychometrics." },
      { name: "B.A. in Sociology & Philosophy", level: "UG", duration: "3 Years", description: "Social systems, ethics, logic, epistemology, and contemporary societal frameworks." },
      { name: "B.A. in Hindi & Marathi Literature", level: "UG", duration: "3 Years", description: "Classical and modern regional literature, media writing, and translation studies." },
      { name: "M.A. & Ph.D. in Humanities", level: "PG", duration: "2 - 5 Years", description: "Advanced postgraduate programs and doctoral research centers in English, Hindi, and Philosophy." },
    ],
  },
  {
    id: "science",
    title: "Science",
    theme: "science",
    description: "Building scientific temperament for a brighter future",
    iconName: "FlaskConical",
    colorClass: "text-blue-700",
    lightBgClass: "bg-blue-50/60 hover:bg-blue-50 border-blue-100",
    borderClass: "border-blue-200",
    badgeClass: "bg-blue-100 text-blue-800",
    accentColor: "#1d4ed8",
    departments: [
      { name: "B.Sc. in Physics & Electronics", level: "UG", duration: "3 Years", description: "Classical mechanics, quantum physics, condensed matter, semiconductor physics, and instrumentation." },
      { name: "B.Sc. in Chemistry (Analytical / Organic)", level: "UG", duration: "3 Years", description: "Advanced chemical synthesis, spectroscopy, polymer science, and industrial chemistry." },
      { name: "B.Sc. in Computer Science", level: "UG", duration: "3 Years", description: "Algorithms, software engineering, cloud computing, database management, and full-stack development." },
      { name: "B.Sc. in Information Technology (B.Sc. IT)", level: "UG", duration: "3 Years", description: "Network security, web architectures, DevOps, Python, AI foundations, and cyber security." },
      { name: "B.Sc. in Biotechnology & Zoology", level: "UG", duration: "3 Years", description: "Genomics, immunology, molecular biology, physiology, and environmental bio-sciences." },
      { name: "M.Sc. & Ph.D. in Pure & Applied Sciences", level: "PG", duration: "2 - 5 Years", description: "Postgraduate specialization and CSIR-recognized doctoral research centers." },
    ],
  },
  {
    id: "commerce",
    title: "Commerce",
    theme: "commerce",
    description: "Excellence in Commerce and Management Education",
    iconName: "BarChart3",
    colorClass: "text-emerald-700",
    lightBgClass: "bg-emerald-50/60 hover:bg-emerald-50 border-emerald-100",
    borderClass: "border-emerald-200",
    badgeClass: "bg-emerald-100 text-emerald-800",
    accentColor: "#047857",
    departments: [
      { name: "Bachelor of Commerce (B.Com - General)", level: "UG", duration: "3 Years", description: "Financial accounting, mercantile law, business economics, taxation, and corporate governance." },
      { name: "B.Com in Accounting & Finance (BAF)", level: "UG", duration: "3 Years", description: "Advanced financial auditing, management accounting, taxation laws, and risk management." },
      { name: "B.Com in Banking & Insurance (BBI)", level: "UG", duration: "3 Years", description: "Central banking, insurance underwriting, financial markets, mutual funds, and treasury." },
      { name: "B.Com in Financial Markets (BFM)", level: "UG", duration: "3 Years", description: "Stock markets, derivatives, portfolio management, equity analysis, and algorithmic trading." },
      { name: "Master of Commerce (M.Com)", level: "PG", duration: "2 Years", description: "Advanced business studies, corporate finance, management strategy, and research methodologies." },
    ],
  },
  {
    id: "sfc",
    title: "Self-Financing Courses",
    theme: "sfc",
    description: "Industry-relevant programs for the next generation",
    iconName: "Users",
    colorClass: "text-amber-800",
    lightBgClass: "bg-amber-50/60 hover:bg-amber-50 border-amber-100",
    borderClass: "border-amber-200",
    badgeClass: "bg-amber-100 text-amber-900",
    accentColor: "#b45309",
    departments: [
      { name: "Bachelor of Management Studies (BMS)", level: "UG", duration: "3 Years", description: "Marketing strategy, human resource management, corporate operations, and entrepreneurship." },
      { name: "B.A. in Mass Media & Communication (BAMMC)", level: "UG", duration: "3 Years", description: "Journalism, public relations, advertising, film studies, digital media production, and copy writing." },
      { name: "B.Sc. in Data Science & Artificial Intelligence", level: "UG", duration: "3 Years", description: "Machine learning, big data analytics, neural networks, natural language processing, and Python." },
      { name: "B.Voc in Animation, VFX & Graphic Design", level: "UG", duration: "3 Years", description: "3D modelling, digital visual effects, animation pipelines, cinematography, and game design." },
      { name: "PG Diploma in Clinical Studies & Medical Writing", level: "Diploma", duration: "1 Year", description: "Pharmacovigilance, GCP guidelines, regulatory submissions, clinical trial protocols." },
    ],
  },
];

export const announcementsData: AnnouncementItem[] = [
  {
    id: "ann-1",
    day: "08",
    month: "Sep",
    year: "2025",
    title: "First Year Admissions 2025-26 – Important Notice",
    category: "Admissions",
    isNew: true,
    fullDetails: "Registration and document verification for First Year Degree College programs (NEP 2020) are open. Students must ensure both Mumbai University pre-admission registration and RJC portal submission are completed.",
  },
  {
    id: "ann-2",
    day: "05",
    month: "Sep",
    year: "2025",
    title: "Examination Form Submission – ATKT (Sept 2025)",
    category: "Examinations",
    isNew: true,
    fullDetails: "Eligible students must fill out the ATKT exam application and submit prescribed fee receipts online through the Autonomous Examination portal before the deadline.",
  },
  {
    id: "ann-3",
    day: "02",
    month: "Sep",
    year: "2025",
    title: "Notification: Internal Assessment Schedule",
    category: "Academics",
    isNew: false,
    fullDetails: "Semester I, III & V continuous internal assessments (CIA) including class tests, assignments, and presentations will be held as per the departmental timetables.",
  },
  {
    id: "ann-4",
    day: "28",
    month: "Aug",
    year: "2025",
    title: "RJC Research Cell – Call for Proposals",
    category: "Research",
    isNew: false,
    fullDetails: "Faculty members and postgraduate students are invited to submit minor research proposals and seed grant applications under the HVPS Institutional Research Grant Scheme.",
  },
];

export const eventsData: EventItem[] = [
  {
    id: "ev-1",
    day: "12",
    month: "Sep",
    year: "2025",
    title: "National Seminar on Emerging Trends in Science",
    category: "Seminar",
    location: "Main Auditorium, Ground Floor",
    time: "09:30 AM - 04:30 PM",
    description: "Keynote speakers from TIFR, BARC, and IIT Bombay discussing breakthroughs in Quantum Computing, Synthetic Biology, and Green Nanotechnology.",
  },
  {
    id: "ev-2",
    day: "18",
    month: "Sep",
    year: "2025",
    title: "Cultural Fest – Jhunjhunwala Utsav 2025",
    category: "Cultural",
    location: "College Quadrangle & Mini Theatre",
    time: "10:00 AM Onwards",
    description: "The annual flagship inter-collegiate festival celebrating performing arts, music, dance, theatrical drama, fashion, and literary competitions.",
  },
  {
    id: "ev-3",
    day: "25",
    month: "Sep",
    year: "2025",
    title: "Alumni Interaction Series & Mentorship",
    category: "Alumni",
    location: "Conference Hall & Virtual Hybrid",
    time: "03:00 PM - 05:30 PM",
    description: "Distinguished alumni in Civil Services, Corporate Leadership, and Global Academia interact with current students for career guidance and mentorship.",
  },
  {
    id: "ev-4",
    day: "03",
    month: "Oct",
    year: "2025",
    title: "Workshop on Research Methodology & IPR",
    category: "Workshop",
    location: "Smart Classroom 402",
    time: "11:00 AM - 02:00 PM",
    description: "Hands-on training session on statistical data analysis (SPSS/R), scientific paper writing, patent filing procedures, and anti-plagiarism guidelines.",
  },
];

export const quickServicesData: QuickServiceItem[] = [
  { id: "lib", title: "Library", iconName: "BookMarked", href: "#library" },
  { id: "exam", title: "Examination", iconName: "FileCheck", href: "#examination" },
  { id: "sch", title: "Scholarships", iconName: "GraduationCap", href: "#scholarships" },
  { id: "nss", title: "NSS", iconName: "Handshake", href: "#nss" },
  { id: "sports", title: "Sports", iconName: "Activity", href: "#sports" },
  { id: "placement", title: "Placement Cell", iconName: "Briefcase", href: "#placement" },
  { id: "alumni", title: "Alumni", iconName: "Users2", href: "#alumni" },
  { id: "grievance", title: "Grievance Redressal", iconName: "ShieldAlert", href: "#grievance" },
];
