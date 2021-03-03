import React from 'react';
import './header-home.css';
import { Link } from 'react-router-dom';
import video from '../../../assets/video/video.mp4';

HeaderHome.propTypes = {
    
};

function HeaderHome(props) {
    return (
        <header className="header-home">
            {/* <HeaderBackgroundVideo/> */}
            <video autoPlay muted loop id="myVideo">
                <source src={video} />
            </video>
            <div className="header-home__navbar-explore hide-on-tablet">
                <Link to="/" className="header-home__navbar-explore-link">EXPLORE</Link>
            </div>
        </header>
    );
}

export default HeaderHome;