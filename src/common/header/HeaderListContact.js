import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

HeaderListContact.propTypes = {
    
};

function HeaderListContact(props) {
    return (
        <div>
            <ul className="header__navbar-list">
                <li className="header__navbar-item">
                    <Link to="/" className="header__navbar-item-link">
                        HOME
                    </Link>
                </li>
                <li className="header__navbar-item">
                    <Link to="/parkour-store" className="header__navbar-item-link">
                        STORE
                    </Link>
                    <i className="header__navbar-icon fas fa-chevron-down"></i>
                    <div className="header__navbar-menu">
                        <ul className="header__navbar-menu-list">
                            <li className="header__navbar-menu-item">
                                <Link to="/parkour-store/t-shirts" className="header__navbar-menu-link">T-SHIRTS</Link>
                            </li>
                            <li className="header__navbar-menu-item">
                                <Link to="/parkour-store/hoodies" className="header__navbar-menu-link">HOODIES</Link>
                            </li>
                            <li className="header__navbar-menu-item">
                                <Link to="/parkour-store/sweatpants" className="header__navbar-menu-link">SWEATPANTS</Link>
                            </li>
                            <li className="header__navbar-menu-item">
                                <Link to="/parkour-store/jackets" className="header__navbar-menu-link">JACKETS</Link>
                            </li>
                            <li className="header__navbar-menu-item">
                                <Link to="/parkour-store/shoes" className="header__navbar-menu-link">SHOES</Link>
                            </li>
                            <li className="header__navbar-menu-item">
                                <Link to="/parkour-store/socks" className="header__navbar-menu-link">SOCKS</Link>
                            </li>
                            <li className="header__navbar-menu-item">
                                <Link to="/parkour-store/hats" className="header__navbar-menu-link">HATS</Link>
                            </li>
                            <li className="header__navbar-menu-item">
                                <Link to="/parkour-store/bags" className="header__navbar-menu-link">BAGS</Link>
                            </li>
                            <li className="header__navbar-menu-item">
                                <Link to="/parkour-store/gift-cards" className="header__navbar-menu-link">GIFT CARDS</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="header__navbar-item">
                    <Link to="" className="header__navbar-item-link">
                        ABOUT
                    </Link>
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
                    <Link to="" className="header__navbar-item-link">
                        BLOG
                    </Link>
                </li>
                <li className="header__navbar-item">
                    <Link to="" className="header__navbar-item-link">
                        LOOKBOOK
                    </Link>
                </li>
                <li className="header__navbar-item">
                    <Link to="" className="header__navbar-item-link">
                        FAQS
                    </Link>
                </li>
                <li className="header__navbar-item">
                    <Link to="" className="header__navbar-item-link">
                        CONTACT
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default HeaderListContact;