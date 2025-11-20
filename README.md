📌 Task Manager – MERN Stack (Frontend + Backend)

A responsive Task Manager application built using the MERN stack with clean folder structure, backend pagination, and a static dummy user (no token authentication).
The app allows users to create, edit, delete, search, and filter tasks with status categories.

🚀 Live URLs
Frontend (React + Tailwind + Vite)

👉 https://task-manager-sable-chi.vercel.app/

Backend (Node.js + Express + MongoDB Atlas)

👉 https://task-manager-7yde.onrender.com/

📘 API Endpoints
Get All Tasks (Paginated)
GET /api/tasks

Get Single Task
GET /api/tasks/:id


Example:
https://task-manager-7yde.onrender.com/api/tasks/ID_HERE

🛠️ Tech Stack
Frontend

React (Vite)

TailwindCSS

Lucide Icons

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

Other Features

Responsive UI (Mobile + Desktop)

Pagination handled on the backend

Static dummy user (no JWT → no real authentication)

Clean folder structure for both frontend & backend

Modal-based task creation/editing

Toast notifications for validation

Sidebar navigation with mobile hamburger menu

📂 Folder Structure
Backend
backend/
│── server.js
│── config/
│    └── db.js
│── models/
│    └── Task.js
│── routes/
│    └── taskRoutes.js
│── controllers/
│    └── taskController.js
│── package.json

Frontend
frontend/
│── src/
│    ├── components/
│    │    ├── Sidebar.jsx
│    │    ├── TaskList.jsx
│    │    ├── TaskCard.jsx
│    │    └── AddTaskModal.jsx
│    ├── services/
│    │    └── api.js
│    ├── pages/
│    │    └── Landing.jsx
│    ├── App.jsx
│    └── main.jsx
│── tailwind.config.js
│── package.json

📑 Features Overview

✔ Add, Edit, Delete Tasks
✔ Search Tasks in Real-time
✔ Status Filtering (Pending / In-Progress / Completed)
✔ Pagination (handled fully in backend)
✔ Responsive Sidebar + Mobile Hamburger Menu
✔ Clean UI using Tailwind
✔ Single static dummy user (no login)

📌 Getting Started
Clone the Repo
git clone your-repo-url

📦 Backend Setup
cd backend
npm install
npm start

💻 Frontend Setup
cd frontend
npm install
npm run dev

📝 Notes

No authentication implemented. Static dummy user for demo purposes.

Designed as per task requirements with proper folder separation and responsive layout.

Backend is deployed on Render; frontend on Vercel.
