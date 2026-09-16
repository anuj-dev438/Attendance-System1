"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = "https://attendance-system1-cqjc.onrender.com/api";

export default function TeacherPage() {
  const router = useRouter();

  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [loadingSubjects, setLoadingSubjects] = useState(false);

 

  // Branch change
  const handleBranchChange = (value) => {
    setBranch(value);
    setSemester("");
    setSubject("");
    setSubjects([]);
  };

  // Semester change
  const handleSemesterChange = (value) => {
    setSemester(value);
    setSubject("");
  };

  // Get subjects according to branch and semester
  useEffect(() => {
    if (!branch || !semester) {
      setSubjects([]);
      return;
    }

    const fetchSubjects = async () => {
      try {
        setLoadingSubjects(true);

        const response = await fetch(
          `${API_URL}/subjects?branch=${branch}&semester=${semester}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch subjects"
          );
        }

        setSubjects(data.subjects || []);
      } catch (error) {
        console.error("Subject Error:", error);
        setSubjects([]);
      } finally {
        setLoadingSubjects(false);
      }
    };

    fetchSubjects();
  }, [branch, semester]);

  
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">

          <h1 className="text-2xl font-bold text-gray-900">
            Student Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Check your attendance percentage
          </p>

        </div>

        {/* Selection */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

            {/* Branch */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Branch
              </label>

              <select
                value={branch}
                onChange={(e) =>
                  handleBranchChange(e.target.value)
                }
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-black"
              >
                <option value="">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="ME">Mechanical</option>
                <option value="CE">Civil</option>
              </select>
            </div>

            {/* Semester */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Semester
              </label>

              <select
                value={semester}
                onChange={(e) =>
                  handleSemesterChange(e.target.value)
                }
                disabled={!branch}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none disabled:bg-gray-100 focus:border-black"
              >
                <option value="">Select Semester</option>

                {[1, 2, 3, 4, 5, 6, 7, 8].map(
                  (sem) => (
                    <option key={sem} value={sem}>
                      {sem} Semester
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Subject
              </label>

              <select
                value={subject}
                onChange={(e) =>
                  setSubject(e.target.value)
                }
                disabled={!semester || loadingSubjects}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none disabled:bg-gray-100 focus:border-black"
              >
                <option value="">
                  {loadingSubjects
                    ? "Loading subjects..."
                    : "Select Subject"}
                </option>

                {subjects.map((item) => (
                  <option
                    key={item._id}
                    value={item._id}
                  >
                    {item.name} ({item.code})
                  </option>
                ))}
              </select>
            </div>

          </div>

        {/* view button */}
 {/* View Percentage */}
<button
  type="button"
  onClick={() => {
    console.log("Branch:", branch);
    console.log("Semester:", semester);
    console.log("Subject ID:", subject);

    if (!branch || !semester || !subject) {
      alert("Please select Branch, Semester and Subject");
      return;
    }

    router.push(
      `/attendance/percentage?subject=${encodeURIComponent(
        subject
      )}&branch=${encodeURIComponent(
        branch
      )}&semester=${encodeURIComponent(
        semester
      )}`
    );
  }}
  className="mt-4 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
>
  View Percentage
</button>

        

        </div>

      </div>

    </div>
  );
}
