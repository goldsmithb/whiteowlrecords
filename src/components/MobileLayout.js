import React, { useState, useEffect } from "react";
import * as styles from "../styles/mobileLayout.module.css";
import Banner from "../components/Banner.js";
import HamburgerMenu from "../components/HamburgerMenu.js";
import Owl from "../components/Owl.js";

const MobileLayout = ({ children }) => {
  const [showOwl, setShowOwl] = useState(true);
  const updateShowOwl = (b) => setShowOwl(b);

  useEffect(() => {
    const val = sessionStorage.getItem("hasOwlBeenShown");
    let hasOwlBeenShown = val === "true" ? true : false;
    // show the owl if it has not yet been shown
    setShowOwl(!hasOwlBeenShown);
  });

  if (showOwl) {
    return <Owl updateShowOwl={updateShowOwl} isMobile={true} />;
  } else {
    return (
      <>
        <div className={`${styles.topBar}`}>
          <div className={styles.bannerWrapper}>
            <Banner isMobile={true} />
          </div>
          <HamburgerMenu isMobile={true} />
        </div>

        <div className={styles.middleBar}>{children}</div>
      </>
    );
  }
  // return (
  // 	<>
  // 		<Owl updateShowOwl={updateShowOwl} isMobile={true} />

  // 		<div className={`${styles.topBar} ${showOwl && styles.hideTopBar}`}>
  // 			<div className={styles.bannerWrapper}>
  // 				<Banner isMobile={true} />
  // 			</div>
  // 			<HamburgerMenu isMobile={true}/>
  // 		</div>

  // 		<div className={styles.middleBar}>
  // 			{!showOwl && children}
  // 		</div>

  // 		{/* <BottomBar />   -- IMO this should only appear in the about page on mobile view.*/}
  // 	</>
  // );
};

export default MobileLayout;
