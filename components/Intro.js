import styles from '../styles/Intro.module.scss';


export default function Intro() {
    return (
        <section className={styles.intro}>
        <div className={styles.collage}>
          <img src="/img/victoria.jpg" alt="" />
          <img src="/img/cafe-landscape.jpg" alt="" />
          <img src="/img/glasses.jpg" alt="" />
          <img src="/img/headshot-square.jpg" alt="" />
          <img src="/img/leaves.jpg" alt="" />
          
        </div>
        <div className={styles.textCtn}>
            <h2>MAYA BLACK</h2>
            <p>Freelance writer in Manchester</p>
            <hr></hr>
            <p>Communications specialist</p>
            <hr></hr>
            <p>Experienced journalist</p>
            <hr></hr>
            <p>Copywriter</p>
            <hr></hr>
            <p>Branded content</p>
          </div>
      </section>
    )
}