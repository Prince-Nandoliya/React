
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { getBlogById } from "../api/Blog";
import { AuthContext } from "../context/contextauth";
import "../styles/BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const data = await getBlogById(id, token);
        setBlog(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) getBlog();
    else setLoading(false);
  }, [id, token]);

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  if (!blog) {
    return <h3 className="text-center mt-5">Blog Not Found</h3>;
  }

  return (
    <div className="blog-details-page">
      <div className="blog-details-container">

        <Link to="/" className="details-back-link">
          ← Back to Blogs
        </Link>

        <article className="details-card">

          <div className="details-image-wrapper">
            <img
              src={blog.Blogimg}
              className="details-image"
              alt={blog.BlogTitle}
            />
          </div>

          <div className="details-content">

            <span className="details-category">
              {blog.Category}
            </span>

            <h1 className="details-title">
              {blog.BlogTitle}
            </h1>

            <div className="details-author">
              <div className="author-avatar">
                {(blog.Author?.Name || "U").charAt(0).toUpperCase()}
              </div>

              <div>
                <h6>{blog.Author?.Name || "Unknown"}</h6>
                <span>Blog Author</span>
              </div>
            </div>

            <div className="details-description">
              {blog.description}
            </div>

            <hr />

            <div className="details-blog-content">
              {blog.content}
            </div>

            <div className="details-footer">
              <Link to="/" className="details-home-btn">
                ← Back to Home
              </Link>
            </div>

          </div>
        </article>

      </div>
    </div>
  );
};

export default BlogDetails;
