import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../mystyles.css';
import {Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return(
        <Navbar expand="md" sticky="top" className="nav-wrap">
        <Navbar.Brand href="#home"><img className= "logo-nav" src={Logo}></img></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav">
            <Nav.Link as={Link} to="/" className="nav-item" id="pocetna">Početna <div className="bottom-line"></div></Nav.Link>
            <Nav.Link as={Link} to="/doniraj" className="nav-item">Doniraj<div className="bottom-line"></div></Nav.Link>
            <Nav.Link as={Link} to="/vijesti" className="nav-item">Vijesti<div className="bottom-line"></div></Nav.Link>
            <Nav.Link as={Link} to="/blog" className="nav-item">Blog<div className="bottom-line"></div></Nav.Link>
            <Nav.Link as={Link} to="/galerija" className="nav-item">Galerija<div className="bottom-line"></div></Nav.Link>
            <Nav.Link as={Link} to="/prijatelji" className="nav-item">Prijatelji<div className="bottom-line"></div></Nav.Link>
            <Nav.Link as={Link} to="/o-nama" className="nav-item">O nama<div className="bottom-line"></div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar;