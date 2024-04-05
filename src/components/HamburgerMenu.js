import * as React from 'react'
import NavBar from '../components/NavBar.js'
import Hamburger from 'hamburger-react'
import { useClickAway } from '@uidotdev/usehooks'
// burger options: https://hamburger-react.netlify.app/

const HamburgerMenu = ({ isMobile }) => {
    const [burgerOpen, setBurgerOpen] = React.useState(false);
    
    const ref = useClickAway(() => {
        setBurgerOpen(false);
    });

    if (isMobile) {
        return (
            <div>
                <Hamburger direction="right" toggled={burgerOpen} toggle={setBurgerOpen}/>
                {burgerOpen && <NavBar isMobile={true} />}
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