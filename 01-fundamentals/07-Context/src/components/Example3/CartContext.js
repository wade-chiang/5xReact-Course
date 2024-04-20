import React, { useContext } from 'react';

/*
export type LineItemType = {
  id: string,
  name: string,
  img: string,
  price: number,
  quantity: number,
};

type CartContextType = {
  lineItems: LineItemType[],
  totalPrice: number,
  onQuantityChange: (id: string) => void,
};
*/
export const CartContext = React.createContext(null);

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (ctx == null) {
    throw new Error('useCartContext must be used inside a ContextProvider.');
  }
  return ctx;
}
