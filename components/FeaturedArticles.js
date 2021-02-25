import styles from '../styles/FeaturedArticles.module.scss'
import { motion } from "framer-motion";
import { useScroll } from './../components/useScroll';

export default function FeaturedArticles() {
  const [element, controls] = useScroll();

  const appear = {
    hidden: { opacity: 0, scale:0.8 },
    show: {
      opacity: 1,
      scale:1,
      transition: { ease: "easeOut", duration: 1 },
    },
  };
    return(
    <motion.section className={styles.featured}
      variants={appear} ref={element} animate={controls} initial="hidden">
        <h3>Featured articles</h3>      
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.image}>
              <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                <img src="https://picsum.photos/600/400?random=1" />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Article Title</h4>
            </div>
          </div>
          <div className={styles.card}>
          <div className={styles.image}>
            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
              <img src="https://picsum.photos/600/400?random=2" />
            </a>
          </div>
          <div className={styles.description}>
            <h4>Time to eat</h4>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
              <img src="https://picsum.photos/600/400?random=3" />
            </a>
          </div>
          <div className={styles.description}>
            <h4>Manchester</h4>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
              <img src="https://picsum.photos/600/400?random=4" />
            </a>
          </div>
          <div className={styles.description}>
            <h4>Article Title</h4>
          </div>
        </div>
      </div>    
    </motion.section>
    )
}