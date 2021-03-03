import React from 'react';
import Home from './home/Home';
import Cart from '../common/cart/Cart';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import SideBarSocial from '../common/sidebar/SideBarSocial';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ParkourStore from './parkourStore/ParkourStore';
import ProductPage from './productPage/ProductPage';

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
                    <Route path="/parkour-store" component={ParkourStore}/>
                    <Route path="/products" component={ProductPage}/>
                </Switch>
                <SideBarSocial/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;