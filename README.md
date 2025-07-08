
# ⚡ EV Product – Full Stack Application (React + Node.js + MongoDB Atlas)

A full-stack web application to compare **Electric Vehicles (EVs)** and **Ready-To-Ship (RTS) Solar products**, built with modern technologies.

---

## 📌 Project Overview

- ✅ **Frontend**: React.js (v19), Material-UI, Swiper.js  
- ✅ **Backend**: Node.js + Express.js (REST API)  
- ✅ **Database**: MongoDB Atlas (Cloud-hosted with Mongoose ODM)

🔗 **GitHub Repository**  
```bash
git clone https://github.com/aiswarya61200/eco-products.git
⚙️ Tech Stack
Frontend	Backend	Database
React 19	Node.js	MongoDB Atlas
React Router 7	Express 5	Mongoose (ODM)
Material-UI 7	Axios	Dotenv
Bootstrap 5	CORS	ev_products, rts_products
Swiper.js	REST API	

📁 Project Structure


eco-products/
├── frontend/              # React App
│   ├── public/
│   ├── src/
│   │   ├── components/    # UI Components
│   │   ├── pages/         # Pages: Home, Compare
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/               # Express API
│   ├── models/            # Mongoose Schemas
│   ├── routes/            # API Routes
│   ├── server.js          # Express App Entry
│   └── package.json
│
└── README.md

🔌 MongoDB Atlas Configuration
Create a .env file in the backend folder:

env

MONGO_URI=mongodb+srv://aishwarya11g:Aisu1123@cluster0.7azbrd8.mongodb.net/eco_db?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
Database: eco_db
Collections: ev_products, rts_products

🔧 Installation & Setup
✅ Step 1: Clone the Repository


git clone https://github.com/aiswarya61200/eco-products.git
cd eco-products
⚙️ Step 2: Backend Setup

cd Backend
🔹 Initialize and install dependencies
    npm install

🔹 Required packages

Package   	Purpose
express   	Web server framework
mongoose    MongoDB object modeling (ODM)
dotenv      Environment variable configuration
cors	      Enable frontend-backend API access

🔹 Create .env file

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
🔹 Start backend server

   node app.js
   Server runs at: http://localhost:5000

💻 Step 3: Frontend Setup

    cd eco-app

🔹 Install dependencies
    npm install

🔹 Start React app
    npm start

Frontend runs at: http://localhost:3000

📊 Features
📱 Fully responsive product listing

🔢 EMI calculation: 9.99% APR, 24 months

🔄 Horizontal scrolling carousels with Swiper.js

🛠️ Component-based architecture (reusable UI)

🔍 Product comparison and filtering

🌐 REST API integration for EV and RTS products



