import React, {Component} from 'react';
import {useState} from 'react';
import $ from 'jquery';


const Progress = () => {

    const[progress, setProgress] = useState(75);
    
    const changeProgress= () => {
        require('jquery-circle-progress');
        var $ = require('jquery');
        $('.box').circleProgress({
        fill:{color: '#fff'},
        value: progress/100,
        startAngle:-1.55,
        size: 290
        })

    }


    window.addEventListener("load", changeProgress());

    return ( 
        <>
            <div className="count">
                <div className="wrapper">
                    <div className="card">
                        <div className="progress-num">256</div>
                    </div>
                    <div className="line"></div>
                    <div className="card">
                        <h3 className="progress-heading">Broj <br/> ostvarenih <br/> artikala</h3>
                    </div>
                    <div className="card">
                        <div className="circle">
                            <div className="bar"></div>
                            <div className="box"><span>{progress}</span></div>
                        </div>
                    </div>
                    <div className="card">
                        <h3 className="progress-heading">Broj <br/> ostvarenih <br/> osmjeha</h3>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Progress;