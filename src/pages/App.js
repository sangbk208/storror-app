import React from 'react';
import Home from './home/Home';
import Cart from '../common/cart/Cart';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import SideBarSocial from '../common/sidebar/SideBarSocial';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import ParkoutStore from './parkoutStore/ParkoutStore';

App.propTypes = {
    
};

function App(props) {
    return (
        <div className="app">
            <BrowserRouter>
            <Header/>
                <Cart/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/parkout-store" component={ParkoutStore} exact/>
                </Switch>
                <SideBarSocial/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;