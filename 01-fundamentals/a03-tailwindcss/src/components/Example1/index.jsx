/* eslint-disable react/button-has-type */
import { useState, useCallback } from 'react';
import style from './Example1.module.scss';

const Example = () => {
  const [idx, setIdx] = useState(0);
  const atLoginClick = useCallback(() => {
    document.body.classList.toggle('logged-in');
  }, []);
  return (
    <section data-name="Example1">
      <section data-name="jit">
        <h1 className="text-3xl">hi, Tailwind</h1>
        <div className="h-[100px] w-[100px] bg-gray-400">Box</div>
      </section>
      <section data-name="BTNStyle">
        <div className="hidden logged-in:block">Hi, Login only</div>
        <button className="my-btn" onClick={atLoginClick}>
          MyButton and login
        </button>
        <button className={style.btn}>StyleBTN</button>
      </section>

      <section data-name="data-active">
        <h2 className="text-5xl">{idx}</h2>
        <div className="space-x-3">
          <button
            className="rounded border p-2 data-active:bg-primary"
            data-active={idx === 0}
            onClick={() => setIdx(0)}
          >
            MyButton0
          </button>
          <button
            className="rounded border p-2 data-active:bg-primary"
            data-active={idx === 1}
            onClick={() => setIdx(1)}
          >
            MyButton1
          </button>
          <button
            className={style.myBTN}
            data-active={idx === 2}
            onClick={() => setIdx(2)}
          >
            MyButton2
          </button>
        </div>
      </section>

      <section data-name="important">
        <h1 className="!text-primary">important</h1>
      </section>
    </section>
  );
};

export default Example;
