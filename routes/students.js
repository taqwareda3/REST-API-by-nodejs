import express from "express";
import {
  getAll,
  getstudent,
  deleteStudent,
  addStudent,
  updateStudent,
  putStudent,
} from "./../controller/student.js";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getstudent);
router.delete("/:id", deleteStudent);
router.post("/", addStudent);
router.patch("/:id", updateStudent);
router.put("/:id", putStudent);
export default router;
