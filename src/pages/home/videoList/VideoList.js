import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoLists } from '../../../redux/actions/videoList';
import './video-list.css';
import VideoItem from './VideoItem';

VideoList.propTypes = {
    
};

function VideoList(props) {
    const fetchVideo = useSelector(state=>state.videoLists);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchVideoLists());
    },[dispatch]);

    console.log("fetchVideo", fetchVideo);

    const renderVideoItem = () =>(
        fetchVideo.map(item=> {
            return (
                <div className="col l-6">
                    <VideoItem 
                        content={item}
                    />
                </div>
            );
        })
    );

    return (
        <div className="video-list">
            <div className="grid">
                <div className="row no-gutters">
                    {renderVideoItem()}
                </div>
            </div>
        </div>
    );
}

export default VideoList;