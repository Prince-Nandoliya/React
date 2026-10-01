import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "../components/Error.css";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <div className="error-page">
        <div className="error-content">
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h2 className="mb-3">Oops! Page Not Found</h2>
          <p className="text-white mb-4">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to={"/"}>
            <button className="btn btn-primary">Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
