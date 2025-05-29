# Welcome!

Hey there! 🙌  

You're about to explore a live, single-page application that brings together dynamic UI, smart logic, and role-based navigation – all in one place.  

Ready to dive in? Let’s go! 🚀  

---

## 🗺️ What's Inside?

I’ve built three core features, and you can access them through the following interactive endpoints:

👨‍💻 Task	💡 Description	🔗 Try It
1.1 & 1.2	Colour-changing button with simple & live update modes	/button
2	Role-based Student Management System	/management/login
3	State Change Detection & Save Logic	/state

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

