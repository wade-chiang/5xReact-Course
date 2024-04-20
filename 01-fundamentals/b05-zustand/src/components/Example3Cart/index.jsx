import Cart from './Cart';
import useCartStore from './useCartStore';

const Example = () => {
  const totalAmount = useCartStore((state) => state.totalAmount);
  return (
    <section data-name="Example3">
      <h1>totalAmount:{totalAmount}</h1>
      <Cart />
    </section>
  );
};

export default Example;
