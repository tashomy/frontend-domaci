import React from 'react';
import LogoFooter from '../../images/logo.png';

const Footer = () => {
    return ( 
        <>
            <div className="footer">
            <span style={{display: "none"}}>hello</span>
            <div className="footer-items">
                <img src={LogoFooter} alt="logo" id="footer-logo"/>
                <br/>
                <p>NVO „Nacionalni osmijeh“ <br/> info@nacionalniosmijeh.me
                    <br/> <br/> 068 291 117
                </p>
                <br/>
                <div className="fb">

                </div>
                <div className="insta">

                </div>
            </div>
           
           <div className="djeca-footer">
               <div className="djevojcica"></div>
               <div className="djecak"></div>
               {/* <div className="clr"></div> */}
           </div>
        </div>
        </>
     );
}
 
export default Footer;