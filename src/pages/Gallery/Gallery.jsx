import React from "react";
import "../../css/gallery.css";
import Swiper from "swiper";

const Gallery = () => {
  const data = [
    {
      profilePic: "profileImg.jpg",
      name: "Lorem Ipsam",
      // role: "DESIGN AND DEVELOPMET",
    },
    {
      profilePic: "profileImg2.jpeg",
      name: "Lorem Ipsam",
      // role: "DESIGN AND DEVELOPMET",
    },
  ];
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
      <div className="galleryAbout">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Our Members</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
      </div>
      <div className="members">
        
      </div>
    </section>
  );
};

export default Gallery;
