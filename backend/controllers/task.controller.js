// controllers/task.controller.js
import mongoose from "mongoose";
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
    // page number (default 1)
    const page = parseInt(req.query.page) || 1;

    // limit (default 10)
    const limit = parseInt(req.query.limit) || 10;

    // calculate skip
    const skip = (page - 1) * limit;

    // total task count (for frontend pagination UI)
    const totalTasks = await Task.countDocuments();

    // fetch paginated tasks
    const tasks = await Task.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      page,
      limit,
      totalTasks,
      totalPages: Math.ceil(totalTasks / limit),
      tasks,
    });
  } catch (err) {
    next(err);
  }
};

// ----- GET SINGLE TASK (improved) -----
export const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId first
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ success: false, error: "Invalid task id" });
    }

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ success: false, error: "Task not found" });
    }

    res.status(200).json({ success: true, task });
  } catch (err) {
    next(err);
  }
};

// Update Task
export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ success: false, error: "Invalid task id" });
    }

    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask)
      return res.status(404).json({ success: false, error: "Task not found" });

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (err) {
    next(err);
  }
};
// Delete Task
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ success: false, error: "Invalid task id" });
    }

    const task = await Task.findByIdAndDelete(id);

    if (!task)
      return res.status(404).json({ success: false, error: "Task not found" });

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
