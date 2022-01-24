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

    const filterHandler = (category) => {
        console.log(category);
    }
    return (
        <>
            <header className={styles.header}>
                <h1>Portfolio</h1>
                <p>Here is a selection of some of my articles including food writing, features, branded content and blogs. Filter the type of content using the keywords below.</p>
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
                            <a href="https://www.eatmcr.co.uk/culture/new-lockdown-baking-business-manchester/" target="_blank">
                                <img src="/img/portfolio/homebakers.jpeg" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>The Rise of the Home Bakers</h4>
                            <p>The people who turned baking from a hobby into a profession during lockdown</p>
                        </div>
                    </motion.div>
                    <motion.div className={styles.card} 
                    variants={item} initial="hidden" animate="show">
                        <div className={styles.image}>
                            <a href="https://www.eatmcr.co.uk/culture/celebrate-hannukah-festival-manchester-food/" target="_blank">
                                <img src="/img/portfolio/chanukkah.jpg" alt="Sugared donuts on a glass plate with a pair of serving tongs." />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Celebrating Hanukkah in Manchester</h4>
                            <p>Some of the best things to eat and drink in Manchester during the festival of light (and deep fried food)</p>
                        </div>
                    </motion.div>
                    <motion.div className={styles.card} 
                    variants={item} initial="hidden" animate="show">
                        <div className={styles.image}>
                            <a href="https://www.eatmcr.co.uk/news/the-food-and-drink-businesses-thriving-at-pollard-yard/" target="_blank">
                                <img src="/img/portfolio/pollardyard.jpeg" alt="A collection of brightly coloured shipping containers in the shadow of an old mill" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>The food and drink businesses thriving at Pollard Yard</h4>
                            <p>Speaking to some of the businesses at small business hub Pollard Yard - a place where creativity oozes out of every perfectly painted shipping container</p>
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