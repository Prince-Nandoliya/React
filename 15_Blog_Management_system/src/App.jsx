
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AuthProvider from "./context/contextauth";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/Routers";

import Home from "./ui/Home";
import Login from "./ui/Login";
import Register from "./ui/Register";
import AddBlog from ".//ui/AddBlog";
import EditBlog from "./ui/EditBlog";
import BlogDetails from "./ui/BlogDetails";
import Profile from "./ui/Profile";
import Admin from "./ui/Admin";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/add-blog"
            element={
              <ProtectedRoute>
                <AddBlog />
              </ProtectedRoute>
            }
          />

          <Route
            path="/blog/:id"
            element={
              <ProtectedRoute>
                <BlogDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit-blog/:id"
            element={
              <ProtectedRoute>
                <EditBlog />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={
              <div className="container text-center py-5">
                <h1>404</h1>
                <h4>Page Not Found</h4>
              </div>
            }
          />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
