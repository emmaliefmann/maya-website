import styles from '../styles/Recommendations.module.scss'

import { motion } from "framer-motion";
import { useScroll } from './../components/useScroll';

export default function Recommendations() {
    const [element, controls] = useScroll();

    const appear = {
        hidden: { opacity: 0, y:100},
        show: {
          opacity: 1,
          y:0,
          transition: { ease: "easeOut", duration: 1},
        },
      };
    return (
        <motion.section className={styles.recommendations}
        variants={appear} ref={element} initial="hidden" animate={controls}>
            <h2>What my clients say</h2>
            <div className={styles.container}>
                <div className={styles.tile}>
                    <img src="https://picsum.photos/150/150?random=10" alt="" />
                    <div>
                        <p>Maya is really great she can also 
                            bake bread and has a sweet sense of style. I would recommend her to anyone.</p><br/>
                        <p><em>- A Media Company</em></p>
                    </div>
                </div>
                
                <div className={styles.tile}>
                    <img src="https://picsum.photos/150/150?random=11" alt="" />
                    <div>
                        <p>Maya is really great she can also 
                            bake bread and has a sweet sense of style. I would recommend her to anyone.</p><br/>
                        <p><em>- A Media Company</em></p>
                    </div>
                </div>
                
                <div className={styles.tile}>
                    <img src="https://picsum.photos/150/150?random=12" alt="" />
                    <div>
                        <p>Maya is really great she can also 
                            bake bread and has a sweet sense of style. I would recommend her to anyone.</p><br/>
                        <p><em>- A Media Company</em></p>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}