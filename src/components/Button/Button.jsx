import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../../css/button.css";

const Button = ({
  children,
  text = "button",
  className = "",
  title = "button",
  link = "#",
  isHashLink = false,
  type,
  ...props
}) => {
  const displayRequiredButton = (type) => {
    if (type === "button") {
      return (
        <button className="button" title={title} {...props}>
          <p className="buttonText">{text}</p>
          {children && <i>{children}</i>}
        </button>
      );
    } else if (type === "a") {
      return (
        <a
          href={link}
          className="button"
          title={title}
          {...props}
          target="_blank"
        >
          <p className="buttonText">{text}</p>
          {children && <i>{children}</i>}
        </a>
      );
    } else if (type === "hashLink" || isHashLink) {
      return (
        <HashLink to={link} className="button" title={title} {...props}>
          <p className="buttonText">{text}</p>
          {children && <i>{children}</i>}
        </HashLink>
      );
    } else {
      return (
        <Link to={link} className="button" title={title} {...props}>
          <p className="buttonText">{text}</p>
          {children && <i>{children}</i>}
        </Link>
      );
    }
  };
  return (
    <div className={className} onClick={() => window.scrollTo(0, 0)}>
      <div className="arrowButton inline-flex items-center transition-all ease-linear">
        <i className="btn arrow left opacity-10"></i>
        <i className="btn arrow left opacity-40"></i>
        <i className="btn arrow left opacity-80"></i>
        <div className="inline-flex items-center btn-container">
          {displayRequiredButton(type)}
        </div>
        <i className="btn arrow right opacity-80"></i>
        <i className="btn arrow right opacity-40"></i>
        <i className="btn arrow right opacity-10"></i>
      </div>
    </div>
  );
};

export default Button;
