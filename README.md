<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,24&height=200&section=header&text=🎵%20Wavy%20-%20Music%20Web&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Full-Stack%20Music%20Streaming%20Platform%20|%20React%20+%20Node.js%20+%20MongoDB&descAlignY=60&descAlign=50" width="100%"/>

<div align="center">

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![CSS3](https://img.shields.io/badge/CSS3-3.5%25-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

</div>

---

## 📌 Project Overview

**Wavy** is a full-stack music streaming web application with three fully integrated modules — a **user-facing frontend**, a **RESTful backend API**, and a dedicated **admin dashboard**. Users can browse and stream music, while admins manage songs, albums, and artists from a separate control panel.

> 🎯 A production-style MERN-stack music platform — built with clean separation across client, server, and admin layers.

---

## 🏗️ Architecture

```
User Frontend (Wavy-Frontend) ──► REST API (Wavy-Backend) ──► MongoDB
          ▲                               │
          │                               ▼
  Admin Panel (Wavy-Admin) ◄──── Auth Middleware (JWT)
```

---

## 🔄 Application Workflow

```
Browse Music → Play Song → Register/Login → Like / Save → Admin Uploads Tracks → Manage Library
```

### 1️⃣ User Frontend (`Wavy-Frontend`)
- Browse songs, albums, and artists on a clean music discovery UI
- Integrated audio player — play, pause, skip, and control volume
- User authentication — register and login
- Like / save favourite tracks to personal library
- Responsive layout for desktop and mobile

### 2️⃣ Backend API (`Wavy-Backend`)
- RESTful API built with Node.js and Express
- JWT-based user authentication and protected routes
- MongoDB with Mongoose for storing songs, albums, users, and playlists
- Handles audio file metadata, streaming references, and user data
- Secure middleware for auth-protected endpoints

### 3️⃣ Admin Dashboard (`Wavy-Admin`)
- Separate React app for content management
- Upload and manage songs, albums, and artist profiles
- View platform-wide content and user data
- Delete or update tracks and metadata from the dashboard

---

## 📦 Features

| Feature | Frontend | Backend | Admin |
|:---|:---:|:---:|:---:|
| User Authentication (JWT) | ✅ | ✅ | ✅ |
| Music Browsing & Discovery | ✅ | ✅ | — |
| Audio Player (Play/Pause/Skip) | ✅ | — | — |
| Like / Save Tracks | ✅ | ✅ | — |
| Song & Album Upload | — | ✅ | ✅ |
| Artist Management | — | ✅ | ✅ |
| Content CRUD | — | ✅ | ✅ |
| Responsive Design | ✅ | — | ✅ |

---

## 🗂️ Repository Structure

```
MusicWeb/
│
├── Wavy-Frontend/             # User-facing React music app
│   ├── src/
│   │   ├── components/        # Player, Navbar, SongCard, Sidebar
│   │   ├── pages/             # Home, Album, Artist, Profile
│   │   ├── context/           # Global state (player, auth)
│   │   └── assets/            # Icons and static files
│   └── package.json
│
├── Wavy-Backend/              # Node.js + Express REST API
│   ├── controllers/           # Route handler logic
│   ├── models/                # Mongoose schemas (Song, Album, User)
│   ├── routes/                # API route definitions
│   ├── middleware/            # JWT auth middleware
│   └── server.js              # Entry point
│
├── Wavy-Admin/                # Admin dashboard React app
│   ├── src/
│   │   ├── components/        # Admin UI components
│   │   ├── pages/             # Add Song, List Songs, Albums
│   │   └── assets/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18.x
- MongoDB (local or Atlas URI)
- npm or yarn

### 1. Clone the repo
```bash
git clone https://github.com/ronakrajput8882/MusicWeb.git
cd MusicWeb
```

### 2. Setup Backend
```bash
cd Wavy-Backend
npm install
echo "MONGODB_URI=your_mongodb_uri" >> .env
echo "JWT_SECRET=your_jwt_secret" >> .env
npm start
```

### 3. Setup Frontend
```bash
cd ../Wavy-Frontend
npm install
npm run dev
```

### 4. Setup Admin Panel
```bash
cd ../Wavy-Admin
npm install
npm run dev
```

> **Default ports:** Backend → `4000` | Frontend → `5173` | Admin → `5174`

---

## 🔍 Key Highlights

- 🎵 **Integrated audio player** — persistent play/pause/skip controls across page navigation using React Context
- 🔐 **JWT authentication** — secure token-based auth end-to-end across all three apps
- 🧩 **3-module monorepo** — frontend, backend, and admin fully decoupled but sharing one API and one database
- 🎨 **Music-first UI** — sidebar navigation, album art cards, and a sticky bottom player for seamless UX
- 📦 **Mongoose schemas** — cleanly modelled Song, Album, Artist, and User collections

---

## 🧠 Key Learnings

- Building a persistent audio player across React routes using Context API without losing playback state
- Designing a multi-role system where regular users and admins share the same backend but use separate frontends
- Structuring REST API endpoints for media-heavy content (songs, albums, artists) with proper relationships in MongoDB
- Managing three independent React + Node apps from a single monorepo cleanly

---

## 🛠️ Tech Stack

| Tool | Purpose |
|:---|:---|
| React.js | Frontend & Admin UI framework |
| Node.js | Backend JavaScript runtime |
| Express.js | REST API framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB ODM |
| JWT | Authentication & authorization |
| React Context API | Global player & auth state |
| CSS3 | Styling & responsive layout |
| Vite | Frontend build tool |

---

<div align="center">

### Connect with me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ronaksinh-rajput8882)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/techwithronak)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ronakrajput8882)

*If you found this useful, please ⭐ the repo!*

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,24&height=100&section=footer" width="100%"/>

</div>
