import './App.scss';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Header from './components/Header/Header.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './router';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
