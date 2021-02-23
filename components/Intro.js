import styles from '../styles/Intro.module.scss';


export default function Intro() {
    return (
        <section className={styles.intro}>
        <div className={styles.collage}>
          <img src="/img/arches.jpg" alt="" />
          <img src="/img/plates.jpg" alt="" />
          <img src="/img/headshot-square.jpg" alt="" />
        </div>
        <div className={styles.textCtn}>
            <h2>MAYA BLACK</h2>
            <br/>
            <hr/>
            <p>Freelance writer based in Manchester.</p>
            <p>Specialisting in food writing branded content and creative blog content.</p>
          </div>
      </section>
    )
}