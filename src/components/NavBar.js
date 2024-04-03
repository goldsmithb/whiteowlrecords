import * as React from 'react'
import * as styles from '../styles/navBar.module.css'
import { Link } from "gatsby"

const NavBar = () => {
    console.log("navbar")
    return (
        <nav>
            <ul className={styles.navLinks}>
                 <li className={styles.navLinkItem}>
                    <Link to='/' className={styles.navLinkText}>Home</Link>
                </li>
                <li className={styles.navLinkItem}>
                    <Link to='/about' className={styles.navLinkText}>About</Link>
                </li>
                <li className={styles.navLinkItem}>
                    <a className={styles.navLinkText} href="https://whiteowlrecords.bandcamp.com/" target="_blank">Bandcamp</a>
                </li>
                <li className={styles.navLinkItem}>
                    <a className={styles.navLinkText} href="https://soundcloud.com/whiteowlrecords" target="_blank">Sound Cloud</a>
                </li>
                <li className={styles.navLinkItem}>
                    <a className={styles.navLinkText} href="https://www.instagram.com/whiteowl.records/" target="_blank">Instagram</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar