import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVideoLists } from '../../../redux/actions/videoList';
import './video-list.css';
import VideoItem from './VideoItem';

VideoList.propTypes = {
    
};

function VideoList(props) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchVideoLists());
    },[dispatch]);

    return (
        <div className="video-list">
            <div className="grid">
                <div className="row no-gutters">
                    <div className="col l-6">
                        <VideoItem 
                            type='img-text'
                            urlImg="https://www.storror.com/wp-content/uploads/2019/12/Parkour-at-Height-Best-of-Roof-Culture-Asia-screenshot-Josh.png"/>
                    </div>
                    <div className="col l-6">
                        <VideoItem 
                        type='img-text'
                        urlImg="https://www.storror.com/wp-content/uploads/2019/12/Parkour-at-Height-Best-of-Roof-Culture-Asia-screenshot-Josh.png"/>
                    </div>
                    <div className="row no-gutters">
                        <div className="col l-6">
                            <VideoItem 
                                type='text-img'
                                urlImg="https://www.storror.com/wp-content/uploads/2019/12/Parkour-at-Height-Best-of-Roof-Culture-Asia-screenshot-Josh.png"/>
                        </div>
                        <div className="col l-6">
                            <VideoItem 
                            type='text-img'
                            urlImg="https://www.storror.com/wp-content/uploads/2019/12/Parkour-at-Height-Best-of-Roof-Culture-Asia-screenshot-Josh.png"/>
                        </div>
                    </div>
                    <div className="col l-6">
                        <VideoItem 
                            type='img-text'
                            urlImg="https://www.storror.com/wp-content/uploads/2019/12/Parkour-at-Height-Best-of-Roof-Culture-Asia-screenshot-Josh.png"/>
                    </div>
                    <div className="col l-6">
                        <VideoItem 
                        type='img-text'
                        urlImg="https://www.storror.com/wp-content/uploads/2019/12/Parkour-at-Height-Best-of-Roof-Culture-Asia-screenshot-Josh.png"/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default VideoList;