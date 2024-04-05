import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import * as styles from '../styles/mobileLayout.module.css'
import BottomBar from './BottomBar.js'
import HamburgerMenu from '../components/HamburgerMenu.js'
import Owl from '../components/Owl.js'

const MobileLayout = ({ children }) => {
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

            <div className={styles.topBar}>
                <HamburgerMenu isMobile={true}/>
                
            </div>
            {children}
        </div>
    );
}

export default MobileLayout;