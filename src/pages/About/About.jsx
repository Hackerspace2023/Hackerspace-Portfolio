import { Button } from "../../components";
import "../../css/About.css";
import AboutSection from "../Home/AboutSection";
import Experience from "./Experience";
import Journey from "./Journey";
import MembersSection from "../Home/MembersSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ProjectSection from "../Home/ProjectSection";

const About = ({ ...props }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section {...props}>
      <section className="About" id="about">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">About Us</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <div className="aboutDescription" data-aos="fade-up">
          A Community of students having similar interest in the field of
          coding, where one can learn, implement and share new skills. Here
          students get more exposure and get to know about the industrial
          experiences of working seniors. Hackerspace always maintains a
          friendly environment for students to develop new skills and go beyond
          the boundaries
        </div>
        <Journey id="journey" />
        <Experience id="experience" />
        <ProjectSection id="projects" />
      </section>
    </section>
  );
};

export default About;
