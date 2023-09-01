import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/navBar.module.css'

const NavBar = () => {
    return (
        <nav>
            <ul className={styles.navLinks}>
                 <li className={styles.navLinkItem}>
                    <Link to="/sounds" className={styles.navLinkText}>
                        Sounds
                    </Link>
                </li>
                <li className={styles.navLinkItem}>|</li>
                <li className={styles.navLinkItem}>
                    <Link to="/thoughts" className={styles.navLinkText}>
                        Thoughts
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar