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

    const renderVideoItem = () =>(
        fetchVideo.map(item=> {
            return (
                <div key={item.title} className="col l-6 c-12 m-12">
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