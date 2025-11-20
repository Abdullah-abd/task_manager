import { Edit, Trash2 } from "lucide-react"; // optional icons (install: npm i lucide-react)

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-start">
      {/* Left side (text) */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{task.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{task.description}</p>

        {/* Status */}
        <span
          className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium
            ${
              task.status === "pending"
                ? "bg-yellow-100 text-yellow-700"
                : task.status === "inprogress"
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }
        `}
        >
          {task.status}
        </span>
      </div>

      {/* Right side (buttons) */}
      <div className="flex gap-3 ml-4">
        <button
          onClick={() => onEdit(task)}
          className="p-2 rounded hover:bg-gray-100"
        >
          <Edit className="w-5 h-5 text-blue-600" />
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="p-2 rounded hover:bg-gray-100"
        >
          <Trash2 className="w-5 h-5 text-red-600" />
        </button>
      </div>
    </div>
  );
}
