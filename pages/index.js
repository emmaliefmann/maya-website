import Head from 'next/head'

//images 
import FeaturedArticles from './../components/FeaturedArticles';
import AboutMe from './../components/AboutMe'
import Intro from './../components/Intro'

//my scroll animations 
import { useScroll } from './../components/useScroll';

export default function Home() {
  const [element, controls] = useScroll();

  const appear = {
    hidden: { opacity: 0, scale:1.2 },
    show: {
      opacity: 1,
      scale:1,
      transition: { ease: "easeOut", duration: 1 },
    },
  };
  return (
    <>
      <Intro />
      <AboutMe />
      <FeaturedArticles/>
      </>
  )
}
