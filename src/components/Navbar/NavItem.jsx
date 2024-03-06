import React from "react";
import "../../css/navbar.css";
import { HashLink as Link } from "react-router-hash-link";

const NavItem = ({ text = "", className, children, link = "#", ...props }) => {
  return (
    <Link className={`navLinks ${className}`} smooth to={`${link}`} {...props}>
      {text}
      {children}
    </Link>
  );
};

export default NavItem;
