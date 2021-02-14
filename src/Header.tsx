import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import WorkIcon from '@material-ui/icons/Work';
import CreateIcon from '@material-ui/icons/Create';
import MailIcon from '@material-ui/icons/Mail';

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
                    <p className="category"><a href="/"><HomeIcon /> Home</a></p>
                    <p className="category"><a href="/skill"><WhatshotIcon /> Skill</a></p>
                    <p className="category"><a href="/career"><WorkIcon /> Career</a></p>
                    {/* <p className="category"><a href="/blog"><CreateIcon /> Blog</a></p> */}
                    <p className="category"><a href="/contact"><MailIcon /> Contact</a></p>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
