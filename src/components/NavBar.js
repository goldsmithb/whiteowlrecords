import * as React from 'react'
import * as styles from '../styles/navBar.module.css'
import { Link } from "gatsby"
import { AnimatePresence, motion } from 'framer-motion'

const NavBar = ({ show, isMobile }) => {
    let i = 0;
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05
          }
        }
      };
      
      const listItem = {
        hidden: { opacity: 0, x: 200 },
        show: { opacity: 1, x: 0 }
      };
    if (isMobile) return (
        
        <AnimatePresence>
        <motion.div variants={container} initial='hidden' animate='show'>
            <nav>
                <ul className={styles.navLinksMobile}>
                    <motion.li variants={listItem} className={styles.navLinkItem} key={i++}>
                        <Link to='/' className={styles.navLinkText}>Home</Link>
                    </motion.li>
                    <motion.li variants={listItem} className={styles.navLinkItem} key={i++}>
                        <Link to='/events' className={styles.navLinkText}>Events</Link>
                    </motion.li>
                    <motion.li variants={listItem} className={styles.navLinkItem} key={i++}>
                        <Link to='/about' className={styles.navLinkText}>About</Link>
                    </motion.li>
                    <motion.li variants={listItem} className={styles.navLinkItem} key={i++}>
                        <a className={styles.navLinkText} href="https://whiteowlrecords.bandcamp.com/" target="_blank">Bandcamp</a>
                    </motion.li>
                    <motion.li variants={listItem} className={styles.navLinkItem} key={i++}>
                        <a className={styles.navLinkText} href="https://soundcloud.com/whiteowlrecords" target="_blank">Sound Cloud</a>
                    </motion.li>
                     <motion.li variants={listItem} className={styles.navLinkItem} key={i++}>
                        <a className={styles.navLinkText} href="https://www.instagram.com/whiteowl.records/" target="_blank">Instagram</a>
                    </motion.li>
                </ul>
            </nav>
        </motion.div>
        </AnimatePresence>
       

    );

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