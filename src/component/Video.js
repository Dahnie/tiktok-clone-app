import React, { useState, useRef } from 'react';
import video1 from "../assets/video1.mp4"
import "./Video.css"
import Videofooter from './Videofooter';
import Videosidebar from './Videosidebar';

const Video = ({ url, channel, description, song, likes, shares, comments }) => {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoClick = function () {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);

        }
    }


    return (
        // Video Container
        <div className='video'>
            {/* <video ref={videoRef} onClick={handleVideoClick} className='video__replay' loop src={}>
            </video> */}
            <video ref={videoRef} onClick={handleVideoClick} className='video__replay' loop src={url}>
            </video>
            {/* Video sidebar */}
            <Videosidebar likes={likes} shares={shares} comments={comments} />
            {/* Video footer*/}
            <Videofooter channel={channel} description={description} sound={song} />
        </div >
    );
}

export default Video;
