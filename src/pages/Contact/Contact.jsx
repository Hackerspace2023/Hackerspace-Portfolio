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
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8322807090562!2d88.41251337441564!3d22.51047503524616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2sMeghnad%20Saha%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1709625348913!5m2!1sen!2sin"
                style={{ border: 0 }}
                className={Style.map}
                loading="lazy"
              ></iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!4v1711550782756!6m8!1m7!1sCAoSLEFGMVFpcFBhbldKSG4xTVBzbnM4cHJQX2pPUjBmeHlQVVoxblE0N3RScXcx!2m2!1d22.5105556!2d88.41515629999999!3f204.34!4f13.930000000000007!5f0.4000000000000002" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={Style.map}></iframe>
            </div>
            <div className={Style.right}>
              <div className={Style.rightTitle}>Contact Form</div>
              <form action="" className={Style.form} onSubmit={handleSubmit}>
              <ToastContainer theme="dark" style={{top: "80px"}}/>
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