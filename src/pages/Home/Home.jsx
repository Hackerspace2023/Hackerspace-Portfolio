import React, { useEffect, useState } from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import MembersSection from "./MembersSection";
import EventsSection from "./EventsSection";
import ContactSection from "./ContactSection";
import { useLocation } from "react-router-dom";
import Events from "../Events/Events";

const Home = () => {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <HomeSection id="home" />
      <AboutSection id="about" />
      <ProjectSection id="projects" />
      <MembersSection id="members" />
      {/* <EventsSection id="events" /> */}
      <ContactSection id="contact" />
    </>
  );
};

export default Home;
