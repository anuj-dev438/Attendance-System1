import Subject from "../models/Subject.js";

// Add subject
export const addSubject = async (req, res) => {
  try {
    const { name, code, branch, semester } = req.body;

    const subject = await Subject.create({
      name,
      code,
      branch,
      semester,
    });

    res.status(201).json({
      success: true,
      message: "Subject added successfully",
      subject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get subjects according to branch and semester
export const getSubjects = async (req, res) => {
  try {
    const { branch, semester } = req.query;

    const filter = {};

    if (branch) {
      filter.branch = branch;
    }

    if (semester) {
      filter.semester = Number(semester);
    }

    const subjects = await Subject.find(filter).sort({
      name: 1,
    });

    res.status(200).json({
      success: true,
      count: subjects.length,
      subjects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};