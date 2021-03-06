
import styles from '../styles/Contact.module.scss'


import { motion } from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons"
import Recommendations from './../components/Recommendations';


const contactPage = () => {
    const appear = {
        hidden: { opacity: 0, scale:0.8 },
        show: {
          opacity: 1,
          scale:1,
          transition: { ease: "easeOut", duration: 1 },
        },
      };
      const slideDown = {
        hidden: {opacity: 0, scale:0.8},
        show: {opacity:1, scale:1, transition: {duration:2}, delay:1},
      }
      const slideUp = {
        hidden: {opacity: 0, scale:0.8},
        show: {opacity:1, scale:1, transition: {duration:1}},
      }
    return (
        <>
            <section className={styles.mediaCard}>
                <div className={styles.collage} variants={appear} >
                    <motion.img variants={slideUp} animate="show" initial="hidden" src="/img/manchester.jpg" alt="" className={styles.backgroundImg} />
                    <img 
                    src="/img/headshot-square.jpg" 
                    alt="Maya Black freelance writer, Manchester" 
                    className={styles.headshotMobile} />
                </div>
                <div className={styles.rightContainer}>
                    <h1>Work with me</h1>
                    <motion.img variants={slideDown} animate="show" initial="hidden" src="/img/headshot-square.jpg" alt="Maya Black freelance writer, Manchester" className={styles.headshot} />
                    <div className={styles.textCtn}>
                        <h2>Work with me</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className={styles.socials}>
                            <FontAwesomeIcon icon={faEnvelope} size="2x"/> 
                            <FontAwesomeIcon icon={faLinkedin} size="4x" />
                            <FontAwesomeIcon icon={faInstagram} size="4x" /> 
                            <FontAwesomeIcon icon={faPhone} size="4x" /> 
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <Recommendations/>
        </>
    )
}

export default contactPage;