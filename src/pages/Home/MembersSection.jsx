import React from "react";
import "../../css/membersSection.css";
import { Button, ImageBorder } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { members } from "../../data";

const MembersSection = ({...props}) => {

    return (
        <section className="members" {...props}>
            <div className="titleContainer">
                <span className="tagAbout tagAbout1">{`<h2>`}</span>
                <h1 className="title">Our Members</h1>
                <span className="tagAbout tagAbout2">{`</h2>`}</span>
            </div>

            <div className="membersRight">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {members.map((ele, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="membersContainer">
                                    <div className="membersProfile">
                                        <ImageBorder icon={ele.profilePic} />
                                    </div>
                                    <div className="membersContenetBorder">
                                        <div className="membersContenet">
                                            <div className="membersContenetAbout">
                                                <h2>{ele.name}</h2>
                                                <h3>{ele.role}</h3>
                                                <p>{ele.description}</p>
                                            </div>
                                            <div className="membersConteneLinks">
                                                <a href={ele.socials.instagram}>
                                                    <FaLinkedin className="linkedinBtn" />
                                                </a>
                                                <a href={ele.socials.instagram}>
                                                    <FaGithub className="gitBtn" />
                                                </a>
                                                <a href={ele.socials.instagram}>
                                                    <RiInstagramFill className="instaBtn" />
                                                </a>
                                                <a href={ele.socials.instagram}>
                                                    <FaFacebook className="fbBtn" />
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
        </section>
    );
};

export default MembersSection;
