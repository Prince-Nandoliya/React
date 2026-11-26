
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/contextauth";

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [input, setInput] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(input);

      alert("Login successfully");

      navigate(
        res.user.Role === "admin" ? "/admin" : "/"
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow p-4 mx-auto auth-card">
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            type="email"
            name="Email"
            placeholder="Enter Email"
            value={input.Email}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="password"
            name="Password"
            placeholder="Enter Password"
            value={input.Password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100">
            Login
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
