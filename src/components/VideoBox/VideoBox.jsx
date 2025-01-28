import React, { useState, useRef } from "react";
import "./VideoBox.css";

const VideoBox = ({ thumbnailSrc, videoSrc }) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);

  const handleHover = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Automatic playback started!
          })
          .catch((error) => {
            // Auto-play was prevented
            console.error("Video playback failed:", error);
          });
      }
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="video-box"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img src={thumbnailSrc} alt="Thumbnail" className="thumbnail" />
      <video ref={videoRef} src={videoSrc} muted loop className="video" />
    </div>
  );
};

export default VideoBox;
