import styles from '../styles/FeaturedArticles.module.scss'


export default function FeaturedArticles() {
    return(
    <section className={styles.featured}>
        <h3>Featured articles</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at porta sapien. Quisque eu fringilla elit. Nam feugiat mauris in ligula mollis eleifend. Donec suscipit, nibh euismod venenatis tristique</p>
        <div className={styles.container}>
          <div>
            <div className={styles.image}>
              <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
                <img src="https://picsum.photos/200/200" />
              </a>
            </div>
            <div className={styles.description}>
              <h4>Article Title</h4>
            </div>
          </div>
          <div>
          <div className={styles.image}>
            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
              <img src="https://picsum.photos/200/200" />
            </a>
          </div>
          <div className={styles.description}>
            <h4>Article Title</h4>
          </div>
        </div>
        <div>
          <div className={styles.image}>
            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
              <img src="https://picsum.photos/200/200" />
            </a>
          </div>
          <div className={styles.description}>
            <h4>Article Title</h4>
          </div>
        </div>
        <div>
          <div className={styles.image}>
            <a href="https://projet5.emmaliefmann.com/index.php?action=allrecipes">
              <img src="https://picsum.photos/200/200" />
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