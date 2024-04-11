import React from "react";

import { Button } from "../../components";
import "../../css/AboutSection.css";
import { useDispatch } from "react-redux";
import { updateTitle } from "../../features/navSlice";

const AboutSection = ({ ...props }) => {
  return (
    <section className="about" {...props} data-aos="fade-up">
      <div className="titleContainer">
        <span className="tagAbout tagAbout1">{`<h2>`}</span>
        <h1 className="title">About Us</h1>
        <span className="tagAbout tagAbout2">{`</h2>`}</span>
      </div>

      <div className="mob-aboutContent">
        <div>
          A Community of students having similar interest in the field of
          coding, where one can learn, implement and share new skills. Here
          students get more exposure and get to know about the industrial
          experiences of working seniors. Hackerspace always maintains a
          friendly environment for students to develop new skills and go beyond
          the boundaries
        </div>
      </div>

      <div className="aboutContent">
        <div className="aboutText">
          <p>
            A Community of students having similar interest in the field of
            coding, where one can learn, implement and share new skills. Here
            students get more exposure and get to know about the industrial
            experiences of working seniors. Hackerspace always maintains a
            friendly environment for students to develop new skills and go
            beyond the boundaries
          </p>
        </div>
        <div className="aboutLogo"></div>
        <div className="aboutButton">
          <Button text="Learn More" to={"/about"} />
        </div>
      </div>
      <Button text="Learn More" to={"/about"} className="aboutSectionButton" />
    </section>
  );
};

export default AboutSection;
