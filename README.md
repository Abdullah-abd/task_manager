📌 Task Manager – MERN Stack (Frontend + Backend)
A responsive Task Manager application built using the MERN stack with clean folder structure, backend pagination, and a static dummy user (no token authentication).
The app supports creating, editing, deleting, searching, and filtering tasks by status.

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

Frontend: React (Vite), TailwindCSS, Lucide Icons
Backend: Node.js, Express.js, MongoDB Atlas, Mongoose

Other Features:

Responsive UI

Backend-based pagination

Static dummy user (no JWT)

Clean folder structure

Modal-based task CRUD

Toast-based validation

Sidebar + mobile menu

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
│    ├── services/
│    ├── pages/
│    ├── App.jsx
│    └── main.jsx
│── tailwind.config.js
│── package.json


📌 Getting Started (Local Setup)

🔧 Backend Setup
cd backend
npm install
npm start


Make sure to add your MongoDB connection string in a .env file as:
MONGO_URI=your_mongodb_url

💻 Frontend Setup
cd frontend
npm install
npm run dev


Ensure backend runs on default port 5000, or update api.js accordingly.

📝 Notes

No authentication; uses a static dummy user but any id and password will pass intentionaly did this for ease.

Developed as per assignment requirements.

Backend deployed on Render, frontend on Vercel.
