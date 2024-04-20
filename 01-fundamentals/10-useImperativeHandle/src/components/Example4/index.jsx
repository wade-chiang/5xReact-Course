import React from 'react';
import YoutubePlayer from './YoutubePlayer';

const App = () => {
  const videoRef = React.useRef();
  return (
    <section data-name="Example4">
      <button className="my-btn" onClick={() => videoRef.current.playVideo()}>
        playVideo
      </button>
      <button className="my-btn" onClick={() => videoRef.current.stopVideo()}>
        stopVideo
      </button>
      <YoutubePlayer videoId="Pi-MRZBP91I" ref={videoRef} />
    </section>
  );
};

export default App;
