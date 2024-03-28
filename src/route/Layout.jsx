import { Outlet } from "react-router-dom";
import { Footer, Navbar, Terminal } from "../components";
import "../css/container.css";
import App from "../App";
import hexagon from "../assets/hexagon.png";
import { useEffect, useRef, useState } from "react";
import { Loading } from "../pages";

const Layout = () => {
  const light = useRef();
  const grid = useRef();
  const handleMouseMove = (event) => {
    light.current.style.left = `${event.clientX}px`;
    light.current.style.top = `${event.clientY}px`;
  };
  const [progress, setProgress] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 1;
      });
    }, 99);
  }, []);


  useEffect(() => {   
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    
  }, []);

  if (isLoading) {
    return (
      <Loading progress={progress}/>
    );
  } else {
    return (
      <div className="container">
        <div id="hex-grid">
          <div className="light" ref={light}></div>
          <div className="grid" ref={grid}></div>
        </div>
        <Navbar />
        <Terminal />
        <Outlet />
        <Footer />
      </div>
    );
  }
};

export default Layout;
