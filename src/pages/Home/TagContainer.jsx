import "../../css/homeSection.css";

const TagContainer = ({ children, tag = "", className = "", ...props }) => {
  return (
    <span className={`tag ${className}`} {...props}>
      {`<${tag}>`}
      {children}
      {`</${tag}>`}
    </span>
  );
};

export default TagContainer;
