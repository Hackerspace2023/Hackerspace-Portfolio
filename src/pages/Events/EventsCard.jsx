import React from "react";
import "../../css/Events.css";
import { Button } from "../../components";

const EventsCard = ({data}) => {
  return (
    <>
      <div className="event-card">
        <img src={data.image} alt="Event" className="event-image" />
        <div className="event-content">
        <h2 className="event-name">{data.name}</h2>
        <p className="event-time">Event Time:- {data.time}</p>
        <p className="event-location">MeghnadSaha Institute Of Technology</p>
        {/* <button className="register-button">Register</button> */}
        {/* <Button text="Register" className="eventsButton"/> */}
        </div>
      </div>
    </>
  );
};

export default EventsCard;
