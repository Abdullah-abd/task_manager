const BASE_URL = "https://task-manager-7yde.onrender.com/api/tasks";

// -------------------------
// Get all tasks
// -------------------------
export async function getAllTasks(page = 1, limit = 10) {
  const res = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`);

  if (!res.ok) throw new Error("Failed to fetch tasks");

  return await res.json();
}

// -------------------------
// Get single task by ID
// -------------------------
export async function getTaskById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch task");
  return await res.json();
}

// -------------------------
// Create new task
// -------------------------
export async function createTask(taskData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });

  if (!res.ok) throw new Error("Failed to create task");
  return await res.json();
}

// -------------------------
// Update a task
// -------------------------
export async function updateTask(id, updatedData) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) throw new Error("Failed to update task");
  return await res.json();
}

// -------------------------
// Delete task
// -------------------------
export async function deleteTask(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });

  if (!res.ok) throw new Error("Failed to delete task");
  return await res.json();
}
