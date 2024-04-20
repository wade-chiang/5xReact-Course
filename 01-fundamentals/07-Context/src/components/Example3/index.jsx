import { useCallback, useState, useMemo, useEffect } from 'react';
import { CartContext } from './CartContext';
import Cart from './Cart';

const Example = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const [lineItems, setLineItems] = useState(() => {
    return [
      {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
      },
      {
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
      },
    ];
  });

  const onQuantityChange = useCallback((id) => {
    // 增加數量
    setLineItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    });
  }, []);

  useEffect(() => {
    const calcTotalAmount = lineItems.reduce((total, currentItem) => {
      return total + currentItem.price * currentItem.quantity;
    }, 0);
    setTotalAmount(calcTotalAmount);
  }, [lineItems]);

  const value = useMemo(() => {
    return {
      totalAmount,
      lineItems,
      onQuantityChange,
    };
  }, [lineItems, totalAmount, onQuantityChange]);
  return (
    <section data-name="Example3">
      <CartContext.Provider value={value}>
        <Cart />
      </CartContext.Provider>
    </section>
  );
};

export default Example;
