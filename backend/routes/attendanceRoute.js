import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Attendance root route working"
  });
});

router.get("/percentage", (req, res) => {
  res.json({
    success: true,
    message: "Percentage route working",
    subjectId: req.query.subjectId
  });
});

console.log("🔥 Attendance route count:", router.stack.length);

export default router;