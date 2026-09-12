export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: {
    title: string;
    description?: string;
    href: string;
  }[];
}

export const navigationLinks: NavItem[] = [
  // {
  //   title: "Home",
  //   href: "#",
  // },
  {
    title: "About",
    href: "#about",
    children: [
      { title: "About Hindi Vidya Prachar Samiti", description: "The founding trust since 1938", href: "#about" },
      { title: "Institutional Profile & Heritage", description: "60+ years legacy of academic excellence", href: "#about" },
      { title: "Vision, Mission & Goals", description: "Our foundational guiding principles", href: "#vision-mission" },
      { title: "Leadership & Governing Body", description: "Trustees, Director & Principal", href: "#leadership" },
      { title: "Autonomy Status", description: "Empowered Autonomous since 2018", href: "#about" },
      { title: "Code of Conduct & Ethics", description: "Values guiding our academic community", href: "#" },
      { title: "Statutory Committees", description: "Academic Council, BoS, Finance Committee", href: "#" },
    ],
  },
  {
    title: "Admissions",
    href: "#admissions",
    children: [
      { title: "Admission Guidelines 2026-27", description: "Step-by-step application instructions", href: "#admissions" },
      { title: "Eligibility Criteria & Merit Cutoffs", description: "Course-wise minimum requirements", href: "#admissions" },
      { title: "Online Registration Portal", description: "Apply online for FY & PG admissions", href: "#admissions" },
      { title: "Prospectus & Fee Structure", description: "Download institutional prospectus", href: "#admissions" },
      { title: "Scholarships & Financial Aid", description: "Government and Trust scholarships", href: "#" },
      { title: "Admissions Helpdesk & FAQ", description: "Direct contact for admission queries", href: "#" },
    ],
  },
  {
    title: "Academics",
    href: "#academics",
    children: [
      { title: "Arts & Humanities", description: "English, Hindi, Marathi, Economics, Philosophy, History", href: "#academics" },
      { title: "Science & Technology", description: "Physics, Chemistry, CS, IT, Biotech, Zoology, Botany", href: "#academics" },
      { title: "Commerce & Management", description: "B.Com, BAF, BBI, BMS, Banking & Finance", href: "#academics" },
      { title: "Self-Financing Courses", description: "Data Science & AI, BAMMC, Animation & VFX", href: "#academics" },
      { title: "Postgraduate & Ph.D. Research", description: "M.A., M.Sc., M.Com and Doctoral Research Centers", href: "#academics" },
      { title: "NEP 2020 Implementation", description: "Multidisciplinary curriculum & credit system", href: "#" },
      { title: "Academic Calendar", description: "Schedules, terms, and holidays for 2025-26", href: "#" },
    ],
  },
  {
    title: "Faculty",
    href: "#faculty",
    children: [
      { title: "Faculty List", description: "List of all faculty members", href: "#faculty" },
      { title: "Faculty Profiles", description: "Detailed profiles of faculty members", href: "#faculty" },
    ],
  },

  {
    title: "Student Corner",
    href: "#",
    children: [
      { title: "Student ERP / Portal Login", description: "Access attendance, fees, and receipts", href: "#" },
      { title: "LMS (Moodle) e-Learning", description: "Course materials, quizzes, and submissions", href: "#" },
      { title: "Central Library & e-Resources", description: "OPAC, N-LIST, digital research databases", href: "#" },
      { title: "Student Council & Associations", description: "Leadership, cultural and departmental clubs", href: "#" },
      { title: "Anti-Ragging Committee", description: "Zero-tolerance anti-ragging measures", href: "#" },
      { title: "Internal Complaints Committee (ICC)", description: "Gender sensitization and grievance redressal", href: "#" },
    ],
  },
  {
    title: "Research",
    href: "#",
    children: [
      { title: "RJC Research Cell", description: "Promoting innovation, grants, and publications", href: "#" },
      { title: "Research Journals & Publications", description: "Peer-reviewed papers and conference proceedings", href: "#" },
      { title: "Ph.D. Research Centers", description: "Recognized guides and research scholars", href: "#" },
      { title: "Funded Research Projects", description: "UGC, DBT, DST, and Industry sponsored research", href: "#" },
      { title: "Patents & Intellectual Property (IPR)", description: "Innovations and commercialization", href: "#" },
    ],
  },
  // {
  //   title: "IQAC",
  //   href: "#",
  //   children: [
  //     { title: "About IQAC", description: "Internal Quality Assurance Cell mandate", href: "#" },
  //     { title: "NAAC Accreditation & SSR", description: "NAAC 'A' Grade certificates and reports", href: "#" },
  //     { title: "AQAR Reports", description: "Annual Quality Assurance Reports", href: "#" },
  //     { title: "NIRF Data", description: "National Institutional Ranking Framework submissions", href: "#" },
  //     { title: "Academic & Administrative Audits", description: "Quality assessment records", href: "#" },
  //     { title: "Best Practices & Distinctiveness", description: "Institutional benchmarks in holistic learning", href: "#" },
  //   ],
  // },
  {
    title: "Examination",
    href: "#",
    children: [
      { title: "Examination Notices & Timetable", description: "Semester end and ATKT schedules", href: "#notices" },
      { title: "Hall Tickets Download", description: "Generate exam admit card", href: "#" },
      { title: "Online Results Portal", description: "Autonomous examination results", href: "#" },
      { title: "Revaluation & Photocopy Rules", description: "Verification and grievance filing", href: "#" },
      { title: "ATKT / Repeater Forms", description: "Semester arrear examination forms", href: "#" },
      { title: "Grading System & Ordinances", description: "Autonomous Credit Based Semester Grading System", href: "#" },
    ],
  },
  {
    title: "Campus Life",
    href: "#campus-life",
    children: [
      { title: "National Cadet Corps (NCC)", description: "Army & Navy wing training and achievements", href: "#campus-life" },
      { title: "National Service Scheme (NSS)", description: "Community service and social impact", href: "#campus-life" },
      { title: "Sports & Gymnasium", description: "State-of-the-art sports facilities and champions", href: "#campus-life" },
      { title: "Jhunjhunwala Utsav Cultural Fest", description: "Annual mega youth cultural festival", href: "#campus-life" },
      { title: "Auditorium & Smart Classrooms", description: "Modern air-conditioned learning infrastructure", href: "#campus-life" },
      { title: "Training & Placement Cell", description: "Career counselling, internships, campus drives", href: "#" },
    ],
  },
  {
    title: "Placement",
    href: "#",
    children: [
      { title: "Placement", description: "Career counselling, internships, campus drives", href: "#" },
    ]
  },
  {
    title: "Alumni",
    href: "#",
    children: [
      { title: "Alumni", description: "Career counselling, internships, campus drives", href: "#" },
    ]
  },
  {
    title: "Events",
    href: "#",
    children: [
      { title: "Events", description: "Career counselling, internships, campus drives", href: "#" },
    ]
  }
  // {
  //   title: "Contact Us",
  //   href: "#contact",
  // },
];
