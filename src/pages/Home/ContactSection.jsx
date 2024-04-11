import React from "react";
import "../../css/AboutSection.css";
import "../../css/contactSection.css";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateTitle } from "../../features/navSlice";

const ContactSection = ({ ...props }) => {
  return (
    <>
      <section className="contactSection" {...props} data-aos="fade-up">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Connect Us</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <div className="contactContainer">
          <a
            className="circleIcon"
            data-icon="twitter"
            href="https://www.youtube.com/@CodingCommunityMSITHackerspace"
            target="_blank"
          >
            <FaYoutube />
          </a>
          <a
            className="circleIcon"
            data-icon="instagram"
            href="https://www.instagram.com/_hackerspace_msit_/"
            target="_blank"
          >
            <AiFillInstagram />
          </a>
          <a
            className="circleIcon"
            data-icon="linkedin"
            href="https://www.facebook.com/profile.php?id=100091680046825"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <Link className="circleIcon" data-icon="mail" to="/contact">
            <IoMdMail />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
