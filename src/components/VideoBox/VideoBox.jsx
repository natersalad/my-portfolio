import React, { useState, useRef } from 'react';
import './VideoBox.css';

const VideoBox = ({ thumbnailSrc, videoSrc }) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null); // Create a ref for the video element

  const handleHover = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the beginning
      videoRef.current.play(); // Start playing the video
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
    }
  };

  return (
    <div className="video-box" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
      <img src={thumbnailSrc} alt="Thumbnail" className="thumbnail" />
      <video ref={videoRef} src={videoSrc} autoPlay muted loop className="video" />
    </div>
  );
};

export default VideoBox;

