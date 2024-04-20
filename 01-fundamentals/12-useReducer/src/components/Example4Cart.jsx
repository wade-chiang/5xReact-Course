import { useReducer } from 'react';

const ITEM_UNIT_PRICE = 100;
const initialState = {
  count: 0,
  price: 0,
  isProceedToCheckout: false,
};

/**
 * // FIXME 隨堂測驗
 * 1 實作 REMOVE_TO_CART 功能
 * 2 買三件，折 10 元
 * 3 買超過 5 件，addToCart 不能按
 */
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const count = state.count + 1;
      const price = count * ITEM_UNIT_PRICE;
      return {
        ...state,
        count,
        price,
        isProceedToCheckout: true,
      };
    }
    case 'REMOVE_TO_CART': {
      return state;
    }
    default:
      return state;
  }
};

const Example = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <section data-name="Example4">
      <button
        className="my-btn"
        onClick={() => dispatch({ type: 'ADD_TO_CART' })}
      >
        addToCart
      </button>
      <button
        className="my-btn"
        // FIXME implement REMOVE_TO_CART
        onClick={() => dispatch({ type: 'REMOVE_TO_CART' })}
      >
        Remove
      </button>
      <div className="my-code">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <button className="button" disabled={!state.isProceedToCheckout}>
        Proceed to checkout
      </button>
    </section>
  );
};

export default Example;
