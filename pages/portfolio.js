import React from 'react';
import styles from '../styles/Portfolio.module.scss'

import { motion } from "framer-motion";

const portfolioPage = () => {
    const container = {
        hidden: { opacity: 0.5, scale: 0.8 },
        show: {
            opacity: 1,
            scale:1,
            transition: {
                ease: "easeOut", 
                duration: 1, 
            delayChildred: 0.5
            }
        }
    }
    const item = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
        }
    }
    return (
        <>
            <header className={styles.header}>
                <h1>Portfolio</h1>
                <p>Proin vestibulum augue vel quam mattis, a posuere sapien pellentesque. Aliquam metus turpis, consectetur ac commodo a, mattis nec eros. Fusce congue dignissim diam ac ornare. Duis at dolor quis diam sodales blandit. Aenean euismod convallis dictum. Nulla facilisi. Donec ut lacus ut augue rutrum porta at et nulla.</p>
            </header>
            <div className={styles.container}>
                {/* pull categories from DB */}
                <div className={styles.categories}>
                    <button onClick={() => filterHandler('all')}>
                        ALL
                    </button>
                    <button onClick={() => filterHandler('articles')}>
                        ARTICLES
                    </button>
                    <button onClick={() => filterHandler('branded-content')}>
                        BRANDED CONTENT
                    </button>
                </div>

                <motion.div className={styles.cardCtn}
                variants={container} initial="hidden" animate="show">
                    <motion.div className={styles.card} 
                    variants={item} initial="hidden" animate="show">
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/600/400?random=1" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Food is delicious</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </div>
                    </motion.div>
                    <motion.div className={styles.card} 
                    variants={item} initial="hidden" animate="show">
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/600/400?random=2" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Why is everything closed?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </motion.div>
                    <motion.div className={styles.card} 
                    variants={item} initial="hidden" animate="show">
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/600/400?random=3" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Wine certainly helps</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </motion.div>
                    <motion.div className={styles.card} variants={item}
                    variants={item} initial="hidden" animate="show">
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/600/400?random=4" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Bagels for days</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </motion.div>
                    <motion.div className={styles.card} variants={item}>
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/600/400?random=5" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Why is everything closed?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                        </div>
                    </motion.div>
                    <motion.div className={styles.card} variants={item}>
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/600/400?random=6" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Why is everything closed?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </motion.div>
                </motion.div> 
            </div>
        </>
    )
}

export default portfolioPage;