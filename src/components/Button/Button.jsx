import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../../css/button.css"
const Button = ({
  children,
  text = "button",
  className = "",
  title = "button",
  link = "/#",
  isHashLink = "false",
  ...props
}) => {
  return isHashLink ? (
    <HashLink
      to={link}
      className="button"
      title={title}
      {...props}
    >
      <p className="buttonText">{text}</p>
      {children && <i>{children}</i>}
    </HashLink>
  ) : (
    <Link
      to={link}
      className="button"
      title={title}
      {...props}
    >
      <p className="buttonText">{text}</p>
      {children && <i>{children}</i>}
    </Link>
  );
};

export default Button;