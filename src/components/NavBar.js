import * as React from 'react'
import * as styles from '../styles/navBar.module.css'
import { Link } from "gatsby"

const NavBar = ({show}) => {
    console.log("navBar!")
    return (
        <>
        <style>
            {
                `.slider {
                    opacity: 0;
                    transform: translateX(-100%);
                    transition: transform 0.5s, opacity 1s ease;
                }

                .slide-in {
                    opacity: 1;
                    transform: translateX(0);
                }
            `}
            </style>
        <div className={`slider ${show ? 'slide-in' : ''}`}>
            <nav>
                <ul className={styles.navLinks}>
                    <li className={styles.navLinkItem}>
                        <Link to='/' className={styles.navLinkText}>Home</Link>
                    </li>
                    <li className={styles.navLinkItem}>
                        <Link to='/events' className={styles.navLinkText}>Events</Link>
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
        </div>
        </>
    )
}

export default NavBar