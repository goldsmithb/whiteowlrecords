import * as React from 'react'
import { useEffect } from 'react'
// import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/globalStyles.css'
import NavBar from '../components/NavBar.js'
import BottomBar from '../components/BottomBar.js'
import ReactPlayer from "react-player"
import * as styles from '../styles/homePage.module.css'
import * as textStyles from '../styles/textStyles.module.css'
import '../styles/globalStyles.css'
import { Helmet } from 'react-helmet'
import SoundsPage from '../components/SoundsPage.js'
import ThoughtsPage from '../components/ThoughtsPage.js'

const IndexPage = () => { 
    const [page, setPage] = React.useState("sounds");
    const changePage = (p) => setPage(p);
  return (
<React.Fragment>
    <NavBar changePage={changePage}/>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    </Helmet>
    <header className={styles.banner}>
        <StaticImage 
            alt="WHITEOWLRECORDS banner"
            src={"../images/banner.png"}
        />
    </header>
    {page === "sounds" && <SoundsPage />}
    {page === "thoughts" && <ThoughtsPage />}
    {/* <div  className={styles.homePage}>
        <div className={styles.banner}>
            <StaticImage 
                alt="WHITEOWLRECORDS banner"
                src="../images/banner.png"
            />
        </div>
        <div className={styles.playerContainer}>
            <div className={styles.player}>
                <ReactPlayer 
                    controls="true"
                    url="https://soundcloud.com/drim-audio/sets/twenty-over-ep"
                />
            <p className={styles.buyLink}><a href='https://drimaudio.bandcamp.com/album/twenty-over-ep'>^^^^^^^^^Purchase on BandCamp^^^^^^^^^</a></p>
            </div>
            <div className={styles.player}>
                <ReactPlayer 
                    controls="true"
                    url="https://soundcloud.com/jack-cavenaugh/sets/guardian-angel-language-barrier"
                />
            <p className={styles.buyLink}><a href='https://pineraudio.bandcamp.com/album/guardian-angel-language-barrier '>^^^^^^^^^Purchase on BandCamp^^^^^^^^^</a></p>
            </div>
        </div>
    </div> */}
    <BottomBar />
</React.Fragment>
     
  )
}

export const Head = () => <Seo title="WHITEOWLRECORDS WELCOMES YOU =)"/>

export default IndexPage