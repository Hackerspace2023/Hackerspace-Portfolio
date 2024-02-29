import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../css/navbar.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateTitle } from "../../features/navSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [path, setPath] = useState(useSelector((state)=>state.nav.navTitle));
  const [number, setNumber] = useState(useSelector((state)=>state.nav.navNumber));
  const routesNumber = {
    "": "01",
    "about": "02",
    "projects": "03",
    "events": "04",
    "blog": "05",
    "gallery": "06",
    "contact": "07",
  }

  const changeHeader = (path,number)=>{
    const newPath = {
      navTitle: path,
      navNumber: number
    }
    dispatch(updateTitle(newPath));
  }

  const setHeader = (path)=>{
    let temp="";
    if(path)
    {
      setPath(path);
      temp=path
    }
    else{
      setPath("home")
      temp="home"
    }
    const number = routesNumber[path]
    setNumber(number);
    const newPath = {
      navTitle: temp,
      navNumber: number
    }
    dispatch(updateTitle(newPath));
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
          <div className="sectionNumber">//{useSelector((state)=>state.nav.navNumber)}.</div>
          <div className="sectionTitle">{useSelector((state)=>state.nav.navTitle)}</div>
        </div>
        <div className="navItem">
          <div className="navLogo">HS</div>
        </div>
        <div className="navItem">
          <Button text="Join Us" to={"/contact"} onClick={()=>changeHeader("contact","07")}/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
