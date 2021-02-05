import Link from 'next/link'
import styles from '../styles/Nav.module.scss'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className="logo">
                <p>logo</p>
            </div>
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
        </nav>
    )
}

export default Nav; 