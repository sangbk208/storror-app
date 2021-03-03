import React from 'react';
import './side-bar-social.css';

SideBarSocial.propTypes = {
    
};

function SideBarSocial(props) {
    return (
        <div className="sidebar__social hide-on-mobile-tablet">
            <ul className="sidebar__social-list">
                <li className="sidebar__social-item">
                    <span className="name">#STORROR</span>
                </li>
                <li className="sidebar__social-item">
                    <a href="google.com" className="sidebar__social-link">
                        <i className="sidebar__social-icon-down fas fa-long-arrow-alt-down"></i>
                    </a>
                </li>
                <li className="sidebar__social-item">
                    <a href="google.com" className="sidebar__social-link">
                        <i className="sidebar__social-icon fab fa-youtube"></i>
                    </a>
                </li>
                <li className="sidebar__social-item">
                    <a href="google.com" className="sidebar__social-link">
                        <i className="sidebar__social-icon sidebar__social-icon--insta fab fa-instagram"></i>
                    </a>
                </li>
                <li className="sidebar__social-item">
                    <a href="google.com" className="sidebar__social-link">
                        <i className="sidebar__social-icon fab fa-facebook-f"></i>
                    </a>
                </li>
                <li className="sidebar__social-item">
                    <a href="google.com" className="sidebar__social-link">
                        <i className="sidebar__social-icon fab fa-twitter"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SideBarSocial;