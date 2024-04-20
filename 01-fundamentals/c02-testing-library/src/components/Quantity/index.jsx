import { memo } from 'react';

/* type QuantityProps = {
  value?: number,
  maxValue?: number,
  onChange: (quantity: number) => void,
}; */

const Quantity = (props) => {
  const { value = 0, maxValue = Infinity, onChange } = props;

  const atDecrease = () => onChange(value - 1);
  const atIncrease = () => onChange(value + 1);

  return (
    <section data-name="Quantity" data-max-value={maxValue}>
      <button onClick={atDecrease} disabled={value <= 0}>
        -
      </button>
      <div data-testid="quantity">{value}</div>
      <button onClick={atIncrease} disabled={value >= maxValue}>
        +
      </button>
    </section>
  );
};

export default memo(Quantity);
