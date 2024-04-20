/* eslint-disable no-alert */
import { useState, useEffect, useLayoutEffect } from 'react';

function sleep(time = 500) {
  const start = performance.now();
  while (performance.now() - start < time) {}
}

const HooksUseLayoutEffectExample = () => {
  const [list, setList] = useState([0, 1, 2, 3]);

  //*
  useEffect(() => {
    setList(Array.from(Array(10).keys()).reverse());
    sleep();
  }, []);
  // */

  /* // TODO
  useLayoutEffect(() => {
    setList(Array.from(Array(10).keys()).reverse());
    sleep();
  }, []);
  // */

  return (
    <section data-name="UseLayoutEffectExample" className="text-center">
      <ul>
        {list.map((value) => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </section>
  );
};

export default HooksUseLayoutEffectExample;
