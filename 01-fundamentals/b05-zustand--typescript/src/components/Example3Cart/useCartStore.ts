/* eslint-disable no-plusplus */

import { create } from 'zustand';

export type LineItemType = {
  id: string;
  name: string;
  img: string;
  price: number;
  quantity: number;
};

const initialState = {
  totalAmount: 0,
  lineItems: [
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
  ],
};

type State = {
  totalAmount: number;
  lineItems: LineItemType[];
  // --------------------------- Action
  onQuantityChange: (id: string) => void;
};

const useCartStore = create<State>((set, get) => {
  return {
    ...initialState,
    onQuantityChange(id: string) {
      const lineItems = get().lineItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      const totalAmount = lineItems.reduce((total, currentItem) => {
        return total + currentItem.price * currentItem.quantity;
      }, 0);
      set({ lineItems, totalAmount });
    },
  };
});

export default useCartStore;
