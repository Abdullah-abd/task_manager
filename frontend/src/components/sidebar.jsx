import { useState } from "react";

export default function Sidebar({ onSelect, onLogout }) {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "pending", label: "Pending Tasks" },
    { id: "inprogress", label: "In-Progress Tasks" },
    { id: "completed", label: "Completed Tasks" },
  ];

  const handleSelect = (id) => {
    setActive(id);
    onSelect(id);
  };

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-xl font-semibold mb-8">Task Manager</h1>

      {/* Menu */}
      <div className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              active === item.id ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Logout Button (Bottom) */}
      <button
        onClick={onLogout}
        className="mt-auto w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
