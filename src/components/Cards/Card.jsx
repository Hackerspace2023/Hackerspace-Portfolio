import "../../css/card.css";
import ImageBorder from "../ImageBorder/ImageBorder";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
const Card = ({ className = "", data, ...props }) => {
  return (
    <>
      <div className={`Card ${className}`} {...props}>
        <ImageBorder icon={data.image} className="profileImage" />
        <div className="cardContent">
          <h3>{data.name}</h3>
          <p>
            {data.year === "PassOut" ? `${data.year} ${data.session} (${data.stream})` : `${data.year} Year (${data.stream})`}
          </p>
          <div className="socials">
            <a
              className={`socialsIcon ${data.twitter !== "NULL" ? "active" : ""}`}
              data-icon="twitter"
              href={data.twitter}
              target="_blank"
            >
              <FaXTwitter />
            </a>
            <a
              className={`socialsIcon ${data.instagram !== "NULL" ? "active" : ""}`}
              data-icon="instagram"
              href={data.instagram}
              target="_blank"
            >
              <AiFillInstagram />
            </a>
            <a
              className={`socialsIcon ${data.linkedin !== "NULL" ? "active" : ""}`}
              data-icon="linkedin"
              href={data.linkedin}
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className={`socialsIcon active `}
              data-icon="mail"
              href={`mailto:${data.email}`}
              target="_blank"
            >
              <IoMdMail />
            </a>
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
