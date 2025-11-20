import { useState } from "react";
import Sidebar from "../components/sidebar";
import TaskList from "../components/TaskList";

export default function Landing() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar → fixed only for md+ screens */}
      <div className="md:w-64 md:fixed md:h-screen md:top-0 md:left-0">
        <Sidebar onSelect={setSelectedTab} onLogout={() => {}} />
      </div>

      {/* Right section → add left margin when sidebar is fixed */}
      <div className="flex-1 md:ml-64">
        <TaskList selectedTab={selectedTab} />
      </div>
    </div>
  );
}
