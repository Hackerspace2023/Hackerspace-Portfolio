import React from "react";
import "../../css/Events.css";
import { Button } from "../../components";

const ProjectCard = ({data}) => {
  return (
    <>
      <div className="event-card">
        <img src={data.image} alt="Event" className="event-image" />
        <div className="event-content">
        <h2 className="event-name">{data.name}</h2>
        <p className="event-time">{data.description}</p>
        {/* <button className="register-button">Register</button> */}
        <Button text="Github" className="eventsButton"/>
        <Button text="Link" className="eventsButton"/>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
