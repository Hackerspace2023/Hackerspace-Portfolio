import React from "react";
import "../../css/About.css";
import { journey } from "../../data";

const Journey = ({ ...props }) => {
  return (
    <section className="journey" {...props}>
      <div className="titleContainer" data-aos="fade-up">
        <span className="tagAbout tagAbout1">{`<h2>`}</span>
        <h1 className="title">Journey</h1>
        <span className="tagAbout tagAbout2">{`</h2>`}</span>
      </div>
      <div className="aboutDescription" data-aos="fade-up">
        Explore our Journey section, a vivid timeline of Hackerspace's
        evolution. It captures our milestones, achievements, and defining
        moments, reflecting our growth and relentless pursuit of knowledge. Each
        timeline entry marks a step in our collective coding journey. Navigate
        through this timeline to witness Hackerspace's evolution and envision
        our future.
      </div>

      <div className="timeline">
        <div className="line"></div>
        <ul>
          {journey.map((item, index) => {
            return (
              <li key={index}>
                <div className="timeline-content">
                  <h3 className="date">{item.date}</h3>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Journey;
