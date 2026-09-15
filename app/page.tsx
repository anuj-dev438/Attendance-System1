"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  FlaskConical,
  Building2,
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Departments", href: "#departments" },
    { label: "Notices", href: "#notices" },
    { label: "Contact", href: "#contact" },
  ];

  const departments = [
    { name: "Computer Science & Engineering", short: "CSE", level: "B.Tech / M.Tech" },
    { name: "Information Technology", short: "IT", level: "B.Tech" },
    { name: "Electronics & Communication Engineering", short: "ECE", level: "B.Tech / M.Tech" },
    { name: "Electrical Engineering", short: "EE", level: "B.Tech" },
    { name: "Mechanical Engineering", short: "ME", level: "B.Tech / M.Tech" },
    { name: "Civil Engineering", short: "CE", level: "B.Tech" },
    { name: "Chemical Engineering", short: "ChE", level: "B.Tech" },
    { name: "Business Administration", short: "MBA", level: "Post Graduate" },
  ];

  const notices = [
    {
      title: "Admission 2026–27 — Uttar Pradesh Technical Admission Counselling",
      date: "12 Sep 2026",
      tag: "Admission",
    },
    {
      title: "Academic calendar released for session 2026–27",
      date: "05 Sep 2026",
      tag: "Academics",
    },
    {
      title: "M.Tech admission open for session 2026–27",
      date: "28 Aug 2026",
      tag: "Admission",
    },
    {
      title: "Internal branch sliding — last date to apply",
      date: "20 Aug 2026",
      tag: "Students",
    },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Academics",
      text: "Eight departments offering undergraduate and postgraduate programmes.",
    },
    {
      icon: FlaskConical,
      title: "Research",
      text: "Departmental labs and project work guided by the faculty.",
    },
    {
      icon: Users,
      title: "Campus life",
      text: "Hostels, sports grounds, technical societies and cultural events.",
    },
    {
      icon: Building2,
      title: "Placements",
      text: "Training and placement cell connecting students with recruiters.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF7F1] font-sans text-[#2A211B] antialiased">
      {/* ================= TOP BAR ================= */}
      <div className="hidden bg-[#4A1119] text-[#E8D6B0] md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs">
          <p>An autonomous institute funded by the Government of Uttar Pradesh</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone size={13} /> 0510-2980211
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} /> director@bietjhs.ac.in
            </span>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b-2 border-[#B98A38] bg-[#FAF7F1]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#B98A38] bg-[#7B1E2B] text-[#F3E2BF]">
              <GraduationCap size={24} />
            </span>
            <span>
              <span className="block font-serif text-lg font-bold leading-none text-[#7B1E2B]">
                BIET Jhansi
              </span>
              <span className="mt-1 hidden text-[11px] leading-tight text-[#6B5B4E] sm:block">
                Bundelkhand Institute of Engineering &amp; Technology
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b-2 border-transparent pb-1 text-sm font-medium text-[#3D3128] transition-colors hover:border-[#B98A38] hover:text-[#7B1E2B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B1E2B]"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => router.push("/teacher-login")}
              className="rounded-sm bg-[#7B1E2B] px-5 py-2.5 text-sm font-semibold text-[#FAF7F1] transition-colors hover:bg-[#5F1621] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B1E2B]"
            >
              Teacher login
            </button>
          </nav>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-sm border border-[#D6C6AE] p-2 text-[#7B1E2B] md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#E2D6C0] bg-[#FAF7F1] md:hidden">
            <nav className="mx-auto max-w-6xl px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-[#EADFCB] py-3 text-sm font-medium text-[#3D3128]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 grid gap-2">
                <button
                  onClick={() => router.push("/teacher-login")}
                  className="rounded-sm bg-[#7B1E2B] px-4 py-3 text-sm font-semibold text-[#FAF7F1]"
                >
                  Teacher login
                </button>
                <button
                  onClick={() => router.push("/student")}
                  className="rounded-sm border border-[#7B1E2B] px-4 py-3 text-sm font-semibold text-[#7B1E2B]"
                >
                  Attendance portal
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="bg-[#7B1E2B] text-[#F7EFE2]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <h1 className="font-serif text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-[3.4rem]">
              Bundelkhand Institute of Engineering &amp; Technology, Jhansi
            </h1>

            <p className="mt-6 max-w-[58ch] text-base leading-8 text-[#EBD9BC]">
              A state-funded autonomous institute in Bundelkhand, teaching
              engineering and management to students from across Uttar Pradesh
              and beyond.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => router.push("/student")}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#C79A43] px-7 py-3.5 text-sm font-bold text-[#3B1016] transition-colors hover:bg-[#D8AC54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7EFE2]"
              >
                Open attendance portal
                <ArrowRight size={17} />
              </button>

              <a
                href="#departments"
                className="inline-flex items-center justify-center rounded-sm border border-[#C79A43]/70 px-7 py-3.5 text-sm font-semibold text-[#F7EFE2] transition-colors hover:bg-[#5F1621] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7EFE2]"
              >
              Departments
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[#C79A43]/35 pt-7">
              <div>
                <dt className="text-xs text-[#D8C4A2]">Established</dt>
                <dd className="font-serif text-2xl font-bold">1989</dd>
              </div>
              <div>
                <dt className="text-xs text-[#D8C4A2]">Departments</dt>
                <dd className="font-serif text-2xl font-bold">8</dd>
              </div>
              <div>
                <dt className="text-xs text-[#D8C4A2]">Campus</dt>
                <dd className="font-serif text-2xl font-bold">Jhansi</dd>
              </div>
            </dl>
          </div>

          {/* Portal card */}
          <div className="rounded-sm border border-[#C79A43]/45 bg-[#5F1621] p-7">
            <h2 className="font-serif text-2xl font-bold text-[#F7EFE2]">
              Attendance portal
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#E0CBA9]">
              Faculty mark attendance class by class. Students check their
              subject-wise percentage before it falls short.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[#F0E2C8]">
              {[
                "Mark attendance for a full class in one screen",
                "Subject-wise percentage for every student",
                "Records kept session by session",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <ChevronRight size={17} className="mt-0.5 shrink-0 text-[#C79A43]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-2">
              <button
                onClick={() => router.push("/student")}
                className="rounded-sm bg-[#F7EFE2] px-5 py-3 text-sm font-bold text-[#7B1E2B] transition-colors hover:bg-white"
              >
                Go to attendance
              </button>
              <button
                onClick={() => router.push("/teacher-login")}
                className="rounded-sm border border-[#C79A43]/60 px-5 py-3 text-sm font-semibold text-[#F0E2C8] transition-colors hover:bg-[#7B1E2B]"
              >
                Teacher login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="border-b border-[#E7DCC7]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#7B1E2B] sm:text-4xl">
              About the institute
            </h2>
            <div className="mt-5 h-[3px] w-20 bg-[#C79A43]" />

            <p className="mt-7 max-w-[62ch] leading-8 text-[#4A3D33]">
              BIET Jhansi is an autonomous institute funded by the Government of
              Uttar Pradesh. It runs undergraduate and postgraduate programmes in
              engineering and management, and serves as a centre for technical
              education in the Bundelkhand region.
            </p>

            <p className="mt-5 max-w-[62ch] leading-8 text-[#4A3D33]">
              The campus sits on Kanpur Road in Jhansi, with departmental
              laboratories, a central library, hostels and sports facilities for
              resident students.
            </p>

            <a
              href="#notices"
              className="mt-8 inline-flex items-center gap-2 border-b-2 border-[#C79A43] pb-1 text-sm font-semibold text-[#7B1E2B]"
            >
              Read the latest notices
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-[#E2D6C0] sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-[#FAF7F1] p-7">
                <Icon size={26} className="text-[#7B1E2B]" strokeWidth={1.6} />
                <h3 className="mt-4 font-serif text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#5E5147]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEPARTMENTS ================= */}
      <section id="departments" className="border-b border-[#E7DCC7] bg-[#F3EDE1]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#7B1E2B] sm:text-4xl">
                Departments
              </h2>
              <div className="mt-5 h-[3px] w-20 bg-[#C79A43]" />
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#5E5147]">
              Eight teaching departments across engineering and management.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-[#DFD2B9] sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept) => (
              <a
                key={dept.short}
                href="#departments"
                className="group bg-[#FAF7F1] p-6 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#7B1E2B]"
              >
                <span className="font-serif text-xl font-bold text-[#C79A43]">
                  {dept.short}
                </span>
                <h3 className="mt-3 text-sm font-semibold leading-6 text-[#2A211B]">
                  {dept.name}
                </h3>
                <p className="mt-3 flex items-center gap-1 text-xs text-[#6B5B4E]">
                  {dept.level}
                  <ChevronRight
                    size={14}
                    className="text-[#7B1E2B] transition-transform group-hover:translate-x-1"
                  />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NOTICES ================= */}
      <section id="notices" className="border-b border-[#E7DCC7]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#7B1E2B] sm:text-4xl">
                Notices
              </h2>
              <div className="mt-5 h-[3px] w-20 bg-[#C79A43]" />
            </div>

            <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#7B1E2B] hover:underline">
              See all notices
              <ArrowRight size={16} />
            </button>
          </div>

          <ul className="mt-10 border-t border-[#E2D6C0]">
            {notices.map((notice) => (
              <li key={notice.title}>
                <a
                  href="#notices"
                  className="flex flex-col gap-2 border-b border-[#E2D6C0] py-5 transition-colors hover:bg-[#F3EDE1] sm:flex-row sm:items-center sm:gap-6"
                >
                  <time className="w-28 shrink-0 text-xs text-[#6B5B4E]">
                    {notice.date}
                  </time>
                  <span className="flex-1 text-sm font-medium leading-6 text-[#2A211B] sm:text-base">
                    {notice.title}
                  </span>
                  <span className="w-fit rounded-sm bg-[#F0E6D2] px-2.5 py-1 text-xs font-semibold text-[#7B1E2B]">
                    {notice.tag}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= ATTENDANCE CTA ================= */}
      <section className="bg-[#4A1119] text-[#F7EFE2]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Attendance, without the register
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#DCC7A6]">
              Faculty mark the class in a minute. Students see where they stand.
            </p>
          </div>

          <button
            onClick={() => router.push("/student")}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-[#C79A43] px-7 py-3.5 text-sm font-bold text-[#3B1016] transition-colors hover:bg-[#D8AC54]"
          >
            Open attendance portal
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="contact" className="bg-[#2A211B] text-[#CFC2B2]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C79A43] text-[#C79A43]">
                  <GraduationCap size={22} />
                </span>
                <span className="font-serif text-lg font-bold text-white">
                  BIET Jhansi
                </span>
              </div>

              <p className="mt-5 max-w-sm text-sm leading-7">
                Bundelkhand Institute of Engineering &amp; Technology, an
                autonomous institute funded by the Government of Uttar Pradesh.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold text-white">
                Quick links
              </h3>
              <div className="mt-4 space-y-3 text-sm">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="block hover:text-white">
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => router.push("/attendance")}
                  className="block hover:text-white"
                >
                  Attendance portal
                </button>
                <button
                  onClick={() => router.push("/teacher-login")}
                  className="block hover:text-white"
                >
                  Teacher login
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-base font-bold text-white">Contact</h3>
              <address className="mt-4 space-y-3 text-sm not-italic">
                <span className="flex gap-2">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-[#C79A43]" />
                  Kanpur Road, NH-25, Jhansi, Uttar Pradesh 284128
                </span>
                <span className="flex gap-2">
                  <Phone size={17} className="shrink-0 text-[#C79A43]" />
                  0510-2980211
                </span>
                <span className="flex gap-2">
                  <Mail size={17} className="shrink-0 text-[#C79A43]" />
                  director@bietjhs.ac.in
                </span>
              </address>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#9E9184] sm:flex-row sm:justify-between">
            <p>© 2026 BIET Jhansi. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              <BookOpen size={13} />
              Academic session 2026–27
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}