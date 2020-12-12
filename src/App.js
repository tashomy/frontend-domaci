import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Page from './pages/main-page';
//import {Switch} from 'react-router-dom';
import Router from './Router.js';
import Logo from './components/layout/logo';
import NavBar from './components/layout/navbar';
import Footer from './components/layout/footer';

function App() {
    return ( 
    < div className = "App" >
        <header className = "App-header" >

           
           <BrowserRouter>
                {/* <Logo></Logo> */}
                <NavBar></NavBar>
                <Router/>
                <Footer></Footer>
           </BrowserRouter>

        </header> 
    </div>
    );
}

export default App;