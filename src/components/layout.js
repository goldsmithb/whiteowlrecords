import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import * as styles from '../styles/layout.module.css'
import BottomBar from './BottomBar.js'
import HamburgerMenu from '../components/HamburgerMenu.js'
import Owl from '../components/Owl.js'

const Layout = ({ showBanner, children }) => {
    const val = sessionStorage.getItem('hasOwlBeenShown');
    let hasOwlBeenShown = val === "true" ? true : false;
    // show the owl if it has not yet been shown
    const [showOwl, setShowOwl] = useState(!hasOwlBeenShown);

    return (
    <div className={styles.siteWrap}>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        </Helmet>

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