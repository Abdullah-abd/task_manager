import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskCard from "./TaskCards";
export default function TaskList({ tasks, onEditTask, onDeleteTask }) {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  // const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    // setTasks([...tasks, task]); // you may replace with backend API call
  };
  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-1/3 px-4 py-2 border rounded-lg shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 shadow"
        >
          + Add Task
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-4">
        {filtered.length === 0 ? (
          <p className="text-gray-500">No tasks found.</p>
        ) : (
          filtered.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEditTask}
              onDelete={onDeleteTask}
            />
          ))
        )}
      </div>
      <AddTaskModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
}
