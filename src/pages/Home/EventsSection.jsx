import React from "react";
// import "../../css/membersSection.css";
import { Button, Card, ImageBorder } from "../../components";

import { Divider, EventsCategory } from "../../components";
import { events } from "../../data";
import "../../css/Events.css";
import EventsCard from "../Events/EventsCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const EventsSection = ({ ...props }) => {

    return (
        <section className="members" {...props} data-aos="fade-up">
            <div className="titleContainer membersTitle">
                <span className="tagAbout tagAbout1">{`<h2>`}</span>
                <h1 className="title">Our Events</h1>
                <span className="tagAbout tagAbout2">{`</h2>`}</span>
            </div>

            


            <Button
                text="View All"
                link="/events"
                className="membersSectionButton"
            />
        </section>
    );
};

export default EventsSection;
