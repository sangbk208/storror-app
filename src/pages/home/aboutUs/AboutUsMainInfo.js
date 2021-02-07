import React from 'react';
import './about-us.css';

AboutUsMainInfo.propTypes = {
    
};

function AboutUsMainInfo(props) {
    return (
        <div className="about-us__main-info">
            <h1 className="about-us__title">STORROR® PRO PARKOUR TEAM</h1>
            <span className="about-us__info">STORROR® is a collective of seven elite athletes renowned not only for their world-class parkour skills but also for their exceptional storytelling and breath-taking video production. The team creates the most compelling parkour content online and has built a globally engaged audience that extends far beyond their core fan base. With over six-million subscribers to their 
                <a href="#" className="about-us__youtube-link"> YouTube channel </a>
                , STORROR’s weekly uploads have garnered more than 700-million views.</span>
            <div className="about-us__button-arrow">
                <a href="#" className="about-us__button-link">ABOUT US</a>
                <i className="about-us__icon fas fa-long-arrow-alt-left"></i>
            </div>
        </div>
    );
}

export default AboutUsMainInfo;