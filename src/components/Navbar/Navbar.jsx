import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../css/navbar.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateTitle } from "../../features/navSlice";
import { HashLink as Link } from "react-router-hash-link";
import NavItem from "./NavItem";

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

  const navData = [
    {
      text: "Home",
      link: "/#home"
    },
    {
      text: "About",
      link: "/#about"
    },
    {
      text: "Members",
      link: "/#members"
    },
    {
      text: "Projects",
      link: "/#projects"
    },
    {
      text: "Contact",
      link: "/#contact"
    },
  ]

  return (
    <>
      <nav className="navbar">
        <div className="navHeader">
          <div className="sectionNumber">//{useSelector((state)=>state.nav.navNumber)}.</div>
          <div className="sectionTitle">{useSelector((state)=>state.nav.navTitle)}</div>
        </div>
        <div className="navItems">
          {
            navData.map((ele,index)=>(<NavItem key={index} text={ele.text} link={ele.link}/>))
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
