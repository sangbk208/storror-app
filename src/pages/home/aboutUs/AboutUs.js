import './about-us.css';
import React from 'react';
import cover from '../../../assets/img/team-photo-bg.png';
import AboutUsMainInfo from './AboutUsMainInfo';
import AboutUsTeamPhoto from './AboutUsTeamPhoto';

AboutUs.propTypes = {
    
};

function AboutUs(props) {
    return (
        <div className="about-us" style={{"backgroundImage": `url(${cover})`}}>
            <div className="grid">
                <div className="row no-gutters">
                    <div className="col l-6 m-12">
                        <AboutUsMainInfo/>
                    </div>
                    <div className="col l-6 m-12">
                        <AboutUsTeamPhoto/>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col">
                        <span className="about-us__secondary-info">While the team has been honing their skills in both parkour and film-making for over a decade, they’ve also developed their own highly regarded line of clothing and training shoes. Altogether it’s proved a powerful combination, establishing STORROR® as the iconic parkour brand.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;