import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import NavLink from "react-bootstrap";
import { Card } from "react-bootstrap";


function Header() {
    return (
        <Nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/'>Home</Link>
            <Link to='about-me'>About Me</Link>
            <Link to='job-experience'>Job Experience</Link>
        </Nav>
    )
}

export default Header;