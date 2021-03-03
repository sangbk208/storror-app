import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

HeaderListContact.propTypes = {
    
};

function HeaderListContact(props) {
    return (
        <div>
            {/* Nav pc */}
            <ul className="header__navbar-list hide-on-mobile-tablet">
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
            <label htmlFor="nav-mb-input" className="header__navbar-btn">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
            </label>
            
            <input className="nav-input" hidden type="checkbox" name="" id="nav-mb-input"/>
            <label htmlFor="nav-mb-input" className="header__navbar-overlay"></label>
            {/* Nav mobibe */}
            <nav className="header__navbar-mb">
                <label htmlFor="nav-mb-input">
                    <i className="header__navbar-mb-icon-time fas fa-times"></i>
                </label>
                
                <ul className="header__navbar-mb-list">
                    <li className="header__navbar-mb-item">
                        <div className="header__navbar-mb-container">
                            <Link to="/" className="header__navbar-mb-item-link">
                                HOME
                            </Link>
                        </div>
                    </li>
                    <li className="header__navbar-mb-item">
                        <div className="header__navbar-mb-container">
                            <Link to="/parkour-store" className="header__navbar-mb-item-link">
                                STORE
                            </Link>
                            <label htmlFor="nav-mb-input-store" className="header__navbar-mb-icon fas fa-chevron-down"></label>
                        </div>
                        <input className="nav-input-store" hidden type="checkbox" name="" id="nav-mb-input-store"/>
                        <div className="header__navbar-mb-menu">
                            <ul className="header__navbar-mb-menu-list">
                                <li className="header__navbar-mb-menu-item">
                                    <Link to="/parkour-store/t-shirts" className="header__navbar-mb-menu-link">T-SHIRTS</Link>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <Link to="/parkour-store/hoodies" className="header__navbar-mb-menu-link">HOODIES</Link>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <Link to="/parkour-store/sweatpants" className="header__navbar-mb-menu-link">SWEATPANTS</Link>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <Link to="/parkour-store/jackets" className="header__navbar-mb-menu-link">JACKETS</Link>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <Link to="/parkour-store/shoes" className="header__navbar-mb-menu-link">SHOES</Link>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <Link to="/parkour-store/socks" className="header__navbar-mb-menu-link">SOCKS</Link>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <Link to="/parkour-store/hats" className="header__navbar-mb-menu-link">HATS</Link>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <Link to="/parkour-store/bags" className="header__navbar-mb-menu-link">BAGS</Link>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <Link to="/parkour-store/gift-cards" className="header__navbar-mb-menu-link">GIFT CARDS</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="header__navbar-mb-item">
                        <div className="header__navbar-mb-container">
                            <Link to="" className="header__navbar-mb-item-link">
                                ABOUT
                            </Link>
                            <label htmlFor="nav-mb-input-about" className="header__navbar-mb-icon fas fa-chevron-down"></label>
                        </div>
                        <input className="nav-input-store" hidden type="checkbox" name="" id="nav-mb-input-about"/>
                        <div className="header__navbar-mb-menu">
                            <ul className="header__navbar-mb-menu-list">
                                <li className="header__navbar-mb-menu-item">
                                    <a href="google.com"  className="header__navbar-mb-menu-link">MAX CAVE</a>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <a href="google.com"  className="header__navbar-mb-menu-link">BENJ CAVE</a>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <a href="google.com"  className="header__navbar-mb-menu-link">DREW TAYLOR</a>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <a href="google.com"  className="header__navbar-mb-menu-link">TOBY SEGAR</a>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <a href="google.com"  className="header__navbar-mb-menu-link">CALLUM POWELL</a>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <a href="google.com"  className="header__navbar-mb-menu-link">SACHA POWELL</a>
                                </li>
                                <li className="header__navbar-mb-menu-item">
                                    <a href="google.com"  className="header__navbar-mb-menu-link">JOSH BURNETT-BLAKE</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="header__navbar-mb-item">
                        <div className="header__navbar-mb-container">
                            <Link to="" className="header__navbar-mb-item-link">
                                BLOG
                            </Link>
                        </div>
                    </li>
                    <li className="header__navbar-mb-item">
                        <div className="header__navbar-mb-container">
                            <Link to="" className="header__navbar-mb-item-link">
                                LOOKBOOK
                            </Link>
                        </div>
                    </li>
                    <li className="header__navbar-mb-item">
                        <div className="header__navbar-mb-container">
                            <Link to="" className="header__navbar-mb-item-link">
                                FAQS
                            </Link>
                        </div>
                    </li>
                    <li className="header__navbar-mb-item">
                        <div className="header__navbar-mb-container">
                            <Link to="" className="header__navbar-mb-item-link">
                                CONTACT
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderListContact;