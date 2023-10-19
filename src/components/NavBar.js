import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/navBar.module.css'

const NavBar = ( { changePage } ) => {
    return (
        <nav>
            <ul className={styles.navLinks}>
                 <li className={styles.navLinkItem}>
                    <a className={styles.navLinkText} href="#" onClick={() => changePage("sounds")}>Sounds</a>
                </li>
                <li className={styles.specialText}>|</li>
                <li className={styles.navLinkItem}>
                    <a className={styles.navLinkText} href="#" onClick={() => changePage("thoughts")}>Thoughts</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar