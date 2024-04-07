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
            {/* <img src={data.image} alt="Event" className="event-image" /> */}
            {/* <video src={data.video} alt="Event" className="event-image"></video> */}
            <div className="event-image">
              <video
                src={data.video}
                alt="Event"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                muted
                loop
              ></video>
            </div>
          </div>
          <div className="event-content">
            <h3 className="event-name">{data.name}</h3>
            <p className="event-time">{data.description}</p>
            {/* <button className="register-button">Register</button> */}
          </div>
          <div
            // href="https://github.com/Hackerspace2023/Hackerspace-Portfolio/graphs/contributors"
            className="mob-contributors"
          >
            {/* <img src="https://contrib.rocks/image?repo=Hackerspace2023/Hackerspace-Portfolio" /> */}
            {data.contributors &&
              data.contributors.map((contributor) => (
                <img
                  key={contributor.name}
                  src={contributor.image}
                  alt={contributor.name}
                />
              ))}
          </div>
          {/* <div className="mob-btn">
            
          </div>
          <div className="mob-buttonSection">
              
            </div> */}
          {/* <Button text="Link" className="eventsButton linkBtn2" /> */}
          <a href={data.url} target="_blank" className="projectButton">PREVIEW</a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
