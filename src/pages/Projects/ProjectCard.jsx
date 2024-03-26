import React from "react";
import "../../css/Events.css";
import { Button } from "../../components";

const handleMouseEnter = (event) => {
  event.target.play();
};

const handleMouseLeave = (event) => {
  event.target.pause();
};

const ProjectCard = ({ data }) => {
  return (
    <>
      <div className="event-card">
        <div className="event-card2">
          <div className="event-cardImg">
            <img src={data.image} alt="Event" className="event-image" />
            {/* <video src={data.video} alt="Event" className="event-image"></video> */}
            <video
              src={data.video}
              alt="Event"
              className="event-image"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              muted
              loop
            ></video>
          </div>
          <div className="event-content">
            <h3 className="event-name">{data.name}</h3>
            <p className="event-time">{data.description}</p>
            {/* <button className="register-button">Register</button> */}
          </div>
          <div className="mob-btn">
            <div className="mob-buttonSection">
              <Button text="Github" className="eventsButton linkBtn1" />
            </div>
            <div className="mob-buttonSection">
              <Button text="Link" className="eventsButton linkBtn2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
