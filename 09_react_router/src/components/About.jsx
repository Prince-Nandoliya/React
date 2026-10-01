import React from "react";

const About = () => {
  return (
    <>
      <h1 className="text-center">About Our Cars</h1>
      <div className="container my-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img
              className="img-fluid rounded-4 shadow"
              src="https://c4.wallpaperflare.com/wallpaper/36/11/610/toyota-toyota-hilux-car-pickup-vehicle-hd-wallpaper-preview.jpg"
              alt="Car"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Welcome to Our Car World</h2>
            <p className="text-secondary">
              We provide a collection of modern, powerful and stylish cars.
              Whether you are looking for a luxury car, SUV, pickup or an
              everyday vehicle, we have something for everyone. Our goal is to
              make it easy for car lovers to explore different vehicles and
              learn about their design, performance and features.
            </p>
            <button className="btn btn-dark px-4 rounded-3">
              Explore Cars
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
