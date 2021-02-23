import Link from 'next/link'
import styles from '../styles/Nav.module.scss'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href='/'>
                    <p>MB</p>
                </Link>
            </div>
            <button className={styles.toggle}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={styles.navlinks}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            </div>
            
        </nav>
    )
}

export default Nav; 