import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import NavBar from './NavBar.js'
import * as styles from '../styles/layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site(siteMetadata: {}) {
          siteMetadata {
            title
          }
        }
      }
    `)

  return (
    <>
    <NavBar />
    <div className={styles.container}>
        <header className={styles.siteTitle}>
            <StaticImage 
                alt="WHITEOWLRECORDS banner"
                src="../images/banner.png"
            />
        </header>
      
      <main>
        <h1 className={styles.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
    </>
  )
}

export default Layout