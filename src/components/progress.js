import React from 'react';
import './mystyles.css';

const Progress = props => {
    return(
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
                    <div className="box"><span>76</span></div>
                </div>
            </div>
            <div className="card">
                <h3 className="progress-heading">Broj <br/> ostvarenih <br/> osmjeha</h3>
            </div>
          </div>
      </div>
    )
}

export default Progress;