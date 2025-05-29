# Welcome!

Hey there! 🙌  

You're about to explore a live, single-page application that brings together dynamic UI, smart logic, and role-based navigation – all in one place.  

Ready to dive in? Let’s go! 🚀  

---

## 🗺️ What's Inside?

I’ve built three core features, and you can access them through the following interactive endpoints:

<h2>🚀 Live Endpoints</h2>

<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Description</th>
      <th>Endpoint</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🎨 <strong>Task 1.1 &amp; 1.2</strong></td>
      <td>Colour-changing button</td>
      <td><code>/button</code></td>
    </tr>
    <tr>
      <td>🏫 <strong>Task 2</strong></td>
      <td>Role-based student management system</td>
      <td><code>/management/login</code></td>
    </tr>
    <tr>
      <td>💾 <strong>Task 3</strong></td>
      <td>Smart state save logic</td>
      <td><code>/state</code></td>
    </tr>
  </tbody>
</table>


---

## 🎨 Task 1: Button Playground

### 🚏 Go to /button 

#### 🧪 1.1 – Simple Mode

- ✍️ Type a colour (like red, green, blue)
- 🖱️ Click the button
- 🎨 Boom! It changes to your chosen colour

#### ⚡ 1.2 – Live Mode

- As you type a valid colour name...
- The button instantly updates in real time – no click needed!

```
🧠 It listens to every keystroke and reflects valid CSS colours immediately. Try exotic ones like teal, orchid, or tomato!
```

---

## 🏫 Task 2: Dynamic Role-Based Routing (Student Management System)

### 🚏 Start at: /management/login

- Welcome to the Student Management System! This feature introduces role-based access, dynamic routing, and a user management layer controlled by an Admin.

### 🧑‍💼 How It Works

#### 👮 Admin Responsibilities:
- Logs in via /management/login
- Has access to a User Management Panel
- Can add users with roles:
    - Principal
    - Teacher
    - Student
- After adding, users can log in and are routed based on their role.

#### 👥 User Flow:
- Navigate to /management/login
- Log in with your role credentials (bunny:secretpass)
- Get redirected to your dashboard based on role:
    - 👑 Principal → /management/principal
    - 👨‍🏫 Teacher → /management/teacher
    - 🎓 Student → /management/student

```
🛡️ Only the Admin can create new users. If you're not added, you can't log in.
```

---

## 💾 Task 3: Smart State Save Detection

### 🚏 Visit /state

#### 📝 Scenario:

- Initial state: "Hello World"
- You can edit it and click Save.

#### 🧠 Smart Save Logic:

- Delete a letter and retype it? 🛑 No save – content is the same.
- Actually change the text? ✅ Save triggered!

```
💡 The app compares old vs. new content deeply. No false saves, no wasted operations!
```

---

## 🧰 Tech Stack
This project is built with a robust and scalable full-stack architecture:

### Frontend

- Framework: Angular
- Routing: Angular Router
- UI Interactivity: Reactive Forms, Event Binding
- Styling: CSS3 / SCSS (optional)

### Backend

- Language: C#
- Framework: ASP.NET Core
- Routing & APIs: RESTful APIs using ASP.NET Controllers
- Authentication: Role-based access with session/token support

### Database

- RDBMS: MySQL
- Schema: Users table with id, username, password, role, etc.

```
💡 This stack was chosen to combine modern frontend interactivity with a powerful and secure backend and a relational database that's widely supported in production environments.
```

---

## How to setup?

### Clone the repository

```
git clone https://github.com/bunny-iLink/27-05-2025.git
```

---

### Frontend Setup

#### Step 1: Go to frontend directory
```
cd frontend
```

#### Step 2: Install dependencies
```
npm install
```

#### Step 3: Start the frontend developement server
```
ng serve
```

#### Access the frontend
- Access the frontend at http://localhost:4200 (Can differ in some cases) 

---

### Backend Setup

#### Step 1: Go to backend directory
```
cd backend
```

#### Step 2: Install dependencies
```
dotnet restore
```

#### Step 3: Create .env in /backend
- Create a .env file in backend directory. The contents should be as follows:

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=your_db_name
DB_USER=your_username
DB_PASS=your_db_password

Jwt__Key=this_is_a_very_long_secret_key_for_jwt_authentication
Jwt__Issuer=backend
Jwt__Audience=backend
```

#### Step 4: Create a database and table of following schema
```
CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```

#### Step 5: Ensure proper permissions
- Make sure the user with username in .env has proper permissions

#### Step 6: Run the backend
```
dotnet run
```

#### ⚠️ Make sure to change the backend URL in admin, login, faculty, principal and student component
---



