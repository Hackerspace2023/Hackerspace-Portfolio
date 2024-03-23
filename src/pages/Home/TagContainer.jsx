import "../../css/homeSection.css";

const TagContainer = ({ children, tag = "", className = "", ...props }) => {
  return (
    <span className={`tag ${className}`} {...props}>
      <span className="tagSubTitle">{`<${tag}>`}</span>
      {children}
      <span className="tagSubTitle">{`<${tag}>`}</span>
    </span>
    // <>
    //   <div className="titleContainer">
    //     <span className="tagAbout tagAbout1">{`<h2>`}</span>
    //     <h1 className="title">About Us</h1>
    //     <span className="tagAbout tagAbout2">{`</h2>`}</span>
    //   </div>
    // </>
  );
};

export default TagContainer;
