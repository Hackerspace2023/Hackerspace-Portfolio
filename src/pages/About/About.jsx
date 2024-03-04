import { Button } from "../../components";
import "../../css/About.css"
import AboutSection from "../Home/AboutSection";
import Experience from "./Experience";
import Journey from "./Journey";
import MembersSection from "../Home/MembersSection";

const About = ({...props}) => {
  return (
    <section {...props}>
      <section className="About" id="about">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">About Us</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <div className="aboutDescription">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </div>
        <Journey id="journey"/>
        <Experience id="experience"/>
        <MembersSection id="members" style={{paddingBottom: "50px"}}/>
      </section>
    </section>
  );
};

export default About;
