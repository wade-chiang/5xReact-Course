import CartLineItem from './CartLineItem';
// TODO 7
/**
 * @typedef Props
 * @prop {number} totalAmount
 * @prop {Array} lineItems
 * @prop {(id:string) => void} onUpdateQuantity
 * @prop {(id:string) => void} onRemoveItem
 * @prop {() => void} onRemoveCart
 */
/**
 * @param {Props} props
 */
const Cart = (props) => {
  const { totalAmount, lineItems, onUpdateQuantity, onRemoveItem, onRemoveCart } = props;

  return (
    <section data-name="Cart">
      <h2>購物車</h2>
      <div className="grid grid-cols-5">
        <div>項目</div>
        <div>數量</div>
        <div>單價</div>
        <div>小計</div>
      </div>
      {lineItems.map((data) => {
        return (
          <CartLineItem
            key={data.id}
            id={data.id}
            title={data.title}
            price={data.price}
            quantity={data.quantity}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        );
      })}
      <div className="text-end">totalAmount:{totalAmount}</div>
      <button disabled={totalAmount === 0} className="my-btn" onClick={onRemoveCart}>
        清空購物車
      </button>
    </section>
  );
};

export default Cart;
