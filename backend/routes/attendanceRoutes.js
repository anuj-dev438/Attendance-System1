import express from "express";
import {
  saveAttendance,
  getAttendancePercentage
} from "../controllers/attendanceController.js";

import { protectTeacher } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protectTeacher, saveAttendance);

router.get("/percentage", getAttendancePercentage);

export default router;