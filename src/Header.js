import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import NavLink from "react-bootstrap";
import { Card } from "react-bootstrap";


function Header() {
    return (
        <Card className="navbar">
            <Nav>
                <Link className="link-nav" to='/'>Home</Link>
                <Link className="link-nav" to='about-me'>About Me</Link>
                <Link className="link-nav" to='job-experience'>Relevant Experience</Link>
            </Nav>
        </Card>
    )
}

export default Header;