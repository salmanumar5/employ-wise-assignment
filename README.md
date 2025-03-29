# **EmployWise Assignment – User Management Application**

## 🚀 Overview
This project is a **React-based User Management Application** that integrates with the Reqres API to handle **authentication** and **CRUD (Create, Read, Update, Delete) operations** for user data. It is designed with **modern UI principles** and follows best practices for state management and API handling.

---

## 🌟 Features

### **1️⃣ Authentication System**
- Users can log in using the provided credentials (`eve.holt@reqres.in` / `cityslicka`).
- Successful login stores an authentication token in local storage.
- Users are redirected to the **User Management Panel** upon login.

### **2️⃣ User List Panel**
- Displays a **paginated list of users** fetched from the Reqres API.
- Users can search for specific users using the **search bar**.
- **Edit User**: Opens a modal to update **first name, last name, and email**.
- **Delete User**: Removes a user from the list.
- **Pagination**: Users can navigate through different pages of user data.

### **3️⃣ Modern UI/UX Design**
- Styled with **Tailwind CSS** for a sleek, responsive layout.
- Fully optimized for **desktop and mobile devices**.

### **4️⃣ State Management & API Handling**
- Uses **Redux Toolkit** for efficient state management.
- **Axios** is used for API calls.
- Implements **loading states and error handling** for smooth user experience.

---

## 🛠️ Tech Stack

| Technology          | Description                |
|--------------------|--------------------------|
| **React (Vite)**   | Fast frontend framework  |
| **Redux Toolkit**  | State management         |
| **Tailwind CSS**   | UI styling               |
| **React Router DOM** | Navigation between pages |
| **Axios**          | API handling             |
| **Vercel**         | Deployment platform      |

---

## 📍 Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/salmanumar5/employ-wise-assignment.git
cd employ-wise-assignment
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Run the Application**
```bash
npm run dev
```
The app will run at **`http://localhost:5173/`** by default.

---

## 🚀 Deployment
The application is live at **[EmployWise on Vercel](https://employ-wise-assignment-theta.vercel.app/)**

---

## 📌 API Reference (Reqres API)

### **🔹 Authentication**
- **Endpoint**: `POST https://reqres.in/api/login`
- **Body**:
  ```json
  { "email": "eve.holt@reqres.in", "password": "cityslicka" }
  ```
- **Response**:
  ```json
  { "token": "QpwL5tke4Pnpja7X4" }
  ```

### **🔹 Fetch Users**
- **Endpoint**: `GET https://reqres.in/api/users?page=1`

### **🔹 Update User**
- **Endpoint**: `PUT https://reqres.in/api/users/{id}`

### **🔹 Delete User**
- **Endpoint**: `DELETE https://reqres.in/api/users/{id}`

---

## 📬 Contact
For any queries, feel free to reach out:
📧 **Email**: your-email@example.com  
🔗 **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
