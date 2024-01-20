import React, { useEffect, useState } from "react";
import "../../css/navbar.css";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  
  useEffect(() => {
    
    if (path) {
      setPath(pathname.replace(/^\/|\/$/g, ""));
      
    } else {
      setPath("home");
    }
  }, [pathname]);
  const [path, setPath] = useState(pathname.replace(/^\/|\/$/g, ""));

  return (
    <>
      <nav className="navbar">
        <div className="navItem">
          <div className="sectionNumber">//01.</div>
          <div className="sectionTitle">{`<${
            pathname.replace(/^\/|\/$/g, "")
              ? pathname.replace(/^\/|\/$/g, "")
              : "home"
          }/>`}</div>
        </div>
        <div className="navItem">
          <div className="navLogo">HS</div>
        </div>
        <div className="navItem">
          <Button text="Join US" to={"/contact"} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
