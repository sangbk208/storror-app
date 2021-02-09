import React from 'react';
import AboutUs from './aboutUs/AboutUs';
import HomeStore from './homeStore/HomeStore';
import VideoList from './videoList/VideoList';
import ButtonShop from './buttonShop/ButtonShop';
import HeaderHome from './headerHome/HeaderHome';

function Home(props) {
    return (
        <div className="home">
            <HeaderHome/>
            <ButtonShop/>
            <AboutUs/>
            <HomeStore/>
            <VideoList/>
        </div>
    );
}

export default Home;