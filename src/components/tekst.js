import React from 'react';
import './mystyles.css';

const Text = props => {
    return(
        <div className="showcase-container">
            <h3 className="first-heading">Za njihov osmjeh!</h3>
            <p className="text">Postoji jedan životni fakultet koji studiraju oni koji imaju volju da izmame što više iskrenih osmijeha djeci koja žive bez roditelja. On proizvodi najbolje kadrove iz ove oblasti u našoj zemlji već duže od decenije i ne planira da se zaustavi. Upisuje sve kandidate dobre volje, pa nemojte brinuti da li za vas ima mjesta. Ukoliko želite, samo zakoračite unutra. Lako ćete ga pronaći, na njemu je velikim slovima ispisan grafit <span className="max-span">NJIHOV OSMIJEH VRIJEDI VIŠE!</span>
            <br></br>
            Ispitni rok je, za omladinu iz svih gradova Crne Gore, svake godine u aprilu!</p>
            <span className="emphasized">Mi smo spremni, a vi?</span>
            <button className="first-btn">Doniraj</button>
        </div>
    )
}

export default Text;