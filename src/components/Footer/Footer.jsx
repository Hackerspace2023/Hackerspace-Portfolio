import { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "../Divider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgSpinner } from "react-icons/cg";
import { footer } from "../../data";
import icon from "../../assets/hackerspace-logo.jpg";

const Footer = () => {
  return (
    <footer className=" relative z-1">
      <Divider />
      <div className="bg-gradient-to-b from-bg-primary to-bg-secondary p-8 pb-4">
        <div className="flex gap-4 flex-col lg:flex-row md:gap-6 lg:gap-8 justify-between pb-10">
          <div className="flex gap-4 flex-col lg:w-3/5">
            <div className="flex">
              <img
                className="h-20 aspect-square rounded-xl"
                src={icon}
                alt="Hackerspace Logo"
              />
              <div className="ms-4">
                <h3 className="text-2xl md:text-4xl font-audiowide">
                  HackerSpace
                </h3>
                <p className="text-primary mt-2">Let's Hack The Future</p>
              </div>
            </div>
            <div className="flex items-center gap-6 py-4">
              <a href="https://msit.edu.in" target="_blank" rel="noreferrer">
                <img
                  src="/static/powered-by/msit-logo.png"
                  alt="MSIT logo"
                  className="max-h-12 object-contain bg-white rounded-full p-0.5 pb-1 aspect-square"
                />
              </a>
              <a href="https://ieee.org" target="_blank" rel="noreferrer">
                <img
                  src="/static/powered-by/ieee-logo.png"
                  alt="IEEE logo"
                  className="max-h-12 object-contain"
                />
              </a>
              <a
                href="https://technoindiagroup.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="Techno_Small.png"
                  alt="Techno India logo"
                  className="h-12 object-contain"
                />
              </a>
              <a
                href="https://www.computer.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="IEEE_Computer_Society.png"
                  alt="IEEE MSIT Student Chapter logo"
                  className="h-12 object-contain"
                />
              </a>
            </div>
          </div>
          <img
            src="https://github.com/Hackerspace2023/hackspace-portfolio-images/blob/main/QR/link1.jpg?raw=true"
            alt="QR_CODE"
            className="QR"
          />
          <div className="flex gap-2 flex-col sm:flex-row lg:w-3/5">
            {footer.map((column, index) => (
              <div className="flex-1 space-y-2" key={index}>
                <h4 className="text-2xl font-audiowide text-primary">
                  {column.title}
                </h4>
                <div className="space-y-4 [&>a]:block hover:[&>a]:text-primary">
                  {column.items.map((item, index) =>
                    item.type === "external" ? (
                      <a
                        href={item.link}
                        key={index}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <Link to={item.link} key={index}>
                        {item.text}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-sm flex gap-2 flex-row justify-between text-primary pt-4">
          <div>
            <span>&copy; HackerSpace, 2024.</span>
            <br className="lg:hidden" />
            <span>&nbsp;All rights reserved.</span>
          </div>
          <div className="flex lg:gap-4 flex-col lg:flex-row items-center lg:justify-between">
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
