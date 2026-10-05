import React from "react";
import {Outlet} from "react-router-dom"
import Navbar from "../ui/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
