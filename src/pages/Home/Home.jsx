import React, { useEffect, useState } from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import MembersSection from "./MembersSection";
import ContactSection from "./ContactSection";
import { useLocation } from "react-router-dom";

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
      <ContactSection id="contact" />
    </>
  );
};

export default Home;
