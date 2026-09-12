
import Student from "../models/Student.js";

export const getStudents = async (req, res) => {
  try {
    const { branch, semester } = req.query;

    const filter = {};

    if (branch) {
      filter.branch = branch;
    }

    if (semester) {
      filter.semester = Number(semester);
    }

    const students = await Student.find(filter).sort({
      rollNo: 1,
    });

    res.status(200).json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    console.error("Get Students Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch students",
    });
  }
};

export const addStudent = async (req, res) => {
  try {
    const { name, rollNo, branch, semester } = req.body;

    const student = await Student.create({
      name,
      rollNo,
      branch,
      semester,
    });

    res.status(201).json({
      success: true,
      message: "Student added successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

