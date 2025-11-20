import { Menu } from "lucide-react"; // icon
import { useState } from "react";

export default function Sidebar({ onSelect, onLogout }) {
  const [active, setActive] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false); // MOBILE TOGGLE

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "pending", label: "Pending Tasks" },
    { id: "completed", label: "Completed Tasks" },
  ];

  const handleSelect = (id) => {
    setActive(id);
    onSelect(id);
    setIsOpen(false); // auto close on mobile
  };

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center p-4 bg-gray-900 text-white">
        <button onClick={() => setIsOpen(true)}>
          <Menu size={26} />
        </button>
        <h1 className="ml-4 text-lg font-semibold">Task Manager</h1>
      </div>

      {/* OVERLAY (Mobile Only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col p-4
          transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        <h1 className="text-xl font-semibold mb-8 hidden md:block">
          Task Manager
        </h1>

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

        {/* Logout */}
        <button
          onClick={onLogout}
          className="mt-auto w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </>
  );
}
