import React from "react";
import { Routes, Route } from "react-router-dom";
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/globalStyles.css'
import NavBar from '../components/NavBar.js'
import BottomBar from '../components/BottomBar.js'
import * as styles from '../styles/homePage.module.css'
import '../styles/globalStyles.css'
import { Helmet } from 'react-helmet'
import About from '../components/About'

const App = () => {
    const [page, setPage] = React.useState("sounds");
    const changePage = (p) => setPage(p);
  return (
    <React.Fragment>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    </Helmet>
    <NavBar changePage={changePage}/>
    <Routes>
        <Route path="/about" element={<About />} />
    </Routes>
    <header className={styles.banner}>
        <StaticImage 
            alt="WHITEOWLRECORDS banner"
            src={"../images/banner.png"}
        />
    </header>
.xyz
    <BottomBar />
    </React.Fragment>
  );
};

export default App;