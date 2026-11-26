
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { addBlog } from "../api/Blog";
import { AuthContext } from "../context/contextauth";

const AddBlog = () => {
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);

  const [input, setInput] = useState({
    BlogTitle: "",
    Category: "",
    content: "",
    description: "",
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

    if (!image) {
      return alert("Please select blog image");
    }

    try {
      const formData = new FormData();

      Object.keys(input).forEach((key) => {
        formData.append(key, input[key]);
      });

      formData.append("Blogimg", image);

      await addBlog(formData, token);

      alert("Blog added successfully");

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container py-5">

      <div className="card shadow p-4 mx-auto form-card">

        <h2 className="text-center mb-4">Add New Blog</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            name="BlogTitle"
            placeholder="Blog Title"
            value={input.BlogTitle}
            onChange={handleChange}
            required
          />

          <select
            className="form-select mb-3"
            name="Category"
            value={input.Category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Business">Business</option>
            <option value="Travel">Travel</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>

          <input
            className="form-control mb-3"
            name="description"
            placeholder="Short Description"
            value={input.description}
            onChange={handleChange}
            required
          />

          <textarea
            className="form-control mb-3"
            name="content"
            placeholder="Blog Content"
            rows="7"
            value={input.content}
            onChange={handleChange}
            required
          />

          <label className="form-label">Blog Image</label>

          <input
            type="file"
            accept="image/*"
            className="form-control mb-3"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button className="btn btn-success w-100">
            Add Blog
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddBlog;
