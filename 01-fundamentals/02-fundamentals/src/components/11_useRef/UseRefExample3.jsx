import React from 'react';
// https://developers.google.com/youtube/iframe_api_reference
const UseRefExample3 = () => {
  const playerRef = React.useRef(null);
  React.useEffect(() => {
    // TODO
    const player = new window.YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      playerVars: {
        playsinline: 1,
      },
    });
    playerRef.current = player;
  }, []);

  const atPlayClick = () => {
    // TODO
    playerRef.current.playVideo();
  };
  const atStopClick = () => {
    // TODO
    playerRef.current.stopVideo();
  };

  return (
    <section data-name="UseRefExample3">
      <div id="player" />
      <div>
        <button className="my-btn" onClick={atPlayClick}>
          Play
        </button>
        <button className="my-btn" onClick={atStopClick}>
          Stop
        </button>
      </div>
    </section>
  );
};

export default UseRefExample3;
