import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/globalStyles.css'
import NavBar from '../components/NavBar.js'
import BottomBar from '../components/BottomBar.js'
import * as styles from '../styles/homePage.module.css'
import '../styles/globalStyles.css'
import { Helmet } from 'react-helmet'
import BlogFeed from '../components/BlogFeed.js'
import About from '../components/About.js'
import Hamburger from 'hamburger-react'
// burger options: https://hamburger-react.netlify.app/

const IndexPage = () => { 
    const [page, setPage] = React.useState("sounds");
    const [burgerOpen, setBurgerOpen] = React.useState(false)
    const changePage = (p) => setPage(p);

  return (
<React.Fragment>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    </Helmet>
    <div>
        <Hamburger direction="right" toggled={burgerOpen} toggle={setBurgerOpen}/>
        {burgerOpen &&  <NavBar changePage={changePage} /> }
    </div>
    <header className={styles.banner}>
        <StaticImage 
            alt="WHITEOWLRECORDS banner"
            src={"../images/banner.png"}
        />
    </header>
    Content:
    {page === "blog" && <BlogFeed />}
    {page === "about" && <About />}
    <BottomBar />
</React.Fragment>
     
  )
}

export const Head = () => <Seo/>

export default IndexPage