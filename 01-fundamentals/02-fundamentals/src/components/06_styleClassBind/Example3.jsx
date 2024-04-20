import React from 'react';
import cx from 'classnames';

const Example3 = () => {
  const [isGreen, setGreen] = React.useState(false);
  const atClick = () => {
    setGreen(!isGreen);
  };
  return (
    <section data-name="Example3">
      <button className="my-btn" onClick={atClick}>
        isGreen
      </button>
      {/* TODO  下面兩個功能一樣 */}
      <div className={cx('box', { 'style-green': isGreen })} />
      <div className={cx('box', isGreen && 'style-green')} />
    </section>
  );
};
export default Example3;
