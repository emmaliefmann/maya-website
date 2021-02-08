import styles from '../styles/Footer.module.scss';
//icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p>Site created by <a href="http://www.emmaliefmann.com">Emma Liefmann</a> 2011</p>
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
        </footer>
    )
}

export default Footer;