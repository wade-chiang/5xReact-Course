/* eslint-disable react/prefer-exact-props */
/* eslint-disable react/require-default-props */
import React, { useRef, useEffect, useId, useImperativeHandle } from 'react';
import YouTubePlayer from 'youtube-player';
import styles from './YoutubePlayer.module.scss';
/**
 * @typedef Props
 * @prop {string} videoId
 * @prop {(state :number) => void} onStateChange
 */

/**
 * @param {Props} props
 */
const YoutubePlayerComponent = React.forwardRef((props, ref) => {
  const { videoId, onStateChange } = props;

  const onStateChangeRef = useRef();
  onStateChangeRef.current = onStateChange;

  const playerRef = useRef(null);
  const elementId = useId();

  // TODO
  useImperativeHandle(
    ref,
    () => ({
      playVideo() {
        playerRef.current.playVideo();
      },
      stopVideo() {
        playerRef.current.stopVideo();
      },
    }),
    [],
  );

  useEffect(() => {
    const player = YouTubePlayer(elementId);
    playerRef.current = player;
    player.on('stateChange', (event) => {
      console.log('stateChange', event.data);
      onStateChangeRef.current?.(event.data);
    });
    return () => {
      playerRef.current.destroy();
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    playerRef.current.loadVideoById(videoId);
  }, [videoId]);

  /* 這裡有個小 bug, 要多一層 div 包起來 */
  /* https://stackoverflow.com/questions/54880669/react-domexception-failed-to-execute-removechild-on-node-the-node-to-be-re */
  return (
    <div className={styles.player}>
      <div id={elementId} />
    </div>
  );
});

export default YoutubePlayerComponent;
