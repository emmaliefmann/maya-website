import React from 'react';
import styles from '../styles/Portfolio.module.scss'

const portfolioPage = () => {
    return (
        <>
            <h1>Portfolio</h1>
            <div>
                <p>Proin vestibulum augue vel quam mattis, a posuere sapien pellentesque. Aliquam metus turpis, consectetur ac commodo a, mattis nec eros. Fusce congue dignissim diam ac ornare. Duis at dolor quis diam sodales blandit. Aenean euismod convallis dictum. Nulla facilisi. Donec ut lacus ut augue rutrum porta at et nulla.</p>
            </div>
            <div className={styles.container}>
                <div className={styles.categories}>
                    <button>
                        ALL
                    </button>
                    <button>
                        ARTICLES
                    </button>
                    <button>
                        BRANDED CONTENT
                    </button>
                </div>
                <div className={styles.row}>
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                                <img src="https://picsum.photos/200/200" />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <p>Title</p>
                            <p>Description</p>
                            <span className={styles.invisible}><p className="category">article</p></span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.image}>
                        <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                            <img src="https://picsum.photos/200/200" />
                        </a>
                        </div>
                        <div className={styles.description}>
                            <p>Title</p>
                            <p>Description</p>
                            <span className={styles.invisible}><p className="category">content</p></span>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.image}>
                        <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                            <img src="https://picsum.photos/200/200" />
                        </a>
                        </div>
                        <div className={styles.description}>
                            <p>Title</p>
                            <p>Description</p>
                            <span className={styles.invisible}><p className="category">content</p></span>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default portfolioPage;