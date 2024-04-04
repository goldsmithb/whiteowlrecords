import * as React from 'react'
import NavBar from '../components/NavBar.js'
import Hamburger from 'hamburger-react'
import * as styles from '../styles/HamburgerMenuStyles.module.css'
// burger options: https://hamburger-react.netlify.app/

const HamburgerMenu = () => {
    const [burgerOpen, setBurgerOpen] = React.useState(false);
    
    return (
        <React.Fragment>
            <style>
            {
                `.slider {
                    opacity: 0;
                    transform: translateX(-100%);
                    transition: transform 0.5s, opacity 1s ease;
                }

                .slide-in {
                    opacity: 1;
                    transform: translateX(0);
                }
            `}
            </style>
            <div className={burgerOpen? styles.containerOpen : styles.containerClosed}>
                <Hamburger direction="right" toggled={burgerOpen} toggle={setBurgerOpen}/>
                <NavBar show={burgerOpen}/>
            </div>
        </React.Fragment>
       
    );
}

export default HamburgerMenu;