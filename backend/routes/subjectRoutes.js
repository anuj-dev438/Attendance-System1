import express from "express";

import {
  addSubject,
  getSubjects,
  getSubjectById,
} from "../controllers/subjectController.js";

const router = express.Router();

router.post("/", addSubject);

router.get("/", getSubjects);

router.get("/:id", getSubjectById);

export default router;