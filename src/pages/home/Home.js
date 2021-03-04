import React from 'react';
import AboutUs from './aboutUs/AboutUs';
import HomeStore from './homeStore/HomeStore';
// import VideoList from './videoList/VideoList';
import ButtonShop from './buttonShop/ButtonShop';
import HeaderHome from './headerHome/HeaderHome';
import SideBarSocial from '../../common/sidebar/SideBarSocial';

function Home(props) {
    return (
        <div className="home">
            <SideBarSocial/>
            <HeaderHome/>
            <ButtonShop/>
            <AboutUs/>
            <HomeStore/>
            {/* <VideoList/> */}
        </div>
    );
}

export default Home;