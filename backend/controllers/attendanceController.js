import Attendance from "../models/Attendance.js";
import Student from "../models/Student.js";

// Save Attendance
export const saveAttendance = async (req, res) => {
  try {
    const { date, attendance, subjectId } = req.body;

    // Validation
    if (!date || !attendance || !subjectId) {
      return res.status(400).json({
        success: false,
        message: "Date, attendance and subjectId are required",
      });
    }

    // Convert attendance object into array
    const records = Object.entries(attendance).map(
      ([studentId, status]) => ({
        studentId,
        subjectId,
        date,
        status,
      })
    );

    // Save attendance
    const savedAttendance = await Attendance.insertMany(records);

    return res.status(201).json({
      success: true,
      message: "Attendance saved successfully",
      count: savedAttendance.length,
    });
  } catch (error) {
    console.error("Save Attendance Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get Attendance Percentage
export const getAttendancePercentage = async (req, res) => {
  try {
    const { subjectId, branch, semester } = req.query;

    // Validation
    if (!subjectId || !branch || !semester) {
      return res.status(400).json({
        success: false,
        message: "Subject ID, branch and semester are required",
      });
    }

    // 1. Get students according to branch + semester
    const students = await Student.find({
      branch: branch,
      semester: Number(semester),
    }).select("_id name rollNo branch semester");

    // 2. Get attendance records only for selected subject
    // and selected students
    const records = await Attendance.find({
      subjectId: subjectId,
      studentId: {
        $in: students.map((student) => student._id),
      },
    });

    // 3. Create attendance map
    const attendanceMap = {};

    records.forEach((record) => {
      const studentId = record.studentId.toString();

      if (!attendanceMap[studentId]) {
        attendanceMap[studentId] = {
          total: 0,
          present: 0,
        };
      }

      attendanceMap[studentId].total++;

      if (record.status === "present") {
        attendanceMap[studentId].present++;
      }
    });

    // 4. Calculate percentage for every selected student
    const result = students.map((student) => {
      const id = student._id.toString();

      const attendance = attendanceMap[id] || {
        total: 0,
        present: 0,
      };

      const percentage =
        attendance.total === 0
          ? 0
          : Math.round(
              (attendance.present / attendance.total) * 100
            );

      return {
        studentId: student._id,
        name: student.name,
        rollNo: student.rollNo,
        branch: student.branch,
        semester: student.semester,
        totalClasses: attendance.total,
        present: attendance.present,
        percentage,
      };
    });

    // 5. Send response
    return res.status(200).json({
      success: true,
      branch,
      semester: Number(semester),
      subjectId,
      attendance: result,
    });

  } catch (error) {
    console.error(
      "Get Attendance Percentage Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};