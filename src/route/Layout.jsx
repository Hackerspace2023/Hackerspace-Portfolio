import { Outlet } from "react-router-dom";
import { Footer, Navbar, Terminal } from "../components";
import "../css/container.css";
import App from "../App";
import hexagon from "../assets/hexagon.png";
import { useEffect, useRef } from "react";

const Layout = () => {
  const light = useRef();
  const grid = useRef();
  const handleMouseMove = (event) => {
    light.current.style.left = `${event.clientX}px`;
    light.current.style.top = `${event.clientY}px`;
  };

  useEffect(() => {
    // Add event listener for mousemove event
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="container">
      <div id="hex-grid">
        <div className="light" ref={light}></div>
        <div className="grid" ref={grid}></div>
      </div>
      <Navbar />
      <Terminal/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
