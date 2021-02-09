import React from 'react';
import './header-home.css';
import HeaderLogo from '../../../common/header/HeaderLogo';
import cover from '../../../assets/img/background_header.PNG';
import HeaderListContact from '../../../common/header/HeaderListContact';
import { Link } from 'react-router-dom';

HeaderHome.propTypes = {
    
};

function HeaderHome(props) {
    return (
        <header className="header-home" style={{"backgroundImage": `url(${cover})`}}>
            {/* <HeaderBackgroundVideo/> */}
            <div className="header-home__navbar-explore">
                <Link to="/" className="header-home__navbar-explore-link">EXPLORE</Link>
            </div>
        </header>
    );
}

export default HeaderHome;