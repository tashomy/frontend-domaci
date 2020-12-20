import React, {Component} from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Showcase = () => {
    return ( 
        <>
        <div className="background"></div>
            <Container fluid className="showcase">
                <Row>
                    <Col xs={12} sm={12} md = {12} lg={8} xl={8}>
                        <h3 id="showcase-heading">Njihov osmijeh <br/> vrijedi više!</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md = {12} lg={5} xl={5}>
                        <p id="showcase-text">Postoji jedan životni fakultet koji studiraju oni koji imaju volju da izmame što više iskrenih osmijeha za djecu bez roditeljskog staranja. On proizvodi najbolje kadrove iz ove oblasti u našoj zemlji već duže od decenije i ne planira da se zaustavi. Upisuje sve kandidate dobre volje, pa nemojte brinuti da li za vas ima mjesta. Ukoliko želite, samo zakoračite unutra. Lako ćete ga pronaći, na njemu je velikim slovima ispisan grafit <span id="emph">NJIHOV OSMIJEH VRIJEDI VIŠE!</span> Ispitni rok je, za omladinu i sve ljude dobre volje u Crnoj Gori, svake godine u aprilu!</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md = {12} lg={5} xl={5}>
                        <span id="second-emph">Mi smo spremni, a vi?</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md = {12} lg={5} xl={5}>
                        <button id="showcase-btn">Doniraj</button>
                    </Col>
                </Row>
                
            </Container>
        
            
        </>
     );
}
 
export default Showcase;