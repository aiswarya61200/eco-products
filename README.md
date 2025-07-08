EV Product  
Full-Stack (React + Node.js + MongoDB Atlas)

📌 Project Overview
A full-stack web application for comparing Electric Vehicles (EVs) with:
✅ Frontend: React.js (v19) with Material-UI & Swiper for carousels
✅ Backend: Node.js + Express.js (REST API)
✅ Database: MongoDB Atlas (Cloud)


🔗 GitHub Repo: git clone https://github.com/aiswarya61200/eco-products.git


⚙️ Tech Stack
Frontend	Backend	Database
React 19	Node.js	MongoDB Atlas
React Router 7	Express 5	Mongoose (ODM)
Material-UI 7	Axios	Dotenv (Config)
Bootstrap 5	CORS Middleware	Cloud-based
Swiper.js	REST API	Collections: ev_products, rts_products
📂 Project Structure
bash
```
ev-product/
├── **frontend/** (React App)
│   ├── public/           # Static files
│   ├── src/
│   │   ├── components/   # Reusable UI (Carousel, Cards, etc.)
│   │   ├── pages/        # Main views (Home, Compare, Details)
│   │   ├── App.js        # Main App Router
│   │   └── index.js      # React Entry Point
│   └── package.json      # Frontend Dependencies
│
├── **backend/** (Node.js Server)
│   ├── models/           # MongoDB Schemas (Product.js)
│   ├── routes/           # API Routes (evProducts.js, rtsProducts.js)
│   ├── server.js         # Express Server Setup
│   └── package.json      # Backend Dependencies
│
└── README.md             # Project Documentation

```
🔌 Database Connection (MongoDB Atlas)
Your MongoDB Atlas URI (from your code):

bash
mongodb+srv://aishwarya11g:Aisu1123@cluster0.7azbrd8.mongodb.net/eco_db?retryWrites=true&w=majority&appName=Cluster0
Collections:

ev_products (Electric Vehicles)

rts_products (Ready-To-Ship/Solar)

🚀 Installation (Step-by-Step)
1️⃣ Backend Setup (Node.js + MongoDB)
Go to backend folder:

bash
cd backend
Install dependencies:

bash
npm install express mongoose cors dotenv
Create .env file:

env
MONGO_URI=mongodb+srv://aishwarya11g:Aisu1123@cluster0.7azbrd8.mongodb.net/eco_db?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
Start the server:

bash
node app.js
(Server runs at http://localhost:5000)

2️⃣ Frontend Setup (React.js)
Go to frontend folder:

bash
cd frontend
Install dependencies:

bash
npm install @mui/material @emotion/react @emotion/styled axios react-router-dom swiper
Start React App:

bash
npm start
(Runs at http://localhost:3000)

