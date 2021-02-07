import React from 'react';
import './video-list.css';

VideoItem.propTypes = {
    
};

function VideoItem(props) {
    const {urlImg, urlVideo, type} = props;
    return (
        <div className="video-item">
            {type==='img-text' && <div className="video-item__container video-item__container--img" style={{"backgroundImage": `url(${urlImg})`}}></div>}
            <div className="video-item__container video-item__container--content">
                <span  className="video-item__title">PARKOUR AT HEIGHT</span>
                <a href={`${urlVideo}`} className="video-item__link">
                    <i className="video-item__icon fas fa-long-arrow-alt-right"></i>
                    WATCH VIDEO
                </a>
            </div>
            {type==='text-img' && <div className="video-item__container video-item__container--img" style={{"backgroundImage": `url(${urlImg})`}}></div>}
        </div>
    );
}

export default VideoItem;