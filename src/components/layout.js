import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/layout.module.css'
import BottomBar from './BottomBar.js'
import HamburgerMenu from '../components/HamburgerMenu.js'
import Owl from '../components/Owl.js'

const Layout = ({ showBanner, children }) => {
    const [showOwl, setShowOwl] = useState(true);

    useEffect(() => {
        const val = sessionStorage.getItem('hasOwlBeenShown');
        let hasOwlBeenShown = val === "true" ? true : false;
        // show the owl if it has not yet been shown
        setShowOwl(!hasOwlBeenShown);
    }, []);
    

    return (
    <div className={styles.siteWrap}>

        {showOwl && <Owl setShowOwl={setShowOwl} />}

        <div className={styles.leftCol}>
            <HamburgerMenu />
        </div>

        <div className={styles.middleCol}>
            {showBanner &&
                <div className={styles.banner}>
                    <StaticImage 
                        alt="WHITEOWLRECORDS banner"
                        src={"../images/banner.png"}
                    />
                </div>
            }
            {children}
        </div>

        <div className={styles.rightCol}>
        </div>
        <BottomBar />
    </div>
    )
}

export default Layout;