import React from 'react';
import '../mystyles.css';

const NavBar = props => {
    return(
        <div className="navbar">
            <ul>
                <li>
                    <a href="#" id="pocetna" className="nav-item">Početna</a>
                    <div className="bottom-line"></div>
                </li>
                <li><a href="#" className="nav-item">Doniraj</a><div className="bottom-line"></div></li>
                <li><a href="#" className="nav-item">Vijesti</a><div className="bottom-line"></div></li>
                <li><a href="#" className="nav-item">Blog</a><div className="bottom-line"></div></li>
                <li><a href="#" className="nav-item">Galerija</a><div className="bottom-line"></div></li>
                <li><a href="#" className="nav-item">Prijatelji</a><div className="bottom-line"></div></li>
                <li><a href="#" className="nav-item">O nama</a><div className="bottom-line"></div></li>
            </ul>
        </div>
    )
}

export default NavBar;