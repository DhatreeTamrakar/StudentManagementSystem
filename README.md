# 🎓 Student Management System (Full Stack)

A full-stack Student Management System built using **ASP.NET Core Web API (.NET)** for backend and **React.js** for frontend. This project helps manage student data with CRUD operations in a clean and simple UI.

## 🚀 Tech Stack

### 🔧 Backend
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- C#

### 🎨 Frontend
- React.js
- JavaScript (ES6+)
- Axios
- HTML/CSS

---

## 📁 Project Structure
StudentManagementSystem/
│
├── StudentManagementAPI/ (Backend - .NET API)
│ ├── Controllers
│ ├── Models
│ ├── Data
│ └── appsettings.json
│
├── student-ui/ (Frontend - React App)
│ ├── src
│ ├── public
│ └── package.json
│
└── README.md

---

## ⚙️ Features

- ➕ Add new students  
- 📋 View all students  
- ✏️ Update student details  
- ❌ Delete student records  
- 🔍 REST API integration between frontend & backend  

---

## 🛠️ Setup Instructions

### 🔹 Backend Setup (.NET API)
1. Open `StudentManagementAPI` folder
2. Configure database connection in `appsettings.json`
3. Run migrations:
```bash
dotnet ef database update
Run project:
dotnet run

Backend runs on:

https://localhost:xxxx

Frontend Setup (React)
Open student-ui folder
Install dependencies:
npm install
Start React app:
npm start

Frontend runs on:

http://localhost:3000
API Connection

Make sure backend URL is correctly configured in React (Axios/base URL).

Example:

http://localhost:xxxx/api/students

Notes
.vs, bin, obj, node_modules are ignored using .gitignore
Backend and frontend run separately
Ensure SQL Server is running before starting backend
