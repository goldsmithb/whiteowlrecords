import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import ReactPlayer from "react-player"
import * as styles from '../styles/soundStyles.module.css'
import { Helmet } from 'react-helmet';

const SoundsPage = ({data}) => {
    let isMobile =  window.innerWidth <= 768;
    console.log(data)
  return (
    <React.Fragment>
        <div className={styles.playersContainer}>
            <div className={styles.player}>
                { isMobile ? (
                    <iframe className={styles.mobilePlayer} src="https://bandcamp.com/EmbeddedPlayer/album=3142640843/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/" seamless><a href="https://drimaudio.bandcamp.com/album/twenty-over-ep">Twenty over EP by Drim</a></iframe>
                ) :
                (
                    <ReactPlayer
                        controls={true}
                        url="https://soundcloud.com/drim-audio/sets/twenty-over-ep"
                    />
                )}
            <p className={styles.buyLinkWrapper}><a className={styles.linkText} target="_blank" href='https://drimaudio.bandcamp.com/album/twenty-over-ep'>Bandcamp</a></p>
            </div>
            <div className={styles.player}>
                { isMobile ? (
                    <iframe className={styles.mobilePlayer} src="https://bandcamp.com/EmbeddedPlayer/album=1735788970/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/" seamless><a href="https://pineraudio.bandcamp.com/album/guardian-angel-language-barrier">Guardian Angel Language Barrier by Piner</a></iframe>
                ) :
                (
                    <ReactPlayer 
                        controls={true}
                        url="https://soundcloud.com/jack-cavenaugh/sets/guardian-angel-language-barrier"
                    />
                )}
            <p className={styles.buyLinkWrapper}><a className={styles.linkText} target="_blank" href='https://drimaudio.bandcamp.com/album/twenty-over-ep'>Bandcamp</a></p>
            </div>
        </div>
    </React.Fragment>
  )
}

export const query = graphql`
query AllSoundPosts {
    allSanitySoundPost(sort: {publishedAt: DESC}) {
      nodes {
        title
        body {
          style
          children {
            text
          }
        }
        author {
          name
        }
        mainImage {
          asset {
            url
          }
        }
        teaser
        categories {
          title
        }
        _rawBody
      }
    }
  }
`

export default SoundsPage