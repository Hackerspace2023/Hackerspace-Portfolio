import React from "react";
import "../../css/membersSection.css";
import { Button, Card, ImageBorder } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
// import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { founders } from "../../data";

const MembersSection = ({ ...props }) => {
  return (
    <section className="members" {...props} data-aos="fade-up">
      <div className="titleContainer membersTitle">
        <span className="tagAbout tagAbout1">{`<h2>`}</span>
        <h1 className="title">Founders</h1>
        <span className="tagAbout tagAbout2">{`</h2>`}</span>
      </div>

      <div className="membersRight">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop="true"
          className="mySwiper"
        >
          {founders.map((ele, index) => {
            return (
              <SwiperSlide key={index}>
                {/* <div className="tab-membersContainer">
                  <Card data={ele} />
                </div> */}

                <div className="mob-membersContainer">
                  <Card data={ele} />
                </div>

                <div className="membersContainer">
                  <div className="membersProfile">
                    <ImageBorder icon={ele.image} className="membersImage" />
                  </div>
                  <div className="membersContenetBorder">
                    <div className="membersContenet">
                      <div className="membersContenetAbout">
                        <h2>{ele.name}</h2>
                        <h3>
                          {ele.stream} ({ele.year})
                        </h3>
                        <p>"{ele.description}"</p>
                      </div>
                      <div className="membersConteneLinks">
                        <a
                          className={`socialsIcon ${ele.twitter !== "NULL" ? "active" : ""} linkedinBtn`}
                          data-icon="twitter"
                          href={ele.twitter}
                          target="_blank"
                        >
                          <FaXTwitter />
                        </a>
                        <a
                          className={`socialsIcon ${ele.instagram !== "NULL" ? "active" : ""} linkedinBtn`}
                          data-icon="instagram"
                          href={ele.instagram}
                          target="_blank"
                        >
                          <AiFillInstagram />
                        </a>
                        <a
                          className={`socialsIcon ${ele.linkedIn !== "NULL" ? "active" : ""} linkedinBtn`}
                          data-icon="linkedin"
                          href={ele.linkedIn}
                          target="_blank"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          className={`socialsIcon active linkedinBtn`}
                          data-icon="mail"
                          href={`mailto:${ele.email}`}
                          target="_blank"
                        >
                          <IoMdMail />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Button
        text="View All"
        link="/members"
        className="membersSectionButton"
      />
    </section>
  );
};

export default MembersSection;
