import styles from '../styles/FeaturedArticles.module.scss'


export default function FeaturedArticles() {
    return(
    <section className={styles.featured}>
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
            <h4>Article Title</h4>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
              <img src="https://picsum.photos/600/400?random=3" />
            </a>
          </div>
          <div className={styles.description}>
            <h4>Article Title</h4>
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
    </section>
    )
}