import React from 'react';

const Mapa = () => {
    return ( 
        <>
            <div>
                <h3 className="main-heading" style={{marginLeft:"0px"}}>Adresa</h3>
                <p className ="main-text" style={{marginLeft:"50px"}}>Ekonomski fakultet, Ul. Jovana Tomaševića br. 37,
Podgorica</p>
                <div className="col-6" style={{marginTop:"40px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.148533436623!2d19.254870615325164!3d42.44585567918124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deba7f98a9237%3A0x263b7331255a7fbd!2sEkonomski%20fakultet!5e0!3m2!1sen!2s!4v1605998288420!5m2!1sen!2s"
                                width="500" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false" tabIndex="0" style={{marginLeft:"30px"}}></iframe>
                </div>
            </div>
            
        </>
     );
}
 
export default Mapa;