import React from 'react';
import HeaderListContact from './HeaderListContact';
import HeaderLogo from './HeaderLogo';
import cover from '../../assets/img/background_header.PNG';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <header className="header" style={{"backgroundImage": `url(${cover})`}}>
            {/* <HeaderBackgroundVideo/> */}
            <div className="header__navbar-fullwidth">
                <div className="grid wide">
                    <nav className="header__navbar">
                        <HeaderLogo/>
                        <HeaderListContact/>
                    </nav>
                    
                </div>
            </div>
            <div className="header__navbar-explore">
                <a href="https://www.w3schools.com" className="header__navbar-explore-link">EXPLORE</a>
            </div>
        </header>
    );
}

export default Header;