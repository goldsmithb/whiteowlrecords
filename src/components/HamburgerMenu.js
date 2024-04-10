import React from 'react'
import NavBar from '../components/NavBar.js'
import Hamburger from 'hamburger-react'
import { useClickAway } from '@uidotdev/usehooks'
import * as styles from '../styles/HamburgerMenuStyles.module.css'
// burger options: https://hamburger-react.netlify.app/

const HamburgerMenu = ({ isMobile }) => {
    const [burgerOpen, setBurgerOpen] = React.useState(false);
    
    // TODO : click away to close menu
    const ref = useClickAway(() => {
        setBurgerOpen(false);
    });

    if (isMobile) {
        return (
            <div className={styles.menuWrapperMobile} ref={ref} >
                <Hamburger 
                direction="right" 
                toggled={burgerOpen} 
                toggle={setBurgerOpen}
                className={styles.burgerWrapperMobile} />

                <NavBar show={burgerOpen} isMobile={true} />
            </div>
        );
    }

    return (
        <div>
            <Hamburger direction="right" toggled={burgerOpen} toggle={setBurgerOpen}/>
            <NavBar show={burgerOpen}/>
        </div>
    );
}

export default HamburgerMenu;