import React from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

  const[navbar,setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 24){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  };

  window.addEventListener('scroll',() => changeBackground());

    return ( 
      <Navbar collapseOnSelect expand="lg" variant='dark' sticky='top' className={navbar ? 'navbar active' : 'navbar'}>
          <Navbar.Brand as={Link} to="/" className={navbar ? 'navbar-brand active' : 'navbar-brand'}><div id="logo-navbar"></div></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={navbar ? 'navbar-toggler-icon-dark' : ''} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav className={navbar ? 'navbar-nav active' : 'navbar-nav'}>
              <Nav.Link as={Link} to="/" id={navbar ? '' : 'pocetna'}>Početna<div className={navbar ? 'bottom-line active' : 'bottom-line'}></div></Nav.Link>
              <Nav.Link as={Link} to="/doniraj">Doniraj<div className={navbar ? 'bottom-line active' : 'bottom-line'}></div></Nav.Link>
              <Nav.Link as={Link} to="/vijesti">Vijesti<div className={navbar ? 'bottom-line active' : 'bottom-line'}></div></Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog<div className={navbar ? 'bottom-line active' : 'bottom-line'}></div></Nav.Link>
              <Nav.Link as={Link} to="/galerija">Galerija<div className={navbar ? 'bottom-line active' : 'bottom-line'}></div></Nav.Link>
              <Nav.Link as={Link} to="/prijatelji">Prijatelji<div className={navbar ? 'bottom-line active' : 'bottom-line'}></div></Nav.Link>
              <Nav.Link as={Link} to="/o-nama">O nama<div className={navbar ? 'bottom-line active' : 'bottom-line'}></div></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
     );
}
 
export default Header;