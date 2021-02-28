import Link from 'next/link'
import styles from '../styles/Nav.module.scss'
import {useState} from "react";
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
//Add a local state of open or closed
//have conditions 
const Nav = () => {
    const { pathname } = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleMenu = () => {
        setMenuOpen(prev => !prev);
    }
    const handleClick = () => {
        setMenuOpen(false);
    }
    const animateLine = {
        hidden: {width: "0%"},
        show: {width: "100%", 
        transition:{duration:0.75}}
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.logo} onClick={handleClick}>
                <Link href='/'>
                    <p>MB</p>
                </Link>
            </div>
            <button className={styles.toggle} onClick={handleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`${styles.navlinks} ${menuOpen ? `${styles.navOpen}` : `${styles.navClosed}`}`} id="toggle">
                <ul>
                    <li onClick={handleClick}>
                        <Link href='/'>Home</Link>
                        <motion.span className={styles.navLine} 
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "100%" : "0%" }}
                        ></motion.span>
                    </li>
                    <li onClick={handleClick}>
                        <Link href='/portfolio'>Portfolio</Link>
                        <motion.span className={styles.navLine}
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/portfolio" ? "100%" : "0%" }}></motion.span>
                    </li>
                    <li onClick={handleClick}>
                        <Link href='/contact'>Contact</Link>
                        <motion.span className={styles.navLine}
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/contact" ? "100%" : "0%" }}></motion.span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav; 