import TagContainer from "./TagContainer";
import "../../css/homeSection.css";
import icon from "../../assets/hackerspace-logo.jpg";
import ellipse from "../../assets/ellipse.png";
import { ImageBorder } from "../../components";
import TypewriterComponent from "typewriter-effect";

const HomeSection = ({ ...props }) => {
  return (
    <section className="home" {...props}>
      <div className="topSectionHome">
        <ImageBorder icon={"hackerspace-logo.jpg"} />
      </div>
      <div className="leftSectionHome" data-aos="fade-right">
        <TagContainer tag="p" className="subTitleHome">
          <b className="subTitleHomeText"> Welcome To </b>
        </TagContainer>
        <TagContainer tag="h1" className="titleHome">
          <h1 className="titleHomeText">Hackerspace</h1>
        </TagContainer>
        <TagContainer tag="p" className="subTitleHome bottomTitleHome">
          <b className="subTitleHomeText"> Let's hack the future </b>
        </TagContainer>
      </div>
      <div className="rightSectionHome" data-aos="fade-left">
        <ImageBorder icon={"hackerspace-logo.jpg"} />
      </div>
    </section>
  );
};

export default HomeSection;
