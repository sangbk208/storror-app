import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderListContact from './HeaderListContact';
import cover from '../../assets/img/background_header.PNG';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <div>
            <div className="header__navbar-fullwidth">
                <div className="grid wide">
                    <nav className="header__navbar">
                        <HeaderLogo/>
                        <HeaderListContact/>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;