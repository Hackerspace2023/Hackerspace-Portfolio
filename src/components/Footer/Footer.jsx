import { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "../Divider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgSpinner } from "react-icons/cg";
import { footer } from "../../data";
import icon from "../../assets/hackerspace-logo.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Subscribed successfully!");
    setEmail("");
    setLoading(false);
  };

  return (
    <footer className=" relative z-1">
      <Divider />
      <div className="bg-gradient-to-b from-bg-primary to-bg-secondary p-8 pb-4">
        <div className="flex gap-4 flex-col lg:flex-row md:gap-6 lg:gap-8 justify-between">
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
            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border-2 bg-inherit border-primary focus:outline-none outline-primary rounded-lg"
                required
              />
              <button
                type="submit"
                className="bg-primary text-bg-primary font-semibold py-2 w-32 rounded-lg text-center"
              >
                {loading ? (
                  <CgSpinner className="animate-spin text-2xl inline" />
                ) : (
                  "Subscribe"
                )}
              </button>
              <ToastContainer theme="dark" />
            </form>
          </div>
          <div className="flex gap-2 flex-col sm:flex-row lg:w-3/5">
            <div className="flex-1 space-y-2">
              <h4 className="text-2xl font-audiowide text-primary">
                Associated With
              </h4>
              <div className="space-y-2 [&>a]:h-auto md:[&>a]:h-16 [&>a]:block hover:[&>a]:text-primary">
                <div className="flex items-center justify-start">
                  <a
                    href="https://msit.edu.in"
                    target="_blank"
                    rel="noreferrer"
                    className="max-h-20 p-0.5 mr-8"
                  >
                    <img src="MSIT_Small.png" alt="MSIT logo" />
                  </a>
                  <a
                    href="https://ieee.org"
                    target="_blank"
                    rel="noreferrer"
                    className="max-w-[50%]"
                  >
                    <img src="IEEE_Advanced_Technology.png" alt="IEEE logo" />
                  </a>
                </div>
                <div className="flex items-center justify-start">
                  <a
                    href="https://technoindiagroup.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-8"
                  >
                    <img src="Techno_Small.png" alt="Techno India logo" />
                  </a>
                  <a
                    href="https://www.computer.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="IEEE_Computer_Society.png"
                      alt="IEEE MSIT Student Chapter logo"
                    />
                  </a>
                </div>
              </div>
            </div>
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
