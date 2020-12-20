import React, {Component} from 'react';
import Footer from '../components/Footer/Footer.component';
import Header from '../components/Header/Header.component';
import Kontakt from '../components/Kontakt/Kontakt.component';
import KoSmo from '../components/KoSmo/Kosmo.component';
import Progress from '../components/Progress/Progress.component';
import Showcase from '../components/Showcase/showcase';
import Vijesti from '../components/Vijesti/Vijesti.component';
import VijestiGet from '../services/load-slider.service';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = { vijesti:{}, loader: true }
    }
    

    componentDidMount(){
        let self = this;
        VijestiGet().then(function(res){
            self.setState({vijesti: res, loader: false})
        })

        let button = document.getElementById('forma-btn');

        async function addMessage(data) {
            let res = await fetch('http://localhost:8000/poruke', {
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
        button.addEventListener('click', (e) => {
            let ime = document.getElementById('name-forma');
            let email = document.getElementById('email-forma');
            let message = document.getElementById('messages-forma');
            let data = {
                name: ime.value,
                email: email.value,
                message: message.value,
            };
            addMessage(data).then((res) => {
                console.log(res);
            });
        });
    }
    

    render() { 
        let vijest = this.state.vijesti;
        console.log(vijest)
        
        
        return ( 
            <>
                <Showcase/>
                <Progress/>
                <KoSmo/>
                <Vijesti vijest={vijest}/>
                <Kontakt/>
                <Footer/>
            </>
         );
    }
}
 
export default Page;