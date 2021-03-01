import React from 'react';
import './header-home.css';
import cover from '../../../assets/img/background_header.PNG';
import { Link } from 'react-router-dom';

HeaderHome.propTypes = {
    
};

function HeaderHome(props) {
    return (
        <header className="header-home" style={{"backgroundImage": `url(${cover})`}}>
            {/* <HeaderBackgroundVideo/> */}
            <div className="header-home__navbar-explore hide-on-tablet">
                <Link to="/" className="header-home__navbar-explore-link">EXPLORE</Link>
            </div>
        </header>
    );
}

export default HeaderHome;