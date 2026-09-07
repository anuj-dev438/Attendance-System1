import Student from "../models/Student.js";

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ rollNo: 1 });

    res.status(200).json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch students",
    });
  }
};

export const addStudent = async (req, res) => {
  try {
    const { name, rollNo, course, semester } = req.body;

    const student = await Student.create({
      name,
      rollNo,
      course,
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