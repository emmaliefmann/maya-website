import styles from '../styles/Intro.module.scss';

//framer motion
import { motion } from "framer-motion";
import { useScroll } from './../components/useScroll';

export default function Intro() {
  const [element, controls] = useScroll();
  
  const slideDown = {
    hidden: {opacity: 0},
    show: {opacity:1, transition: {duration:4}},
  }
  const slideUp = {
    hidden: {opacity: 0},
    show: {opacity:1, transition: {duration:3}},
  }
  const slideLeft = {
    hidden: {opacity: 0},
    show: {opacity:1, transition: {duration:2}},
  }
  const appear = {
    hidden: { opacity: 0, scale:1.2 },
    show: {
      opacity: 1,
      scale:1,
      transition: { ease: "easeOut", duration: 1 },
    },
  };

    return (
        <section className={styles.intro}>
        <div className={styles.collage} 
        variants={appear} ref={element} animate={controls} initial="hidden">
          <motion.img variants={slideDown} src="/img/arches.jpg" alt="Manchester Central library" />
          <motion.img variants={slideUp} initial="hidden" animate="show" src="/img/plates.jpg" alt="dinner plates and a glass of wine" />
          <motion.img variants={slideLeft} initial="hidden" animate="show" src="/img/headshot-square2.jpg" alt="Headshot of Maya Black, freelance writer in Manchester" />
        </div>
        <div className={styles.textCtn}>
            <h2>MAYA BLACK</h2>
            <br/>
            <hr/>
            <p>Freelance writer based in Manchester.</p>
            <p>Specialising in food writing, branded content and creative blogs.</p>
          </div>
      </section>
    )
}