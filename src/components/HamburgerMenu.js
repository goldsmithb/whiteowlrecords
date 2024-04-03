import * as React from 'react'
import NavBar from '../components/NavBar.js'
import Hamburger from 'hamburger-react'
// burger options: https://hamburger-react.netlify.app/

const HamburgerMenu = () => {
    const [burgerOpen, setBurgerOpen] = React.useState(false);
    
    return (
        <div>
            <Hamburger direction="right" toggled={burgerOpen} toggle={setBurgerOpen}/>
            {burgerOpen && <NavBar />}
        </div>
    );
}

export default HamburgerMenu;