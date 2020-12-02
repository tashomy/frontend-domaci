import React from 'react';
import '../mystyles.css';
import logo from '../../images/logo.png';



const Logo = props => {
    return(
        <div className="logo-nav">
            <img src={logo} alt={'logo'}></img>
        </div>
    )
}

export default Logo;