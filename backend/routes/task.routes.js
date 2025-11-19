// routes/task.routes.js
import express from "express";
import {
  createTask,
  getAllTasks,
  getTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTask);
export default router;
