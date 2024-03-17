import "../../css/card.css";
import ImageBorder from "../ImageBorder/ImageBorder";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
const Card = ({ className = "", data, ...props }) => {
  // const string = data.profilePic;
  // const regex = /https:\/\/drive\.google\.com\/open\?id=(\w+)/;
  // const match = string.match(regex);
  // const extractedString = match ? match[1] : null;
  // // console.log(extractedString);
  // const newProfilePic = `https://drive.google.com/uc?export=view&id=1hRsohbvO2uHt3snzAaJ4zMf2zDjVdzHD`;
  // console.log(newProfilePic);

  return (
    <>
      <div className={`Card ${className}`} {...props}>
        {/* <img src={data.profilePic} alt={data.name} /> */}
        <ImageBorder icon={data.image} className="profileImage" />
        <div className="cardContent">
          <h3>{data.name}</h3>
          <p>{data.domain}</p>
          <div className="socials">
            <a className="socialsIcon" data-icon="twitter" href="#">
              <FaXTwitter />
            </a>
            <a className="socialsIcon" data-icon="instagram" href="#">
              <AiFillInstagram />
            </a>
            <a
              className="socialsIcon"
              data-icon="linkedin"
              href="#"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <Link className="socialsIcon" data-icon="mail" to="/contact">
              <IoMdMail />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

// I have added three props in the componets
// 1. className is used when we add classes outside the componet
// 2. children is used if any sub-elements present then it will add it to it's div
// 3. {...props} is used if any one added any other property which is not inside the componet then it will handel it and add the property to the component
