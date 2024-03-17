
import React from 'react'
import HomeSection from './HomeSection'
import AboutSection from './AboutSection'
import ProjectSection from './ProjectSection'
import MembersSection from './MembersSection'
import ContactSection from './ContactSection'



const Home = () => {
  return (
    <>
      <HomeSection id="home"/>
      <AboutSection id="about"/>
      <ProjectSection id="projects"/>
      <MembersSection id="members"/>
      {/* <ContactSection id="contact"/> */}
    </>
  );
};

export default Home;
