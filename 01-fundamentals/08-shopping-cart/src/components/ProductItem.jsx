import React from 'react';
// TODO 3
/* type ProductItemProps = Product & {
  onAddToCart(id: string): void,
}; */
const ProductItem = (props) => {
  // prettier-ignore
  const {
    id,
    img,
    title,
    price,
    inventory,
    onAddToCart,
  } = props;

  return (
    <section className="px-0" data-name="ProductItem">
      <img src={img} alt={title} />
      <div className="flex">
        <div>{title}</div>
        <div>${price}</div>
      </div>
      <small>Available quantity:{inventory}</small>
      {/* FIXME: 如果賣完，文字換成 Sold out，同時不能點擊 */}
      <button
        className="button"
        onClick={() => {
          onAddToCart(id);
        }}
      >
        Add
      </button>
    </section>
  );
};
export default React.memo(ProductItem);
