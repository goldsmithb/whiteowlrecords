import * as React from 'react'
import { Link } from 'gatsby'
import './navBarStyles.css'


const NavBar = () => {
    return (
        <nav>
            <ul className="nav-links">
                <li className="nav-link-item">
                    <Link to="/" className="nav-link-text">
                        Home /
                    </Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/contact" className="nav-link-text">
                        / Contact /
                    </Link>
                </li>
                 <li className="nav-link-item">
                    <Link to="/sounds" className="nav-link-text">
                        / Sounds /
                    </Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/thoughts" className="nav-link-text">
                        / Thoughts
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar