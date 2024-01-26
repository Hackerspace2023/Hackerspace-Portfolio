import React from "react";
import TagContainer from "./TagContainer";
import "../../css/homeSection.css";
import icon from "../../assets/hackerspace-logo.jpg";
import ellipse from "../../assets/ellipse.png"
const HomeSection = () => {
  return (
    <section className="home">
      <div className="leftSectionHome">
        <TagContainer tag="p" className="subTitleHome">
          <b className="subTitleHomeText"> Welcome To </b>
        </TagContainer>
        <TagContainer tag="h1" className="titleHome">
          <h1 className="titleHomeText">Hacker Space</h1>
        </TagContainer>
        <TagContainer tag="p" className="subTitleHome bottomTitleHome">
          <b className="subTitleHomeText"> Let's hack the future </b>
        </TagContainer>
      </div>
      <div className="rightSectionHome">
        <div className="imgHomeWrapper">
          <img src={icon} alt="hackerspace-logo" className="imgHome" />
          <img src={ellipse} alt="" className="ellipse-slow" />
          <img src={ellipse} alt="" className="ellipse-fast" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
