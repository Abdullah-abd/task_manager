import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createTask, updateTask } from "../services/api";

export default function AddTaskModal({
  open,
  onClose,
  setTasks,
  selectedTask,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setStatus(selectedTask.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus("pending");
    }
  }, [selectedTask]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // -----------------------------
    // FORM VALIDATION + TOAST
    // -----------------------------
    if (!title.trim() || !description.trim()) {
      toast.error("All fields are required!");
      return;
    }

    const data = { title, description, status };

    try {
      if (selectedTask) {
        const res = await updateTask(selectedTask._id, data);

        setTasks((prev) =>
          prev.map((t) => (t._id === selectedTask._id ? res.task : t))
        );

        toast.success("Task updated!");
      } else {
        const res = await createTask(data);
        setTasks((prev) => [...prev, res.task]);

        toast.success("Task created!");
      }

      onClose();
    } catch (err) {
      console.error("Failed to save task:", err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow">
        <h2 className="text-xl font-semibold mb-4">
          {selectedTask ? "Edit Task" : "Add New Task"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full px-3 py-2 border rounded"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full px-3 py-2 border rounded"
            placeholder="Task Description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            className="w-full px-3 py-2 border rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white"
            >
              {selectedTask ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
