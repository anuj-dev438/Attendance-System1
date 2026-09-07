
"use client";

import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Building2,
  GraduationCap,
  Users,
  CalendarDays,
  MapPin,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const departments = [
    "Computer Science & Engineering",
    "Electronics & Communication Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Information Technology",
    "M.B.A.",
  ];

  const notices = [
    "Admission 2026-2027 – Uttar Pradesh Technical Admission Counselling",
    "Academic Calendar for Session 2026-27",
    "M.Tech Admission Session 2026-27",
    "Internal Branch Sliding Notice",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white shadow-lg">
              <GraduationCap size={28} />
            </div>

            <div>
              <h1 className="text-sm font-extrabold leading-tight text-blue-950 sm:text-base">
                BIET
              </h1>
              <p className="hidden max-w-xs text-xs font-medium text-slate-500 sm:block">
                Bundelkhand Institute of Engineering & Technology
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 md:flex">
            <a href="#home" className="text-sm font-semibold hover:text-blue-700">
              Home
            </a>

            <a href="#about" className="text-sm font-semibold hover:text-blue-700">
              About
            </a>

            <a href="#departments" className="text-sm font-semibold hover:text-blue-700">
              Departments
            </a>

            <a href="#notices" className="text-sm font-semibold hover:text-blue-700">
              Notices
            </a>

            <a href="#contact" className="text-sm font-semibold hover:text-blue-700">
              Contact
            </a>

            <button
              onClick={() => router.push("/teacher-login")}
              className="rounded-xl bg-blue-900 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-800 hover:scale-[1.02]"
            >
              Teacher login
            </button>
          </div>

          {/* Mobile Attendance Button */}
          <button
            onClick={() => router.push("/attendance")}
            className="rounded-xl bg-blue-900 px-3 py-2 text-xs font-bold text-white md:hidden"
          >
            Attendance
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          <div className="text-white">
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-200">
              BIET Jhansi
            </p>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Bundelkhand Institute
              <span className="block text-blue-300">
                of Engineering & Technology
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Empowering students through technical education, innovation,
              research and professional excellence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => router.push("/attendance")}
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-blue-950 shadow-xl transition hover:scale-[1.02]"
              >
                Open Attendance Portal
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <a
                href="#about"
                className="flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore Institute
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-slate-300">
              <MapPin size={17} />
              Jhansi, Uttar Pradesh
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-2xl bg-white p-6 text-slate-900">

                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      Institute Portal
                    </p>
                    <h3 className="mt-1 text-2xl font-black">
                      Academic Dashboard
                    </h3>
                  </div>

                  <div className="rounded-xl bg-blue-100 p-3 text-blue-900">
                    <Building2 size={26} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <GraduationCap className="mb-3 text-blue-800" />
                    <p className="text-2xl font-black">B.Tech</p>
                    <p className="text-xs text-slate-500">
                      Undergraduate Programs
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <BookOpen className="mb-3 text-blue-800" />
                    <p className="text-2xl font-black">M.Tech</p>
                    <p className="text-xs text-slate-500">
                      Postgraduate Programs
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <Users className="mb-3 text-blue-800" />
                    <p className="text-2xl font-black">Students</p>
                    <p className="text-xs text-slate-500">
                      Academic Community
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <CalendarDays className="mb-3 text-blue-800" />
                    <p className="text-2xl font-black">2026</p>
                    <p className="text-xs text-slate-500">
                      Academic Session
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= QUICK ACCESS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <GraduationCap className="mb-4 text-blue-800" size={30} />
            <h3 className="font-extrabold">Academic Programs</h3>
            <p className="mt-2 text-sm text-slate-500">
              Explore undergraduate and postgraduate programs.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <BookOpen className="mb-4 text-blue-800" size={30} />
            <h3 className="font-extrabold">Departments</h3>
            <p className="mt-2 text-sm text-slate-500">
              Explore departments and academic disciplines.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <CalendarDays className="mb-4 text-blue-800" size={30} />
            <h3 className="font-extrabold">Notices</h3>
            <p className="mt-2 text-sm text-slate-500">
              Stay updated with institute announcements.
            </p>
          </div>

          <button
            onClick={() => router.push("/attendance")}
            className="rounded-2xl border bg-blue-900 p-6 text-left text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-800"
          >
            <Users className="mb-4" size={30} />
            <h3 className="font-extrabold">Attendance Portal</h3>
            <p className="mt-2 text-sm text-blue-100">
              Manage and view student attendance.
            </p>
          </button>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-extrabold uppercase tracking-widest text-blue-700">
                About BIET
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Excellence in Technical Education
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Bundelkhand Institute of Engineering & Technology, Jhansi
                is an autonomous institute funded by the Government of
                Uttar Pradesh. The institute focuses on technical education,
                research, innovation and overall student development.
              </p>

              <button
  type="button"
  onClick={() => {
    console.log("Subject ID:", subject);

    

    router.push(`/attendance/percentage?subject=${subject}`);
  }}
  className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 mt-4"
>
  View Percentage
   //<ArrowRight size={17} />
</button>

              
            </div>

            <div className="rounded-3xl bg-slate-100 p-8">
              <div className="grid gap-5 sm:grid-cols-2">

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-3xl font-black text-blue-900">01</p>
                  <p className="mt-2 font-bold">Academic Excellence</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Focused technical and professional education.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-3xl font-black text-blue-900">02</p>
                  <p className="mt-2 font-bold">Research</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Encouraging innovation and research-oriented learning.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-3xl font-black text-blue-900">03</p>
                  <p className="mt-2 font-bold">Campus Life</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Sports, cultural and student activities.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-3xl font-black text-blue-900">04</p>
                  <p className="mt-2 font-bold">Industry Connect</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Industry interaction and professional exposure.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= DEPARTMENTS ================= */}
      <section id="departments" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="mb-10">
            <p className="text-sm font-extrabold uppercase tracking-widest text-blue-700">
              Academics
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Our Departments
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((department, index) => (
              <div
                key={department}
                className="group flex items-center justify-between rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-900">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="text-sm font-bold">
                    {department}
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= NOTICES ================= */}
      <section id="notices" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-widest text-blue-700">
                Updates
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Latest Notices
              </h2>
            </div>

            <button className="flex items-center gap-1 text-sm font-bold text-blue-800">
              View All
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border">
            {notices.map((notice, index) => (
              <div
                key={notice}
                className="flex items-center gap-4 border-b p-5 last:border-b-0 hover:bg-slate-50"
              >
                <div className="rounded-xl bg-blue-50 px-3 py-2 text-center">
                  <p className="text-xs font-black text-blue-900">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <p className="flex-1 text-sm font-semibold text-slate-700">
                  {notice}
                </p>

                <ChevronRight size={18} className="text-slate-400" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ATTENDANCE CTA ================= */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 to-blue-800 px-7 py-12 text-white shadow-xl sm:px-12">

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
                Student & Faculty Portal
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Manage Attendance Easily
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
                Record attendance and monitor student attendance
                percentages through the dedicated attendance portal.
              </p>
            </div>

            <button
              onClick={() => router.push("/attendance")}
              className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-blue-950 transition hover:scale-[1.03]"
            >
              Open Attendance
              <ArrowRight size={18} />
            </button>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        id="contact"
        className="bg-slate-950 text-slate-300"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

          <div className="grid gap-10 md:grid-cols-3">

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-800 text-white">
                  <GraduationCap />
                </div>

                <div>
                  <p className="font-black text-white">BIET Jhansi</p>
                  <p className="text-xs text-slate-400">
                    Technical Education & Excellence
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
                Bundelkhand Institute of Engineering & Technology, Jhansi.
                An autonomous institute funded by the U.P. Government.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white">Quick Links</h3>

              <div className="mt-4 space-y-3 text-sm">
                <a href="#home" className="block hover:text-white">
                  Home
                </a>

                <a href="#about" className="block hover:text-white">
                  About
                </a>

                <a href="#departments" className="block hover:text-white">
                  Departments
                </a>

                <button
                  onClick={() => router.push("/attendance")}
                  className="block hover:text-white"
                >
                  Attendance Portal
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white">Contact</h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p className="flex gap-2">
                  <MapPin size={17} />
                  Kanpur Road, NH-25, Jhansi, Uttar Pradesh - 284128
                </p>

                <p>Phone: 0510-2980211</p>

                <p>Email: director@bietjhs.ac.in</p>
              </div>
            </div>

          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
            © 2026 BIET Jhansi. All rights reserved.
          </div>

        </div>
      </footer>

    </main>
  );
}

   