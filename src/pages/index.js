import * as React from 'react'
import { useEffect } from 'react'
// import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/globalStyles.css'
import NavBar from '../components/NavBar.js'
import ReactPlayer from "react-player"
import * as styles from '../styles/homePage.module.css'
import '../styles/background.css'


const IndexPage = () => {
    useEffect(() => {
        document.body.classList.remove(`navy-background`);
        document.body.classList.toggle(`cream-background`);
    });
  return (
<React.Fragment>
    <NavBar />
    <div  className={styles.homePage}>
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
            </div>
            <div className={styles.player}>
                <ReactPlayer 
                    controls="true"
                    url="https://soundcloud.com/jack-cavenaugh/sets/guardian-angel-language-barrier"
                />
            </div>
        </div>
    </div>
</React.Fragment>
     
  )
}

export const Head = () => <Seo title="WHITEOWLRECORDS WELCOMES YOU =)"/>

export default IndexPage