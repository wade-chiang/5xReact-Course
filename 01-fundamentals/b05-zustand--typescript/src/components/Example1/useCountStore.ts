import { create } from 'zustand';

type State = {
  count: number;
  text: string;
};

type Action = {
  setCount: (value: number) => void;
  increment: () => void;
  decrement: () => void;
  setText: (value: string) => void;
};

const useCountStore = create<State & Action>((set) => {
  return {
    count: 0,
    text: 'milkmidi',
    // ----------------------- Action
    setCount(value: number) {
      set({
        count: value,
      });
    },
    increment() {
      set((state) => {
        return { count: state.count + 1 };
      });
    },
    decrement() {
      set((state) => ({ count: state.count - 1 }));
    },
    setText(value: string) {
      set({
        text: value,
      });
    },
  };
});

export default useCountStore;
