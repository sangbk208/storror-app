import React from 'react';
import './video-list.css';

VideoItem.propTypes = {
    
};

function VideoItem(props) {
    const {thumbnail, type, title, url} = props.content;
    return (
        <div className="video-item">
            {type==='img-text' && <div className="video-item__container video-item__container--img" style={{"backgroundImage": `url(${thumbnail})`}}></div>}
            <div className="video-item__container video-item__container--content">
                <span  className="video-item__title">{title}</span>
                <a href={`${url}`} target="_blank" className="video-item__link">
                    <i className="video-item__icon fas fa-long-arrow-alt-right"></i>
                    WATCH VIDEO
                </a>
            </div>
            {type==='text-img' && <div className="video-item__container video-item__container--img" style={{"backgroundImage": `url(${thumbnail})`}}></div>}
        </div>
    );
}

export default VideoItem;