import React from "react";
import "../../css/homeSection.css";
import ellipse from "../../assets/ellipse.png";

const ImageBorder = ({icon}) => {
    return (
        <div className="imgHomeWrapper">
        <img src={icon} alt="hackerspace-logo" className="imgHome" />
        <img src={ellipse} alt="" className="ellipse-slow" />
        <img src={ellipse} alt="" className="ellipse-fast" />
        </div>
    );
};

export default ImageBorder;