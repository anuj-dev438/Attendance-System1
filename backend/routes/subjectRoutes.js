
import express from "express";

import {
  addSubject,
  getSubjects,
} from "../controllers/subjectController.js";

const router = express.Router();

router.post("/", addSubject);
router.get("/", getSubjects);

export default router;
