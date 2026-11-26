
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/user";

const Register = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    Name: "",
    Email: "",
    Password: "",
    Address: "",
    Phone: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.keys(input).forEach((key) => {
        formData.append(key, input[key]);
      });

      if (image) {
        formData.append("profile_pic", image);
      }

      await registerUser(formData);

      alert("Register successfully");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow p-4 mx-auto auth-card">
        <h2 className="text-center mb-4">Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            name="Name"
            placeholder="Full Name"
            value={input.Name}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            name="Email"
            type="email"
            placeholder="Email"
            value={input.Email}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            name="Password"
            type="password"
            placeholder="Password"
            value={input.Password}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            name="Address"
            placeholder="Address"
            value={input.Address}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            name="Phone"
            placeholder="10 Digit Phone Number"
            value={input.Phone}
            onChange={handleChange}
            required
          />

          <label className="form-label">Profile Image</label>

          <input
            type="file"
            accept="image/*"
            className="form-control mb-3"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
