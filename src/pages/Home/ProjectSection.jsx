import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { projects } from "../../data";
import { Button } from "../../components";
import "../../css/ProjectSection.css";
import "../../css/AboutSection.css";

const Testimonial = () => {
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
          {projects.map((project, index) => (
            <SwiperSlide
              style={{ height: "fit-content", width: "fit-content" }}
              key={index}
            >
              <div className="mob-projectItem">
                <div className="projectItemContent mob-projectItemContent">
                  <div className="projectItemImg mob-projectItemImg">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="mob-projectContent">
                    <h3>{project.name}</h3>
                    <h4>{project.domain}</h4>
                    <p className="mob-projectSectionText">
                      {project.description}
                    </p>
                  </div>
                    <div className="mob-btn">
                      <div className="mob-buttonSection">
                        <Button
                          text="Github"
                          to={project.repo}
                          className="linkBtn1"
                        ></Button>
                      </div>
                      <div className="mob-buttonSection">
                        <Button
                          text="Link"
                          to={project.url}
                          className="linkBtn2"
                        ></Button>
                      </div>
                    </div>
                </div>
              </div>

              <div className="projectItem">
                <div className="projectItemContent">
                  <h3>{project.name}</h3>
                  <h4>{project.domain}</h4>
                  <p className="projectSectionText">{project.description}</p>
                  <div className="buttonSection">
                    <Button text="Github" to={project.repo}></Button>
                    <Button text="Link" to={project.url}></Button>
                  </div>
                </div>
                <div className="projectItemImg">
                  <img src={project.image} alt={project.name} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button text="Learn More" to="/projects" className="projectSectionButton"/>
      </section>
    </>
  );
};

export default Testimonial;
