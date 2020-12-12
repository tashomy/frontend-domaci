import React, {Component} from 'react';
import SetBackground from '../components/layout/background';
import Logo from '../components/layout/logo';
import NavBar from '../components/layout/navbar';
import '../components/mystyles.css';
import Progress from '../components/progress';
import Text from '../components/tekst';
import $ from 'jquery';
import * as jquery from 'jquery-circle-progress';
import Ko from '../components/ko-smo-mi';
import CircleImage from '../components/circle-image';
import Vijesti from '../components/slider';
import axios from "axios";
import slick from 'slick-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Kontakt from '../components/kontakt';
import Mapa from '../components/mapa';


class Page extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          sliders:""
         }
    }

    componentDidMount(){
        require('jquery-circle-progress');
        var $ = require('jquery');
        $('.box').circleProgress({
        fill:{color: '#fff'},
        value: 0.76,
        startAngle:-1.55,
        size: 290
        
});

    $(document).ready(function(){
        $(window).scroll(function() { // check if scroll event happened
          if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".nav-wrap").css("background-color", "#06aaca"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
          } else {
            $(".nav-wrap").css("background-color", "transparent"); // if not, change it back to transparent
          }
        });
      });

      
   

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

  //     button.addEventListener('click', (e) => {
  //     let ime = document.getElementById('name-forma');
  //     let email = document.getElementById('email-forma');
  //     let message = document.getElementById('message-forma');
  //     let data = {
  //         name: ime.value,
  //         email: email.value,
  //         message: message.value,
  //     };
  //     addMessage(data).then((res) => {
  //         console.log(res);
  //     });
  // });



  }
    render() { 
        return ( 
           <div>
                <SetBackground></SetBackground>
                <Text></Text>
                <Progress></Progress>
                <div className="contain">
                    <Ko></Ko>
                    <CircleImage></CircleImage>
                </div>
                <Vijesti></Vijesti>
               
                <div className="flex">
                  <Kontakt></Kontakt>
                  <Mapa></Mapa>

                </div>
               
                
                <div className="bottom"></div>
           </div>
               
            
         );
    }
}
 
export default Page;