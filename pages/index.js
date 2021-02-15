import Head from 'next/head'
import styles from '../styles/Intro.module.scss';

//images 
import Image from 'next/image'
import FeaturedArticles from './../components/FeaturedArticles';
import AboutMe from './../components/AboutMe'

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
          
          <img src="/img/collage.jpg" />
          <div>
            <h2>MAYA BLACK</h2>
            <p>Freelance writer in Manchester</p>
            <p>Communications specialist</p>
            <p>Experienced journalist</p>
            <p>Copywriter</p>
            <p>Branded contents</p>
          </div>
        </div>
      </section>
      <AboutMe />
      <FeaturedArticles/>
      </>
  )
}
