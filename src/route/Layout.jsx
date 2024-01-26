import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import "../css/container.css";

const Layout = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
