# Todo App

A full-stack task management application for creating, updating, and organizing to-dos.  
Built with a **Vite + React** frontend and a **Node.js/Express (or Laravel)** backend.

---

## 🚀 Features

- Add, edit, delete, and mark tasks as complete  
- Clean, modern UI with responsive layout  
- Persistent task storage via API  
- Fast development environment powered by Vite  
- Organized backend routes for task management

---

## 🧩 Tech Stack

**Frontend**
- React (Vite)
- CSS Modules / TailwindCSS 
- Axios for API communication

**Backend**
- Node.js + Express *(or Laravel if applicable)*
- RESTful API structure
- CORS and JSON middleware

**Database**
- SQLite / MySQL / MongoDB (depending on setup)

---

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/magraweb/todo.git
cd todo
2. Install Dependencies
Frontend
bash
Copy code
cd frontend
npm install
Backend
bash
Copy code
cd ../backend
npm install
3. Run Development Servers
Frontend
bash
Copy code
npm run dev
Backend
bash
Copy code
npm start
📂 Folder Structure
csharp
Copy code
todo/
├── frontend/        # React app (Vite)
│   ├── src/
│   ├── public/
│   └── vite.config.js
├── backend/         # API server
│   ├── routes/
│   ├── controllers/
│   └── server.js
└── README.md
⚙️ Environment Variables
Create .env files in both the frontend/ and backend/ directories as needed:

Backend .env:

ini
Copy code
PORT=5000
DATABASE_URL=your_database_url
Frontend .env:

ini
Copy code
VITE_API_URL=http://localhost:5000
🧪 Scripts
Command	Description
npm run dev	Start Vite dev server
npm run build	Build frontend for production
npm run preview	Preview production build
npm start	Start backend server

📸 Screenshots
(Add screenshots of the app here)

🧾 License
This project is licensed under the MIT License.

👨‍💻 Author
Manoj Magra