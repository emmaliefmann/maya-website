import Head from 'next/head'

//images 
import FeaturedArticles from './../components/FeaturedArticles';
import AboutMe from './../components/AboutMe'
import Intro from './../components/Intro'

export default function Home() {
  return (
    <>
      <Head>
        <title>Maya Black</title>
        <meta name="keywords" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <AboutMe />
      <FeaturedArticles/>
      </>
  )
}
