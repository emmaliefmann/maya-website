import Nav from './Nav'
import Footer from './Footer'
import styles from '../styles/Layout.module.scss';
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <>
        <Head>
            
            <title>Maya Black</title>
            <meta name="keywords" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav/>
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        <Footer/>
        </>
    )
}

export default Layout