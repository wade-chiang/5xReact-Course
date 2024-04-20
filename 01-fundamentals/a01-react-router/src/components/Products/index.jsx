import { useState } from 'react';

const COLORS = ['black', 'white'];

const Products = () => {
  const [color, setColor] = useState('');
  const [expressDelivery, setExpressDelivery] = useState(false);

  return (
    <section data-name="Products" className="space-y-4">
      <h1 className="text-5xl">Products</h1>
      <div>
        <p className="text-xl">Colors</p>
        <div className="flex space-x-2">
          {COLORS.map((c) => {
            return (
              <label key={c}>
                <input
                  type="radio"
                  name="color"
                  value={c}
                  checked={color === c}
                  onChange={(e) => setColor(e.target.value)}
                  className="sr-only peer"
                />
                <span className="my-tab-btn capitalize peer-checked:bg-gray-400">
                  {c}
                </span>
              </label>
            );
          })}
        </div>
      </div>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="my-checkbox peer"
            checked={expressDelivery}
            value={expressDelivery}
            onChange={(e) => setExpressDelivery(e.target.checked)}
          />
          <span className="peer-checked:text-green-600">Express Delivery</span>
        </label>
      </div>
    </section>
  );
};

export default Products;
