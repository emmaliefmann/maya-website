import styles from '../styles/Footer.module.scss';
import Link from 'next/link'
//icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.container}>
                <div className={styles.socials}>
                    <a href="mailto:hello@mayablack.co.uk">
                        <FontAwesomeIcon icon={faEnvelope} size="4x"/> 
                    </a>
                    <a href="https://www.linkedin.com/in/maya-black-8a5b1795/" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="4x" className="icon"/> 
                    </a>
                    <a href="https://www.instagram.com/_mayablack/?hl=en" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="4x" className="icon"/> 
                    </a>
                </div>
                {/* <p>Site created by Emma Liefmann 2011</p> */}
            </div>
            <div className={styles.container}>
                {/* <a href="">Sitemap</a> */}
            </div>
        </footer>
    )
}

export default Footer;