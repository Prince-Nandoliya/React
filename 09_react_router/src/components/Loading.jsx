import React from "react";

const Loading = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      
      <div
        className="spinner-border text-primary"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>

      <h3 className="mt-4">Loading...</h3>

      <p className="text-muted">
        Please wait a moment
      </p>

    </div>
  );
};

export default Loading;