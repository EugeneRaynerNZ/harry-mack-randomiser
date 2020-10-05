import React from "react";
import YouTube from "react-youtube";

export default function Video({ videoId }) {
  const opts = {
    // height: '390',
    // width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    console.log(event.target)
    event.target.pauseVideo();
  };

  return <YouTube videoId={videoId} opts={opts} onReady={videoOnReady}/>;
}
