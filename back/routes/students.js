const { Router } = require("express");

const students = require("../controllers/students");

const router = Router();
console.log("students.getAllWilders", students.getAllStudents)

router.get("/api/students", students.getAllStudents);
router.post("/api/student/create", students.create);
router.delete("/api/student/delete/:id", students.delete);

module.exports = router;
