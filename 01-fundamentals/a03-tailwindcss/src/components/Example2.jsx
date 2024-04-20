/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ShippingMethod from './ShippingMethod';

const SHIPPING_DATA = [
  {
    id: 'methodId0',
    shippingFee: 0,
    name: '免運',
  },
  {
    id: 'methodId1',
    shippingFee: 100,
    name: '超急快遞',
  },
  {
    id: 'methodId3',
    shippingFee: 200,
    name: '超急快遞*2',
  },
];
const Example = () => {
  const [checkedId, setCheckedId] = useState('');
  return (
    <section data-name="Example2">
      <h3 className="text-3xl font-bold">運送方式</h3>
      <div className="space-y-4">
        {SHIPPING_DATA.map((item) => {
          return (
            <ShippingMethod
              key={item.id}
              shippingFee={item.shippingFee}
              checked={item.id === checkedId}
              onChange={setCheckedId}
              shippingId={item.id}
              name={item.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(Example);
