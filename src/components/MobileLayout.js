import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import * as styles from '../styles/mobileLayout.module.css'
import BottomBar from './BottomBar.js'
import HamburgerMenu from '../components/HamburgerMenu.js'
import Owl from '../components/Owl.js'

const MobileLayout = ({ children }) => {

    return (
        <div className={styles.siteWrap}>

            <div className={styles.topBar}>
                <HamburgerMenu isMobile={true}/>
                
            </div>
            {children}
        </div>
    );
}

export default MobileLayout;