import React from "react";
import YouTube from "react-youtube";
import type { YouTubeProps } from "react-youtube";


interface YouTubePlayerProps {
  videoId: string;
  autoplay?: boolean;
  width?: string;
  height?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  autoplay = false,
  width = "100%",
  height = "400",
}) => {
  const opts: YouTubeProps["opts"] = {
    height,
    width,
    playerVars: {
      autoplay: autoplay ? 1 : 0,
    },
  };

  const onReady: YouTubeProps["onReady"] = (event) => {
    // Puedes acceder al player de YouTube
    event.target.pauseVideo();
    console.log("YouTube listo");
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default YouTubePlayer;
