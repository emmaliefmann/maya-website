import Head from 'next/head'
import styles from '../styles/Intro.module.scss';

//images 
import Image from 'next/image'
import FeaturedArticles from './../components/FeaturedArticles';


export default function Home() {
  return (
    <>
      <Head>
        <title>Maya Black</title>
        <meta name="keywords" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.intro}>
        <div className={styles.collage}>
          <img src="/img/plant.jpg" alt="test" className={styles.image1} />
          <img src="/img/cafe-landscape.jpg" alt="test" className={styles.image2} />
          <div>
            <h2>MAYA BLACK</h2>
            <p>Freelance writer in Manchester</p>
            <p>Communications specialist</p>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <h3>About me</h3>
          <div className={styles.container}>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu fringilla elit. Tincidunt ut metus non, sodales tempus mi. Mauris nisl nunc, porttitor id euismod sit amet, sodales nec odio. Mauris non mi bibendum, fermentum justo nec, mollis lacus. Aenean diam libero, vehicula nec urna eget, tincidunt elementum dui. Duis ultrices molestie tempus. Donec porttitor porta ornare. Etiam in enim ante. Duis a ultrices tortor. Proin pretium et felis et lobortis.
                Sed aliquet tristique placerat.</p>
                <button>Work with me</button>
            </div>
            <img src="/img/headshot.jpg" />
          {/* <Image 
          src="/img/headshot.jpg"
          alt="Picture of writer"
          width={400}
          height={600}
          layout="fixed"
          
          /> */}
        </div>
      </section>
      <FeaturedArticles/>
      </>
  )
}
