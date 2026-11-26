
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/contextauth";
import "../styles/Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  return (
    <nav className="blog-navbar">
      <div className="navbar-container">

        <Link className="navbar-logo" to="/">
          BlogSpace
        </Link>

        <button
          className="navbar-toggler-custom"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${menuOpen ? "menu-open" : ""}`}>
          <div className="navbar-links">

            <Link
              className={`custom-nav-link ${isActive("/")}`}
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            {user ? (
              <>
                <Link className="custom-nav-link" to="/add-blog">
                  Add Blog
                </Link>

                <Link className="custom-nav-link" to="/profile">
                  Profile
                </Link>

                {user.Role === "admin" && (
                  <Link className="custom-nav-link" to="/admin">
                    Admin
                  </Link>
                )}

                <button
                  className="navbar-logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  className={`custom-nav-link ${isActive("/login")}`}
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>

                <Link
                  className="navbar-register-btn"
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
