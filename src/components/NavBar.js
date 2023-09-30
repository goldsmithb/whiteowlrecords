import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/navBar.module.css'

const NavBar = ( { changePage } ) => {
    return (
        <nav>
            <ul className={styles.navLinks}>
                 <li className={styles.navLinkItem}>
                    <a className={styles.navLinkText} href="#" onClick={() => changePage("sounds")}>Sounds</a>
                    {/* <Link to="/sounds" className={styles.navLinkText}>
                        Sounds
                    </Link> */}
                </li>
                <li className={styles.navLinkItem}>|</li>
                <li className={styles.navLinkItem}>
                    <a className={styles.navLinkText} href="#" onClick={() => changePage("thoughts")}>Thoughts</a>
                    {/* <Link to="/thoughts" className={styles.navLinkText}>
                        Thoughts
                    </Link> */}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar