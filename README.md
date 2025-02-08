# NextAuth Full-Stack Authentication Web App

## 🚀 Project Overview
This is a full-stack authentication web application built using **Next.js** and **TypeScript**, featuring secure user authentication with **NextAuth.js**. It includes a **forgot password** feature using **Mailtrap** for email handling and **MongoDB** as the database.

## 🔥 Features
- 🔑 **User Authentication** using NextAuth.js
- 📧 **Forgot Password** feature with email verification (Mailtrap)
- 🛡️ **Secure Authentication** with hashed passwords
- 📂 **MongoDB Database** for storing user data
- ⚡ **Fast and Scalable** Next.js app with TypeScript

## 🛠️ Tech Stack
- **Frontend**: Next.js, TypeScript
- **Backend**: Next.js API routes, NextAuth.js
- **Database**: MongoDB (Mongoose ODM)
- **Email Service**: Mailtrap (for password reset emails)
- **Authentication**: Credentials-based authentication (NextAuth.js)

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies
```sh
yarn install  # or npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file in the root directory and add the following:
```env
NEXTAUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
EMAIL_SERVER=smtp://your-mailtrap-username:your-mailtrap-password@smtp.mailtrap.io:2525
EMAIL_FROM=your-email@example.com
```

### 4️⃣ Run the Application
```sh
yarn dev  # or npm run dev
```

## 📌 Folder Structure
```
/your-repo-name
│-- pages/
│   ├── api/
│   │   ├── auth/
│   │   ├── reset-password.ts
│   │   ├── verify.ts
│   ├── index.tsx
│   ├── login.tsx
│   ├── register.tsx
│-- components/
│-- lib/
│-- utils/
│-- styles/
│-- .env.local
│-- package.json
│-- README.md
```

## 🚀 Authentication Workflow
1. User registers and logs in using credentials (email/password).
2. NextAuth.js handles secure authentication.
3. If the user forgets their password, they request a reset link.
4. A password reset email is sent via **Mailtrap**.
5. User resets their password using the link received.

## ⚡ API Endpoints
| Method | Endpoint             | Description                        |
|--------|----------------------|------------------------------------|
| POST   | `/api/auth/register` | Registers a new user              |
| POST   | `/api/auth/login`    | Logs in a user                    |
| POST   | `/api/auth/logout`   | Logs out the user                 |
| POST   | `/api/auth/reset-password` | Sends password reset link |
| POST   | `/api/auth/verify`   | Verifies the reset token          |

## 📸 Screenshots
### 🏠 Dashboard
![Dashboard](assets/dashboard.png)

### 🔐 Signup Page
![Signup](assets/signup.png)

### 🔑 Login Page
![Login](assets/login.png)

### 🔄 Forgot Password Page
![Forgot Password](assets/forgot-password.png)

### ✅ Successful Login Profile Page
![Profile Page](assets/successful-login.png)

## 👥 Contributing
Feel free to fork this repository and submit a pull request! 🚀

---

### 📧 Contact
For any queries or suggestions, reach out at: **vipinsao3@gmail.com**

