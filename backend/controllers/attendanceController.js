import Attendance from "../models/Attendance.js";

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

    // Save new attendance
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
    const { subjectId } = req.query;

    // Validation
    if (!subjectId) {
      return res.status(400).json({
        success: false,
        message: "Subject ID is required",
      });
    }

    // Get all attendance records for subject
    const records = await Attendance.find({
      subjectId,
    }).populate("studentId", "name");

    const students = {};

    // Calculate total and present
    records.forEach((record) => {
      if (!record.studentId) return;

      const id = record.studentId._id.toString();

      if (!students[id]) {
        students[id] = {
          name: record.studentId.name,
          total: 0,
          present: 0,
        };
      }

      students[id].total++;

      if (record.status === "present") {
        students[id].present++;
      }
    });

    // Calculate percentage
    const result = Object.values(students).map((student) => ({
      name: student.name,
      percentage:
        student.total === 0
          ? 0
          : Math.round(
              (student.present / student.total) * 100
            ),
    }));

    return res.status(200).json({
      success: true,
      attendance: result,
    });
  } catch (error) {
    console.error("Get Attendance Percentage Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};