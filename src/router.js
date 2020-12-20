import React from 'react';
import { Switch, Route } from "react-router-dom";
import Page from './pages/main-page';
import Doniraj from './pages/doniraj';
import Vijesti from './pages/vijesti';
import Blog from './pages/blog';
import Galerija from './pages/galerija';
import Prijatelji from './pages/prijatelji';
import ONama from './pages/o-nama';

const Routes = () => {
    return ( 
        <div>
            <Route path="/" exact component={Page}></Route>
            <Route path="/doniraj" exact component={Doniraj}/>
            <Route path="/vijesti" exact component={Vijesti}/>
            <Route path="/blog" exact component={Blog}/>
            <Route path="/galerija" exact component={Galerija}/>
            <Route path="/prijatelji" exact component={Prijatelji}/>
            <Route path="/o-nama" exact component={ONama}/>
        </div>
     );
}
 
export default Routes;
