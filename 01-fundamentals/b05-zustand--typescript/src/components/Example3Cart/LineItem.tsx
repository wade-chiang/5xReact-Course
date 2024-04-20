import React from 'react';
import { type LineItemType } from './useCartStore';

type LineItemProps = LineItemType & {
  onQuantityChange: (id: string) => void;
};
const LineItem: React.FC<LineItemProps> = (props) => {
  const { id, name, price, quantity, onQuantityChange } = props;
  return (
    <section data-name="LineItem">
      <h3>
        name:{name}, ${price}
      </h3>
      <h3>quantity:{quantity}</h3>
      <button className="my-btn" onClick={() => onQuantityChange(id)}>
        +1
      </button>
    </section>
  );
};

export default LineItem;
