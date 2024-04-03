import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import * as styles from '../styles/homePage.module.css'
import '../styles/globalStyles.css'
import BottomBar from '../components/BottomBar.js'
import BlogFeed from '../components/BlogFeed.js'
import Layout from '../components/layout.js'

const IndexPage = () => { 
  return (
    <Layout>
    <header className={styles.banner}>
        <StaticImage 
            alt="WHITEOWLRECORDS banner"
            src={"../images/banner.png"}
        />
    </header>
    <BlogFeed />
    </Layout>

     
  )
}

export const Head = () => <Seo/>

export default IndexPage