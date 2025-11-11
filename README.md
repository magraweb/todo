🖥️ Backend Setup
cd backend
npm install

Create a .env file in /backend
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todo
PORT=5000

Start the server
npm start


Backend runs at:
👉 http://localhost:5000

💻 Frontend Setup
cd frontend
npm install

Start the Vite development server
npm run dev


Frontend runs at:
👉 http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/todos	Retrieve all TODOs
POST	/api/todos	Create a new TODO
PUT	/api/todos/:id	Update TODO title or description
PATCH	/api/todos/:id/done	Toggle "done" status
DELETE	/api/todos/:id	Delete a TODO item

Example request:

curl -X POST http://localhost:5000/api/todos \
-H "Content-Type: application/json" \
-d '{"title":"Buy milk","description":"Remember to get low fat"}'

📁 Project Structure
todo/
├── backend/
│   ├── src/
│   │   ├── models/Todo.js
│   │   ├── controllers/todoController.js
│   │   ├── routes/todos.js
│   │   ├── config/db.js
│   │   └── app.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── api/todos.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
└── README.md

🎨 UI Highlights

Clean layout with subtle shadows and spacing

Strikethrough + faded text for completed tasks

Smooth hover and transition effects

Error and loading states for a polished UX

🧠 Development Notes

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
