import { useState } from "react";

export default function AddTaskModal({ open, onClose, onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title, description, status };

    onAddTask(newTask);

    // clear fields
    setTitle("");
    setDescription("");
    setStatus("pending");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>

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
            <option value="inprogress">In Progress</option>
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
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
