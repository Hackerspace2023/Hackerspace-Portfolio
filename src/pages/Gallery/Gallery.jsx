import React, { useEffect, useState } from "react";
import "../../css/gallery.css";
import Swiper from "swiper";
import { ImageBorder } from "../../components";
import { gallery, members } from "../../data";
import close from "../../assets/close-button.png";
import { useLocation } from "react-router-dom";

const Gallery = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [job, setJob] = useState("web");
  const s = members.filter(types);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerpage = 3;
  const lastIndex = currentPage * recordsPerpage;
  const firstIndex = lastIndex - recordsPerpage;
  const records = s.slice(firstIndex, lastIndex);
  const npage = Math.ceil(s.length / recordsPerpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const pos = ["web", "cdp", "ds"];

  function types(mem) {
    if (mem.role === job) return true;
  }

  function changePos(p) {
    setJob(p);
    setCurrentPage(1);
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  const [panel, setPanel] = useState(false);
  const [galImgSrc, setGalImgSrc] = useState("");
  const [blur, setBlur] = useState(false);

  const getImg = (galImg) => {
    // setPanel(true);
    setGalImgSrc(galImg);
    // setBlur(true);
  };

  function closeWin() {
    setPanel(false);
    setBlur(false);
  }

  return (
    <>
      {/* <section className={blur ? "gallery" : ""}>/ */}
      <section className="gallery">
        <div className="galleryAbout">
          <div className="titleContainer">
            <span className="tagAbout tagAbout1">{`<h2>`}</span>
            <h1 className="title">Gallery</h1>
            <span className="tagAbout tagAbout2">{`</h2>`}</span>
          </div>
          <div className="galleryContent" data-aos="fade-up">
            Welcome to our Gallery, a vibrant testament to the creativity and
            innovation that thrives within Hackerspace. Here, you'll find a
            curated collection of images that capture the essence of our
            community. From the intense focus of a late-night coding session, to
            the joy of solving a complex problem, to the camaraderie shared over
            a well-earned break, these images encapsulate the spirit of
            collaboration and relentless curiosity that defines us.
            <br /> <br />
            Each image tells a story of determination, of trial and error, of
            that 'eureka' moment. They represent not just our achievements, but
            also the journey, filled with challenges, learning, and growth. We
            hope that as you scroll through these images, you'll get a sense of
            the passion and dedication that fuels Hackerspace, and perhaps find
            inspiration for your own coding journey.
          </div>
        </div>
        {/* <div className="galleryMember">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Our Members</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>

        <div>
          {pos.map((p, x) => {
            return (
              <button
                className={`${job === p ? "active" : ""}`}
                key={x}
                onClick={() => changePos(p)}
              >
                {p}
              </button>
            );
          })}
        </div>

        <div className="members-contain">
          {records.map((member, index) => {
            return (
              <div className="members-card" key={index}>
                <ImageBorder icon={member.profilePic} />
                <div>
                  <h3>{member.name}</h3>
                  <h5>{member.role}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        {numbers.map((n, i) => {
          return (
            <button
              className={`${currentPage === n ? "active" : ""}`}
              key={i}
              onClick={() => changePage(n)}
            >
              {n}
            </button>
          );
        })}
      </div> */}
        <div className="galleryPic">
          <div className="titleContainer" data-aos="fade-up">
            <span className="tagAbout tagAbout1">{`<h2>`}</span>
            <h1 className="title">Our Gallery</h1>
            <span className="tagAbout tagAbout2">{`</h2>`}</span>
          </div>

          <div className="galleryPic-contain">
            {gallery.map((image, index) => {
              return (
                <div
                  className="galleryPic-card"
                  key={index}
                  onClick={() => getImg(image.eventImage)}
                  data-aos="fade-up"
                >
                  <img src={image.eventImage} alt="img" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <div
        className={
          panel
            ? "panel open max-w-xxl rounded-lg overflow-hidden shadow-lg"
            : "panel"
        }
      >
        <div style={{ position: "relative" }}>
          <img src={galImgSrc} alt="" />
          <div className=" txt px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-white-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <img className="cb" src={close} alt="" onClick={closeWin} />
      </div> */}
    </>
  );
};

export default Gallery;
