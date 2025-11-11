# 📝 Full Stack TODO App

A simple and elegant full-stack TODO application built with **React**, **Node.js**, and **MongoDB**.  
This project demonstrates full-stack development fundamentals — clean API design, modern React UI, and persistent task management.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js (Vite) |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Styling** | CSS (Modern, clean design) |
| **API** | RESTful JSON-based API |

---

## 🎯 Features

- ✅ View all TODO items  
- ➕ Create a new TODO with title and description  
- ✏️ Edit existing TODOs  
- 🔁 Toggle “Done” status  
- ❌ Delete TODO items  
- 💾 Persistent storage with MongoDB  
- ⚡ Real-time UI updates and clean transitions  

---

## 🧩 Directory Structure

todo/
├── backend/ # Express.js server
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ └── server.js # App entry point
│
├── frontend/ # React client (Vite)
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # App pages
│ │ └── App.jsx # Main React component
│ └── vite.config.js
│
├── .gitignore
├── README.md
└── package.json

<img width="1043" height="593" alt="image" src="https://github.com/user-attachments/assets/cfaf65b8-c7cc-4083-89bf-508875061f6c" />


🔗 API Endpoints
Method	Endpoint	Description
GET	/api/todos	Get all TODOs
POST	/api/todos	Create new TODO
PUT	/api/todos/:id	Update TODO title/description
PATCH	/api/todos/:id/done	Toggle done status
DELETE	/api/todos/:id	Delete TODO


🎨 UI Highlights

Clean layout with subtle shadows and spacing
Strikethrough + faded text for completed tasks
Smooth hover and transition effects
Error and loading states for a polished UX

🧠 Development Note

Uses Axios for consistent API calls.
Optimistic UI updates for better user experience (instant toggle feedback).
Graceful error handling and simple validation on both ends.
No authentication — suitable for local or small-scale demos.

🧪 Quick Developer Commands

Task	Command
Start backend	cd backend && npm run dev
Start frontend	cd frontend && npm run dev
Install dependencies	npm install (in each folder)
Test API	Use Postman or curl commands
