import React from 'react';
import './footer.css';

FooterMenuLeft.propTypes = {
    
};

function FooterMenuLeft(props) {
    return (
        <div className="col l-2">
            <ul className="footer__menu-list">
                <li className="footer__menu-item">
                    <a href="https://www.w3schools.com" className="footer__menu-link">HOME</a>
                </li>
                <li className="footer__menu-item">
                    <a href="https://www.w3schools.com" className="footer__menu-link">STORE</a>
                </li>
                <li className="footer__menu-item">
                    <a href="https://www.w3schools.com" className="footer__menu-link">ABOUT</a>
                </li>
                <li className="footer__menu-item">
                    <a href="https://www.w3schools.com" className="footer__menu-link">BLOG</a>
                </li>
                <li className="footer__menu-item">
                    <a href="https://www.w3schools.com" className="footer__menu-link">LOOKBOOK</a>
                </li>
                <li className="footer__menu-item">
                    <a href="https://www.w3schools.com" className="footer__menu-link">FAQS</a>
                </li>
                <li className="footer__menu-item">
                    <a href="https://www.w3schools.com" className="footer__menu-link">CONTACT</a>
                </li>
            </ul>
        </div>
    );
}

export default FooterMenuLeft;