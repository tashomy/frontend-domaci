import Axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Kontakt = () => {
    // window.onload = () => {
    //     const ime = document.getElementById('name-forma');
    //     const emailF = document.getElementById('email-forma');
    //     const poruka = document.getElementById('messages-forma');
    //     console.log(ime, emailF, poruka);
    // }
    
    // const article = [{
    //     name: ime.value,
    //     email: emailF.value,
    //     message: poruka.value
    // }]

//    function addMsg(){
//        Axios.post('http://localhost:8000/poruke', article);
//    }

    return ( 
        <>
            <Row>
                <Col md="12" lg="6">
                        <h3 className="kontakt-heading">Kontaktiraj nas</h3>
                        <div className="row">
                            <div className="col-2"> <div className="bckg-line"></div></div>
                            <div className="col-7">
                        
                                <p className="main-text" style={{marginLeft:"0px"}}>Ukoliko imaš neko pitanje, sugestiju ili primjedbu za nas, slobodno nam se obrati, a mi ćemo u najkraćem roku odgovoriti.</p>
                            </div>
                        </div>
                        <div className="row">
                            <form>
                                <input id="name-forma" type="text" placeholder="Ime i prezime" className="input"/>
                                <input id="email-forma" type="email" placeholder="Email" className="input"/>
                                <textarea id="messages-forma" placeholder="Poruka" className="input" resize="none" rows={5}></textarea>
                                <input type="submit" value="Pošalji" className="button" id="forma-btn" / >
                            </form>
                        </div>
                </Col>

                <Col md="12" lg="6">
                    <div>
                        <h3 className="kontakt-heading" style={{marginLeft:"0px"}}>Adresa</h3>
                        <p className ="main-text" style={{marginLeft:"50px"}}>Ekonomski fakultet, Ul. Jovana Tomaševića br. 37, Podgorica</p>
                        <div className="col-6" style={{marginTop:"40px"}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.148533436623!2d19.254870615325164!3d42.44585567918124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deba7f98a9237%3A0x263b7331255a7fbd!2sEkonomski%20fakultet!5e0!3m2!1sen!2s!4v1605998288420!5m2!1sen!2s"
                                        width="500" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false" tabIndex="0" style={{marginLeft:"30px"}}></iframe>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
     );
}
 
export default Kontakt;