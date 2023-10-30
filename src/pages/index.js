import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/globalStyles.css'
import NavBar from '../components/NavBar.js'
import BottomBar from '../components/BottomBar.js'
import * as styles from '../styles/homePage.module.css'
import '../styles/globalStyles.css'
import { Helmet } from 'react-helmet'
import SoundsPage from '../components/SoundsPage.js'
import ThoughtsPage from '../components/ThoughtsPage.js'

const IndexPage = () => { 
    const [page, setPage] = React.useState("sounds");
    const changePage = (p) => setPage(p);
  return (
<React.Fragment>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    </Helmet>
    <NavBar changePage={changePage}/>
    <header className={styles.banner}>
        <StaticImage 
            alt="WHITEOWLRECORDS banner"
            src={"../images/banner.png"}
        />
    </header>
    {page === "sounds" && <SoundsPage />}
    {page === "thoughts" && <ThoughtsPage />}
    <BottomBar />
</React.Fragment>
     
  )
}

export const Head = () => <Seo/>

export default IndexPage