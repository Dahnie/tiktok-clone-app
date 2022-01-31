import React, { useRef, useState } from 'react';
import video1 from "../assets/video1.mp4"
import "./Video.css"

function Video() {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoClick = function () {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }


    return (
        // Video Container
        <div className='video'>
            {/* <video ref={videoRef} onClick={handleVideoClick} className='video__replay' loop src="https://v16-webapp.tiktok.com/44f6bb8be5cbc72703ddf748aa8bbd8c/61f409e9/video/tos/useast2a/tos-useast2a-pve-0068/967396b01453477ea6c8ab16af6bf711/?a=1988&br=1870&bt=935&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3tqnz7Thi4OGlXq&l=202201280920590102231200161711FE8F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M29udDc6ZnRwOjMzNzczM0ApO2dnZzlnNzs2NzQ3ZWc0Z2dkMi1wcjRfcGhgLS1kMTZzczAvL2JfNmM2XjUyMF8zNGI6Yw%3D%3D&vl=&vr=">
            </video> */}
            <video ref={videoRef} onClick={handleVideoClick} className='video__replay' loop src={video1}>
            </video>
            {/* Video sidebar */}
            {/* Video footer*/}
        </div>
    );
}

export default Video;
