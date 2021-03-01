import './footer.css';
import React from 'react';
import {Link} from 'react-router-dom';

FooterMenuLeft.propTypes = {
    
};

function FooterMenuLeft(props) {
    return (
        <div className="col l-2">
            <ul className="footer__menu-list hide-on-mobile-tablet">
                <li className="footer__menu-item">
                    <Link to="/" className="footer__menu-link">HOME</Link>
                </li>
                <li className="footer__menu-item">
                    <Link to="/parkour-store" className="footer__menu-link">STORE</Link>
                </li>
                <li className="footer__menu-item">
                    <Link to="" className="footer__menu-link">ABOUT</Link>
                </li>
                <li className="footer__menu-item">
                    <Link to="" className="footer__menu-link">BLOG</Link>
                </li>
                <li className="footer__menu-item">
                    <Link to="" className="footer__menu-link">LOOKBOOK</Link>
                </li>
                <li className="footer__menu-item">
                    <Link to="" className="footer__menu-link">FAQS</Link>
                </li>
                <li className="footer__menu-item">
                    <Link to="" className="footer__menu-link">CONTACT</Link>
                </li>
            </ul>
        </div>
    );
}

export default FooterMenuLeft;