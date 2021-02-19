import styles from '../styles/AboutMe.module.scss'

export default function AboutMe() {
    return (
        <section className={styles.about}>
          <div className={styles.container}>
            <img src="/img/headshot.jpg" alt="" className={styles.headshot} />
            <img src="img/backgroundleaves.jpg" alt="" className={styles.background} />
            <div className={styles.text}>
              <h3>Hello I'm a writer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu fringilla elit. 
                Tincidunt ut metus non, sodales tempus mi. Mauris nisl nunc, porttitor id euismod sit amet, sodales nec odio. Mauris non mi bibendum, fermentum justo nec, mollis lacus. 
                Aenean diam libero, vehicula nec urna eget, tincidunt elementum dui. Duis ultrices molestie tempus.</p>
                <div className={styles.btnContainer}>
                <button>Work with me</button>
                </div>
            </div>
        </div>
      </section>
    )
}