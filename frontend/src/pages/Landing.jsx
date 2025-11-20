import { useState } from "react";
import Sidebar from "../components/sidebar";
import TaskList from "../components/TaskList";

export default function Landing() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar on top for mobile, left for desktop */}
      <Sidebar onSelect={setSelectedTab} onLogout={() => {}} />

      {/* Right section */}
      <div className="flex-1">
        <TaskList selectedTab={selectedTab} />
      </div>
    </div>
  );
}
