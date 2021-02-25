import Link from 'next/link'
import styles from '../styles/Nav.module.scss'
import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
//Add a local state of open or closed
//have conditions 
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href='/'>
                    <p>MB</p>
                </Link>
            </div>
            <button className={styles.toggle} onClick={handleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`${styles.navlinks} ${menuOpen ? `${styles.navOpen}` : `${styles.navClosed}`}`} id="toggle">
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