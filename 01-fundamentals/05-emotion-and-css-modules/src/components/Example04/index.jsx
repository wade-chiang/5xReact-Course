import React from 'react';
import cx from 'classnames';
// TODO
import style from './Example4.module.scss';

const Example04 = () => {
  const [show, setShow] = React.useState(false);
  return (
    <section data-name="Example04" className={style.root} data-show={show}>
      <h1 className={style.h1} data-show={show}>
        CSS Module
      </h1>
      <button
        className={cx(style.button, {
          active: show,
        })}
        onClick={() => setShow(!show)}
      >
        Switch
      </button>
    </section>
  );
};
export default Example04;
