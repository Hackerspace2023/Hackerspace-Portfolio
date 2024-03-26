import React from "react";
import "../../css/Events.css";
import { Button } from "../../components";

const EventsCard = ({ data }) => {
  return (
    <>
      <div className="event-card">
        <div className="event-card2">
          <div className="event-cardImg">
            <div className="event-image">
              <img src={data.eventImage} alt="Event" />
            </div>
          </div>
          <div className="event-content">
            <h3 className="event-name">{data.eventName}</h3>
            <p className="event-time">{data.description}</p>
          </div>
          <div className="mob-btn">
            <Button text="Register" className={`eventsButton linkBtn3 ${data.category !== "past" ? "active" : "" }`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCard;
