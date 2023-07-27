import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import NavBar from './NavBar.js'
import * as styles from '../styles/layout.module.css'

// Page title : the type of blog (Sounds | Thoughts)
// leftChildren, rightChildren : list of text content to render on either the
//   left or right column of the timeline.
//    -- in mobile view, this should just be a continuous single column
const Layout = ({ pageTitle, leftChildren, rightChildren }) => {
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
        {leftChildren}
      </main>
    </div>
    </>
  )
}

export default Layout