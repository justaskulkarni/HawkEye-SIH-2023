import React from 'react'
import vid from '../assets/test6.mp4'
import '../stylesheets/CCTVFeed.css'
const CCTVFeed = () => {
    return (
        <>
            <div className="video-container">
            <p className='video-text'>Location: Tawang (India-China border)</p>
                <video controls autoPlay width="640" height="360">
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className='video-text'>Detected Activity Suspicious Activity (Running, Jumping, Crawling): None</p>
            </div>
        </>
    )
}

export default CCTVFeed