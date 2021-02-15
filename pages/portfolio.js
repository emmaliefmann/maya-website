import React from 'react';
import styles from '../styles/Portfolio.module.scss'

const filterHandler = (category) => {
    console.log(category);
}; 

const portfolioPage = () => {
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
                <div className={styles.cardCtn}>
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/300/200?random=1" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Food is delicious</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <span className={styles.invisible}><p className="category">article</p></span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/300/200?random=2" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Why is everything closed?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <span className={styles.invisible}><p className="category">article</p></span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/300/200?random=3" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Wine certainly helps</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <span className={styles.invisible}><p className="category">article</p></span>
                        </div>
                    </div>
                
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/300/200?random=4" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Bagels for days</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <span className={styles.invisible}><p className="category">article</p></span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/300/200?random=5" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <h4>Why is everything closed?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <span className={styles.invisible}><p className="category">article</p></span>
                        </div>
                    </div>
                    
                </div> 
            </div>
        </>
    )
}

export default portfolioPage;