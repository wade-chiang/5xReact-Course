/* eslint-disable react/jsx-props-no-spreading */
import { useCartContext } from './CartContext';
import LineItem from './LineItem';

const Cart = () => {
  const { totalAmount, lineItems, onQuantityChange } = useCartContext();
  return (
    <section data-name="Cart">
      <h1>totalAmount:{totalAmount}</h1>
      {lineItems.map((item) => {
        return <LineItem {...item} key={item.id} onQuantityChange={onQuantityChange} />;
      })}
    </section>
  );
};

export default Cart;
