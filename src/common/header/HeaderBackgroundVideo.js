import React from 'react';
import './header.css';

HeaderBackgroundVideo.propTypes = {
    
};

function HeaderBackgroundVideo(props) {
    return (
        <div>
            <iframe className="video__br" src="https://player.vimeo.com/video/342262182?background=1" title="video"></iframe>
        </div>
    );
}

export default HeaderBackgroundVideo;