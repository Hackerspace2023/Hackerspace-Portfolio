import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import "../../css/navbar.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateTitle } from "../../features/navSlice";
import { HashLink as Link } from "react-router-hash-link";
import NavItem from "./NavItem";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // geting the initial navigation state
  const navTitle = useSelector((state) => state.nav.navTitle);
  const navNumber = useSelector((state) => state.nav.navNumber);
  const navItems = useSelector((state) => state.nav.navItems);

  // if the page is routes changed

  useEffect(() => {
    let newPath = "";
    if (location.pathname === "/") {
      newPath = "home";
    } else {
      newPath = location.pathname.replace(/^\/|\/$/g, "");
    }
    dispatch(updateTitle(newPath));
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <div className="navHeader">
          <div className="sectionNumber">//{navNumber}.</div>
          <div className="sectionTitle">{`${navTitle}`}</div>
        </div>
        <div className="navBtn">
          <Button text="Contact" to="/contact" className="btnContact" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
