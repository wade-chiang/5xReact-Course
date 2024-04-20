import { useState, useTransition } from 'react';
import cx from 'classnames';
import ExpensiveView from './ExpensiveView';

const Inner1 = () => {
  const [value, setValue] = useState(0);

  const atRangeChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section data-name="useTransition" className="bg-red">
      <h2>input:{value}</h2>
      <input
        className="my-range"
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={atRangeChange}
      />
      <ExpensiveView value={value} />
    </section>
  );
};

const Inner2 = () => {
  const [value, setValue] = useState(0);
  const [renderValue, setRenderValue] = useState(0);

  const [isPending, startTransition] = useTransition();
  const atRangeChange = (e) => {
    setValue(e.target.value);
    startTransition(() => {
      setRenderValue(e.target.value / 1);
    });
  };

  return (
    <section data-name="useTransition" className="style-green" data-stripes>
      <div className="d-flex mb-2">
        <span className={cx(isPending && 'text-danger')}>isPending:{isPending.toString()}</span>
      </div>
      <h2>
        input:{value},renderValue:{renderValue}
      </h2>
      <input
        className="my-range"
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={atRangeChange}
      />
      <div style={{ opacity: isPending ? 0.5 : 1 }}>
        <ExpensiveView value={renderValue} />
      </div>
    </section>
  );
};
const Example3StartTransition = () => {
  return (
    <section data-name="Example3StartTransition">
      <Inner1 />
      <Inner2 />
    </section>
  );
};
export default Example3StartTransition;
