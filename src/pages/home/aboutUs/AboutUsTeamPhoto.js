import './about-us.css';
import React from 'react';
import teamPhoto from '../../../assets/img/storror_team_photo.png';

AboutUsTeamPhoto.propTypes = {
    
};

function AboutUsTeamPhoto(props) {
    return (
        <div className="about-us__team-photo">
            <span className="about-us__since-title">SINCE 10.10.10</span>
            <img className="about-us__team-photo-img" src={teamPhoto} alt="storror_team_photo"/>
        </div>
    );
}

export default AboutUsTeamPhoto;