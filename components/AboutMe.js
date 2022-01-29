import styles from '../styles/AboutMe.module.scss'

import { motion } from "framer-motion";
import { useScroll } from './../components/useScroll';

export default function AboutMe() {

  const [element, controls] = useScroll();

  const appear = {
    hidden: { opacity: 0, scale:0.8 },
    show: {
      opacity: 1,
      scale:1,
      transition: { ease: "easeOut", duration: 1 },
    },
  };
  
    return (
        <section className={styles.about}>
          <div className={styles.container}>
            <img src="/img/headshot.jpg" alt="" className={styles.headshot} />
            <img src="img/backgroundleaves.jpg" alt="" className={styles.background} />
            <div className={styles.text}>
              <h3>Hello, I'm Maya</h3>
              <p>An experienced freelance writer who has worked with clients to create content for a wide range of 
                platforms and purposes, including news, feature articles, copywriting, branded content campaigns and blogs. My work has been featured in publications including The Culture Trip, LADbible, UNILAD, Manchester Evening News and EATMCR, as well as blogs on individual client websites. If you'd like to discuss an upcoming article or project, feel free to get in touch.</p>
                <div className={styles.btnContainer}>
                <button>Work with me</button>
                </div>
            </div>
        </div>
      </section>
    )
}