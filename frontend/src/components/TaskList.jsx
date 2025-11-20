import { useEffect, useState } from "react";
import { deleteTask, getAllTasks } from "../services/api";
import AddTaskModal from "./AddTaskModal";
import TaskCard from "./TaskCards";

export default function TaskList({ selectedTab }) {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // PAGINATION STATES
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(10);

  // LOAD TASKS
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getAllTasks();
        setTasks(res.tasks || []);
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
      }
    };

    fetchTasks();
  }, []);

  // DELETE HANDLER
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  };

  // EDIT HANDLER
  const handleEdit = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  // -----------------------------------------------------
  // 1️⃣ APPLY STATUS FILTER BASED ON SIDEBAR SELECTION
  // -----------------------------------------------------
  const statusFiltered = tasks.filter((task) => {
    if (selectedTab === "dashboard") return true; // show all
    if (selectedTab === "pending") return task.status === "pending";
    if (selectedTab === "completed") return task.status === "completed";
    return true;
  });

  // -----------------------------------------------------
  // 2️⃣ APPLY SEARCH FILTER AFTER STATUS FILTER
  // -----------------------------------------------------
  const filtered = statusFiltered.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  // RESET PAGE ON SEARCH, PAGE SIZE CHANGE, OR TAB SWITCH
  useEffect(() => {
    setCurrentPage(1);
  }, [search, tasksPerPage, selectedTab]);

  // -----------------------------------------------------
  // PAGINATION LOGIC
  // -----------------------------------------------------
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filtered.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(filtered.length / tasksPerPage);

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-1/3 px-4 py-2 border rounded-lg shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Tasks Per Page */}
        <select
          className="px-3 py-2 border rounded-lg shadow-sm bg-white"
          value={tasksPerPage}
          onChange={(e) => setTasksPerPage(Number(e.target.value))}
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
          <option value={50}>50 per page</option>
        </select>

        {/* Add Task */}
        <button
          onClick={() => {
            setSelectedTask(null);
            setModalOpen(true);
          }}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 shadow"
        >
          + Add Task
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-4">
        {currentTasks.length === 0 ? (
          <p className="text-gray-500">No tasks found.</p>
        ) : (
          currentTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {filtered.length > tasksPerPage && (
        <div className="flex justify-center items-center mt-6 gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Previous
          </button>

          <span className="text-gray-700 font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal */}
      <AddTaskModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        setTasks={setTasks}
        selectedTask={selectedTask}
      />
    </div>
  );
}
