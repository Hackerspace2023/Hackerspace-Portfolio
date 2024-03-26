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
    console.log(formData);
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8322807090562!2d88.41251337441564!3d22.51047503524616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2sMeghnad%20Saha%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1709625348913!5m2!1sen!2sin"
                style={{ border: 0 }}
                className={Style.map}
                loading="lazy"
              ></iframe>
              <div className="venue-location">
                <a
                  href="https://www.google.com/maps/@22.5105556,88.4151563,3a,90y,204.34h,103.93t/data=!3m8!1e1!3m6!1sAF1QipPanWJHn1MPsns8prP_jOR0fxyPUZ1nQ47tRqw1!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPanWJHn1MPsns8prP_jOR0fxyPUZ1nQ47tRqw1%3Dw203-h100-k-no-pi-0-ya154-ro-0-fo100!7i8704!8i4352?hl=en-US&entry=ttu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h4 className="_leftSubTitle_j6ibm_67">
                    See Venue in 360&deg;
                  </h4>
                </a>
              </div>
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
