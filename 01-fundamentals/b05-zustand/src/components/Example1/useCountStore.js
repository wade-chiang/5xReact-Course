import create from 'zustand';

const useCountStore = create((set) => {
  return {
    count: 0,
    text: 'defaultText',
    // ----------------------- Action
    setCount(value) {
      set({ count: value });
    },
    increment() {
      set((state) => ({ count: state.count + 1 }));
    },
    decrement() {
      set((state) => ({ count: state.count - 1 }));
    },
    setText(value) {
      set({ text: value });
    },
  };
});

export default useCountStore;
