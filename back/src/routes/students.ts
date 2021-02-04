const { Router } = require("express");
import { body } from "express-validator";

const students = require("../controllers/students");

const router = Router();

router.get("/", students.welcomeRoute);
router.get("/api/students", students.getAllStudents);
// router.post("/api/user/signup", students.create);
router.post(
  "/api/user/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().isLength({ min: 6, max: 20 }).withMessage("Password is invalid"),
  ],
  students.create
);
router.post("/api/user/login", students.login);
router.put("/api/student/update/:id", students.update);
router.post("/api/student/sendEmail", students.sendEmail);
router.post("/api/student/sendSms", students.sendSms);
router.post("/api/students/saveRecords", students.setStudentsPresence);
router.delete("/api/student/delete/:id", students.delete);

export { router as userRouter };
