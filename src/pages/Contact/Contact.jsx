import React, { useEffect, useState } from "react";
import Style from "../../css/contact.module.css";
import Socials from "./Socials";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <>
      <section>
        <section className={Style.contactSection} id="contact">
          <div className={Style.contactCard}>
            <div className={Style.left}>
              <div className={Style.leftTitle}>Contact Us</div>
              <div className={Style.leftSubTitle}>with other platforms</div>
              <Socials />
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1711550782756!6m8!1m7!1sCAoSLEFGMVFpcFBhbldKSG4xTVBzbnM4cHJQX2pPUjBmeHlQVVoxblE0N3RScXcx!2m2!1d22.5105556!2d88.41515629999999!3f204.34!4f13.930000000000007!5f0.4000000000000002"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={Style.map}
              ></iframe>
              <a
                href="https://www.google.com/maps?ll=22.51047,88.415088&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=13627599571396767696"
                target="_blank"
                className="mapButton"
              >
                View In Map
              </a>
            </div>
            <div className={Style.right}>
              <div className={Style.rightTitle}>Contact Form</div>
              <form action="" className={Style.form} onSubmit={handleSubmit}>
                <ToastContainer theme="dark" style={{ top: "80px" }} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formData.message}
                  required
                ></textarea>
                <button type="submit" className={Style.contactButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
