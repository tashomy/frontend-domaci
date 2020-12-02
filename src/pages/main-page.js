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




class Page extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    componentDidMount(){
        require('jquery-circle-progress');
        var $ = require('jquery');
        $('.box').circleProgress({
        fill:{color: '#fff'},
        value: 0.76,
        startAngle:-1.55,
        size: 250
});
    }

    render() { 
        return ( 
           <div>
                <SetBackground></SetBackground>
                <Logo></Logo>
                <NavBar></NavBar>
                <Text></Text>
                <Progress></Progress>
                <div className="contain">
                    <Ko></Ko>
                    <CircleImage></CircleImage>
                </div>
                
                <div className="bottom"></div>
           </div>
               
            
         );
    }
}
 
export default Page;