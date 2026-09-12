"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";


const API_URL = "http://localhost:5000/api";

export default function AttendancePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const branch = searchParams.get("branch");
  const semester = searchParams.get("semester");
  const subject = searchParams.get("subject");

  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
const [subjectName, setSubjectName] = useState("");
  // Check teacher login
  useEffect(() => {
    const token = localStorage.getItem("teacherToken");

    if (!token) {
      router.replace("/teacher-login");
    }
  }, [router]);


// Fetch subject name
useEffect(() => {
  if (!subject) return;

  const fetchSubject = async () => {
    try {
      const response = await fetch(
        `${API_URL}/subjects/${subject}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch subject"
        );
      }

      setSubjectName(data.subject?.name || "");
    } catch (error) {
      console.error("Subject Error:", error);
    }
  };

  fetchSubject();
}, [subject]);

  // Fetch students
  useEffect(() => {
    if (!branch || !semester) {
      setLoading(false);
      return;
    }

    const fetchStudents = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${API_URL}/students?branch=${encodeURIComponent(
            branch
          )}&semester=${encodeURIComponent(semester)}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch students"
          );
        }

        setStudents(data.students || []);
      } catch (error) {
        console.error("Students Error:", error);
        alert("Failed to load students");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [branch, semester]);

  // Mark attendance
  const markAttendance = (studentId, status) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  // Counts
  const presentCount = Object.values(attendance).filter(
    (status) => status === "present"
  ).length;

  const absentCount = Object.values(attendance).filter(
    (status) => status === "absent"
  ).length;

  // Save attendance
  const saveAttendance = async () => {
    if (students.length === 0) {
      alert("No students found");
      return;
    }

    if (Object.keys(attendance).length !== students.length) {
      alert("Please mark Present or Absent for every student");
      return;
    }

    try {
      setSaving(true);

      const token = localStorage.getItem("teacherToken");

      if (!token) {
        router.replace("/teacher-login");
        return;
      }

      const date = new Date().toISOString().split("T")[0];

      const response = await fetch(
        `${API_URL}/attendance`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            date,
            subjectId: subject,
            attendance,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to save attendance"
        );
      }

      alert("Attendance saved successfully!");

      router.push("/teacher");

    } catch (error) {
      console.error("Save Attendance Error:", error);
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-500">
          Loading students...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>

              <button
                onClick={() => router.push("/teacher")}
                className="mb-3 text-sm font-medium text-gray-500 hover:text-black"
              >
                ← Back to Dashboard
              </button>

              <h1 className="text-2xl font-bold text-gray-900">
                Mark Attendance
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Branch: {branch} &nbsp; | &nbsp;
                Semester: {semester} &nbsp; | &nbsp;
                subject:{subjectName}
              </p>

            </div>

            {/* Counts */}
            <div className="flex gap-3">

              <div className="rounded-xl bg-green-50 px-5 py-3 text-center">
                <p className="text-xs text-gray-500">
                  Present
                </p>

                <p className="text-xl font-bold text-green-600">
                  {presentCount}
                </p>
              </div>

              <div className="rounded-xl bg-red-50 px-5 py-3 text-center">
                <p className="text-xs text-gray-500">
                  Absent
                </p>

                <p className="text-xl font-bold text-red-600">
                  {absentCount}
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Student List */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

          <div className="border-b bg-gray-50 px-5 py-4">

            <h2 className="font-semibold text-gray-800">
              Student List
            </h2>

            <p className="text-sm text-gray-500">
              {students.length} students
            </p>

          </div>

          {/* Table Header */}
          <div className="grid grid-cols-[60px_1fr_220px] border-b bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-600">

            <span>#</span>

            <span>Student</span>

            <span className="text-center">
              Attendance
            </span>

          </div>

          {/* Scrollable students */}
          <div className="max-h-[550px] overflow-y-auto">

            {students.length === 0 ? (

              <div className="p-10 text-center text-gray-500">
                No students found for this class.
              </div>

            ) : (

              students.map((student, index) => {

                const status =
                  attendance[student._id];

                return (
                  <div
                    key={student._id}
                    className="grid grid-cols-[60px_1fr_220px] items-center border-b px-5 py-4 hover:bg-gray-50"
                  >

                    {/* Number */}
                    <span className="text-sm text-gray-400">
                      {index + 1}
                    </span>

                    {/* Student */}
                    <div>

                      <p className="font-semibold text-gray-800">
                        {student.name}
                      </p>

                      <p className="text-xs text-gray-400">
                        Roll No: {student.rollNo}
                      </p>

                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          markAttendance(
                            student._id,
                            "present"
                          )
                        }
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                          status === "present"
                            ? "bg-green-600 text-white"
                            : "bg-green-50 text-green-700 hover:bg-green-100"
                        }`}
                      >
                        Present
                      </button>

                      <button
                        onClick={() =>
                          markAttendance(
                            student._id,
                            "absent"
                          )
                        }
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                          status === "absent"
                            ? "bg-red-600 text-white"
                            : "bg-red-50 text-red-700 hover:bg-red-100"
                        }`}
                      >
                        Absent
                      </button>

                    </div>

                  </div>
                );
              })
            )}

          </div>

          {/* Save */}
          {students.length > 0 && (
            <div className="flex justify-end border-t bg-gray-50 p-5">

              <button
                onClick={saveAttendance}
                disabled={saving}
                className="rounded-xl bg-black px-7 py-3 text-sm font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving
                  ? "Saving..."
                  : "Save Attendance"}
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}