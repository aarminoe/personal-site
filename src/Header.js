import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import NavLink from "react-bootstrap";
import { Card } from "@mui/material";


function Header() {
    return (
        <div className="navbar">
            <Nav>
                <Link className="link-nav" to='/'>Home</Link>
                <Link className="link-nav" to='about-me'>About Me</Link>
                <Link className="link-nav" to='job-experience'>Experience</Link>
                <Link className="link-nav" to='projects'>Projects</Link>
            </Nav>
        </div>
    )
}

export default Header;