import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
export const Navbar = () => {
    return(
        <div className="container font mulish is-flex mt-2 py-3 is-align-items-center is-justify-content-space-between">
            <Link>
                <img src={Logo} alt="Logo" width="100"/>
            </Link>
            <nav className="nav-links">
                <Link to="/" className="link-item txt">Home</Link>
                <Link to="/cataloge" className="link-item txt">Cataloge</Link>
            </nav>
        </div>
    )
}