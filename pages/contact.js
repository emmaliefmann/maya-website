import styles from "../styles/Contact.module.scss";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const contactPage = () => {
  const appear = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { ease: "easeOut", duration: 1 },
    },
  };
  const slideDown = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 2 }, delay: 1 },
  };
  const slideUp = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  return (
    <>
      <section className={styles.mediaCard}>
        <div className={styles.collage} variants={appear}>
          <motion.img
            variants={slideUp}
            animate="show"
            initial="hidden"
            src="/img/manchester.jpg"
            alt=""
            className={styles.backgroundImg}
          />
          <img
            src="/img/headshot-square.jpg"
            alt="Maya Black freelance writer, Manchester"
            className={styles.headshotMobile}
          />
        </div>
        <div className={styles.rightContainer}>
          <h1>Work with me</h1>
          <motion.img
            variants={slideDown}
            animate="show"
            initial="hidden"
            src="/img/headshot-square.jpg"
            alt="Maya Black freelance writer, Manchester"
            className={styles.headshot}
          />
          <div className={styles.textCtn}>
            <h2>Work with me</h2>
            <p>
              I can work with you to deliver high quality written content,
              whatever your aims. If you want to discuss working on a project,
              please get in touch.
            </p>
            <div className={styles.socials}>
              <a
                href="https://www.linkedin.com/in/maya-black-8a5b1795/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="4x" />
              </a>
              <a href="mailto:hello@mayablack.co.uk">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/_mayablack/?hl=en"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="4x" />
              </a>
              <FontAwesomeIcon icon={faPhone} size="4x" />
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default contactPage;
