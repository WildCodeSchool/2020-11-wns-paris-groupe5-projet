const { Router } = require("express");

const students = require("../controllers/students");

const router = Router();
console.log("students.getAllWilders", students.getAllStudents)

router.get("/api/students", students.getAllStudents);
router.post("/api/student/create", students.create);
router.post("/api/student/sendEmail", students.sendEmail);
router.post("/api/student/sendSms", students.sendSms);
router.post("/api/students/saveRecords", students.setStudentsPresence);
router.delete("/api/student/delete/:id", students.delete);

module.exports = router;
