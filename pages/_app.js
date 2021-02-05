import styles from '../styles/globals.scss'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Maya Black</title>
          <meta name="keywords" content="" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@500&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  ) 
}

export default MyApp
