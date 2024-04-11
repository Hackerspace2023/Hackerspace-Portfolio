import React from "react";
import { Divider } from "../../components";
import "../../css/About.css";

const Experience = ({ ...props }) => {
  return (
    <>
      <section className="experience" {...props} data-aos="fade-up">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Experience</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <Divider />
        <div className="experienceContainer">
          <div className="experienceCard">
            <div className="cardTitle">
              Project
              <br /> Completed
            </div>
            <div className="cardSubTitle">30+</div>
          </div>
          <div className="experienceCard">
            <div className="cardTitle">
              Members <br />
              No.
            </div>
            <div className="cardSubTitle">70+</div>
          </div>
          <div className="experienceCard">
            <div className="cardTitle">
              Ongoing
              <br /> Projects
            </div>
            <div className="cardSubTitle">10+</div>
          </div>
          <div className="experienceCard">
            <div className="cardTitle">
              Years of
              <br /> Experience
            </div>
            <div className="cardSubTitle">2+</div>
          </div>
        </div>
        <Divider />
      </section>
    </>
  );
};

export default Experience;
