import "../../css/homeSection.css";
import ellipse from "../../assets/ellipse.png";

const ImageBorder = ({ icon, ...props }) => {
  return (
    <div {...props}>
      <div className="imgHomeWrapper">
        <img src={icon} alt="member's logo" className="imgHome" />
        <img src={ellipse} alt="" className="ellipse-slow" />
        <img src={ellipse} alt="" className="ellipse-fast" />
      </div>
    </div>
  );
};

export default ImageBorder;
