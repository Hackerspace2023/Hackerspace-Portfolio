import React from "react";
import "../../css/About.css";
import { journey } from "../../data";

const Journey = ({ ...props }) => {
  return (
    <section className="journey" {...props} >
      <div className="titleContainer" data-aos="fade-up">
        <span className="tagAbout tagAbout1">{`<h2>`}</span>
        <h1 className="title">Journey</h1>
        <span className="tagAbout tagAbout2">{`</h2>`}</span>
      </div>
      <div className="aboutDescription" data-aos="fade-up">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text Lorem
        Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been
      </div>

      <div className="timeline">
        <div className="line"></div>
        <ul>
          {journey.map((item, index) => {
            return (
              <li key={index}>
                <div className="timeline-content">
                  <h3 className="date">{item.date}</h3>
                  <h1>
                    {
                      item.title
                    }
                  </h1>
                  <p>
                    {
                      item.description
                    }
                  </p>
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
