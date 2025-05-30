import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ContactSvg from "./ContactSvg";
import TitleHeader from "../components/TitleHeader";
import gsap from "gsap";
gsap.ticker.lagSmoothing(1000, 16);

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <>
      <div className="w-full h-full md:px-10 px-1 mt-36">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
      </div>
      <div className="contact" ref={ref} onSubmit={sendEmail} id="contact">
        <div className="cSection">
          <motion.form
            ref={form}
            variants={listVariant}
            animate={isInView ? "animate" : "initial"}
          >
            <motion.div variants={listVariant} className="formItem">
              <label>Name</label>
              <input type="text" required name="user_username" placeholder="Jayveer Singh" />
            </motion.div>
            <motion.div variants={listVariant} className="formItem">
              <label>Email</label>
              <input
                type="email" required
                name="user_email"
                placeholder="jayveer@gmail.com"
              />
            </motion.div>
            <motion.div variants={listVariant} className="formItem">
              <label>Message</label>
              <textarea required
                rows={10}
                name="user_message"
                placeholder="Write your message..."
              ></textarea>
            </motion.div>

            <button type="submit" variants={listVariant}>
              <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">
                  SEND MESSAGE
                </p>
                <div className="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
              </div>
            </button>
            {success && <span>Your message has been sent successfully!</span>}
            {error && <span>Something went wrong. Please try again later!</span>}
          </motion.form>
        </div>
        <div className="cSection"><ContactSvg /></div>
      </div>
    </>

  );
};

export default Contact;