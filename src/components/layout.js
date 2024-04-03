import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import * as styles from '../styles/layout.module.css'
import BottomBar from './BottomBar.js'
import HamburgerMenu from '../components/HamburgerMenu.js'

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        </Helmet>
        <HamburgerMenu />
        {children}
        <BottomBar />
    </React.Fragment>
   
    )
}

export default Layout