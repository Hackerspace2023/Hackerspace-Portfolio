import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { projects } from "../../data";
import { Button } from "../../components";
import "../../css/ProjectSection.css";
import "../../css/AboutSection.css";

const handleMouseEnter = (event) => {
  event.target.play();
};

const handleMouseLeave = (event) => {
  event.target.pause();
};

const ProjectSection = () => {
  return (
    <>
      <section className="projectSection" data-aos="fade-up">
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
            pauseOnMouseEnter: true,
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
                    {/* <img src={project.image} alt={project.name} /> */}
                    <video
                      src={project.video}
                      alt={project.name}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      muted
                      loop
                    ></video>
                  </div>
                  <div className="mob-projectContent">
                    <h3>{project.name}</h3>
                    {/* <h4>{project.domain}</h4> */}
                    <p className="mob-projectSectionText">
                      {project.description}
                    </p>
                  </div>
                  <div
                    // href="https://github.com/Hackerspace2023/Hackerspace-Portfolio/graphs/contributors"

                    className="mob-contributors"
                  >
                    {/* <img src="https://contrib.rocks/image?repo=Hackerspace2023/Hackerspace-Portfolio" /> */}
                    {project.contributors &&
                      project.contributors.map((contributor) => (
                        <div className="contributorsImg">
                          <img
                            key={contributor.name}
                            src={contributor.image}
                            alt={contributor.name}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="mob-btn">
                    {project.url === "NULL" ? (
                      ""
                    ) : (
                      <>
                        <Button
                          type="a"
                          text="Preview"
                          link={project.url}
                          className="previewBtn"
                        />
                      </>
                    )}
                  </div>
                  {/* <a href={project.url} target="_blank" className="projectButton">PREVIEW</a> */}
                </div>
              </div>

              <div className="projectItem">
                <div className="projectItemContent">
                  <h3>{project.name}</h3>
                  <h4>{project.domain}</h4>
                  <p className="projectSectionText">{project.description}</p>
                  <div
                    // href="https://github.com/Hackerspace2023/Hackerspace-Portfolio/graphs/contributors"
                    className="contributors"
                  >
                    {/* <img src="https://contrib.rocks/image?repo=Hackerspace2023/Hackerspace-Portfolio" /> */}
                    {project.contributors &&
                      project.contributors.map((contributor) => (
                        <div className="contributorsImg">
                          <img
                            key={contributor.name}
                            src={contributor.image}
                            alt={contributor.name}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="buttonSection">
                    {project.url === "NULL" ? (
                      ""
                    ) : (
                      <>
                        <Button
                          type="a"
                          text="Preview"
                          link={project.url}
                          className="previewBtn"
                        />
                      </>
                    )}
                  </div>
                  {/* <a href={project.url} target="_blank" className="projectButton">PREVIEW</a> */}
                </div>
                <div className="projectItemImg">
                  <img src={project.image} alt={project.name} />
                  {/* <video
                    src={project.video}
                    alt={project.name}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    muted
                    loop
                  ></video> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          text="Learn More"
          to={"/projects"}
          className="projectSectionButton"
        />
      </section>
    </>
  );
};

export default ProjectSection;
