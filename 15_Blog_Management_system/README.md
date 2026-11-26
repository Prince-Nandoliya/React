# 📝 Blog Management System

A Full Stack Blog Management System built using **React.js, Node.js, Express.js, and MongoDB**. This application allows users to register, log in, create blogs, view blogs, and manage their own blog posts securely.

Live Link : react-dazde7ect-princenandoliyas-projects.vercel.app

## 🚀 Features

- 🔐 **User Authentication** – User registration and login using JWT authentication.
- 📝 **Create Blog** – Users can create new blog posts.
- 📖 **View Blogs** – Display all available blogs.
- ✏️ **Edit Blog** – Users can edit their own blog posts.
- 🗑️ **Delete Blog** – Users can delete their own blog posts.
- 🔒 **Protected Routes** – Only authenticated users can access protected features.
- 👤 **Role-Based Access Control** – Access permissions based on user roles.
- 🛡️ **Blog Ownership** – Users can edit and delete only their own blogs.
- 🖼️ **Image Upload** – Upload blog images using Cloudinary.
- 🔑 **JWT Authorization** – Secure API access using JSON Web Tokens.
- 📱 **Responsive UI** – User-friendly interface.

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- React Router DOM
- Bootstrap
- Axios
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- Cloudinary
- Multer
- dotenv

## 📂 Project Structure

```text
Blog_Management_system/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   ├── context/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
│
└── backend/
    ├── controller/
    ├── model/
    ├── routes/
    ├── middleware/
    ├── validation/
    ├── config/
    ├── server.js
    └── package.json
```

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Prince-Nandoliya/React.git
```

### 2. Navigate to Project

```bash
cd React/15_Blog_Management_system
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
npm run dev
```

### 4. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
npm run dev
```

## 🔑 Environment Variables

Create a `.env` file inside the backend folder and configure:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Replace the placeholder values with your actual credentials.

## 🔐 Authentication & Authorization

- Users can register and log in.
- JWT tokens are used for authentication.
- Protected APIs verify the user's token through authentication middleware.
- Role-based authorization controls access to restricted features.
- Blog ownership is checked before allowing edit and delete operations.
- A user cannot modify or delete another user's blog.

## 💡 Key Learning Outcomes

- React component-based architecture.
- REST API integration using Axios.
- JWT authentication and authorization.
- Express middleware implementation.
- MongoDB database operations using Mongoose.
- CRUD operations.
- Image uploading using Cloudinary.
- Frontend and backend integration.
- Secure route handling.

## 👨‍💻 Author

**Prince Nandoliya**

- GitHub: [Prince-Nandoliya](https://github.com/Prince-Nandoliya)
