// controllers/task.controller.js
import Task from "../models/task.model.js";

// Create Task
export const createTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;

    if (!title || typeof title !== "string" || !title.trim()) {
      return res
        .status(400)
        .json({ success: false, error: "Title is required" });
    }

    const task = await Task.create({
      title: title.trim(),
      description,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });
  } catch (err) {
    next(err);
  }
};

// Get All Tasks
export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, tasks });
  } catch (err) {
    next(err);
  }
};
