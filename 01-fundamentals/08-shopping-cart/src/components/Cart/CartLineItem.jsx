import React from 'react';

// TODO 7

/**
 * @typedef Props
 * @prop {string} id
 * @prop {string} title
 * @prop {number} quantity
 * @prop {price} quantity
 * @prop {(id:string) => void} onRemoveItem
 * @prop {(id:string) => void} onUpdateQuantity
 */
/**
 * @param {Props} props
 */
const BuildItem = (props) => {
  // prettier-ignore
  const {
    title,
    quantity,
    price,
    id,
    onRemoveItem,
    onUpdateQuantity,
  } = props;

  // 小計
  const lineItemPrice = price * quantity;
  return (
    <section className="grid grid-cols-5" data-name="CartLineItem" data-gradient>
      <div>{title}</div>
      <div>
        {/* FIXME：這裡有 bug，怎麼修好他呢? */}
        <button className="button" onClick={() => onUpdateQuantity(id, quantity - 1)}>
          -
        </button>
        <span className="px-1">{quantity}</span>
        <button className="button" onClick={() => onUpdateQuantity(id, quantity + 1)}>
          +
        </button>
      </div>

      <div>{price}</div>
      <div>{lineItemPrice}</div>
      <div>
        <button className="button w-full" onClick={() => onRemoveItem(id)}>
          Remove
        </button>
      </div>
    </section>
  );
};

export default React.memo(BuildItem);
