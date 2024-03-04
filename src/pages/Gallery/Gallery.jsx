import React from "react";
import "../../css/gallery.css";
import Swiper from "swiper";
import { ImageBorder } from "../../components";
import { gallery, members } from "../../data";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="galleryAbout">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Gallery</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <div className="galleryContent">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has beenLorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been
        </div>
      </div>

      <div className="galleryMember">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Our Members</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <div className="members-contain">
          {members.map((member, index) => {
            return (
              <div className="members-card">
                <ImageBorder icon={member.profilePic} />
                <div>
                  <h3>{member.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="galleryPic">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Our Gallery</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <div className="galleryPic-contain">
          {gallery.map((image, index) => {
            return (
              <div className="galleryPic-card" key={index}>
                <img src={image.eventImage} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
