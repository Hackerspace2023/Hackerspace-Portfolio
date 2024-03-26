import React from "react";
import "../../css/membersSection.css";
import { Button, Card, ImageBorder } from "../../components";
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
import { founders } from "../../data";

const MembersSection = ({...props}) => {

    return (
        <section className="members" {...props} data-aos="fade-up">
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
                    
                    {founders.map((ele, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="tab-membersContainer">
                                    <Card data={ele} />
                                    <Card data={ele} />
                                </div>

                                <div className="mob-membersContainer">
                                    <Card data={ele} />
                                </div>
                                
                                <div className="membersContainer">
                                    <div className="membersProfile">
                                        <ImageBorder icon={ele.image} />
                                    </div>
                                    <div className="membersContenetBorder">
                                        <div className="membersContenet">
                                            <div className="membersContenetAbout">
                                                <h2>{ele.name}</h2>
                                                <h3>{ele.stream}</h3>
                                                <p>{ele.description}</p>
                                            </div>
                                            <div className="membersConteneLinks">
                                                <a href={ele.linkedIn}>
                                                    <FaLinkedin className="linkedinBtn" />
                                                </a>
                                                <a href={ele.instagram}>
                                                    <FaGithub className="gitBtn" />
                                                </a>
                                                <a href={ele.instagram}>
                                                    <RiInstagramFill className="instaBtn" />
                                                </a>
                                                <a href={ele.facebook}>
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
            <Button text="View All" link="/members" className="membersSectionButton"/>
        </section>
    );
};

export default MembersSection;
