import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import studentRoutes from "./routes/studentRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import subjectRoutes from "./routes/subjectRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";

dotenv.config();

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Express server working"
  });
});

app.get("/api/attendance-test", (req, res) => {
  res.json({
    success: true,
    message: "Attendance direct route working"
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Attendance API is working"
  });
});

app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/teachers", teacherRoutes);

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server actually running on http://127.0.0.1:${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error);
  });