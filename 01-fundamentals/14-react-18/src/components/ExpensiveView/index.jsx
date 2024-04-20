/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
import React from 'react';
import styles from './ExpensiveView.module.scss';

const randomRange = (range = 50) => {
  const half = range * 0.5;
  return (Math.random() * range - half) | 0;
};

const getRandomColor = (alpha = '33') => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return `${color}${alpha}`;
};

const SlowItem = ({ per, index }) => {
  const radiusX = 200 + randomRange();
  const radiusY = 120 + randomRange();
  const color = getRandomColor();
  const rootStyle = {
    left: Math.cos(per * index) * radiusX + 250 - 50,
    top: Math.sin(per * index) * radiusY + 250 - 50,
  };
  return (
    <div className={styles.box} style={rootStyle}>
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="25" fill={color} />
      </svg>
    </div>
  );
};

const ExpensiveView = (props) => {
  const { value } = props;
  const length = (value / 1) * 40 + 550;
  const per = (Math.PI * 2) / length;
  const arr = Array.from(Array(length).keys());
  return (
    <section className={styles.root} data-name="ExpensiveView">
      <h5 className={styles.text}>Count:{length}</h5>
      {arr.map((v) => (
        <SlowItem key={v} per={per} index={v} />
      ))}
    </section>
  );
};

export default React.memo(ExpensiveView);
