import React from 'react';
import './video-list.css';

VideoItem.propTypes = {
    
};

function VideoItem(props) {
    const {thumbnail, type, title, url} = props.content;
    const renderImgText = (type) =>(
        <div className="col l-6 m-6 c-12">
            <div className="video-item__container video-item__container--img" style={{"backgroundImage": `url(${thumbnail})`}}></div>
        </div>
    );
    const renderTextImg = (type) =>(
        <div className="col l-6 m-6 c-12">
            <div className="video-item__container video-item__container--img" style={{"backgroundImage": `url(${thumbnail})`}}></div>
        </div>
    );
    return (
        <div className="video-item">
            <div className="grid">
                <div className="row">
                    {type==='img-text' && renderImgText()}
                    <div className="col l-6 m-6 c-12">
                        <div className="video-item__container video-item__container--content">
                            <span  className="video-item__title">{title}</span>
                            <a href={`${url}`} rel="noreferrer" target="_blank" className="video-item__link">
                                <i className="video-item__icon fas fa-long-arrow-alt-right"></i>
                                WATCH VIDEO
                            </a>
                        </div>
                    </div>
                    
                    {type==='text-img' && renderTextImg()}
                    
                </div>
            </div>
        </div>
    );
}

export default VideoItem;