import React from "react";

const Pagenot = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow text-center p-5" style={{ width: "400px" }}>
        <div className="card-body">
          <h1 className="display-1 fw-bold text-danger">404</h1>

          <h2 className="card-title">Page Not Found</h2>

          <p className="card-text text-muted">
            Sorry, the page you are looking for does not exist.
          </p>

          <a href="/" className="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pagenot;
