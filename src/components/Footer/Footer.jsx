import { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "../Divider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgSpinner } from "react-icons/cg";
import { footer } from "../../data";

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
    <footer className="">
      <Divider />
      <div className="flex gap-4 flex-col lg:flex-row md:gap-6 lg:gap-8 justify-between bg-gradient-to-b from-bg-primary to-bg-secondary p-4 md:p-6 lg:p-8">
        <div className="flex gap-4 flex-col lg:w-3/5">
          <h3 className="text-4xl font-audiowide">HackerSpace</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            quidem! Consequatur vitae facilis perspiciatis libero id, nam
            assumenda similique, incidunt sint maxime eos!
          </p>
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
        <div className="flex gap-2 flex-col sm:flex-row lg:w-2/5">
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
      <Divider />
      <div className="flex gap-2 flex-col lg:flex-row items-center lg:justify-between text-primary p-4">
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
    </footer>
  );
};

export default Footer;
