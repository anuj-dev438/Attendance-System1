import express from "express";
import { getStudents,addStudent } from "../controllers/controllers.js";
const router = express.Router()

router.get('/',getStudents)

router.post("/",addStudent)

export default router;