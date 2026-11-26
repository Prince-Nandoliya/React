import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { getAllBlogs, deleteBlog } from "../api/Blog";
import { AuthContext } from "../context/contextauth";
import "../styles/Home.css";
const Home = () => {
  const { user, token } = useContext(AuthContext);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const getBlogs = async () => {
    try {
      const data = await getAllBlogs();
      setBlogs(data || []);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?",
    );

    if (!confirmDelete) return;

    try {
      await deleteBlog(id, token);
      alert("Blog deleted successfully");
      getBlogs();
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [token]);

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.Category).filter(Boolean)),
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.Category === activeCategory;

    const matchesSearch =
      blog.BlogTitle?.toLowerCase().includes(search.toLowerCase()) ||
      blog.description?.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="home-page">
      <div className="category-section">
        <div className="container">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div>
            <h1 className="fw-bold mb-1">Latest Blogs</h1>
            <p className="text-secondary mb-0">
              Explore the latest stories, insights, and ideas
            </p>
          </div>

          <div className="d-flex gap-2 flex-wrap">
            <input
              type="text"
              className="form-control blog-search"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {user && (
              <Link to="/add-blog" className="btn btn-primary">
                + Add Blog
              </Link>
            )}
          </div>
        </div>

        <div className="row g-4">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div className="col-lg-4 col-md-6 col-12" key={blog._id}>
                <div className="modern-blog-card">
                  <img
                    src={blog.Blogimg}
                    className="modern-blog-image"
                    alt={blog.BlogTitle}
                  />

                  <div className="modern-blog-body">
                    <span className="modern-category">{blog.Category}</span>

                    <h5 className="modern-blog-title">{blog.BlogTitle}</h5>

                    <p className="modern-blog-description">
                      {blog.description}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mt-3">
                      {user && (
                        <Link
                          to={`/blog/${blog._id}`}
                          className="btn btn-outline-primary btn-sm"
                        >
                          Read More
                        </Link>
                      )}

                      {user &&
                        (user.Role === "admin" ||
                          String(blog.Author?._id) === String(user._id)) && (
                          <>
                            <Link
                              to={`/edit-blog/${blog._id}`}
                              className="btn btn-warning btn-sm"
                            >
                              Edit
                            </Link>

                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDelete(blog._id)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                    </div>
                  </div>

                  <div className="blog-author">
                    Author: {blog.Author?.Name || "Unknown"}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4>No Blogs Found</h4>
              <p className="text-muted">
                Try another category or search keyword.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
