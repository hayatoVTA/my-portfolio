import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            {/* <Navbar.Brand href="#home">This is Me</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="category">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="all__category">
                    <p className="category"><a href="/">Home</a></p>
                    <p className="category"><a href="/skill">Skill</a></p>
                    <p className="category"><a href="/career">Career</a></p>
                    <p className="category"><a href="/blog">Blog</a></p>
                    <p className="category"><a href="/contact">Contact</a></p>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
