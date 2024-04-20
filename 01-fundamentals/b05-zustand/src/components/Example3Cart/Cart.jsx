/* eslint-disable react/jsx-props-no-spreading */
import shallow from 'zustand/shallow';
import useCartStore from './useCartStore';
import LineItem from './LineItem';

const Cart = () => {
  const { totalAmount, lineItems, onQuantityChange } = useCartStore((state) => {
    return {
      totalAmount: state.totalAmount,
      lineItems: state.lineItems,
      onQuantityChange: state.onQuantityChange,
    };
  }, shallow);
  return (
    <section data-name="Cart">
      <h1>totalAmount:{totalAmount}</h1>
      {lineItems.map((item) => {
        return (
          <LineItem
            {...item}
            key={item.id}
            onQuantityChange={onQuantityChange}
          />
        );
      })}
    </section>
  );
};

export default Cart;
