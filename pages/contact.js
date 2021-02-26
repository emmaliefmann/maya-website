
import styles from '../styles/Contact.module.scss'


import { motion } from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons"
import Recommendations from './../components/Recommendations';


const contactPage = () => {
    const appear = {
        hidden: { opacity: 0.8, x:100},
        show: {
          opacity: 1,
          x:0,
          transition: { ease: "easeOut", duration: 1 },
        },
      };
    return (
        <>
            <motion.section className={styles.mediaCard} 
            variants={appear} animate="show" initial="hidden">
                <img src="/img/manchester.jpg" alt="" className={styles.backgroundImg} />
                <div className={styles.rightContainer}>
                    <h1>Work with me</h1>
                    <img src="/img/headshot-square2.jpg" alt="" className={styles.headshot} />
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
            </motion.section>
            <hr/>
            <Recommendations/>
        </>
    )
}

export default contactPage;