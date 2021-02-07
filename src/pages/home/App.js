import React from 'react';
import Cart from '../../common/cart/Cart';
import Footer from '../../common/footer/Footer';
import Header from '../../common/header/Header';
import SideBarSocial from '../../common/sidebar/SideBarSocial';
import AboutUs from './aboutUs/AboutUs';
import ButtonShop from './buttonShop/ButtonShop';
import HomeStore from './homeStore/HomeStore';
import VideoList from './videoList/VideoList';

App.propTypes = {
    
};

function App(props) {
    return (
        <div className="app">
            <Header/>
            <Cart/>
            <SideBarSocial/>
            <ButtonShop/>
            <AboutUs/>
            <HomeStore/>
            <VideoList/>
            <Footer/>
        </div>
    );
}

export default App;