import React from 'react';

const Kontakt = () => {
    async function addMessage(data) {
        let res = await fetch('http://localhost:3000/poruke', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                data,
            }),
        });
        let json = await res.json();
        return json;
    }

  let button = document.getElementsByClassName(".button");
  console.log(button);


    function dodaj(){
        let ime = document.getElementById('name-forma');
        let email = document.getElementById('email-forma');
        let message = document.getElementById('message-forma');
        let data = {
            name: ime.value,
            email: email.value,
            message: message.value,
        };
        addMessage(data).then((res) => {
            console.log(res);
         });
    }

    return ( 
        <>
           
               <div className="col-6">
                    <h3 className="main-heading">Kontaktiraj nas</h3>
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
                            <textarea id="message-forma" placeholder="Poruka" className="input" id="textarea" resize="none" rows={5} cols="120"></textarea>
                            <input type="submit" value="Pošalji" className="button" onClick={() => dodaj()}/ >
                        </form>
                    </div>
               </div>
              
           
        </>
     );
}
 
export default Kontakt;