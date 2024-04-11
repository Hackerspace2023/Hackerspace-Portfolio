import React from "react";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Style from "../../css/socials.module.css";

const Socials = () => {
  const socials = [
    {
      name: "Phone",
      icon: <IoCall />,
      link: "tel:+123456789",
      message: "+12 3456789",
    },
    {
      name: "Whatsapp",
      icon: <IoLogoWhatsapp />,
      link: "https://wa.me/+123456789",
      message: "Whatsapp",
    },
    {
      name: "Email",
      icon: <MdEmail />,
      link: "mailto:hackerspace@gmail.com",
      message: "hackerspace@gmail.com",
    },
    {
      name: "Home & Office",
      icon: <FaLocationDot />,
      link: "https://maps.app.goo.gl/bkG6nHNoiGp1PPFs6",
      message: "Uchhepota, Kolkata",
    },
  ];

  return (
    <div className={Style.socials}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={Style.socialIcon} data-social={social.name}>
            {social.icon}
          </div>
          <div className={Style.socialName}>{social.message}</div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
