import React from 'react';

/*
type ShippingCheckboxProps = {
  shippingId: string,
  shippingFee: string,
  name: string,
  checked: boolean,
  onChange: (price: number) => void,
};
*/
const ShippingCheckbox = (props) => {
  const { shippingFee, checked, onChange, shippingId, name } = props;
  return (
    <label className="relative flex cursor-pointer items-center px-5 py-3">
      <input
        type="radio"
        className="peer sr-only"
        name="shipping-method"
        checked={checked}
        onChange={() => onChange(shippingId)}
      />
      <div className="mr-5 h-[20px] w-[20px] transition-all rounded-full border border-black peer-checked:border-4" />
      <div className="text-sm">{name}</div>
      <div className="absolute top-2 right-2 text-sm">{shippingFee}</div>
      <div className="absolute inset-0 rounded transition-all border border-gray-60 peer-checked:border-black" />
    </label>
  );
};

export default React.memo(ShippingCheckbox);
