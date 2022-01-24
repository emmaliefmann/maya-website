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
            <a href="https://www.eatmcr.co.uk/news/the-food-and-drink-businesses-thriving-at-pollard-yard/" target="_blank">
              <img src="/img/portfolio/pollardyard.jpeg" alt="A collection of brightly coloured shipping containers in the shadow of an old mill" />
            </a>
            </div>
            <div className={styles.description}>
              <h4>The food and drink businesses thriving at Pollard Yard</h4>
            </div>
          </div>
          <div className={styles.card}>
          <div className={styles.image}>
            <a href="https://www.ladbible.com/community/animals-feels-inspirational-pensioner-has-loving-bond-with-friendship-dog-20201207" target="_blank">
            <img src="/img/portfolio/friendshipdog.jpg" alt="A white dog runs through the grass" />
            </a>
          </div>
          <div className={styles.description}>
            <h4>Charity provides 'friendship dogs' to the elderly</h4>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <a href="https://peopleactivation.com/resources/its-okay-not-to-be-okay-how-empathy-can-strengthen-a-team" target="_blank">
            <img src="/img/portfolio/feelgoodclub2.png" alt="Two women standing in front of a billboard which reads 'The World is a better place with you in it"/>
            </a>
          </div>
          <div className={styles.description}>
            <h4>It’s okay not to be okay - how empathy can strengthen a team</h4>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes" target="_blank">
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