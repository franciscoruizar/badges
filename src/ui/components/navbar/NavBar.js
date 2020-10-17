import React from "react";

import logo from "../../shared/images/logo.svg";
import "./NavBar.css"
import {Link} from "react-router-dom";

class NavBar extends React.Component{
    render() {
        return(
            <nav className="navbar">
                <ul className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" className="navbar-brand-logo" />
                        <span className="font-weight-light">Conference </span>
                        <span className="font-weight-bold">badges</span>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default NavBar;