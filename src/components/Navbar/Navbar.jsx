import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../css/navbar.css";
import Button from "../Button/Button";

const Navbar = () => {
  const location = useLocation();
  const [number, setNumber] = useState("01");
  const [path, setPath] = useState("");
  const routesNumber = {
    "": "01",
    "about": "02",
    "projects": "03",
    "events": "04",
    "blog": "05",
    "gallery": "06",
    "contact": "07",
  }

  const changeHeader = (path)=>{
    setHeader(path.replace(/^\/|\/$/g, ""));
  }

  const setHeader = (path)=>{
    if(path)
    {
      setPath(path);
    }
    else{
      setPath("home")
    }
    setNumber(routesNumber[path]);
  }
  

  useEffect(() => {
    const {pathname} = location;
    window.onload = function(){
      setHeader(pathname.replace(/^\/|\/$/g, ""));
    }
    const handleEvent = ()=>{
      const {pathname} = location;
      setHeader(pathname.replace(/^\/|\/$/g, ""));
    }
    window.addEventListener("popstate",handleEvent)
    return () => {
      window.removeEventListener("popstate", handleEvent);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navItem">
          <div className="sectionNumber">//{number}.</div>
          <div className="sectionTitle">{path}</div>
        </div>
        <div className="navItem">
          <div className="navLogo">HS</div>
        </div>
        <div className="navItem">
          <Button text="Join Us" to={"/contact"} onClick={()=>changeHeader("contact")}/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
