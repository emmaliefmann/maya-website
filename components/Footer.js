import styles from '../styles/Footer.module.scss';
//icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p>Footer here</p>
            <p>Links</p>
            <div className={styles.socials}>
                <a href="mailto:emmaliefmann@gmail.com">
                    
                <FontAwesomeIcon icon={faEnvelope} size="4x"/> 
                </a>

                <a href="https://www.linkedin.com/in/emmaliefmann/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="4x" className="icon"/> 
                    
                </a>
            </div>
        </footer>
    )
}

export default Footer;