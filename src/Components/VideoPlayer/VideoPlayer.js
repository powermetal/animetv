import React, { useEffect, useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = (props) => {
    const [selectedVideo, setSelectedVideo] = useState('')

    const getVideos = () => {
        return props.videos ? props.videos.map(v => <button className="video-button-item" key={v.url} onClick={() => setSelectedVideo(v.url)}>{v.option}</button>) : null
    }

    useEffect(() => {
        setSelectedVideo(props.videos && props.videos[0].url)
    }, [props.videos])

    return (
        <div className="video-container">
            <div className="video-button-list">{getVideos()}</div>
            <iframe
                src={selectedVideo}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                controls={0}
            />
        </div>
    )
}

export default VideoPlayer
