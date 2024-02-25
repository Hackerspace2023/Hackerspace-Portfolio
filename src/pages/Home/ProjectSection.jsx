import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "../../css/ProjectSection.css";
import "../../css/AboutSection.css";
import {Button} from "../../components"

const Testimonial = () => {
  const data = [{
    title: "Lorem Ipsam",
    subTitle: "DESIGN AND DEVELOPMET",
    description: "Lorem Ipsum is simply dummy text of the printing",
    img: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://www.github.com",
    link: "/projects"

  },
  {
    title: "Lorem Ipsam",
    subTitle: "DESIGN AND DEVELOPMET",
    description: "Lorem Ipsum is simply dummy text of the printing",
    img: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://www.github.com",
    link: "/projects"

  },
  {
    title: "Lorem Ipsam",
    subTitle: "DESIGN AND DEVELOPMET",
    description: "Lorem Ipsum is simply dummy text of the printing",
    img: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://www.github.com",
    link: "/projects"

  },
  {
    title: "Lorem Ipsam",
    subTitle: "DESIGN AND DEVELOPMET",
    description: "Lorem Ipsum is simply dummy text of the printing",
    img: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://www.github.com",
    link: "/projects"

  },
  {
    title: "Lorem Ipsam",
    subTitle: "DESIGN AND DEVELOPMET",
    description: "Lorem Ipsum is simply dummy text of the printing",
    img: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://www.github.com",
    link: "/projects"

  },
  {
    title: "Lorem Ipsam",
    subTitle: "DESIGN AND DEVELOPMET",
    description: "Lorem Ipsum is simply dummy text of the printing",
    img: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://www.github.com",
    link: "/projects"

  }
];
  return (
    <>
      <section className="projectSection">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Our Projects</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <Swiper
          className="projectSwiperContainer"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 1500,
          }}
          modules={[EffectCoverflow, Autoplay]}
          loop="true"
        >
          {data.map((ele, index) => (
            <SwiperSlide
              style={{ height: "fit-content", width: "fit-content" , }}
              key={index}
            >
              <div className="porjectItem">
                <div className="projectItemContent">
                  <h3>{ele.title}</h3>
                  <h4>{ele.subTitle}</h4>
                  <p className="projectSectionText">{ele.description}</p>
                  <div className="buttonSection">
                  <Button text="Github" to={ele.github}></Button>
                  <Button text="Link" to={ele.link}></Button>
                  </div>
                </div>
                <div className="projectItemImg">
                  <img src={ele.img} alt={ele.title}/>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;
