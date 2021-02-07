import React from 'react';
import './header.css';

HeaderListContact.propTypes = {
    
};

function HeaderListContact(props) {
    return (
        <div>
            <ul className="header__navbar-list">
                <li className="header__navbar-item">
                    <a href="https://www.w3schools.com" className="header__navbar-item-link">
                        HOME
                    </a>
                </li>
                <li className="header__navbar-item">
                    <a href="https://www.w3schools.com" className="header__navbar-item-link">
                        STORE
                    </a>
                    <i className="header__navbar-icon fas fa-chevron-down"></i>
                    <div className="header__navbar-menu">
                        <ul className="header__navbar-menu-list">
                            <li className="header__navbar-menu-item">
                                <a href="https://www.w3schools.com" className="header__navbar-menu-link">T-SHIRTS</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a href="https://www.w3schools.com" className="header__navbar-menu-link">HOODIES</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a href="https://www.w3schools.com" className="header__navbar-menu-link">SWEATPANST</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a href="https://www.w3schools.com" className="header__navbar-menu-link">JACKETS</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a href="https://www.w3schools.com" className="header__navbar-menu-link">SHOES</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a href="https://www.w3schools.com" className="header__navbar-menu-link">SOCKS</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a href="https://www.w3schools.com" className="header__navbar-menu-link">HATS</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a href="https://www.w3schools.com" className="header__navbar-menu-link">BAGS</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a href="https://www.w3schools.com" className="header__navbar-menu-link">GRIF CARDS</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="header__navbar-item">
                    <a href="https://www.w3schools.com" className="header__navbar-item-link">
                        ABOUT
                    </a>
                    <i className="header__navbar-icon fas fa-chevron-down"></i>
                    <div className="header__navbar-menu">
                        <ul className="header__navbar-menu-list">
                            <li className="header__navbar-menu-item">
                                <a  className="header__navbar-menu-link">MAX CAVE</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a  className="header__navbar-menu-link">BENJ CAVE</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a  className="header__navbar-menu-link">DREW TAYLOR</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a  className="header__navbar-menu-link">TOBY SEGAR</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a  className="header__navbar-menu-link">CALLUM POWELL</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a  className="header__navbar-menu-link">SACHA POWELL</a>
                            </li>
                            <li className="header__navbar-menu-item">
                                <a  className="header__navbar-menu-link">JOSH BURNETT-BLAKE</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="header__navbar-item">
                    <a href="https://www.w3schools.com" className="header__navbar-item-link">
                        BLOG
                    </a>
                </li>
                <li className="header__navbar-item">
                    <a href="https://www.w3schools.com" className="header__navbar-item-link">
                        LOOKBOOK
                    </a>
                </li>
                <li className="header__navbar-item">
                    <a href="https://www.w3schools.com" className="header__navbar-item-link">
                        FAQS
                    </a>
                </li>
                <li className="header__navbar-item">
                    <a href="https://www.w3schools.com" className="header__navbar-item-link">
                        CONTACT
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default HeaderListContact;