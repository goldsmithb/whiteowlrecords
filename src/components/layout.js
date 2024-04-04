import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import * as styles from '../styles/layout.module.css'
import BottomBar from './BottomBar.js'
import HamburgerMenu from '../components/HamburgerMenu.js'

const Layout = ({ showBanner, children }) => {
    return (
    <div className={styles.siteWrap}>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        </Helmet>
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
            <BottomBar />
        </div>
    </div>
   
    )
}

export default Layout