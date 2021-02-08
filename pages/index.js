import Head from 'next/head'
import styles from '../styles/Intro.module.scss';

//images 
import Image from 'next/image'


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
        <div>
          <Image 
          src="/img/headshot.jpg"
          alt="Picture of writer"
          width={400}
          height={600}
          layout="fixed"
          />
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at porta sapien. Quisque eu fringilla elit. Nam feugiat mauris in ligula mollis eleifend. Donec suscipit, nibh euismod venenatis tristique, tellus elit gravida tortor, tincidunt ornare sem diam nec sem. Aenean risus mi, tincidunt ut metus non, sodales tempus mi. Mauris nisl nunc, porttitor id euismod sit amet, sodales nec odio. Mauris non mi bibendum, fermentum justo nec, mollis lacus. Aenean diam libero, vehicula nec urna eget, tincidunt elementum dui. Duis ultrices molestie tempus. Donec porttitor porta ornare. Etiam in enim ante. Duis a ultrices tortor. Proin pretium et felis et lobortis.
               Sed aliquet tristique placerat. Donec scelerisque justo vitae auctor aliquam.</p>
          </div>
        </div>
        
      </section>
      <section className={styles.featured}>
        <h4>Featured articles</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at porta sapien. Quisque eu fringilla elit. Nam feugiat mauris in ligula mollis eleifend. Donec suscipit, nibh euismod venenatis tristique</p>
        <div className={styles.container}>
        <div>
          <h4>ARTICLE TITLE</h4>
          <img src="https://picsum.photos/200/200" />
        </div>
        <div>
          <h4>ARTICLE TITLE</h4>
          <img src="https://picsum.photos/200/200" />
        </div>
        <div>
          <h4>ARTICLE TITLE</h4>
          <img src="https://picsum.photos/200/200" />
        </div>
        <div>
          <h4>ARTICLE TITLE</h4>
          <img src="https://picsum.photos/200/200" />
        </div>
        </div>
      </section>
      </>
  )
}
