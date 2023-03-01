import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/'>Home</Link>
            <Link to='about-me'>About Me</Link>
        </nav>
    )
}

export default Header;