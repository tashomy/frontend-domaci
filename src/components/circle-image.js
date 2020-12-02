import React from 'react';
import './mystyles.css';
import circle from '../images/deca.png';

const CircleImage = props => {
    return(
        <div className="around">
            <div className="circle-bckg"></div>
            <div>
                <img src={circle} className="circle-img" alt={'Djeca'}></img>
            </div>
        </div>
    )
}

export default CircleImage;