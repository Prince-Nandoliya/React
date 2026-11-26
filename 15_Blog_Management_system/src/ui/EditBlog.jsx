
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getBlogById, updateBlog } from "../api/Blog";
import { AuthContext } from "../context/contextauth";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { token } = useContext(AuthContext);

  const [input, setInput] = useState({
    BlogTitle: "",
    Category: "",
    content: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const blog = await getBlogById(id, token);

        if (!blog) {
          throw new Error("Blog not found");
        }

        setInput({
          BlogTitle: blog.BlogTitle,
          Category: blog.Category,
          content: blog.content,
          description: blog.description,
        });
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) loadBlog();
  }, [id, token]);

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
        formData.append("Blogimg", image);
      }

      await updateBlog(id, formData, token);

      alert("Blog updated successfully");

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container py-5">
      <div className="card shadow p-4 mx-auto form-card">

        <h2 className="text-center mb-4">Update Blog</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            name="BlogTitle"
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
            <option value="Business">Business</option>
            <option value="Travel">Travel</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>

          <input
            className="form-control mb-3"
            name="description"
            value={input.description}
            onChange={handleChange}
            required
          />

          <textarea
            className="form-control mb-3"
            name="content"
            rows="7"
            value={input.content}
            onChange={handleChange}
            required
          />

          <label className="form-label">Change Image (Optional)</label>

          <input
            className="form-control mb-3"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button className="btn btn-warning w-100">
            Update Blog
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditBlog;
