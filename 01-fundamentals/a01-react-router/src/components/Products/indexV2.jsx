import { useSearchParams } from 'react-router-dom';

const COLORS = ['black', 'white'];
const Products = () => {
  // TODO: useSearchParams
  const [searchParams, setSearchParams] = useSearchParams({
    color: '',
    expressDelivery: false,
  });
  const color = searchParams.get('color');
  const expressDelivery = searchParams.get('expressDelivery') === 'true';

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
                  onChange={(e) => {
                    // TODO: setSearchParams
                    setSearchParams(
                      (prev) => {
                        prev.set('color', e.target.value);
                        return prev;
                      },
                      { replace: true },
                    );
                  }}
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
            onChange={(e) => {
              // TODO: setSearchParams
              setSearchParams(
                (prev) => {
                  prev.set('expressDelivery', e.target.checked);
                  return prev;
                },
                { replace: true },
              );
            }}
          />
          <span className="peer-checked:text-green-600">Express Delivery</span>
        </label>
      </div>
    </section>
  );
};

export default Products;
