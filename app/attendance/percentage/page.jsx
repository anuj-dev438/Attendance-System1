"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const API_URL = "https://attendance-systematnuj.onrender.com/api";

function AttendancePercentage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const subjectId = searchParams.get("subject");
  const branch = searchParams.get("branch");
  const semester = searchParams.get("semester");

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!subjectId || !branch || !semester) {
      setLoading(false);
      return;
    }

    const fetchPercentage = async () => {
      try {
        const response = await fetch(
          `${API_URL}/attendance/percentage?subjectId=${subjectId}&branch=${branch}&semester=${semester}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch attendance"
          );
        }

        setStudents(data.attendance || []);
      } catch (error) {
        console.error(error);
        alert("Failed to load attendance");
      } finally {
        setLoading(false);
      }
    };

    fetchPercentage();
  }, [subjectId, branch, semester]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-500">
          Loading attendance...
        </p>
      </div>
    );
  }

  if (!subjectId || !branch || !semester) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-red-500">
          Branch, semester and subject are required.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">

          <button
            onClick={() => router.push("/teacher")}
            className="mb-4 text-sm text-gray-500 hover:text-black"
          >
            ← Back
          </button>

          <h1 className="text-2xl font-bold text-gray-900">
            Attendance
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            {branch} • Semester {semester}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Student attendance percentage
          </p>

        </div>

        {/* List */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

          <div className="grid grid-cols-[60px_1fr_120px] border-b bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-600">

            <span>#</span>

            <span>Student Name</span>

            <span className="text-center">
              Attendance
            </span>

          </div>

          <div className="max-h-[600px] overflow-y-auto">

            {students.length === 0 ? (

              <div className="p-10 text-center text-gray-500">
                No students found.
              </div>

            ) : (

              students.map((student, index) => (

                <div
                  key={student.studentId || index}
                  className="grid grid-cols-[60px_1fr_120px] items-center border-b px-5 py-4 hover:bg-gray-50"
                >

                  <span className="text-sm text-gray-400">
                    {index + 1}
                  </span>

                  <div>
                    <p className="font-semibold text-gray-800">
                      {student.name}
                    </p>

                    <p className="text-xs text-gray-400">
                      {student.rollNo}
                    </p>
                  </div>

                  <span className="text-center font-bold">
                    {student.percentage}%
                  </span>

                </div>

              ))

            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default function PercentagePage() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <AttendancePercentage />
    </Suspense>
  );
}