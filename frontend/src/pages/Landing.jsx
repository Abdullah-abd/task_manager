import { useState } from "react";
import Sidebar from "../components/sidebar";
import TaskList from "../components/TaskList";

export default function Landing() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build Assignment Updated",
      description: "Work on MERN task manager assignment",
      status: "completed",
    },
    {
      id: 2,
      title: "New UI Screen",
      description: "Create task cards & dashboard UI",
      status: "pending",
    },
  ]);

  const getFilteredTasks = () => {
    if (selectedTab === "dashboard") return tasks;
    return tasks.filter((t) => t.status === selectedTab);
  };

  const onAddTask = () => alert("Add Task modal coming soon!");

  const onEditTask = (task) => {
    alert("Editing task: " + task.title);
    // open modal here
  };

  const onDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="flex">
      <Sidebar onSelect={setSelectedTab} onLogout={() => {}} />

      <TaskList
        tasks={getFilteredTasks()}
        onAddTask={onAddTask}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}
